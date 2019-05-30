
/* IMPORT */

import {ComponentType} from 'react';

/* TYPES */

type Loader = () => Promise<{ default: ComponentType<any> }>;

type Fallback = NonNullable<React.ReactNode> | null;

type Options = {
  loader: Loader,
  fallback?: Fallback,
  timeout?: number
};

/* EXPORT */

export {Loader, Fallback, Options};
