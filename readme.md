# AUI - Web components

## Introduction

Web Components using Core Branding 6.x.x. Npm repo: https://www.npmjs.com/package/@a-ui/web-components.

## Getting Started

### Running the project locally

```shell
npm ci
npm start
```

### Use web components in your project

```shell
npm install @a-ui/web-components
```

> Scroll down for a list with all available components.

To integrate these web components in your framework of choice, please [follow the steps explained here](https://stenciljs.com/docs/overview).

Use polyfills for older browers and browsers that not support web components. To make our web components work in these browsers, you need to include the following scripts before you load your web component:

```html
<script src="//polyfill.io/v3/polyfill.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/2.4.4/webcomponents-bundle.js"></script>
```

Take a look at the component documentation below to learn how to use each component.


## Components

This library contains the following components:

| Name                          | Documentation                                                    |
| ----------------------------- | ---------------------------------------------------------------- |
| aui-cookie-consent            | [Documentation](./src/components/cookie-consent/readme.md)       |
| aui-cookie-content-blocker    | [Documentation](./src/components/content-blocker/readme.md)      |


## Styling

Use [one of our brandings](https://github.com/a-ui) to adhere to the styling guidelines:

```html
// Antwerp core branding
<link rel="stylesheet" href="https://cdn.antwerpen.be/core_branding_scss/6.6.4/main.min.css">

If needed, you can add a branding-compatible [flexbox grid layout system](https://github.com/a-ui/core_flexboxgrid_scss):

```html
<link rel="stylesheet" href="https://cdn.antwerpen.be/core_flexboxgrid_scss/3.0.0/flexboxgrid.min.css">
```

For other styling-related things, like e.g. favicons, [check out GitHub](https://github.com/a-ui).


## Changelog

Detailed changes for each release are documented in the [changelog](./CHANGELOG.md).


## Contributing

Please read our [contribution guide](CONTRIBUTING.md).


## Support

- Jasper Van Proeyen (<jasper.vanproeyen@digipolis.be>)
- Jeroen Collier (<jeroen.collier@antwerpen.be>)


## License

[MIT](./LICENSE.md)
