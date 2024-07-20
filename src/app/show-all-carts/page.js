import React from 'react';
import style from '@/styles/ShowAllCarts.module.css'
import Topbar from '@/components/module/topbar/Topbar';
import Box from '@/components/module/box/Box';
import Navbar from '@/components/module/navbar/Navbar';

export default function ShowAllCarts() {
  return (
    <>
    <Navbar/>
    <div className={style.showallcartWrap}>
        <Topbar title={'مخارج شما'} showBtn={true} linkBtnUrl={'/'}/>

        <div className={style.showallcart}>
            <Box/>
            <Box/>
            <Box/>
        </div>
      
    </div>
    </>
  );
}
