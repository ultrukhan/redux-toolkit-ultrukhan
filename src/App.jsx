import { useSelector } from 'react-redux';
import Cart from './components/Cart';
import Layout from './components/Layout';
import Products from './components/Shop';

function App() {
  const showCart = useSelector((state) => state.cartToggle.cartIsVisible);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
