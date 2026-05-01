# Active8 Studio — static launch site

Source for **active8studio.com** marketing pages (static HTML/CSS/JS).

## Repository

- **GitHub:** [ameermur-oss/active8-studio-launchpad](https://github.com/ameermur-oss/active8-studio-launchpad)

## Local preview

```bash
cd active8studio-local
python3 -m http.server 8081
```

Open [http://localhost:8081/](http://localhost:8081/).

## Publish to GitHub

```bash
cd active8studio-local
git add .
git commit -m "Update static site"
git push -u origin main
```

If the remote repo already has commits (e.g. TypeScript) and this folder was never merged with that history, either:

- **Replace site only:** coordinate a branch or empty the default branch on GitHub first, then push, or  
- **Integrate:** clone the GitHub repo elsewhere, copy these files into the layout you want, then commit and push.

## GitHub Pages

1. Repo → **Settings** → **Pages**
2. **Deploy from a branch** → `main` → **/** (root)
3. Save and use the URL shown (often `https://ameermur-oss.github.io/active8-studio-launchpad/`)

Custom domain: **Pages** → **Custom domain** → `active8studio.com` → set DNS at your registrar per GitHub’s instructions.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Home |
| `services.html` | Services + testimonials |
| `how-it-works.html` | Process |
| `offer.html` | Offer, form, FAQ |
| `styles.css` | Shared styles |
| `app.js` | Scroll stats + form helper |

`no_cache_server.py` is optional for local dev with no-cache headers.
