# TailwindCSS Components

A collection of ready-to-use helper components for Tailwind CSS that provide common layout patterns and utilities.

## Installation

```bash
npm install @phucbm/tailwindcss-components
```

## Usage

Add the plugin to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  // ...
  plugins: [
    require('@phucbm/tailwindcss-components'),
    // ...other plugins
  ],
}
```

## Available Components

### Flex Layout Helpers

Easily center content with flexbox.

```html
<div class="fl-center">Centers both horizontally and vertically</div>
<div class="fl-center-v">Centers vertically only</div>
<div class="fl-center-h">Centers horizontally only</div>
```

### Absolute Positioning Helpers

Position elements absolutely with ease.

```html
<div class="ab-center">Centers absolutely both horizontally and vertically</div>
<div class="ab-center-v">Centers absolutely vertically only</div>
<div class="ab-center-h">Centers absolutely horizontally only</div>
<div class="ab-full">Covers its parent completely</div>
<div class="ab-full-b">Pseudo-element ::before covers parent</div>
<div class="ab-full-a">Pseudo-element ::after covers parent</div>
<div class="ab-full-ba">Both pseudo-elements cover parent</div>
```

### Image Size Helpers

Handle image sizing with ease.

```html
<div class="img-wrapper-cover">
  <img src="..." alt="..."> <!-- Will cover the container -->
</div>

<div class="img-wrapper-contain">
  <img src="..." alt="..."> <!-- Will be contained in the container -->
</div>
```

### List Style Helpers

Clean list styling without bullets or padding.

```html
<ul class="list-style-none">
  <li>Item without bullets or padding</li>
</ul>

<div class="list-style-none">
  <ul>
    <li>Item without bullets or padding</li>
  </ul>
</div>
```

### Transition Helpers

Add simple transitions.

```html
<div class="t">Element with standard transition (.25s)</div>
<div class="t t-slow">Element with slow transition (.6s)</div>
```

### Loading Helpers

Add loading spinners and overlays.

```html
<div class="loading">
  Content with loading overlay and spinner
</div>
```

You can customize the loading appearance with CSS variables:

```css
:root {
  --loading-size: 50px;
  --loading-color: blue;
  --loading-bg: rgba(255, 255, 255, 0.9);
}
```

### Flex Grid Template

A flexible grid system using flexbox.

```html
<div class="flex-grid-template">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <!-- Default is 3 columns, responsive down to 1 -->
</div>

<div class="flex-grid-template flex-grid-col-4">
  <!-- 4 columns -->
</div>
```

You can customize gap sizes:

```html
<div class="flex-grid-template" style="--grid-gap-x: 20px; --grid-gap-y: 40px;">
  <!-- Custom gaps -->
</div>
```

### Skeleton Background

Add skeleton loaders.

```html
<div class="skeleton-bg">
  Loading content placeholder with animated spinner
</div>
```

## License

MIT