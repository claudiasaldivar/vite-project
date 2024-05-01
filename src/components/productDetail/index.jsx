import React, { useContext } from 'react';
import { ShoppingCartContext } from '../../context';
import { XMarkIcon } from '@heroicons/react/24/solid';
import './ProductDetail.scss'; 

const ProductDetail = () => {
    const { isProductDetailOpen, closeDetail, productDetail } = useContext(ShoppingCartContext);

    return (
        <aside className={`product-detail ${isProductDetailOpen ? 'open' : 'hidden'}`}>
            <div className='header'>
                <h2 className='title'>Detail</h2>
                <div>
                    <XMarkIcon className='close-icon' onClick={closeDetail} />
                </div>
            </div>
            <figure className='image'>
                <img src={productDetail?.image} alt={productDetail?.title} />
            </figure>
            <div className='details'>
                <p className='price'>${productDetail?.price}</p>
                <p className='title'>{productDetail?.title}</p>
                <p className='description'>{productDetail?.description}</p>
            </div>
        </aside>
    );
};

export default ProductDetail;
