# Modern Next.js Web Application

A beautiful, responsive web application built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- ✨ **Modern Design**: Clean, professional UI with gradient backgrounds and smooth animations
- 🌙 **Dark Mode Support**: Automatic light/dark theme switching based on system preferences  
- 📱 **Fully Responsive**: Optimized for all device sizes from mobile to desktop
- ⚡ **Fast Performance**: Built with Next.js 15 and Turbopack for lightning-fast development
- 🎨 **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- 📝 **TypeScript**: Full type safety throughout the application
- 🧩 **Component Architecture**: Reusable components for maintainable code

## Pages

- **Home** (`/`) - Landing page with hero section, features, and statistics
- **About** (`/about`) - Company information, values, and team
- **Contact** (`/contact`) - Contact form and business information

## Components

- `Navigation` - Responsive navigation bar with active link highlighting
- `Footer` - Consistent footer across all pages
- `Layout` - Wrapper component providing consistent page structure

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons (via SVG)
- **Deployment**: Ready for Vercel, Netlify, or any Node.js hosting

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── about/
│   ├── contact/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
└── components/          # Reusable components
    ├── Footer.tsx
    ├── Layout.tsx
    └── Navigation.tsx
```

## Customization

The application uses a consistent color scheme based on blue/purple gradients. You can customize:

- Colors in Tailwind classes throughout components
- Typography and spacing
- Add new pages in the `src/app/` directory
- Create new components in `src/components/`

## License

MIT License - feel free to use this project as a starting point for your own applications.
