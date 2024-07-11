import React from 'react';
import style from './Cart.module.css';
import Link from 'next/link';

function Cart({ title, cartnumber }) {
    return (

        <div className={style.cart}>
                <Link href={'/'} className={style.cartWrapper}>


                <div className={style.cartImgWrap}>
                    <img src="https://jackblack.ir/wp-content/uploads/2021/06/blu-99-09-18-1.jpg" alt="img" className={style.cartImg} />
                </div>
                <div className={style.cartInfo}>
                    <h3>{title}</h3>
                    <p>{cartnumber}</p>
                </div>
        </Link>
            </div>

    );
}

export default Cart;
