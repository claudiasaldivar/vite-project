import React, { useContext } from "react";
import Layout from "../../components/layout";
import Card from "../../components/card";
import ProductDetail from "../../components/productDetail";
import SideMenu from '../../components/sideMenu';
import { ShoppingCartContext } from "../../context";
import './Home.scss'; // Importa el archivo Sass donde defines tus estilos

const Home = () => {
  const { items, setSearchValue, searchValue, filteredItems } = useContext(ShoppingCartContext);

  const renderView = () => {
    if (filteredItems?.length > 0) {
      return filteredItems?.map(item => (
        <Card key={item?.id} item={item} />
      ));
    } else {
      return <p>No hay elementos que mostrar</p>;
    }
  };

  return (
    <Layout>
      <div className="home-title-container">
        <h1 className="home-title">Exclusive Products</h1>
      </div>     
      <input 
        className="search-input" 
        type='text' 
        placeholder='Busca tu producto' 
        onChange={e => setSearchValue(e.target.value)}  
      /> 
      <div className="product-grid">
        {renderView()}
      </div>
      <ProductDetail />
      <SideMenu />
    </Layout>
  );
};

export default Home;
