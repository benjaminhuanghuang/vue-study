# firebase APIs

GoogleAuthProvider


## Create user
```js
const auth = getAuth();
createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
        console.log(auth.currentUser);
        router.push('/protected')
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
});
```

## Sign In
```js
function signIn() {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((data) => {
            console.log(auth.currentUser);
            router.push('/protected')
        })
        .catch((error: any) => { 
            errMsg.value = error.code;
        });
}

function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider)
        .then((result) => {
            console.log(result.user);
            router.push('/protected')
        })
        .catch((error) => {
            console.log(error);
        });
}


```


## Sign out
```js
import { signOut } from 'firebase/auth';

function handleSignOut() {
    signOut(auth)
    .then(() => {
        router.push('/');
    })
    .catch((error) => {
        console.log('Sign out error', error);
    });
}
```

## Login state
```js
import { getAuth, onAuthStateChanged } from 'firebase/auth';

onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    isLoggedIn.value = !!user;
  });
});
```