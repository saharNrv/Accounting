import Topbar from '@/components/module/topbar/Topbar';
import React from 'react';
import style from '@/styles/NewExpense.module.css'
import Input from '@/components/module/inputwrap/Input';
import { MdArrowDropDown } from "react-icons/md";
import Navbar from '@/components/module/navbar/Navbar';

export default function NewExpense() {
    return (
        <div>
            <Navbar/>
            <Topbar title={'ایجاد خرج جدید'} showBtn={false} />
            <div className={style.newexpense} >
                <Input title={'مبلغ'} placeholder={'2000 تومان'} />

                <div className={style.newexpenseBtnWrap}>
                    <p className={style.newexpenseBtnSubTitle}>دسته بندی</p>
                    <div className={style.newexpenseBtnContent}>

                        <button className={style.newexpenseBtn}>
                            <span className={style.newexpenseBtnTitle}>دسته بندی را انتخاب کنید</span>
                            <MdArrowDropDown />
                        </button>
                    </div>

                </div>

                <div className={style.newexpenseBtnWrap}>
                    <p className={style.newexpenseBtnSubTitle}>تاریخ و زمان</p>
                    <div className={style.newexpenseBtnContent}>

                        <button className={style.newexpenseBtn}>
                            <span className={style.newexpenseBtnTitle}>۳۰ تیر ۱۴۰۳</span>
                            
                        </button>
                    </div>

                </div>

                <div className={style.newexpenseBtnWrap}>
                    <p className={style.newexpenseBtnSubTitle}>کارت بانکی</p>
                    <div className={style.newexpenseBtnContent}>

                        <button className={style.newexpenseBtn}>
                            <span className={style.newexpenseBtnTitle}>کارت بانک را انتخاب کنید</span>
                            <MdArrowDropDown/>
                        </button>
                    </div>

                </div>

                <div className={style.newexpenseBtnWrap}>
                    <p className={style.newexpenseBtnSubTitle}>توضیحات</p>
                    <div className={style.newexpenseBtnContent}>

                       <textarea className={style.newexpenseTextarea} placeholder='توضیحات را وارد کنید'></textarea>
                    </div>
                    <div className={style.newexpenseSubmit}>
                        <button className={style.newexpenseSubmitBtn}>تایید</button>
                    </div>

                </div>

               

            </div>
        </div>
    );
}
