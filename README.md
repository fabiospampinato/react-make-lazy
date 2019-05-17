# React Make Lazy

Tiny function for making a component load lazily.

Built on top of React's [lazy](https://reactjs.org/docs/code-splitting.html#reactlazy) and [suspense](https://reactjs.org/docs/code-splitting.html#suspense) features.

## Install

```sh
npm install --save react-make-lazy
```

## Usage

A regular component could be rendered this way:

```tsx
import * as React from 'react';
import MyComponent from './my_component';

const Foo = () => (
  <div>
    <MyComponent />
  </div>
);
```

If you now want to load it lazily you have to do this:

```tsx
import * as React from 'react';
import makeLazy from 'react-make-lazy';

const MyComponentLazy = makeLazy ({
  loader: () => import ( './my_component' ), // A function that dynamically loads the component
  fallback: <div>Loading...</div>, // A fallback node to show while loading the component (optional)
  timeout: 5000 // Preload the component after this amount of time (optional)
});

const Foo = () => (
  <div>
    <MyComponentLazy />
  </div>
);
```

## License

MIT © Fabio Spampinato
