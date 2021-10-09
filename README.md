# vue3-chrome-ext-template
Vue3 Chrome Extension Template

### Features

- Vue3
- Quasar UI
- Chrome manifest version v3

### Reference
[Learn about developing extensions for Chrome](https://developer.chrome.com/docs/extensions/mv3/)

### Folder Structure

```
├─pages
  ├─background  // Plug-in script run in the background
  ├─content     // Script injected into the page (you can get the page dom...)
  ├─options     // Plug-in configuration page
  └─popup       // Click on the page displayed by the plug-in icon in the upper right corner
├─manifest.json // Google plugin configuration
```

### How to run.

Run local

```
yarn
yarn dev
```

Open chrome -> More tools -> Extensions -> Load unpacked--> Select dist folder
