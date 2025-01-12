
```ts

type FormErrors = {
  [Property in keyof LoginForm]: LoginFrom[Property]
}

type FormErrors<Type> = {
  [Property in keyof Type]: string[]
}


type FormErrors<T> = {
  [K in keyof T]: string[]
}
```