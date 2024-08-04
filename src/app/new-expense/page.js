"use client"
import Topbar from '@/components/module/topbar/Topbar';
import React, { useEffect, useState } from 'react';
import style from '@/styles/NewExpense.module.css'
import Input from '@/components/module/inputwrap/Input';
import { MdArrowDropDown } from "react-icons/md";
import Navbar from '@/components/module/navbar/Navbar';
import Modal from '@/components/module/modal/Modal';
import { apiGetAccount } from '../../../api/account';
import Image from 'next/image';

export default function NewExpense() {
    const [account, setAccount] = useState([])
    const [price, setPrice] = useState('')
    const [showModalCartBank, setShowModalCartBank] = useState(false)

    // function
    const showCartBankHandler = () => {

        setShowModalCartBank(true)

    }

    const closeModalHandler = () => {
        setShowModalCartBank(false)
    }

    // useeffect
    useEffect(() => {
        apiGetAccount()
            .then(res => {
                console.log(res);
                if (res.result !== null) {
                    setAccount(res.result.bank_account)

                }

            })
    }, [])


    return (
        <div>
            <Navbar />
            <Topbar title={'ایجاد خرج جدید'} showBtn={false} />
            <div className={style.newexpense} >
                <Input title={'مبلغ'} placeholder={'2000 تومان'} value={price} onChange={(value) => setPrice(value)} />

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

                        <button className={style.newexpenseBtn} onClick={showCartBankHandler}>
                            <span className={style.newexpenseBtnTitle}>کارت بانک را انتخاب کنید</span>
                            <MdArrowDropDown />
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

            <Modal title={'کارت بانکی خود را انتخاب کنید'} show={showModalCartBank} onClose={closeModalHandler}>
                <div className={style.cartBankBtnWrap}>

                    {
                        account.map((cartBank, index) => (

                            <button key={index} className={style.cartBankBtn}>

                                <Image
                                    className={style.cartBankBtnImg}
                                    width={50}
                                    height={50}
                                    src={`/icon/${cartBank.bank_slug}.png`}
                                />
                                <div className={style.cartBankBtnInfo}>
                                    <span className={style.cartBankBtnInfoName}>{cartBank.name}</span>
                                    <p className={style.cartBankBtnInfoCartNumber}>{cartBank.bank_number}</p>
                                </div>
                            </button>
                        ))
                    }
                </div>

            </Modal>
        </div>
    );
}
