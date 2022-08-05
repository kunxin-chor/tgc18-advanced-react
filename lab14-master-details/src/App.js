import {Fragment} from 'react'
import ProductListing from './ProductListing';
import ProductProvider from './ProductProvider';

function App() {
  return (
   <Fragment>
      <ProductProvider>
        <ProductListing/>
      </ProductProvider>
   </Fragment>
  );
}

export default App;
