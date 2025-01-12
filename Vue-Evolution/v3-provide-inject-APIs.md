# The provide and inject APIs in Vue 3

The provide and inject APIs in Vue 3 are used for dependency injection, enabling communication between ancestor and descendant components without explicitly passing props down the component tree. They are especially useful for sharing state, services, or configurations across deeply nested components.

- provide:
Used in an ancestor component to "provide" a value that descendant components can "inject."
The key-value pair is stored in a shared context that any descendant can access.

- inject:
Used in a descendant component to "inject" the provided value.

```js
import type { InjectionKey, Ref } from 'vue'

export interface MenuInjectionOptions {
  menuOpen: Ref<boolean>
  toggleMenu: () => void
}

export const menuKey = Symbol() as InjectionKey<MenuInjectionOptions>

// ancestor, AppLayout
provide(menuKey, {
  menuOpen,
  toggleMenu,
});

// descendant, Sidebar
const { menuOpen, toggleMenu } = inject(menuKey) as MenuInjectionOptions
```