## Supabase setup
Select project -> Authentication -> Provider -> Email -> Confirm email = NO -> save

## Pages

### Component

```
npx shadcn-vue@latest add card
```

### Login

### Register

 
## Store and session

auth.ts


## Router guard

src/router/index.ts
```js
router.beforeEach
```

App.vue
```js
onMounted(() => {
  useAuthStore().trackAuthChanges()
})
```