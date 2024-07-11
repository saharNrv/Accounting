import Topbar from '@/components/module/topbar/Topbar';
import React from 'react';
import style from '@/styles/Cartdetails.module.css' 

export default function cartDetails() {
  return (
    <>
    {/* tobar component It will get the title props from the data */}
      <Topbar title={'بلو کارت'}/>
      {/* cart details */}
      <div className={style.cartDetailsInfowrap}>
        <div className={style.cartDetailsImgWrap}>
            <img src="https://jackblack.ir/wp-content/uploads/2021/06/blu-99-09-18-1.jpg" className={style.cartDetailsImg}  alt="img" />
        </div>
        <div className={style.cartDetailsInfo}>
            <h3>بلو بانک</h3>
            <p>3789950003887747</p>

        </div>

      </div>

      {/* Show expenses */}
      <div className={style.showExpenses}>
        <h2 className={style.showExpensesTitle}>نمایش مخارج</h2>
        <div>
            <button className={style.showExpensesBtn1}>ماه جاری</button>
            <button className={style.showExpensesBtn2}>خروجی اکسل</button>
        </div>

      </div>
      
    </>
  );
}
