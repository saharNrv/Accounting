import React from 'react';
import style from '@/styles/ShowAllCarts.module.css'
import Topbar from '@/components/module/topbar/Topbar';
import Box from '@/components/module/box/Box';

export default function ShowAllCarts() {
  return (
    <div className={style.showallcartWrap}>
        <Topbar title={'کارت ها'} showBtn={true} linkBtnUrl={'/'}/>

        <div className={style.showallcart}>
            <Box/>
            <Box/>
            <Box/>
        </div>
      
    </div>
  );
}
