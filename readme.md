# react-shielded

Add the Women's Refuge Shielded Site button to your React website,

## What's Shielded?

From [The Shielded Site Project](https://shielded.co.nz) website:

> We’ve created a tool for victims of abuse to ask for help, without fear of it showing up in their browser’s history or an abusive partner ever seeing it. A simple icon which can sit on any website and launch a powerful resource to help end domestic violence.

## Features

* :100: Rewrite of the [Shielded script](https://staticcdn.co.nz/embed/embed.js) in React
* :lock: No external resources requested—except the iframed content
* :black_nib: Hand-crafted vector icons
* :wheelchair: Accessibility support

## Usage

Install with your favourite package manager:

`npm install react-shielded` or `yarn add react-shielded`.

> :warning: Requires React and React DOM 16.8 or higher.

Import in the `Shielded` component:

```js
import Shielded from 'react-shielded';
```

Use in your React app:

```js
  ...
  <Shielded />
  ...
```

And that's it!
