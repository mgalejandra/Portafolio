<h2 align="center">
  Portfolio Website - v2.0<br/>
  <a href="https://portafolio-git-main-mgalejandras-projects.vercel.app/" target="_blank">mgalejandra.tech</a>
</h2>
<div align="center">
  <img alt="Demo" src="./Images/readme-img1.png" />
</div>

<br/>

<center>

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com) &nbsp;
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com) &nbsp;
[![forthebadge](https://forthebadge.com/images/badges/open-source.svg)](https://forthebadge.com) &nbsp;
![GitHub Repo stars](https://img.shields.io/github/stars/mgalejandra/Portafolio?color=red&logo=github&style=for-the-badge) &nbsp;
![GitHub forks](https://img.shields.io/github/forks/mgalejandra/Portafolio?color=red&logo=github&style=for-the-badge)

</center>

## 📋 About

My personal portfolio website <a href="https://portafolio-git-main-mgalejandras-projects.vercel.app/" target="_blank">mgalejandra.tech</a> which features some of my GitHub projects as well as my resume and technical skills.

## 🛠 Built With

This project was built using these technologies:

- **React 18** - JavaScript library for building user interfaces
- **React Router DOM** - Routing library for React
- **React Bootstrap** - Bootstrap components built with React
- **React Icons** - Icon library
- **TSParticles** - Particle animations
- **CSS3** - Styling
- **Vercel** - Deployment platform

## ✨ Features

**📖 Multi-Page Layout** - Clean and organized navigation

**🎨 Modern UI** - Styled with React-Bootstrap and custom CSS with easy to customize colors

**📱 Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices

**⚡ Performance Optimized** - Implemented lazy loading, code splitting, and React memoization

**♿ Accessible** - ARIA labels, semantic HTML, and keyboard navigation support

**🛡️ Error Handling** - Error boundaries for graceful error handling

**🔍 SEO Optimized** - Meta tags, Open Graph, and Twitter cards configured

## 🚀 Getting Started

Clone down this repository. You will need `node.js` and `git` installed globally on your machine.

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## 🛠 Installation and Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/mgalejandra/Portafolio.git
   cd Portafolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

   Runs the app in development mode.\
   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.\
The page will reload if you make edits.

4. **Build for production**
   ```bash
   npm run build
   ```

## 📝 Usage Instructions

### Customizing Your Portfolio

1. **Update personal information**: Navigate to `/src/constants/index.js` and update:
   - `PORTFOLIO_INFO` - Your personal information
   - `PROJECTS` - Your projects list
   - `SOCIAL_LINKS` - Your social media links

2. **Update components**: Navigate to `/src/components/` and edit the components:
   - `/Home/Home.js` - Landing page
   - `/About/About.js` - About section
   - `/Projects/Projects.js` - Projects section
   - `/Resume/ResumeNew.js` - Resume section

3. **Update images**: Replace images in `/src/Assets/` with your own

4. **Update meta tags**: Edit `/public/index.html` for SEO optimization

## 📁 Project Structure

```
Portafolio/
├── public/
│   ├── index.html          # HTML template with meta tags
│   └── manifest.json       # PWA manifest
├── src/
│   ├── Assets/             # Images and assets
│   ├── components/         # React components
│   │   ├── About/         # About section components
│   │   ├── Home/          # Home section components
│   │   ├── Projects/      # Projects components
│   │   └── Resume/        # Resume components
│   ├── constants/         # Centralized configuration
│   ├── App.js             # Main app component
│   └── index.js           # Entry point
└── package.json           # Dependencies
```

## 🔧 Improvements Made

- ✅ Updated React 17 to React 18
- ✅ Fixed memory leak in Navbar scroll listener
- ✅ Implemented lazy loading with React.lazy and Suspense
- ✅ Added Error Boundaries for error handling
- ✅ Improved accessibility (ARIA labels, semantic HTML)
- ✅ Optimized SEO (meta tags, Open Graph, Twitter cards)
- ✅ Centralized configuration in constants file
- ✅ Performance optimizations (React.memo, useMemo)
- ✅ Updated all dependencies to latest versions
- ✅ Added JSDoc documentation to components
- ✅ Improved code structure and organization

## 🚢 Deployment

The project is configured for deployment on Vercel. For other platforms:

1. Build the project: `npm run build`
2. Deploy the `build` folder to your hosting platform

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## ⭐ Show your support

Give a ⭐ if you like this website!

