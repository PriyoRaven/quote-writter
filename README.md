# Quotes adding website

This is a simple React app that allows users to submit quotes with the author's name and saves them to a Firebase database. The quotes are then fetched and displayed on the app. This was actually a practise project to get a better hold on React.

## Features

- Add new quotes with author names <br/>
- Store quotes in Firebase <br/>
- Fetch and display quotes from the Firebase database <br/>

## Language technologies used

- <strong>React: </strong>Frontend framework
- <strong>Firebase: </strong>Backend for storing and retrieving quotes

## Demo

Check out the live version of the app [here](https://react-practice-b18a1.web.app/quotes)

## Prerequisites

- Nodejs
- npm
- Firebase account

## Getting Started

If you want to run this project on your local machine, then follow these steps.

### 1. Clone the repository

```bash
git clone https://github.com/PriyoRaven/quote-writter.git

```

### 2. Navigate into the project directory

```bash
cd quotes-writter
```

### 3. Install dependencies

Use npm to install all required dependencies:

```bash
npm install
```

### 4. Set up Firebase

You need to configure Firebase to store and retrieve quotes.

1. Create a Firebase project [here](https://console.firebase.google.com/).
2. Set up Firestore as the database.
3. Go to **Project Settings** > **General** and find your Firebase config.
4. Create a `.env.local` file in the root of your project and add the following configuration:

```bash
REACT_APP_FIREBASE_DOMAIN=https://your-firebase-database-url
```

### 5. Run the project locally

Start the development server:

```bash
npm start
```

Open the app in your browser at `http://localhost:3000`.

### 6. Build the project (optional)

If you want to create a production build of the app:

```bash
npm run build
```

### 7. Deploy to Firebase Hosting (optional)

If you want to deploy the app using Firebase Hosting:

1. Install the Firebase CLI:

   ```bash
   npm install -g firebase-tools
   ```

2. Log in to Firebase:

   ```bash
   firebase login
   ```

3. Initialize Firebase in your project:

   ```bash
   firebase init
   ```

   Choose **Hosting** during the setup and select your Firebase project.

4. Deploy the app:

   ```bash
   firebase deploy --only hosting
   ```

## Contributing

Feel free to fork this repository and submit pull requests. Any contributions, issues, or feature requests are welcome.

## License

This project is open for learning and educational purposes. Please use it responsibly and ethically. If you use or modify this code, please give proper credit. The project is provided without any warranties, and the author assumes no responsibility for any misuse.

---
