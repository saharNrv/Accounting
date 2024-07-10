import React from 'react';
import style from './Cart.module.css';

function Cart() {
    return (
        <div className={style.cart}>
            <div className={style.cartImgWrap}>
                <img src="https://jackblack.ir/wp-content/uploads/2021/06/blu-99-09-18-1.jpg" alt="img" className={style.cartImg} />
            </div>
            <div className={style.cartInfo}>
                <h3>بلو بانک</h3>
                <p>3789950003887747</p>
            </div>


        </div>
    );
}

export default Cart;
