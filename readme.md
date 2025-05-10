# Freelancer/Indie developer agency website template

## Introduction

This is nextjs basic tailwind starter repository with framer-motion, gsap, lucide-react and react-icons as packages installed.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (version 18.0.0 or higher)
- Yarn package manager

### Installing Node.js and Yarn

1. **Node.js Installation**:

   - Visit [Node.js official website](https://nodejs.org/)
   - Download and install the LTS version for your operating system
   - Verify installation by running:
     ```bash
     node --version
     ```

2. **Yarn Installation**:
   - After installing Node.js, install Yarn globally using npm:
     ```bash
     npm install -g yarn
     ```
   - Verify installation:
     ```bash
     yarn --version
     ```

## Installation

1. Install dependencies by running below command in terminal

   ```bash
   npm install
   ```

2. Start the development server by running below command in terminal
   ```
   npm run dev
   ```

The application will be available at `http://localhost:3000`

## Project Structure

- `/app` - Contains the main application code
- `/components` - Reusable React components
- `/public` - Static assets
- `/styles` - Global styles and Tailwind configuration

## Available Scripts

- `npm dev` - Start development server
- `npm build` - Build for production
- `npm start` - Start production server
- `npm lint` - Run ESLint
- `npm format` - Format code with Prettier

## Customization

1. **Adding New Components**:

   - Create new components in the `/components` directory
   - Import and use them in your pages

2. **Styling**:

   - Use Tailwind CSS classes for styling
   - Custom styles can be added in `/styles/globals.css`

3. **Animations**:
   - Use Framer Motion for animations
   - GSAP is available for complex animations

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [GSAP Documentation](https://greensock.com/docs/)

## Deployment

### Deploying to GitHub

1. **Initialize Git Repository** (if not already done):

   ```bash
   git init
   ```

2. **Add your files to Git**:

   ```bash
   git add .
   git commit -m "Initial commit"
   ```

3. **Create a new repository on GitHub**:

   - Go to [GitHub](https://github.com)
   - Click on "New repository"
   - Name your repository
   - Don't initialize with README (since we already have one)
   - Click "Create repository"

4. **Link and push to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

### Deploying to Vercel

1. **Sign up for Vercel**:

   - Go to [Vercel](https://vercel.com)
   - Sign up using your GitHub account

2. **Import your project**:

   - Click "Add New Project"
   - Select "Import Git Repository"
   - Choose your GitHub repository
   - Vercel will automatically detect Next.js

3. **Configure project**:

   - Framework Preset: Next.js
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
   - Install Command: `npm install` (default)

4. **Deploy**:

   - Click "Deploy"
   - Vercel will automatically build and deploy your site
   - You'll get a unique URL (e.g., `your-project.vercel.app`)

5. **Custom Domain** (Optional):
   - Go to Project Settings
   - Navigate to "Domains"
   - Add your custom domain
   - Follow Vercel's instructions to configure DNS settings

### Automatic Deployments

- Every push to the main branch will trigger a new deployment
- Pull requests will create preview deployments
- You can configure deployment settings in the Vercel dashboard

## Contact

For any questions or support, please reach out to:

- Email: shreyvijayvargiya26@gmail.com

[![Contact Me](https://img.shields.io/badge/Contact%20Me-Email-blue)](mailto:shreyvijayvargiya26@gmail.com)
