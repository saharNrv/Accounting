"use client"
import React from 'react';
import style from '@/styles/Addnewcart.module.css'
import Topbar from '@/components/module/topbar/Topbar';
import { useRouter } from 'next/router';
import Link from 'next/link';
export default function page() {



    return (
        <>
            {/* topbar component */}
            <Topbar title={'ایجاد کارت جدید'} />
            <div className={style.addnewcart} >
               

                {/* <div className={style.formWrapper}> */}
                    <form className={style.form}>
                        <div className={style.inputWrap}>
                            <label>بانک</label>
                            <input type="text" placeholder=' بانک را انتخاب کنید' />
                        </div>
                        <div className={style.inputWrap}>
                            <label>شماره کارت</label>
                            <input type="text" placeholder='شماره کارت را وارد کنید' />
                        </div>
                        <div className={style.inputWrap}>
                            <label>نام</label>
                            <input type="text" placeholder='نام کارت را وارد کنید' />
                        </div>
                        <div className={style.formBtn}>

                        <button >تایید</button>
                        </div>
                    </form>
                {/* </div> */}


            </div>
        </>
    );
}
