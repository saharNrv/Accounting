"use client"
import React, { useState } from 'react';
import style from '@/styles/Edit-user-account.module.css'
import Topbar from '@/components/module/topbar/Topbar';
import Input from '@/components/module/inputwrap/Input';
import Navbar from '@/components/module/navbar/Navbar';
import { apiChangeName } from '../../../api/account';

export default function EditUserAccount() {

    const [userName, setUserName] = useState('')
  

    const changeNameHandler = (event)=>{
        event.preventDefault()
        const changeInputUserName = {
            full_name:userName
        }


        apiChangeName(changeInputUserName)
                  .then(res=>console.log(res))
    }

    return (
        <>
            <Navbar />
            <div className={style.editUser}>
                <Topbar title={'ویرایش حساب کاربری'} showBtn={true} linkBtnUrl={'/settings'} />
                <form className={style.editUserForm}>
                    <Input
                        title={'نام و نام خانوادگی'}
                        placeholder={'نام و نام خانوادگی وارد کنید'}
                        value={userName}
                        onChange={(value)=>setUserName(value)}
                    />
                    {/* <Input
                        title={'آدرس ایمیل'}
                        placeholder={'آدرس ایمیل خود را وارد کنید'}
                    />
                    <Input
                        title={'شماره موبایل'}
                        placeholder={'09456783456'}
                    /> */}
                    <div className={style.formBtn}>

                        <button onClick={changeNameHandler} >تایید</button>
                    </div>
                </form>

            </div>
        </>
    );
}
