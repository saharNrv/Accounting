"use client"
import Topbar from '@/components/module/topbar/Topbar';
import Link from 'next/link';
import React from 'react';
import style from '@/styles/Carts.module.css'
import { FaPlus } from "react-icons/fa6";
import Cart from '@/components/module/cart/Cart';
import { Translate } from '../../../context/CultureProvider';
import { Dictionary } from '../../../lib/dictionary';


function Carts() {
    // * Renders the carts component with a Topbar, new cart link, and existing Cart components.
    return (
        <>
            {/* tobar component */}
            <Topbar title='کارت ها' showBtn={false}  />
            <div className={style.carts}>
                <div className={style.cartsRight}>
                    <Link href={'/addnewcart'} className={style.cartsLink}>
                        <span>افزودن کارت جدید</span>
                        <FaPlus />
                    </Link>
                </div>
                <div className={style.cartsLeft}>
                    <h2 className={style.cartsTitle}>{Translate(Dictionary.YOUR_CART)}</h2>
                </div>

            </div>
            {/*  cart component inclusive titile and cartnumber props  */}
            
            <Cart title={'بلو بانک'} cartnumber={'3789950003887747'} />
            



        </>
    );
}
export default Carts;
