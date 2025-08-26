# 🦄 React Starter Proj Basics

Welcome to **React Starter Proj Basics**!  
This is a modern, mobile-friendly React app demonstrating core React concepts, UI patterns, and interactive components.  
Explore timers, clocks, lists, modals, and more—all styled for a great user experience.

---

## 🚀 Features

- **Responsive design** for mobile and desktop
- **Navigation bar** for easy page switching
- **Fun demo components**: animal list, seasonal clock, countdown timer, watcher app
- **Interactive modals** and audio playback
- **Styled with CSS modules** for clean visuals

---

## 🌐 Live Demo

Check out the deployed version on **GitHub Pages**:  
👉 [https://cwelt.github.io/Hello-React/](https://cwelt.github.io/Hello-React/)

---

## 🧩 Components Overview

### 1. **AppHeader**

> 🧭 **Navigation bar**  
> Displays the app title and navigation links. Highlights the active page for clarity.

### 2. **Home**

> 🏠 **Landing page**  
> Welcomes users and explains navigation.  
> Shows a friendly greeting and instructions.

### 3. **AnimalList**

> 🐾 **Animal showcase**  
> Displays a list/grid of animals, each with a name and image.  
> Great for demonstrating dynamic lists and mapping over data.

### 4. **SeasonClock**

> 🌦️ **Seasonal clock**  
> Shows the current season and time, updating live.  
> Visualizes how to use timers and date logic in React.

### 5. **CountDown**

> ⏳ **Countdown timer**  
> Lets users start a countdown.  
> Plays an audio alert when time is up (with user permission).  
> Shows time left in a styled clock.

### 6. **WatcherApp**

> 👀 **Watcher management**  
> Displays a grid of "watchers" (users/entities) with:

- Name
- Image
- Divider
- Buttons to **remove** or **select** a watcher

Selecting a watcher opens a **modal** showing their movies.  
Modal can be closed by clicking away or pressing the ❌ button.

---

## 🎨 Styling

- **Mobile-first CSS** for all components
- **Grid and flex layouts** for lists and headers
- **Modals** are centered and animated
- **Active navigation links** are highlighted
- **Buttons** are large and easy to tap

---

## 🛠️ How to Run

1. Clone the repo
2. Install dependencies (`npm install`)
3. Start the dev server (`npm start`)
4. Open [http://localhost:3000](http://localhost:3000) in your browser

---

## 📦 File Structure

```
cmps/
  ├─ AppHeader.jsx
  ├─ Home.jsx
  ├─ AnimalList.jsx
  ├─ SeasonClock.jsx
  ├─ CountDown.jsx
  ├─ WatcherApp.jsx
assets/style/cmps/
  ├─ app-header.css
  ├─ watcher-app.css
  ├─ count-down.css
  └─ ...
```

---

## 💡 Credits

Made with ❤️ using React, CSS, and a sprinkle of creativity!

---

Enjoy exploring and learning from this starter project!  
Feel free to customize, extend, and share your own components! 🚀
