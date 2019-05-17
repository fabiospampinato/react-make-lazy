
/* TYPES */

type Loader = <R extends React.ComponentType<any>>() => Promise<{ default: R }>;

type Fallback = NonNullable<React.ReactNode> | null;

type Options = {
  loader: Loader,
  fallback?: Fallback,
  timeout?: number
};

/* EXPORT */

export {Loader, Fallback, Options};
