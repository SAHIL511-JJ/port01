# Next.js Portfolio Project

## Project Overview

This is a Next.js portfolio website built with the App Router architecture. It's a single-page application that showcases a portfolio with modern styling using Tailwind CSS and the Geist font family. The project follows Next.js 16+ conventions with React 19 and includes dark mode support.

### Key Technologies

- **Next.js 16.0.1**: React framework for production applications
- **React 19.2.0**: Component-based UI library
- **Tailwind CSS 4**: Utility-first CSS framework with postcss integration
- **Geist Font**: Optimized font family from Vercel
- **ESLint**: Code linting and quality assurance
- **React Compiler**: Enabled for performance optimization

### Project Structure

```
my-portfolio/
├── app/                    # Next.js App Router pages
│   ├── layout.js          # Root layout with font configuration
│   ├── page.js            # Home page component
│   └── globals.css        # Global styles and Tailwind imports
├── public/                 # Static assets
│   ├── favicon.ico
│   ├── next.svg           # Next.js logo
│   ├── vercel.svg         # Vercel logo
│   └── other assets...
├── package.json           # Dependencies and scripts
├── next.config.mjs        # Next.js configuration
├── jsconfig.json          # JavaScript path aliases
├── postcss.config.mjs     # PostCSS configuration (Tailwind)
└── eslint.config.mjs      # ESLint configuration
```

### Dependencies

#### Production Dependencies
- `next`: 16.0.1
- `react`: 19.2.0
- `react-dom`: 19.2.0

#### Development Dependencies
- `@tailwindcss/postcss`: ^4
- `tailwindcss`: ^4
- `eslint`: ^9
- `eslint-config-next`: 16.0.1
- `babel-plugin-react-compiler`: 1.0.0

### Building and Running

#### Development Server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
The development server will start at `http://localhost:3000`

#### Production Build
```bash
npm run build
```
This creates an optimized production build in the `.next/` directory.

#### Production Start
```bash
npm run start
```
This starts the Next.js server in production mode.

#### Linting
```bash
npm run lint
```
This runs ESLint to check for code quality issues.

### Key Features

1. **Modern React**: Uses React 19 with the App Router pattern
2. **Dark Mode**: Automatic dark/light mode based on system preference
3. **Optimized Fonts**: Uses Next.js built-in font optimization for Geist
4. **Responsive Design**: Mobile-first responsive layout with Tailwind CSS
5. **Performance Optimized**: Includes React Compiler for better performance
6. **Type Safety**: Configured with jsconfig.json for better IDE support

### File Organization

- **`app/`**: Contains the main application pages and layout using the App Router
- **`public/`**: Static assets like images and icons
- **Component Structure**: Uses React components with Tailwind CSS classes
- **Global Styling**: Defined in `globals.css` with CSS variables for theming

### Development Conventions

1. **Component Styling**: Uses Tailwind CSS utility classes
2. **Path Aliases**: Configured with `@/*` pointing to the root directory
3. **Code Quality**: Enforced through ESLint with Next.js recommended rules
4. **Performance**: React Compiler enabled for automatic optimizations

### Customization Points

1. **Content**: Modify `app/page.js` to update the main content
2. **Styling**: Update `app/globals.css` for global styles and theming
3. **Layout**: Modify `app/layout.js` to change the root layout
4. **Metadata**: Update the `metadata` export in `layout.js` for SEO
5. **Static Assets**: Add images, fonts, and other assets to the `public/` directory

### Deployment

The project is configured for easy deployment on Vercel (the creators of Next.js) but can also be deployed to any Node.js hosting platform or static hosting with proper configuration.