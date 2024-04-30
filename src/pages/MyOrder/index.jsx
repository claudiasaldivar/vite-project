import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Layout from "../../components/layout";
import OrderCard from '../../components/orderCard';
import { ShoppingCartContext } from '../../context';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import './MyOrder.scss'; // Importa el archivo Sass donde defines tus estilos

const MyOrder = () => {
  const { order } = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1);

  if (index === 'last') index = order?.length - 1;
  
  return (
    <Layout>
      <div className="my-order-header">
        <Link to='/my-orders' className='back-link'>
          <ChevronLeftIcon className='back-icon' />
        </Link>
        <h1 className="my-order-title">My order</h1>
      </div>
      <div className='order-card-container'>
      {
        order?.[index]?.products.map(item => (
            <OrderCard 
                key={item.id} 
                id={item.id}
                title={item.title} 
                image={item.image} 
                price={item.price}
            />
        ))
      }
      </div>
    </Layout>
  );
};

export default MyOrder;
