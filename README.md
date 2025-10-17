How to run locally:
1. Save files in a folder (structure shown below).
2. npm install
3. In one terminal run: npm run server (starts backend on http://localhost:4000)
4. In another terminal run: npm run dev (starts front-end on http://localhost:5173)


Project structure:
- package.json
- README.md
- index.html (public)
- src/
- main.jsx
- App.jsx
- components/
- Sidebar.jsx
- Hero.jsx
- About.jsx
- Experience.jsx
- Projects.jsx
- Gallery.jsx
- Contact.jsx
- styles.css
- server/
- server.js


Notes:
- This is a single-page React app (Vite) showcasing the layout we discussed: minimal sidebar, creative hero, storytelling About, Experience timeline, Projects grid with featured project, Gallery, Contact with functional contact POST to backend.
- The backend is minimal (logs messages). Replace with nodemailer or a real API when ready.