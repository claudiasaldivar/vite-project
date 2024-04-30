import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import './OrdersCard.scss'; // Importa el archivo Sass donde defines tus estilos

const OrdersCard = ({ totalPrice, totalProducts, date }) => {
  return (
    <div className='orders-card'>
      <div className='card-content'>
        <p className='info'>
          <span>Date: {date}</span>
          <span className='total-products'>Total Products: {totalProducts}</span>
        </p>
        <p className='price-and-icon'>
          <span className='total-price'>Total: ${totalPrice}</span>
          <ChevronRightIcon className='chevron-icon' />
        </p>
      </div>
    </div>
  );
};

export default OrdersCard;
