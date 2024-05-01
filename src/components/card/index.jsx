import React, { useContext } from 'react';
import { ShoppingCartContext } from '../../context';
import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid';
import './Card.scss'; // Importar el archivo Sass donde defines tus estilos

const Card = ({ item }) => {
  const { count, setCount, openDetail, setProductDetail, setCart, cart, openSideMenu, closeDetail } = useContext(ShoppingCartContext);

  const productData = () => {
    openDetail();
    setProductDetail(item);
  };

  const addProducts = (e, data) => {
      setCart([...cart, data]);
      setCount(count + 1);
      closeDetail();
      openSideMenu();
  };

  const renderIcon = (id) => {
    const isInCart = cart.find(data => data.id === id);
    if (isInCart) {
      return (
        <div className='icon-container added'>
          <CheckIcon className='icon' />
        </div>
      );
    } else {
      return (
        <div className='icon-container' onClick={(e) => addProducts(e, item)}>
          <PlusIcon className='icon' />
        </div>
      );
    }
  };

  return (
    <div className='card'>
      <figure className='image-container2'>
        <span className='category'>{item?.category}</span>
        <img className='image' src={item?.image} alt={item?.title} onClick={productData} />
        {renderIcon(item.id)}
      </figure>
      <p className='info'>
        <span className='title'>{item?.title}</span>
        <span className='price'>${item?.price}</span>
      </p>
    </div>
  );
};

export default Card;
