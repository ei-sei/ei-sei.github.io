# Cloud Engineer Portfolio - React + Vite

A production-ready, professional portfolio website for cloud engineers built with React 18, Vite, and CSS Modules. Features a complete MVC architecture with smooth animations, dark theme, and fully responsive design.

## 🎯 Features

### Core Pages
- **Home Page** - Hero section with featured projects, skills showcase, and contact form
- **Projects Gallery** - Filterable project grid with advanced search and technology filters
- **Project Details** - In-depth project pages with architecture, features, challenges, and gallery

### Key Capabilities
- 📱 **Fully Responsive** - Mobile-first design with flawless mobile, tablet, and desktop experiences
- ⚡ **High Performance** - Vite for instant HMR and optimized production builds
- 🎨 **Dark Theme** - Professional dark mode with cyan/teal accent color (#00d4aa)
- 🎭 **Smooth Animations** - Scroll animations, hover effects, and transitions throughout
- 🔍 **Advanced Filtering** - Filter projects by technology, search by keywords
- 📋 **Project Showcase** - Detailed project pages with full descriptions and image galleries

## 🏗️ MVC Architecture

```
src/
├── models/
│   └── projectsData.js          # Project data and state models
├── views/
│   ├── components/              # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ProjectDetail.jsx
│   │   ├── Skills.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   └── pages/                   # Page components
│       ├── HomePage.jsx
│       ├── ProjectsPage.jsx
│       └── ProjectDetailPage.jsx
├── controllers/
│   └── projectController.js     # Business logic and data operations
├── styles/
│   └── global.css              # Global styles and theme variables
└── App.jsx                      # Main app with routing
```

## 🎨 Design System

### Color Palette
- Background Primary: `#0a0e27`
- Background Secondary: `#1a1f3a`
- Background Tertiary: `#242a45`
- Accent (Cyan): `#00d4aa`
- Accent Light: `#00f0d4`
- Text Primary: `#e8e8f0`
- Text Secondary: `#a8aabb`
- Text Muted: `#6b6f8a`

### Typography
- **Body**: Inter (from Google Fonts)
- **Code/Tech**: JetBrains Mono
- **Heading Scale**: 3.5rem → 1.25rem

### Components
- Consistent spacing system with CSS variables
- Smooth transitions (150ms → 350ms)
- Border radius scale: sm → xl
- Shadow depth levels: sm → xl

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The app will be available at `http://localhost:5173/`

## 📁 Project Data Structure

Each project in `src/models/projectsData.js` contains:

```javascript
{
  id: 1,
  title: "Project Title",
  shortDescription: "Brief description",
  fullDescription: "Detailed description",
  technologies: ["AWS", "Terraform", "Docker"],
  features: ["Feature 1", "Feature 2"],
  challenges: "Challenges encountered",
  solutions: "Solutions implemented",
  githubUrl: "https://github.com/...",
  liveUrl: "https://example.com",
  images: ["image1.jpg", "image2.jpg"],
  thumbnail: "thumbnail.jpg"
}
```

## 🎮 Controller Logic

The `projectController.js` provides:

```javascript
projectController.getProjects()           // Get all projects
projectController.getProjectById(id)      // Get single project
projectController.filterProjectsByTech()  // Filter by technology
projectController.getAllTechnologies()    // Get all unique techs
projectController.getFilteredProjects()   // Advanced filtering
```

## 📱 Responsive Design

- **Mobile** (< 480px): Single column, optimized touch targets
- **Tablet** (480px - 1024px): Two-column layouts where appropriate
- **Desktop** (> 1024px): Full multi-column grid layouts
- Hamburger menu on mobile, full nav on desktop

## 🌟 Component Features

### Navbar
- Sticky positioning with blur effect
- Smooth scroll navigation
- Mobile hamburger menu
- Active link highlighting

### Hero
- Gradient text animations
- Floating SVG illustration
- Call-to-action buttons
- Stats showcase

### Project Cards
- Hover zoom effect on image
- Technology badges
- Smooth overlay transitions
- Click to view details

### Project Detail
- Full project information
- Feature checklist
- Challenges & solutions section
- Technology grid with icons
- Image gallery
- GitHub and Live Demo links

### Skills Section
- Categorized skills display
- Hover effects
- Progress indicators
- Responsive grid

### Contact Form
- Form validation
- Success message feedback
- Styled inputs with focus states
- Social media links

## 🔧 Customization

### Update Project Data
Edit `src/models/projectsData.js` to add your projects, technologies, and links.

### Change Colors
Modify CSS variables in `src/styles/global.css`:
```css
--color-accent: #00d4aa;  /* Primary accent color */
--color-bg: #0a0e27;      /* Background color */
/* ... etc */
```

### Add New Components
1. Create component in `src/views/components/`
2. Create corresponding `.module.css` file
3. Import and use in pages

## 🔗 Routes

- `/` - Home page with featured projects
- `/projects` - All projects with filters
- `/projects/:id` - Detailed project page

## 📦 Dependencies

- **react**: 18.x - UI library
- **react-router-dom**: 6.x - Client-side routing
- **vite**: Latest - Build tool and dev server

## 🚢 Deployment

### GitHub Pages
```bash
# Build
npm run build

# Deploy to GitHub Pages (update package.json with homepage)
npm run deploy
```

### Netlify
```bash
# Build
npm run build

# Netlify automatically deploys from git
```

### Vercel
```bash
# Just push to GitHub, Vercel auto-deploys
```

## 📊 Performance Optimizations

- Code splitting with React Router
- CSS Modules for scoped styling
- Lazy loading images
- Optimized bundle with Vite
- Smooth scrolling (hardware acceleration)
- Minimal animations for fast rendering

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [React Router](https://reactrouter.com)
- [CSS Modules](https://github.com/css-modules/css-modules)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork, modify, and customize this portfolio for your own use!

## 📞 Support

For issues or questions:
1. Check the component files for implementation details
2. Review the MVC structure for code organization
3. Refer to the CSS modules for styling patterns

---

**Built with ❤️ for cloud engineers** | Ready for production deployment

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
