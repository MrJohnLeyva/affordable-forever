# Affordable Forever — the website

**Affordability shouldn't come with an expiration date.**

This is the whole site. You do not need to understand the code to run it.

---

## What's here

**Five doors in the nav.** Nothing is buried; everything is one click from a hub.

| Nav item | Address | Leads to |
|---|---|---|
| Find Your Building | `/find-your-building/` | The expiration registry. *Waiting on NHPD data.* |
| What To Do | `/what-to-do/` | The playbook → `/resources/` (who to call) |
| The Case | `/the-case/` | → `/what-lihtc-is/` · `/who-paid/` · `/community-ownership/` · `/objections/` |
| Read | `/read/` | → `/articles/` · `/events/` · `/reading/` |
| About | `/about/` | → `/methodology/` (sources + press kit) |

Also live, linked from home and footer: `/calculator/` (how old will you be when your home expires).

| **Editor** | `/admin/` | **Where you and your collaborator write. No code.** |

---

## How to publish something (no code)

1. Go to **affordableforever.org/admin**
2. Log in with GitHub
3. Click **Articles → New Article**, or **Reading list** to add a link
4. Write. Hit save.

That's it. The site rebuilds itself.

### Events — two ways in

**You and your partner** add events in the editor: **Events → New Event**. Set a date and it files
itself — future dates land under "Coming up", past dates drop into "What we've done" automatically.
You never move anything by hand.

**Anyone else** submits through the form at the bottom of `/events/`. It lands in your Netlify
dashboard (**Forms → event**). Nothing posts automatically. You read it, and if it's real you
re-type it into the editor as a new event. Two minutes, and it keeps the page from being spammed.

That's deliberate: the public can feed the page, but only you and your partner can publish to it.

### The review queue — this is the important part

Nothing goes live automatically. Every piece moves through three stages:

**Draft → In review → Ready**

Your collaborator can write freely. It lands in **Draft**. You look at it, and only you can move it to **Ready** and publish. He contributes; you keep the framing. Nobody has to have an awkward conversation about editorial control, because the software handles it.

---

## Setting it up (once)

### 1. Push this to GitHub
Upload the whole folder to your `affordable-forever` repository.

### 2. Point Netlify at it
In Netlify: **Add new site → Import an existing project → GitHub → affordable-forever**.

Netlify should detect the settings automatically. If it asks:
- Build command: `npm run build`
- Publish directory: `_site`

### 3. Turn on the editor login
This is the only fiddly step, and it's two clicks:

- Netlify → **Site configuration → Identity → Enable Identity**
- Then **Identity → Services → Git Gateway → Enable Git Gateway**
- Under **Identity → Registration**, set it to **Invite only** (otherwise anyone on the internet can sign up to edit your site)
- Invite yourself. Invite your collaborator.

### 4. Point the domain
Netlify → **Domain management** → add `affordableforever.org`.

---

## Adding an article by hand (if you'd rather)

Drop a `.md` file into `src/articles/`. It needs a header block:

```markdown
---
layout: article.njk
title: Your headline
description: One or two sentences. Shows on the card and when shared.
date: 2026-07-20
tag: Analysis
---

Write here. **Bold** works. ## Makes a heading.
```

The articles page, the homepage "Latest" strip, and the article page all update themselves.

---

## The rules we're holding ourselves to

**Tier one sources — lead with these.** NLIHC, PAHRC, Community Service Society, National Housing Law Project, Alliance for Housing Justice, TakeRoot Justice.

**Tier two — take the filings, leave the conclusions.** Furman Center, Freddie Mac, HUD, the Fed. Use their dates and unit counts. Don't inherit their framing.

**Name the source in the sentence, not in a footnote.**

**Disclose:** TakeRoot Justice represents the tenants of 63 Tiffany Place, including the author.

**On the expiration dates:** NHPD estimates them as placed-in-service plus thirty years. That's an assumption, not a filed date. Say so every single time. It isn't a weakness in the data — *it is the finding.*

---

## Still to do

- [ ] NHPD approval → load the real New York LIHTC data into the registry
- [ ] Publish the cleaned dataset as a free download — *be the source*
- [ ] Per-district one-pagers for legislators
- [ ] Expiration notification signup (5 / 3 / 1 years out)
- [ ] The rebuttal page — every objection, with the answer
- [ ] The 15-year qualified contract panel on the calculator (pending: does NY's QAP deter QCs?)
- [ ] The stat card — every number, memorised, ready to rattle off

---

*When LIHTC "sunsets," it's doomsday for tenants.*
