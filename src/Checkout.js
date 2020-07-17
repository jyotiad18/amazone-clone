import React from 'react';
import { useStateValue } from './StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';

import Subtotal from './Subtotal';

function Checkout() {
    const [{ basket }] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                {/*<img className="checkout__ad"
                src="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg?fbclid=IwAR1l1N67DaavDL8AtiENHdvoJr14AmJClLdrcUO6LB1HTotDEjnBm5TyXd8"
                alt=""
            />
            */
                }
                {
                    basket?.length === 0 ? (
                        <div>
                            <h2>Your Shopping Basket is empty</h2>
                            <p>You have to no items in your basket.</p>
                        </div>
                    )
                        : (
                            <div>
                                <h2 className="checkout__title">Your Shopping Basket</h2>
                                {basket.map(item => (
                                    <CheckoutProduct
                                        id={item.id}
                                        title={item.title}
                                        image={item.image}
                                        price={item.price}
                                        rating={item.rating}
                                    />
                                ))}
                           
                            </div>
                        )}
            </div>
            {basket.length > 0 && (
                <div className="checkout__right">                   
                    <Subtotal></Subtotal>
                </div>
            )}
        </div>
    );
}

export default Checkout;
