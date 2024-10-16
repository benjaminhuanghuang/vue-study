
## Setup firebase
Go to firebase console

Create project

Create a webApp by click "</>" button

Enable authentication:
Project Overview -> select your project -> Authentication -> Sign-in method -> Add provider Email/Password and Google


## Setup frontend
```sh
npm i firebase
```
Project Overview -> select your project -> select your app

Copy paste code to main.js
```js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    //...
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
```

The current domain is not authorized for OAuth operations. This will prevent signInWithPopup, signInWithRedirect, linkWithPopup and linkWithRedirect from working. Add your domain (127.0.0.1) to the OAuth redirect domains list in the Firebase console -> Authentication -> Settings -> Authorized domains tab.