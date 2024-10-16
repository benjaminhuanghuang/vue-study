
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