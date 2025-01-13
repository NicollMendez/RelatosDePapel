import Search from '../Search/search.jsx';
import Banner from '../Banner/banner.jsx';
import Products from '../Products/products.jsx'; 

const Home = () => {
  return (
    <div>
      <>
        <Search />
        <Banner />
        <Products />
      </>
    </div>
  );
}

export default Home;