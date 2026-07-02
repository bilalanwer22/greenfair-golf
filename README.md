# GreenFair Golf Club

A complete Next.js golf website with Home, About, Blogs, and Contact pages.

## Pages

- **Home** — Hero section, stats, features, latest blog posts, and call-to-action
- **About** — Club history, mission, team members, and course details
- **Blogs** — Blog listing with 6 dummy articles
- **Contact** — Contact form, address, phone, and hours

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Unsplash images

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Home
│   ├── about/page.tsx    # About
│   ├── blogs/
│   │   ├── page.tsx      # Blog listing
│   │   └── [slug]/page.tsx  # Individual blog posts
│   └── contact/page.tsx  # Contact
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   └── BlogCard.tsx
└── lib/
    └── data.ts           # Dummy content & navigation
```
