
/* IMPORT */

import * as React from 'react';
import {Options} from './types';

/* MAKE LAZY */

function makeLazy <Props = {}> ( options: Options ) {

  const LazyComponent = React.lazy ( options.loader );

  if ( options.hasOwnProperty ( 'timeout' ) ) {
    setTimeout ( options.loader, options.timeout );
  }

  return ( props: Props ) => (
    <React.Suspense fallback={options.fallback || null}>
      <LazyComponent {...props} />
    </React.Suspense>
  );

}

/* EXPORT */

export default makeLazy;
