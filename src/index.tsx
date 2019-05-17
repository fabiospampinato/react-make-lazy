
/* IMPORT */

import * as React from 'react';

/* MAKE LAZY */

function makeLazy ( options: Options ) {

  const LazyComponent = React.lazy ( options.loader );

  if ( options.hasOwnProperty ( 'timeout' ) ) {
    setTimeout ( options.loader, options.timeout );
  }

  return props => (
    <React.Suspense fallback={options.fallback || null}>
      <LazyComponent {...props} />
    </React.Suspense>
  );

}

/* EXPORT */

export default makeLazy;
