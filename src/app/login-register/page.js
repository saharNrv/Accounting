"use client"
import React, { useState } from 'react';
import style from '@/styles/LoginRegister.module.css'
import { FaSackDollar } from "react-icons/fa6";
import Login from '@/components/template/login/Login';
import Register from '@/components/template/register/Register';

export default function LoginRegister() {
  const [authType, setAuthType]=useState('login')
  // show register page
  const showRegisterForm = () => setAuthType('register');
  // show login page
  const showloginForm = () => setAuthType('login');

  return (
    <div className={style.loginWrap}>
      {/* login topbar */}
      <div className={style.loginTopbr}>
        <h2 className={style.loginTitleWrap}>
          <FaSackDollar />
          <span className={style.loginTitle}>خرجام</span>
        </h2>
        <p className={style.subTitle}>نرم افزار مدیریت مخارج شخصی</p>

      </div>
      {
        authType === 'login'?(
          
          <Login showRegisterForm={showRegisterForm}/> 
        ):(

          <Register showloginForm={showloginForm}/>
        )
      }

    </div>
  );
}
