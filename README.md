# Saket Garodia Portfolio

Premium personal portfolio for AI/ML Engineer, Applied AI Engineer, Senior Data Scientist, GenAI Engineer, and MLOps roles.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Reusable section components
- Editable content file
- Vercel-ready deployment

## Local Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
npm run start
```

## Editing Content

Most portfolio copy, links, projects, skills, writing, education, and contact details live in:

```text
src/data/profile.ts
```

Update this file when you want to change recruiter-facing content without editing layout components.

## Replacing Assets

Public assets are served from `public/`.

- Replace the resume PDF at `public/resume.pdf`. The download buttons already point to `/resume.pdf`.
- Replace the headshot at `public/profile.jpg`. The hero image and Open Graph image already point to `/profile.jpg`.
- If your deployed URL changes, update `siteUrl` in `src/app/layout.tsx`.

## Project Links

Only links found in the resume, LinkedIn export, GitHub, Medium, or PyPI source material were included. Projects without confirmed public URLs intentionally render without outbound project links. Add verified links in `src/data/profile.ts` when ready.

## Vercel Deployment

1. Push this repository to GitHub.
2. In Vercel, choose **New Project** and import the repository.
3. Keep the default framework preset as **Next.js**.
4. Use:
   - Build command: `npm run build`
   - Output directory: `.next`
5. Deploy.
6. After deployment, update `siteUrl` in `src/app/layout.tsx` to the production domain for accurate Open Graph metadata.

## Source Material Used

- `Saket Garodia_Resume.pdf`
- `Saket_Garodia_Resume_v3.docx`
- `Linkedin June 11.pdf`
- `Saket professional.jpg`
- GitHub: `https://github.com/garodisk`
- Medium: `https://medium.com/@saketgarodia`
- PyPI: `https://pypi.org/project/coder-buddy/`

