# Geist Design System

A comprehensive component library based on shadcn/ui that replicates Vercel's Geist design system.

## Features

- **44+ Components**: Complete set of UI components matching Vercel's design language
- **Geist Typography**: Uses Geist Sans and Geist Mono fonts
- **Dark Mode**: Full dark mode support with Vercel's exact color tokens
- **TypeScript**: Fully typed components with TypeScript support
- **Accessible**: Built on Radix UI primitives with WCAG AA compliance
- **Customizable**: Easy to customize while maintaining design consistency

## Components

### Core Components (12)
- Button, Input, Label, Card, Separator, Badge, Avatar, Skeleton, Alert, Tooltip, Popover, Dialog

### Form Components (10)
- Form, Checkbox, Radio Group, Switch, Textarea, Select, Slider, Toggle, Toggle Group, Command

### Navigation & Layout (8)
- Tabs, Navigation Menu, Dropdown Menu, Breadcrumb, Pagination, Menubar, Context Menu, Accordion

### Data Display (8)
- Table, Collapsible, Aspect Ratio, Scroll Area, Calendar, Hover Card

### Feedback & Overlays (6)
- Toast, Alert Dialog, Sheet, Progress, Sonner, Carousel

## Installation

This project uses pnpm for package management:

```bash
pnpm install
```

## Development

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the component showcase.

## Usage

Import components from the UI directory:

```tsx
import { Button, Card, Input } from "@/components/ui"

export default function MyComponent() {
  return (
    <Card>
      <Input placeholder="Enter text..." />
      <Button>Submit</Button>
    </Card>
  )
}
```

## Design Tokens

All Geist design tokens are documented in [design-tokens.md](./design-tokens.md).

### Color System
- Light and dark mode support
- Semantic color tokens (primary, secondary, muted, accent, destructive)
- Gray scale from 50 to 950

### Typography
- Font sizes: 11px to 48px
- Font weights: 400, 500, 600, 700
- Geist Sans and Geist Mono fonts

### Spacing
- 4px base unit
- Consistent spacing scale

### Shadows
- Minimal, subtle shadows matching Vercel's style
- 5 shadow levels (sm, default, md, lg, xl)

## Customization

### Tailwind Configuration

Customize design tokens in `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      // Your custom colors
    },
  },
}
```

### CSS Variables

Override CSS variables in `app/globals.css`:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 9%;
  /* ... */
}
```

## Tech Stack

- **Next.js 16**: React framework
- **React 19**: UI library
- **TypeScript**: Type safety
- **Tailwind CSS 3.4**: Utility-first CSS
- **Radix UI**: Accessible component primitives
- **shadcn/ui**: Component architecture
- **Class Variance Authority**: Component variants
- **Lucide React**: Icon library

## Project Structure

```
design-system/
├── app/
│   ├── globals.css       # Global styles & CSS variables
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/
│   └── ui/               # All UI components
│       ├── button.tsx
│       ├── input.tsx
│       └── ...           # 44+ components
├── lib/
│   └── utils.ts          # Utility functions
├── design-tokens.md      # Design token documentation
├── tailwind.config.ts    # Tailwind configuration
└── tsconfig.json         # TypeScript configuration
```

## License

MIT
