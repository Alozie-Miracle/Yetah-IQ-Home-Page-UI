"""# Yetahiq — Behavioral Intelligence Platform

> **Turn Human Behavior into Enterprise Intelligence.**  
> Yetahiq maps hidden team communication patterns, measures workforce dynamics, and provides continuous, data-driven analytics for corporate leaders.

---

## 📋 Overview

**Yetahiq** is an enterprise-grade behavioral intelligence and workforce clarity platform. Re-architected with an authoritative executive design language inspired by corporate platforms, Yetahiq delivers real-time visibility into team dynamics, competencies, and organizational performance.

---

## 🎨 Key Visual & Design Specifications

- **Theme:** Dark Executive Mode
- **Base Canvas:** Deep Obsidian Navy (`#070E17`) with cyan/teal radial background glow (`#0F2B48`)
- **Card Styling:** High-contrast floating panels (`#112236`) featuring 1px subtle strokes (`#1E3A5F`) and glassmorphism backdrop blurs (`backdrop-blur-md`)
- **Typography:** Modern corporate sans-serif stack (`Inter` / `Helvetica Neue` / `Arial`)

---

## ✨ Features

- **Hero Interactive Carousel:** Auto-advancing executive hero slider featuring:
  - *Boardroom Executive Analytics* (Enterprise Intelligence)
  - *Behavioral Intelligence Engine* (Network Plexus Visualization)
  - *Executive Dashboard* (Real-Time Workforce Clarity)
- **Behavioral Analytics Engine:** Continuous, data-driven metrics mapping team synergies and communication bottlenecks.
- **Glassmorphic UI Components:** Responsive card grids with subtle micro-grid overlay textures (`opacity-5`).
- **Interactive Executive Pilot Request:** Frictionless CTA flows designed for enterprise sales pipelines.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 14+](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v3 / v4](https://tailwindcss.com/)
- **Typography:** `next/font/google` (`Inter`)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed locally:
- **Node.js** `>=18.17.0`
- **npm**, **pnpm**, or **yarn**

### Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/your-org/yetahiq-landing-page.git](https://github.com/your-org/yetahiq-landing-page.git)
   cd yetahiq-landing-page

```

2. **Install dependencies:**
```bash
npm install
# or
pnpm install
# or
yarn install

```


3. **Run the development server:**
```bash
npm run dev

```


4. **Open in browser:**
Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

---

## 📁 Project Structure

```text
yetahiq/
├── public/
│   ├── images/              # Hero background visuals & dashboard mockups
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout, Google Fonts (Inter) setup
│   │   ├── page.tsx         # Main Landing Page
│   │   └── globals.css      # Custom Tailwind utilities & glassmorphism FX
│   ├── components/
│   │   ├── HeroCarousel.tsx # Auto-advancing Hero Carousel component
│   │   ├── FeatureGrid.tsx  # Floating glassmorphic cards
│   │   ├── Navbar.tsx       # Corporate Header with Yetahiq branding
│   │   └── Footer.tsx       # Executive footer & legal links
│   └── lib/
│       └── constants.ts     # Carousel slide data & content strings
├── tailwind.config.ts       # Theme configuration (#070E17, #112236, #1E3A5F)
├── tsconfig.json
└── package.json

```

---

## 🔧 Configuration & Customization

### Updating Hero Carousel Content

To update slide copy or image assets, modify `src/lib/constants.ts`:

```typescript
export const HERO_SLIDES = [
  {
    id: 1,
    title: "Turn Human Behavior into Enterprise Intelligence",
    subtitle: "Measure and optimize key team behaviors using continuous, data-driven analytics designed for corporate leaders.",
    ctaText: "Request Executive Pilot",
    ctaLink: "#pilot-request",
    image: "/images/hero-boardroom.jpg",
  },
  // Add or modify additional slides...
];

```

---

## 📦 Build & Deployment

### Build for Production

```bash
npm run build

```

### Run Production Build Locally

```bash
npm run start

```

### Deployment

This project is optimized for direct deployment on **Vercel**, **Netlify**, or AWS Amplify:

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
"""

file_path = "README.md"
with open(file_path, "w", encoding="utf-8") as f:
f.write(readme_content)

