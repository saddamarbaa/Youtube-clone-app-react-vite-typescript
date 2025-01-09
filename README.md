# YouTube Clone - Full-Stack Video Streaming Platform



Welcome to my **YouTube Clone** project! This dynamic, full-stack video streaming platform mimics key features of YouTube, built using modern web technologies. It includes functionalities such as **video search**, **playback**, **user authentication**, **playlists**, and more, providing a seamless and engaging user experience.

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://your-build-link)
[![License](https://img.shields.io/badge/license-MIT-blue)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/react-16.13.1-61DAFB?style=flat&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.4.4-blue)](https://www.typescriptlang.org/)


## ✨ Features


### Core Features:
- **User Authentication**: Secure user sign-up and login functionality via **OAuth** (Google).
- **Video Streaming**: High-quality video playback with controls like play, pause, seek, and volume adjustments.
- **Live Search with Auto-Suggest & Debouncing**: Instant video search with real-time suggestions and optimized performance using debouncing.
- **Dark/Light Mode**: Toggle between dark and light mode for a more customized viewing experience based on user preference.
- **Category-Based Filters**: Easily filter videos by categories like **AI**, **Coding**, **News**, **Music**, **Sport**, **Development**, and more.
- **Personalized Recommendations**: Personalized video recommendations based on user interactions.
- **Responsive Design**: Fully responsive UI optimized for both desktop and mobile devices, ensuring a seamless experience across platforms.



### Planned Features:

- **Video Uploads**: Authenticated users can upload their own videos and manage them in a personal library.
- **Comments & Likes**: Engage with videos by liking and commenting (available for authenticated users).
- **Playlists**: Create, manage, and organize video playlists for a personalized viewing experience.
- **Real-Time Chat**: Add a chat section for live videos using WebSocket.
- **More Advanced Recommendation System**: Further improve recommendation algorithms based on user preferences and video metadata.



### Bonus Features:
- **Optimized Performance**: Built with performance in mind, ensuring quick load times and smooth media streaming.


## 🚀 Live Demo

You can check out the live demo of the YouTube Clone project at:  [Live Demo](https://youtube-clone-app-react-vite-typescript.vercel.app/)



## 🛠 Tech Stack

### Front-End:
- **React.js** with **TypeScript** – for building a scalable, maintainable, and type-safe user interface.
- **Vite** – a fast build tool for development, ensuring quick reloads and a smooth developer experience.
- **Styled-Components** – for modular and dynamic styling that enhances the user experience.
- **React Router** – for client-side routing and smooth page transitions.
- **React Query** – for fetching, caching, and syncing data from the YouTube Data API efficiently.
- **YouTube Data API** – to fetch video data (e.g., video search, trending videos, etc.) and handle searches.
- **Debouncing Techniques** – to optimize search performance and ensure smooth user interactions.

### Back-End:
- **Firebase** – for authentication, real-time database, and file storage (e.g., videos, user data).

### Deployment:
- **Vercel/Netlify** – for front-end hosting, providing fast and reliable content delivery.
- **Firebase Hosting** – for hosting both front-end and back-end in a serverless environment.

### Tools & Libraries:
- **Prettier** – for code formatting to maintain consistent code style across the project.
- **ESLint** – for ensuring consistent code quality and identifying potential issues during development.


## 🧑‍💻 Author

This project is developed by:

- [Saddam Arbaa](https://github.com/saddamarbaa)
<!--- [Team Member Name](https://github.com/team-member)-->



## Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

- Node.js (v18 or higher) - You can download it from [here](https://nodejs.org/en/).



### Installation


#### 1. Clone the Repository
To get started, clone the repository to your local machine using the following command:

```bash
git clone https://github.com/saddamarbaa/Youtube-clone-app-react-vite-typescript.git
```

#### 2. Go to the project directory

```bash
cd Youtube-clone-app-react-vite-typescript
```

#### 3. Install Dependencies
Once you’ve cloned the repository, navigate to the project folder and install the required dependencies:

```bash
npm install
```

#### 4. Set Up Environment Variables
Once you’ve cloned the repository, navigate to the project folder and install the required dependencies:

Copy `.env.example` to `.env` and update the necessary values.

#### 5. Set up Firebase
For user authentication, you'll need to set up Firebase:

1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Create a new project or select an existing project.
3. Enable Firebase Authentication (Email/Password and Google).
4. Copy the Firebase config and add it to the `.env` file in your project.

#### 6. Set up YouTube Data API
To fetch video data, you'll need to set up the YouTube Data API:

1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project or select an existing project.
3. Enable the YouTube Data API v3.
4. Generate an API key and add it to the `.env` file in your project.

#### 7. Run the Project
Once the setup is complete, you can run the project locally using:

```bash
npm run dev
```

This will start the development server, and you can view the app in your browser at `http://localhost:3000`.



## 📚 API Documentation

The project uses the **YouTube Data API** for fetching video data. You can check the official documentation [here](https://developers.google.com/youtube/v3/docs).

### Key Endpoints:
- **/videos** – Fetch a list of popular videos.
- **/watch?v=videoId** – Fetch video details for a specific video.
- **/search** – Search for videos based on a query.
- **/comments** – Fetch and post comments for a video.
- **/suggestions** – Fetch search suggestions based on the query.

## 📂 Project Structure

```bash
├── public
│   ├── index.html
│   ├── assets/
│   │   └── logo.png
│   └── favicon.ico
├── src
│   ├── assets
│   │   ├── logo.png
│   │   └── thumbnail.jpg
│   ├── components
│   │   ├── VideoCard.tsx
│   │   ├── VideoPlayer.tsx
│   │   ├── Header.tsx
│   │   ├── Sidebar.tsx
│   │   └── SearchBar.tsx
│   ├── config
│   │   └── youtubeApiConfig.ts
│   ├── constants
│   │   └── actionTypes.ts
│   ├── custom-hooks
│   │   └── useAuth.tsx
│   ├── globalStates
│   │   └── AppContext.tsx
│   ├── layout
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── screens
│   │   ├── HomePage.tsx
│   │   ├── WatchPage.tsx
│   │   └── LoginPage.tsx
│   ├── styles
│   │   ├── theme.ts
│   │   └── globalStyles.ts
│   ├── types
│   │   ├── video.ts
│   │   └── user.ts
│   ├── utils
│   │   ├── formatDate.ts
│   │   └── debounce.ts
│   ├── App.tsx
│   └── index.tsx
    └── dbConfig.js


```




## 🌍  Environment Variables

To configure the project, you'll need to add the necessary environment variables. Follow these steps:

1. Copy `.env.example` to `.env`.
2. Add your Firebase, Google API keys to the `.env` file.

Here are the environment variables you need to set:

```env
# Firebase Configuration
VITE_REACT_APP_FIREBASE_API_KEY=""
VITE_REACT_APP_AUTH_DOMAIN=""
VITE_REACT_APP_PROJECT_ID=""
VITE_REACT_APP_STORAGE_BUCKET=""
VITE_REACT_APP_MESSAGING_SENDER_ID=""
VITE_REACT_APP_APP_ID=""

# Yotube API Configuration
VITE_REACT_GOOGLE_API_KEY=""

```



##  📦  **Deployment**

To deploy this application, follow these steps:

### **Deploying to Production**

1. **Prepare Environment Variables**:
   Ensure that the necessary environment variables are set up in your production environment. For this project, you will need:

   - `VITE_REACT_APP_FIREBASE_API_KEY`: Your Firebase API Key.
   - `VITE_REACT_APP_AUTH_DOMAIN`: Firebase Auth Domain.
   - `VITE_REACT_APP_PROJECT_ID`: Firebase Project ID.
   - `VITE_REACT_APP_STORAGE_BUCKET`: Firebase Storage Bucket.
   - `VITE_REACT_APP_MESSAGING_SENDER_ID`: Firebase Messaging Sender ID.
   - `VITE_REACT_APP_APP_ID`: Firebase App ID.
   - `VITE_REACT_GOOGLE_API_KEY`: Google API Key.


   **Important**: Copy the provided `.env.example` file to a new `.env` file, and fill in the necessary values for your production environment.

2. **Push your code to a Git repository**:
   If you are using a service like GitHub, GitLab, or Bitbucket, push your code to a remote repository.

3. **Set up a Hosting Service**:
   You can deploy the app on platforms like:

   ### **Vercel**:
   - Install the Vercel CLI and log in.
     ```bash
     npm i -g vercel
     vercel login
     ```
   - Create a production build of your app.
     ```bash
     npm run build
     ```
   - Deploy the app using the Vercel CLI.
     ```bash
     vercel --prod
     ```
   - Set the necessary environment variables in the Vercel dashboard under the **Environment Variables** section.
   - To enable automatic deployment whenever you push code to the repository, check the [Vercel documentation](https://vercel.com/docs) for instructions on setting up **Automatic Deployment**.

   ### **Netlify**:
   - Install the Netlify CLI and log in.
     ```bash
     npm i -g netlify-cli
     netlify login
     ```
   - Build the project for production.
     ```bash
     npm run build
     ```
   - Deploy the app using the Netlify CLI.
     ```bash
     netlify deploy --prod
     ```
   - Set the environment variables in the Netlify dashboard under the **Site Settings > Build & Deploy > Environment Variables** section.
   - To enable automatic deployment whenever you push code to the repository, check the [Netlify documentation](https://docs.netlify.com/) for instructions on setting up **Auto Deployment**.

4. **Set up Firebase**:
   - Ensure that your Firebase project is properly configured. This includes enabling Firebase Authentication, Firestore, and Storage as needed.
   - Use Firebase Console to manage the environment and production configuration.
   - Ensure the environment variables are correctly set in your deployment platform for Firebase services to function properly.

5. **Additional Considerations**:
   - **Security**: Ensure that sensitive information (like API keys) is stored securely using environment variables on your hosting platform.
   - **Build Process**: Always run `npm run build` before deploying to production to generate optimized production-ready code.

Once deployed, your application will be live, and you can access it through the provided URL from Vercel or Netlify.






## 🤝 Contributing

Contributions make the open-source community an amazing place to learn, inspire, and create. We deeply appreciate all contributions, whether it's fixing bugs, adding features, or suggesting improvements. Thank you for being a part of our community! 🥰

### How to Contribute

1. **Fork the repository**  
   Click the **Fork** button on GitHub.

2. **Clone the repository**  
   ```bash
   git clone https://github.com/saddamarbaa/Youtube-clone-app-react-vite-typescript
   ```

3. **Create a new branch**  
   ```bash
   git checkout -b your-feature-branch
   ```

4. **Make your changes**  
   Implement your changes with clear commit messages.

5. **Test your changes**  
   Run tests to ensure everything works.

6. **Commit your changes**  
   ```bash
   git add .
   git commit -m "Add/Update feature description"
   ```

7. **Push your changes**  
   ```bash
   git push origin your-feature-branch
   ```

8. **Create a Pull Request (PR)**  
   Go to the **Pull Requests** tab, click **New Pull Request**, and submit it for review.

### Code of Conduct

Please be respectful and kind to other contributors. By participating, you agree to abide by the project's Code of Conduct.

### Issues and Bugs

1. **Check existing issues**: Ensure the problem or feature request hasn't been reported yet.
2. **Report a bug/feature**: If not, create a new issue with:
   - Steps to reproduce (if applicable)
   - Expected vs actual behavior
   - Any error messages/logs

### Documentation

1. Document new features in **README.md**.
2. Update API docs for any changes.

### Thanks for your contributions!

Your contributions improve this project for everyone. Thank you! 🙏


## 🔄 Status

- **Current Status**: This project is in **active development**.

  

## 💡 Inspiration

This project was inspired by YouTube's platform, with an additional focus on building a modern, feature-rich web application using React. The goal is to replicate core features while adding enhancements like dark mode.

## 🛠️ Support

If you encounter any issues while setting up or using the app, feel free to raise an issue on the GitHub repository, and we will do our best to assist you. Alternatively, you can contact us via email or through social media.

## 📝 Feedback

We value your feedback and would love to hear from you! If you have any suggestions, improvements, or bugs to report, please feel free to:

- Open an issue on the [GitHub Issues page].
- Send us an email at  [youtubeclone@example.com].

Your feedback helps us improve the project and provide a better experience for everyone.


## 📝 License


This project is licensed under the [MIT License](LICENSE).

You are free to use, modify, and distribute the code, but please ensure you follow the terms of the license. See the [LICENSE](LICENSE) file for more details.


## 🌐 Social Links

[![linkedin](https://img.shields.io/badge/linkedin-Code?style=for-the-badge&logo=linkedin&logoColor=white&color=0077B5)](https://www.linkedin.com/in/saddamarbaa/)

[![twitter](https://img.shields.io/badge/twitter-Code?style=for-the-badge&logo=twitter&logoColor=white&color=1DA1F2)](https://twitter.com/ArbaaSaddam)




##  📝 Related Projects

### **Netflix Clone App** built with React, TypeScript, and Vite
- [**GitHub Repo**](https://github.com/saddamarbaa/netflix-clone-app-react-typescript)
- A fully functional Netflix clone built with **React**, **TypeScript**, and **Vite**. This project features:
  - **User authentication** for secure sign-in and sign-up.
  - **Profile management** for personalized content.
  - **Movie browsing** with detailed information and trailers.
  - **Search functionality** powered by **ChatGPT**, enabling intelligent recommendations and content discovery.
  - **Responsive design** for a seamless experience across devices.
  - Additional features like favorites, video streaming, and more!


### Open Source Blog REST API built with Node.js, Express, MongoDB, and TypeScript
- [**GitHub Repo**](https://github.com/saddamarbaa/node-express-mongodb-typescript-blog-rest-api)
- A powerful RESTful API built with Node.js, Express, MongoDB, and TypeScript for managing blog posts, user authentication, and content moderation. Includes features like filtering, pagination, sorting, and full-text search. Easily customizable and scalable for various use cases.


### Dev Match App built with React, Vite, and TypeScript (Integrated with the current API)
- [**GitHub Repo**](https://github.com/saddamarbaa/developer-match-app-vite-react-typescript)
- A modern web application built with React, Vite, and TypeScript, integrated with the Developer Match API. It enables users to register, create and manage their profiles, and connect with other developers based on skills, interests, and technologies.




### **TMDB Clone App**
- [**GitHub Repo**](https://github.com/saddamarbaa/imdb-clone-app-next13-typescript)
- A movie discovery app built with React.js, Next.js, TypeScript, and Tailwind CSS, replicating the functionality of TMDB. It allows users to browse, search, and view details of movies and TV shows using TMDB's public API.

---

### **Hulu Clone App** built with React Js, Next Js, TypeScript, Redux, Tailwind CSS, Vercel Hosting, with complete user authentication
- [**GitHub Repo**](https://github.com/saddamarbaa/Hulu-clone-app-next.js-typeScript)
- A clone of Hulu's frontend with features like user authentication, TV show/movie management, and search functionality.

---


### **Front-End Mentor Rest Countries API Challenge app** built with React Js + Next Js + TypeScript + Tailwind CSS + Vercel Hosting
- [**GitHub Repo**](https://github.com/saddamarbaa/rest-countries-app-nextjs-typescript)
- An app displaying country data using the Rest Countries API, built with Next.js, React, and TypeScript.

---

### **Google Clone App** built with React Js + Next Js + TypeScript + Tailwind CSS + Vercel Hosting
- [**GitHub Repo**](https://github.com/saddamarbaa/google-clone-app-nex-js-typeScript)
- A Google homepage clone with search functionality and responsive design, built with React, Next.js, and TypeScript.

---

### **Realtor Clone App** built with React Js + TypeScript + Tailwind CSS + Vercel Hosting + Firebase
- [**GitHub Repo**](https://github.com/saddamarbaa/realtor-clone-app-react-typescript)
- A realtor platform clone with property listings, user authentication, and Firebase backend.

---

### **Twitter Clone App** built with React Js + Next Js + TypeScript + Tailwind CSS + Vercel Hosting
- [**GitHub Repo**](https://github.com/saddamarbaa/twitter-clone-app-nextjs-typescript)
- A Twitter clone app with tweet management, user authentication, and real-time updates, built with React and Next.js.

---

### **LinkedIn Clone App** built with React Js + TypeScript + Redux + Styled Components + Material-UI + Firebase Realtime Database + Vercel Hosting
- [**GitHub Repo**](https://github.com/saddamarbaa/LinkedIn-clone-app-react-typescript)
- A LinkedIn clone with user authentication, profile management, and job posting features, using React and Firebase.

---

### **Instagram Clone App** built with React Js + Next Js + TypeScript + Redux + Tailwind CSS + Heroicons
- [**GitHub Repo**](https://github.com/saddamarbaa/Instagram-clone-app-nex-js)
- A clone of Instagram with features like image upload, user authentication, and post interactions built with React and Next.js.

---

### **Facebook Clone App** built with React Js + Next Js + TypeScript + Redux + Styled Components
- [**GitHub Repo**](https://github.com/saddamarbaa/facebook-clone-app-nex-js)
- A Facebook clone with user authentication, post creation, and social interaction features, using React and Redux.

---

### **Messenger Clone App** built with React Js + Next Js + Redux + Styled Components + Material-UI
- [**GitHub Repo**](https://github.com/saddamarbaa/messenger-clone-app-nex-js)
- A real-time messaging app clone with user authentication and message functionality, built with React, Next.js, and Material-UI.

---

### **Gmail Clone App** built with React Js + Next Js + TypeScript + Styled Components + Material-UI + Firebase Realtime Database + Vercel Hosting
- [**GitHub Repo**](https://github.com/saddamarbaa/Gmail-clone-app-nex-js)
- A Gmail clone with email management, inbox UI, and user authentication, built with React and Firebase.

---

### **Signal Clone App** built with React Native + TypeScript + Expo + React Navigation + Firebase Realtime Database + User Authentication + Passwordless Authentication with Magic Link
- [**GitHub Repo**](https://github.com/saddamarbaa/signal-clone-app-reactnative-typescript)
- A Signal clone app with secure messaging, user authentication, and passwordless login using Magic Link, built with React Native.

---

### **WhatsApp Clone App** built with React Js + React Context API + Styled Components + Material-UI + Firebase Realtime Database + Firebase Hosting
- [**GitHub Repo**](https://github.com/saddamarbaa/whatsapp-clone)
- A WhatsApp clone featuring real-time messaging, user authentication, and Firebase backend, built with React.

---

### **Slack Clone App** built with React Js + Next Js + Styled Components + firebase-hooks + Material-UI
- [**GitHub Repo**](https://github.com/saddamarbaa/slack-clone-app-nex-js)
- A Slack clone with channel management, real-time messaging, and user authentication, built with React, Next.js, and Firebase.

---

### **Airbnb Clone App** built with React Js + Next Js + Redux + Tailwind CSS
- [**GitHub Repo**](https://github.com/saddamarbaa/airbnb-clone-app-nex-js)
- A clone of Airbnb with property listings, booking functionality, and responsive design, built with React and Next.js.

---

### **Amazon Clone App** built with React Js + TypeScript + Redux + Styled Components
- [**GitHub Repo**](https://github.com/saddamarbaa/amazon-clone-app-react-typescript)
- A clone of Amazon's frontend with product listings, cart management, and user authentication, built with React and TypeScript.

---

### **Tesla Clone App** built with React Js + TypeScript + Redux + Styled Components + Material-UI + Vercel Hosting
- [**GitHub Repo**](https://github.com/saddamarbaa/tesla-clone-app-react-typescript)
- A Tesla clone with car management, user authentication, and an interactive UI, built with React and TypeScript.

---



## 📸 Screenshots

### Home Page
![Home Page](#)

### Watch Page
![Watch Page](#)

### Search Results
![Search Results](#)

### Playlist Management
![Playlist Management](#)



