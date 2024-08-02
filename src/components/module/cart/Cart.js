import React from 'react';
import style from './Cart.module.css';
import Link from 'next/link';
import Image from 'next/image';

function Cart({ title, cartnumber,cartID ,imgSrc}) {
    return (

        <div className={style.cart}>
                <Link href={'/cartdetails/1'} className={style.cartWrapper}>


                <div className={style.cartImgWrap}>
                   <Image
                   className={style.cartImg}
                   src={`/icon/${imgSrc}.png`}
                   width={50}
                   height={50}
                   />
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
