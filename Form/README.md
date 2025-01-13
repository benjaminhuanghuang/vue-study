## Submit
@submit.prevent is the same as e.preventDefault() to stop page reload

```
  <form name="form" @submit.prevent="handleSubmit">
    <input v-model="name" name="name" type="text" required>
    <button>Submit</button>
  </form>
```

```
handleSubmit(e) {
  console.log('form submitted')
  console.log(e.target.name.value);
  console.log(this.name);
}
```      


## Validation
Adding a novalidate attribute to the form element prevents native validation on form elements (if applied), allowing your JavaScript unobstructed ability to manage all validation

```
<form name="form" @submit.prevent="handleSubmit" novalidate="true">


handleChange(ev) {
  console.log(ev.target.validity);
}
```
https://developer.mozilla.org/en-US/docs/Web/API/ValidityState