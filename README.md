# blog-web-app-v2

A blog web app demo, created with EJS, CSS and JavaScript, Node.js for the back-end. No database.

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/nicolasmbronner/blog-web-app-v2.git

# Navigate to the project directory
cd blog-web-app-v2

# Install dependencies
npm i

# Start the server
node index.js
```

Visit `http://localhost:3000` in your browser to access the blog.

## 📂 Project Structure

```bash
blog-web-app-v2/
├── src/              # Main source code
│   ├── routes/       # Route handlers
│   ├── data/         # In-memory data store
│   ├── services/     # Business logic (CRUD)
│   ├── utils/        # Utility functions
│   └── middleware/   # Authentication & other middlewares
├── tests/            # Unit tests
├── public/           # Static files
│   ├── css/         
│   └── js/          
├── views/            # EJS templates
│   ├── partials/     # Reusable components
│   └── pages/        # Main pages
├── docs/             # Technical documentation
└── index.js          # Application entry point
```

## 📚 Documentation

- [Roadmap](ROADMAP.md) - Development plan and future features
- [Technical Architecture](docs/TECHNICAL.md) - Detailed code structure and organization
- [User Guide](docs/USER_GUIDE.md) - Usage instructions and features explanation
- [Changelog](CHANGELOG.md) - Version history and updates

## ✨ Features

- Read articles with formatted dates
- Create, Edit, Delete your articles
- Client-side article interactions without page reloads
- Modular JavaScript architecture
- Light/dark mode toggle (in progress)
- Adaptable date formats based on device and context
- Cross platform responsive design

## 🔧 Technical Notes

- Uses Express.js for server-side rendering with EJS templates
- Client-side JavaScript organized in modules (ES6)
- In-memory article storage with full CRUD operations
- Custom middleware for HTTP method support
- Adaptive design for desktop and mobile devices
- RESTful API pattern with browser compatibility adaptations

## 🎨 Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Background Dark | ![#141518](https://placehold.co/10/141518/141518) #141518|
| Main C.Dark | ![#FFFFFF](https://placehold.co/10/FFFFFF/FFFFFF) #FFFFFF |
| Secondary C.Dark | ![#AFAFAF](https://placehold.co/10/F8F8F8/F8F8F8) #F8F8F8 |
| Background Light | ![#FFFFFF](https://placehold.co/10/FFFFFF/FFFFFF) #FFFFFF|
| Main C.Light | ![#000000](https://placehold.co/10/000000/000000) #000000 |
| Secondary C.Light | ![#515151](https://placehold.co/10/515151/515151) #515151 |
| Edit Color | ![#425DE1](https://placehold.co/10/425DE1/425DE1) #425DE1 |
| Delete Color | ![#E14942](https://placehold.co/10/E14942/E14942) #E14942 | 

## 📸 Screenshots

Login page:
![Imgur](https://i.imgur.com/9tFE16T.png)

Login page with input:
![Imgur](https://i.imgur.com/hHbb9on.png)

Index page:
![Imgur](https://i.imgur.com/D78cFqG.png)

Article hovering with mouse, interaction icons (index page)
![Imgur](https://i.imgur.com/LFwWG6H.png)

Article reading page
![Imgur](https://i.imgur.com/x04QIjJ.png)

Deleted article notification:
![Imgur](https://i.imgur.com/6RfjLnb.png)

Article edition page
![Imgur](https://i.imgur.com/A41H8yh.png)

Canceled article edition notification
![Imgur](https://i.imgur.com/bqDZ0dn.png)

New article page
![Imgur](https://i.imgur.com/XKKXaT3.png)

Canceled new article notification
![Imgur](https://i.imgur.com/cMy6XVI.png)

White theme
![Imgur](https://i.imgur.com/N99VRAH.png)

Tablet and Smartphone responsive design
![Imgur](https://i.imgur.com/TN6eBXZ.png)

Touch device swipe right to edit article (from index page):
![Imgur](https://i.imgur.com/jrevs4H.png)

Touch device swipe left to delete article (from index page):
![Imgur](https://i.imgur.com/gbb5JON.png)

## 👨‍💻 Author

- [@nicolasmbronner](https://github.com/nicolasmbronner)

## 📄 License

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)