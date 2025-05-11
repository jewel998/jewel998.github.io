# Modern Hacker Portfolio

A modern, accessible, and interactive portfolio website with a hacker aesthetic.

## Features

- 🌓 Light and dark mode support
- 🎵 Interactive music player
- ⌨️ Terminal-style interface
- ♿ Comprehensive accessibility features
- ⌨️ Keyboard shortcuts for navigation
- 📱 Fully responsive design
- 🚀 Optimized performance

## Technologies Used

- **Reactjs**: React framework
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Shadcn/UI**: Reusable UI components
- **Lucide Icons**: Beautiful, consistent icons
- **Three.js**: 3D graphics library (for matrix background)

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/yourusername/hacker-portfolio.git
   cd hacker-portfolio
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install

   # or

   yarn install
   \`\`\`

3. Run the development server:
   \`\`\`bash
   npm run dev

   # or

   yarn dev
   \`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Accessibility Features

This portfolio is designed to be accessible to all users, including those with disabilities. Key accessibility features include:

- **Keyboard Navigation**: All interactive elements are accessible via keyboard
- **Skip Links**: Allow keyboard users to bypass navigation and jump to main content
- **ARIA Attributes**: Proper ARIA roles, states, and properties for screen readers
- **Focus Management**: Visible focus indicators for keyboard navigation
- **Color Contrast**: All text meets WCAG AA standards for readability
- **Screen Reader Announcements**: Dynamic content changes are announced to screen readers
- **Responsive Design**: Works on all devices and screen sizes

## Keyboard Shortcuts

Press `?` anywhere on the site to view all available keyboard shortcuts. Here are some key shortcuts:

| Shortcut         | Action                            |
| ---------------- | --------------------------------- |
| `g` + `h`        | Go to home                        |
| `g` + `a`        | Go to about section               |
| `g` + `p`        | Go to projects section            |
| `g` + `s`        | Go to skills section              |
| `g` + `c`        | Go to contact section             |
| `t`              | Toggle theme (light/dark)         |
| `m`              | Toggle music player visibility    |
| `space`          | Play/pause music                  |
| `j`              | Previous track                    |
| `k`              | Next track                        |
| `shift` + `+`    | Increase volume                   |
| `shift` + `-`    | Decrease volume                   |
| `ctrl` + `` ` `` | Open terminal                     |
| `esc`            | Close terminal                    |
| `?`              | Show/hide keyboard shortcuts help |
| `alt` + `s`      | Skip to main content              |

## Customization

### Changing Personal Information

Edit the JSON files in the `data` directory:

- `personal.json`: Basic information like name, title, bio
- `experience.json`: Work experience details
- `education.json`: Education history
- `skills.json`: Skills and interests
- `projects.json`: Project showcase information
- `playlist.json`: Music playlist configuration

## Acknowledgments

- [Shadcn/UI](https://ui.shadcn.com/) for the beautiful UI components
- [Lucide Icons](https://lucide.dev/) for the icon set
