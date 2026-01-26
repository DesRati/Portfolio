# Portfolio - Rati Agarwal

A modern, production-ready portfolio website built with Next.js 14, Tailwind CSS, and Framer Motion.

## Features

- ⚡ **Next.js 14** with App Router
- 🎨 **Tailwind CSS** for styling
- 🎭 **Framer Motion** for animations
- 🌙 **Dark/Light mode** toggle
- 🖱️ **Custom cursor** with hover states
- 📱 **Responsive** design
- 🔍 **SEO optimized** with metadata API

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## Project Structure

```
Portfolio/
├── app/
│   ├── globals.css      # Global styles & Tailwind
│   ├── layout.js        # Root layout with metadata
│   └── page.js          # Main portfolio page
├── public/              # Static assets
├── next.config.js       # Next.js configuration
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.mjs   # PostCSS configuration
└── package.json         # Dependencies
```

## Customization

- Edit `app/page.js` to update content (projects, testimonials, etc.)
- Modify `tailwind.config.js` to change theme colors
- Update `app/layout.js` metadata for SEO

## Deployment

Deploy easily to [Vercel](https://vercel.com):

```bash
npm i -g vercel
vercel
```

## License

MIT © Rati Agarwal
