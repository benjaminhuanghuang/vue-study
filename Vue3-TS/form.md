


```ts
const handleForm = (event: SubmitEvent) => {
  event.preventDefault();
  // Your custom form logic
};
```

The type of onSubmit in the FormHTMLAttributes interface expects an event of type Event, which is a more general event that doesn't include properties like submitter.
```ts
const handleForm = (event: Event) => {
  event.preventDefault();
  // Your custom form logic
};
```