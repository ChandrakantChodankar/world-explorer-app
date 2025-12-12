# 🌍 World Explorer

> Explore the world, one country at a time.

A modern, interactive web application that allows users to discover fascinating information about countries around the globe. Search by name, filter by region, sort alphabetically, and explore detailed country profiles with flags, populations, capitals, currencies, languages, and more.

 <img width="1280" height="668" alt="world" src="https://github.com/user-attachments/assets/49360b99-015e-4c44-9b76-8a57ecc2b679" />

## ✨ Features 



- 🔍 **Real-time Search** - Find countries instantly as you type
- 🌏 **Region Filtering** - Filter by continent (Africa, Americas, Asia, Europe, Oceania)
- 📊 **Alphabetical Sorting** - Sort countries A-Z or Z-A
- 🎯 **Detailed Country Pages** - View comprehensive information including:
  - Official & native names
  - Capital cities
  - Population statistics
  - Regions & subregions
  - Currencies & languages
  - Top-level domains
  - National flags
- 📱 **Fully Responsive** - Seamless experience on mobile, tablet, and desktop
- 🎨 **Modern UI/UX** - Clean, intuitive interface with smooth transitions
- ⚡ **Fast Performance** - Optimized React components with efficient rendering
- 🌓 **Dark Theme** - Eye-friendly dark mode design

## 🚀 Demo

[Live Demo](https://your-demo-link.com) <!-- Add your deployment link -->

## 📸 Screenshots

### Home Page

<img width="2530" height="1186" alt="Screenshot 2025-12-12 163000" src="https://github.com/user-attachments/assets/e5b9fe3b-d46e-44fb-9823-4300110b7843" />

### Countries List

<img width="2531" height="1164" alt="Screenshot 2025-12-12 163031" src="https://github.com/user-attachments/assets/56ac0091-fee2-40eb-9777-e02997896395" />

### Country Details

<img width="2533" height="1189" alt="Screenshot 2025-12-12 165810" src="https://github.com/user-attachments/assets/ea3816ea-2c24-4e23-81a1-4c24091d417b" />

## 🛠️ Built With

- **Frontend Framework:** [React 18](https://reactjs.org/)
- **Routing:** [React Router v6](https://reactrouter.com/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **API:** [REST Countries API](https://restcountries.com/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
- **Build Tool:** [Vite](https://vitejs.dev/)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## ⚙️ Installation

1. **Clone the repository**

```bash
   git clone https://github.com/chandrakantchodankar/world-explorer-app.git
   cd world-explorer-app
```

2. **Install dependencies**

```bash
   npm install
   # or
   yarn install
```

3. **Start the development server**

```bash
   npm run dev
   # or
   yarn dev
```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 📁 Project Structure

```
world-explorer/
├── public/
│   └── images/
├── src/
│   ├── api/
│   │   ├── postApi.js          # API calls
│   │   ├── countryData.json    # Static country facts
│   │   └── footerApi.json      # Footer content
│   ├── components/
│   │   ├── Layout/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── CountryCard.jsx
│   │   │   └── CountryDetails.jsx
│   │   └── UI/
│   │       ├── HeroSection.jsx
│   │       ├── Card.jsx
│   │       ├── Loader.jsx
│   │       └── SearchFilter.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Country.jsx
│   │   ├── Contact.jsx
│   │   └── ErrorPage.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎯 Usage

### Search Countries

Type in the search bar to find countries by name in real-time.

### Filter by Region

Use the dropdown menu to filter countries by continent:

- All Regions
- Africa
- Americas
- Asia
- Europe
- Oceania

### Sort Countries

Click "Asc" or "Desc" buttons to sort countries alphabetically.

### View Details

Click "Read More" on any country card to view comprehensive information.

## 🌐 API Reference

This project uses the [REST Countries API](https://restcountries.com/):

```javascript
// Get all countries
GET https://restcountries.com/v3.1/all

// Get country by name
GET https://restcountries.com/v3.1/name/{name}
```

### Deploy to GitHub Pages

```bash
npm run build
npm run deploy
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


## 🙏 Acknowledgments

- [REST Countries API](https://restcountries.com/) for providing comprehensive country data
- [React Icons](https://react-icons.github.io/react-icons/) for the beautiful icons
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- Inspired by various country explorer applications

---

<p align="center">Made with ❤️ by Your Name</p>
<p align="center">⭐ Star this repo if you found it helpful!</p>

---
