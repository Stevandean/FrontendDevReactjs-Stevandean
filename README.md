# 🍜 Restaurant Finder App

A modern restaurant listing web app built with **React + TypeScript + Tailwind CSS**.  
Users can explore restaurants, filter results, and view detailed information with reviews.

---

## 🚀 Live Features

✨ What you can do in this app:

- 🔍 Browse restaurant list
- 🎯 Filter by:
  - Open Now
  - Price Range
  - Category
- 📄 View detailed restaurant page
- ⭐ See customer reviews
- 🗺️ Integrated Google Maps location
- ➕ Load More (pagination UX)
- 💀 Skeleton loading (better UX)
- 📱 Fully responsive design

---

## 🛠️ Tech Stack

- ⚛️ React (Vite)
- 🟦 TypeScript
- 🎨 Tailwind CSS
- 🌐 MockAPI (for fake backend)
- 🔀 React Router DOM

---

## ⚙️ Environment

| Tool | Version |
|------|--------|
| Node.js | >= 18.x |
| React | ^18.x |
| Vite | ^5.x |
| npm | >= 9.x |

---

## 📦 Installation & Setup

### 1. Clone Repository

```bash
git clone https://github.com/USERNAME/REPO_NAME.git
cd REPO_NAME
2. Install Dependencies

Using npm:

npm install

or using yarn:

yarn install
3. Run Project
npm run dev

or

yarn dev
4. Open in Browser
http://localhost:5173
```

## 📁 Project Structure
```bash
src/
│
├── Components/
│   ├── FilterBar.tsx
│   ├── RestaurantCard.tsx
│   └── SkeletonCard.tsx
│
├── pages/
│   ├── Home.tsx
│   └── Detail.tsx
│
├── services/
│   └── api.ts
│
├── types/
│   └── restaurant.ts
│
└── App.tsx
```

## 🎯 Key Highlights

- Clean and modular architecture
- Separation between UI & data fetching
- Combination of:
- Server-side filtering (category)
- Client-side filtering (price & open status)
- Optimized UX with:
1. Skeleton loading
2. Load more pagination
3. Reusable components

🚀 Future Improvements
🔎 Search functionality
❤️ Favorite / Wishlist feature
✍️ Add review form
🔐 Authentication system
🌍 Real backend integration

## 👨‍💻 Author
Made with ❤️ by Stevandean

## 📄 License
This project is for educational / technical test purposes.

## 🌐 Live Demo
https://restourant-app-stevandean.netlify.app/
