import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import './OrderCard.scss';

const OrderCard = ({ id, title, image, price, handleDelete }) => {
  return (
    <div className='order-card'>
      <div className='info-container'>
        <figure className='image-container'>
          <img className='image' src={image} alt={title} />
        </figure>
        <p className='title'>{title}</p>
      </div>
      <div className='action-container'>
        <p className='price'>${price}</p>
        {handleDelete && (
          <XMarkIcon onClick={() => handleDelete(id)} className='delete-icon' />
        )}
      </div>
    </div>
  );
};

export default OrderCard;
