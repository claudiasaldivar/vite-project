import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/layout";
import OrdersCard from "../../components/ordersCard";
import { ShoppingCartContext } from '../../context';
import './MyOrders.scss'; // Importa el archivo Sass donde defines tus estilos

const MyOrders = () => {
  const { order } = useContext(ShoppingCartContext);

  return (
    <Layout>
      <div className="my-orders-header">
        <h1 className="my-orders-title">My orders</h1>
      </div>
      <div className="orders-list">
        {order?.map((item, index) => (
          <Link key={index} to={`/my-orders/${index}`} className="order-link">
            <OrdersCard date={item?.date} totalPrice={item?.totalPrice} totalProducts={item.totalProducts}/>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default MyOrders;
