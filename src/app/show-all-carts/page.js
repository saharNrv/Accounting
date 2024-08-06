"use client"
import React, { useEffect, useState } from 'react';
import style from '@/styles/ShowAllCarts.module.css'
import Topbar from '@/components/module/topbar/Topbar';
import Box from '@/components/module/box/Box';
import Navbar from '@/components/module/navbar/Navbar';
import { apiGetAllExpenses } from '../../../api/expenses';
import { categoryName } from '../../../lib/string';

export default function ShowAllCarts() {

  const [allExpenses, setAllExpenses] = useState([])


  useEffect(() => {
    apiGetAllExpenses()
      .then(res => {
        console.log(res.result);
        
        if (res.result !== null) {
          setAllExpenses(res.result)

        }
        
      })

 
    }, [])

  return (
    <>
      <Navbar />
      <div className={style.showallcartWrap}>
        <Topbar title={'مخارج شما'} showBtn={true} linkBtnUrl={'/'} />

        <div className={style.showallcart}>
          {
            allExpenses.length >0 && allExpenses.map((exp,index)=>(

              <Box category={categoryName(exp.category)} price={exp.amount.toLocaleString()} day={exp.day} month={exp.month} year={exp.year} />
            ))
          }
         
        </div>

      </div>
    </>
  );
}
