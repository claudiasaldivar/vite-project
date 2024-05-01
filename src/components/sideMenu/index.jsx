import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartContext } from '../../context';
import { XMarkIcon } from '@heroicons/react/24/solid';
import OrderCard from '../orderCard';
import { totalPrice } from '../../utils';
import './SideMenu.scss'; 

const SideMenu = () => {
    const { sideMenu, closeSideMenu, cart, setCart, setCount, count, setOrder, order, setSearchValue } = useContext(ShoppingCartContext);

    const handleDelete = (id) => {
        const filtered = cart.filter(item => item.id !== id);
        setCart(filtered);
        setCount(count - 1);
    };

    const handleCheckout = () => {
        const fecha = new Date();
        const dia = fecha.getDate().toString().padStart(2, '0'); // Obtener el día y agregar un 0 al principio si es necesario
        const mes = (fecha.getMonth() + 1).toString().padStart(2, '0'); // Obtener el mes (los meses comienzan desde 0) y agregar un 0 al principio si es necesario
        const año = fecha.getFullYear(); // Obtener el año

        const orderToAdd = {
            date: `${dia}/${mes}/${año}`,
            products: cart,
            totalProducts: cart.length,
            totalPrice: totalPrice(cart)
        };
        setOrder([...order, orderToAdd]);
        setCart([]);
        setCount(0);
        setSearchValue(null);
    };

    return (
        <aside className={`side-menu ${sideMenu ? 'open' : 'hidden'}`}>
            <div className='header'>
                <h2 className='title'>My Order</h2>
                <div>
                    <XMarkIcon className='close-icon' onClick={closeSideMenu} />
                </div>
            </div>
            <div className='content'>
                {cart?.map(item => (
                    <OrderCard
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        handleDelete={handleDelete}
                    />
                ))}
            </div>
            <div className='footer'>
                <p className='total'>Total: ${totalPrice(cart)}</p>
                <Link to={'/my-orders/last'}>
                    <button className='checkout-button' onClick={handleCheckout}>Checkout</button>
                </Link>
            </div>
        </aside>
    );
};

export default SideMenu;
