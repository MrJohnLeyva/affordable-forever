export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.ignores.add("src/admin/**");
  eleventyConfig.addGlobalData("eleventyComputed", { permalink: (d) => (d.page && d.page.inputPath && d.page.inputPath.includes("/events/") && d.page.inputPath.endsWith(".md") ? false : d.permalink) });
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/favicon.svg");
  eleventyConfig.addPassthroughCopy("src/robots.txt");

  // Newest articles first
  eleventyConfig.addCollection("articles", (c) =>
    c.getFilteredByGlob("src/articles/*.md").sort((a, b) => b.data.date - a.data.date)
  );

  // Events, split by whether they've happened yet
  eleventyConfig.addCollection("upcomingEvents", (c) => {
    const today = new Date(); today.setHours(0, 0, 0, 0);
    return c.getFilteredByGlob("src/events/*.md")
      .filter((e) => new Date(e.data.date) >= today)
      .sort((a, b) => a.data.date - b.data.date);
  });
  eleventyConfig.addCollection("pastEvents", (c) => {
    const today = new Date(); today.setHours(0, 0, 0, 0);
    return c.getFilteredByGlob("src/events/*.md")
      .filter((e) => new Date(e.data.date) < today)
      .sort((a, b) => b.data.date - a.data.date);
  });

  eleventyConfig.addFilter("readableDate", (d) =>
    new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" })
  );
  eleventyConfig.addFilter("isoDate", (d) => new Date(d).toISOString().slice(0, 10));
  eleventyConfig.addFilter("limit", (arr, n) => arr.slice(0, n));
  eleventyConfig.addFilter("mon", (d) =>
    new Date(d).toLocaleDateString("en-US", { month: "short", timeZone: "UTC" }));
  eleventyConfig.addFilter("day", (d) =>
    new Date(d).toLocaleDateString("en-US", { day: "numeric", timeZone: "UTC" }));
  eleventyConfig.addFilter("yr", (d) =>
    new Date(d).toLocaleDateString("en-US", { year: "numeric", timeZone: "UTC" }));

  return {
    dir: { input: "src", includes: "layouts", data: "data", output: "_site" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
}