print(f"File saved successfully as {file_path}")

```

```text?code_stdout&code_event_index=1
File saved successfully as README.md


```

Your Markdown file is ready


```markdown
# Yetahiq — Behavioral Intelligence Platform

> **Turn Human Behavior into Enterprise Intelligence.**  
> Yetahiq maps hidden team communication patterns, measures workforce dynamics, and provides continuous, data-driven analytics for corporate leaders.

---

## 📋 Overview

**Yetahiq** is an enterprise-grade behavioral intelligence and workforce clarity platform. Re-architected with an authoritative executive design language inspired by corporate platforms, Yetahiq delivers real-time visibility into team dynamics, competencies, and organizational performance.

---

## 🎨 Key Visual & Design Specifications

- **Theme:** Dark Executive Mode
- **Base Canvas:** Deep Obsidian Navy (`#070E17`) with cyan/teal radial background glow (`#0F2B48`)
- **Card Styling:** High-contrast floating panels (`#112236`) featuring 1px subtle strokes (`#1E3A5F`) and glassmorphism backdrop blurs (`backdrop-blur-md`)
- **Typography:** Modern corporate sans-serif stack (`Inter` / `Helvetica Neue` / `Arial`)

---

## ✨ Features

- **Hero Interactive Carousel:** Auto-advancing executive hero slider featuring:
  - *Boardroom Executive Analytics* (Enterprise Intelligence)
  - *Behavioral Intelligence Engine* (Network Plexus Visualization)
  - *Executive Dashboard* (Real-Time Workforce Clarity)
- **Behavioral Analytics Engine:** Continuous, data-driven metrics mapping team synergies and communication bottlenecks.
- **Glassmorphic UI Components:** Responsive card grids with subtle micro-grid overlay textures (`opacity-5`).
- **Interactive Executive Pilot Request:** Frictionless CTA flows designed for enterprise sales pipelines.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 14+](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v3 / v4](https://tailwindcss.com/)
- **Typography:** `next/font/google` (`Inter`)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed locally:
- **Node.js** `>=18.17.0`
- **npm**, **pnpm**, or **yarn**

### Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/your-org/yetahiq-landing-page.git](https://github.com/your-org/yetahiq-landing-page.git)
   cd yetahiq-landing-page

```

2. **Install dependencies:**
```bash
npm install
# or
pnpm install
# or
yarn install

```


3. **Run the development server:**
```bash
npm run dev

```


4. **Open in browser:**
Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

---

## 📁 Project Structure

```text
yetahiq/
├── public/
│   ├── images/              # Hero background visuals & dashboard mockups
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout, Google Fonts (Inter) setup
│   │   ├── page.tsx         # Main Landing Page
│   │   └── globals.css      # Custom Tailwind utilities & glassmorphism FX
│   ├── components/
│   │   ├── HeroCarousel.tsx # Auto-advancing Hero Carousel component
│   │   ├── FeatureGrid.tsx  # Floating glassmorphic cards
│   │   ├── Navbar.tsx       # Corporate Header with Yetahiq branding
│   │   └── Footer.tsx       # Executive footer & legal links
│   └── lib/
│       └── constants.ts     # Carousel slide data & content strings
├── tailwind.config.ts       # Theme configuration (#070E17, #112236, #1E3A5F)
├── tsconfig.json
└── package.json

```

---

## 🔧 Configuration & Customization

### Updating Hero Carousel Content

To update slide copy or image assets, modify `src/lib/constants.ts`:

```typescript
export const HERO_SLIDES = [
  {
    id: 1,
    title: "Turn Human Behavior into Enterprise Intelligence",
    subtitle: "Measure and optimize key team behaviors using continuous, data-driven analytics designed for corporate leaders.",
    ctaText: "Request Executive Pilot",
    ctaLink: "#pilot-request",
    image: "/images/hero-boardroom.jpg",
  },
  // Add or modify additional slides...
];

```

---

## 📦 Build & Deployment

### Build for Production

```bash
npm run build

```

### Run Production Build Locally

```bash
npm run start

```

### Deployment

This project is optimized for direct deployment on **Vercel**

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
