# Manjot Saggu – Portfolio Website

This is the source code for my personal portfolio website, built with **React** and deployed using **GitHub Pages**. It showcases my projects, experience, and resume in a responsive and modern layout.

## 🚀 Tech Stack

- React (via Create React App)
- TypeScript
- MUI (Material UI)
- GitHub Pages (for deployment)

## 📁 Folder Structure

- `src/` – React components and layout
- `public/` – Static assets (including `resume.html`, `favicon`, and resume PDF)
- `build/` – Production build output (automatically created)

## 🛠️ Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build/` folder.

### `npm run deploy`

Deploys the built app to the `gh-pages` branch.  
The website is hosted at:  
[https://msaggu204.github.io/portfolio-manjot/](https://msaggu204.github.io/portfolio-manjot/)

## 🔗 Resume Page

Accessible directly at:  
[https://msaggu204.github.io/portfolio-manjot/resume.html](https://msaggu204.github.io/portfolio-manjot/resume.html)

This page uses an embedded PDF viewer to display my resume.

## ✅ Deployment Notes

This project uses the `gh-pages` package to publish the `build/` folder to the `gh-pages` branch.

Ensure your `package.json` includes:

```json
"homepage": "https://msaggu204.github.io/portfolio-manjot",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
