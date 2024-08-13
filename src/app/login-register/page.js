"use client"
import React, { useState } from 'react';
import style from '@/styles/LoginRegister.module.css'
import { LiaCoinsSolid } from "react-icons/lia";
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
          <LiaCoinsSolid />
          <span className={style.loginTitle}>حسابتو</span>
        </h2>
        <p className={style.subTitle}>نرم افزار حسابداری تو</p>

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
