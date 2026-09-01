# The Cohort — starter website

A static, three-file website: `index.html`, `style.css`, `script.js`. No build step, no dependencies — open `index.html` in a browser and it works.

## What's in here

- **index.html** — all the page content and structure (hero, mission, vision, goals, gallery, join, footer)
- **style.css** — all the visual styling, driven by a small set of variables at the top of the file
- **script.js** — two small behaviors: the mobile menu toggle, and a placeholder response for the "join" form

## Making it yours

1. **Swap the name.** "The Cohort" appears in `index.html` in the nav, hero, footer, and in the `<title>`/`<meta>` tags at the top. Find-and-replace it with your association's real name.

2. **Rewrite the copy.** Every section's text in `index.html` is placeholder writing based on what you told me about the group — replace it with your own mission, vision, and goals whenever you're ready. Keep sentences short and specific; it reads better than generic mission-statement language.

3. **Replace the images.** Right now every `<img>` points to a placeholder photo service (`picsum.photos`) so the layout has something to show. To use your own photos:
   - Put your image files in a folder next to `index.html`, e.g. `images/study-night.jpg`
   - Change each `src="https://picsum.photos/..."` to `src="images/study-night.jpg"`
   - Update the matching `alt="..."` text to describe the new photo (this matters for accessibility and screen readers)

4. **Change the colors or fonts.** Open `style.css` and look at the `:root { ... }` block at the top — every color and font used on the page is defined there once. Change a value there and it updates everywhere.

5. **Connect the join form.** The email form on the page currently only shows a friendly message — it doesn't send the email anywhere. To make it real, the easiest options are:
   - [Formspree](https://formspree.io) or [Getform](https://getform.io) — point the form's `action` at the URL they give you, no backend needed
   - A mailing list tool like Mailchimp or Buttondown — swap in their embed form code
   - Your own backend, if you're comfortable building one

## Putting it online

Since this is a static site, any of these work and are free for a project this size:
- **GitHub Pages** — push this folder to a GitHub repo and turn on Pages in the repo settings
- **Netlify** or **Vercel** — drag and drop this folder onto their dashboard
- **Cloudflare Pages** — similar drag-and-drop deploy

## Structure reference

```
cohort-website/
├── index.html   — page content
├── style.css    — all styling
├── script.js    — small interactions
└── README.md    — this file
```
