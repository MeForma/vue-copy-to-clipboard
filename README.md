# Vue Copy To Clipboard

A simple vue 3 plugin to copy text to clipboard

## Installation

```bash
# yarn
yarn add @meforma/vue-copy-to-clipboard

# npm
npm install @meforma/vue-copy-to-clipboard
```

## Import

```js
// In you main.js
// ... considering that your app creation is here
import copyText from "@meforma/vue-copy-to-clipboard";

createApp(App).use(copyText).mount("#app");
```

## Usage

```js
this.$copyText("Text to copy")
  .then(() => {
    console.log("copied!");
  })
  .catch(() => {
    console.log(`can't copy`);
  });
```

This plugin is compatible with browsers that can execute [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API) and browsers that can execute [execCommand('copy')](https://developer.mozilla.org/pt-BR/docs/Web/API/Document/execCommand), alternatively.

## License

[MIT](LICENSE.txt) License
