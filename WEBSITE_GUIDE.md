# Zelda Wind Waker WebGL Website

Complete, production-ready website setup for the Zelda Wind Waker WebGL experience.

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The dev server will start on `http://localhost:5173` with hot module replacement (HMR) enabled.

### Production Build

```bash
npm run build
```

This creates an optimized production bundle in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

Test the production build locally on `http://localhost:4173`.

## 🌐 Deployment Options

This project is configured for multiple deployment platforms:

### Vercel (Recommended)
- Automatically deploys from `main` branch
- Configuration: `vercel.json`
- [Deploy to Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&repo-name=zelda-project&project-name=zelda-project)

```bash
npm install -g vercel
vercel
```

### Netlify
- Configuration: `netlify.toml`
- Deploy using Netlify CLI or connect Github repo to Netlify dashboard

```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### GitHub Pages
- Automatic deployment via GitHub Actions
- Configuration: `.github/workflows/deploy.yml`
- Enable GitHub Pages in repository settings (source: GitHub Actions)

### Manual Deployment
After running `npm run build`, deploy the `dist/` folder to any static hosting service:
- Cloudflare Pages
- AWS S3 / CloudFront
- Google Cloud Storage
- Azure Static Web Apps
- Any standard web server

## 📁 Project Structure

```
src/
  ├── index.html          # Main HTML entry point
  ├── js/
  │   ├── index.js       # Entry point
  │   ├── WebGLApp.js    # Main app logic
  │   ├── components/    # Reusable components
  │   ├── managers/      # Game/app managers
  │   ├── cameras/       # Camera implementations
  │   ├── glsl/          # Shader files
  │   └── utils/         # Utility functions
  ├── scss/              # Stylesheets
  └── public/            # Static assets
public/                  # Public assets (served as /public)
  ├── models/           # 3D models
  ├── sounds/           # Audio files
  ├── img/              # Images
  └── fonts/            # Web fonts
dist/                   # Production build (generated)
```

## 🛠️ Development

### NPM Scripts

- `npm run dev` - Start dev server with HMR
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally

### Code Quality

The project includes:
- ESLint for JavaScript linting
- Prettier for code formatting
- Babel for ES6+ transpilation

### Architecture

- **Three.js**: WebGL rendering engine
- **Vite**: Fast build tool and dev server
- **GSAP**: Animation library
- **Howler**: Audio library
- **SCSS**: CSS preprocessor

## 📊 Performance

The production build includes:
- Code splitting (Three.js and GSAP bundled separately)
- Tree-shaking for unused code removal
- Terser for minification
- Asset optimization

## 🔒 Environment Variables

Copy `.env.example` to `.env.local` for local development:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your settings (not committed to git).

## 📝 License

MIT License - See LICENSE file for details

## 👤 Author

Robin Payot ([robpayot@gmail.com](mailto:robpayot@gmail.com))

## 🔗 Resources

- [Zelda Wind Waker JS Live](https://wind-waker-js.vercel.app/)
- [Three.js Documentation](https://threejs.org/docs/)
- [Vite Documentation](https://vitejs.dev/)
- [GSAP Documentation](https://greensock.com/docs/)
- [YouTube Tutorial](https://youtu.be/IyAOCwUWkNE)
