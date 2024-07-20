"use client"
import React from 'react';
import style from '@/styles/Addnewcart.module.css'
import Topbar from '@/components/module/topbar/Topbar';
import Link from 'next/link';
import Input from '@/components/module/inputwrap/Input';
import Navbar from '@/components/module/navbar/Navbar';
export default function AddNewCart() {



    return (
        <>
            <Navbar />
            {/* topbar component */}
            <Topbar title={'ایجاد کارت جدید'} />
            <div className={style.addnewcart} >


                {/* <div className={style.formWrapper}> */}
                <form className={style.form}>
                    <Input
                        title={'بانک'}
                        placeholder={'بانک را انتخاب کنید'}
                    />
                    <Input title={'شماره کارت'} placeholder={'شماره کارت را وارد کنید'} />
                    <Input title={'نام'} placeholder={'نام کارت را وارد کنید'} />

                    <div className={style.formBtn}>

                        <button >تایید</button>
                    </div>
                </form>
                {/* </div> */}


            </div>
        </>
    );
}
