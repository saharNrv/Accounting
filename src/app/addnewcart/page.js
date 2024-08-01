"use client"
import React, { useState } from 'react';
import style from '@/styles/Addnewcart.module.css'
import Topbar from '@/components/module/topbar/Topbar';
import Link from 'next/link';
import Input from '@/components/module/inputwrap/Input';
import Navbar from '@/components/module/navbar/Navbar';
import Modal from '@/components/module/modal/Modal';
export default function AddNewCart() {

    const [bank, setBank] = useState('')
    const [cartNumber, setCartNumber] = useState('')
    const [cartName, setCartName] = useState('')
    const [showModal, setShowModal] = useState(false)

    // choice bank handler func
    const choiceBank = (event) => {
        event.preventDefault()
        setShowModal(true)

    }
    // close modal handler
    const closeModal = () => {
        setShowModal(false)
    }


    return (
        <>
            <Navbar />
            {/* topbar component */}
            <Topbar title={'ایجاد کارت جدید'} />
            <div className={style.addnewcart} >


                {/* <div className={style.formWrapper}> */}
                <form className={style.form}>

                    <div className={style.addnewcartBtnWrap}>
                        <h4 className={style.addnewcartBtnTitle}>بانک</h4>
                        <button className={style.addnewcartBtn} onClick={choiceBank}>بانک خود را انتخاب کنید</button>
                    </div>
                    <Input
                        title={'شماره کارت'}
                        placeholder={'شماره کارت را وارد کنید'}
                        value={cartNumber}
                        onChange={(value) => setCartNumber(value)}

                    />
                    <Input
                        title={'نام'}
                        placeholder={'نام کارت را وارد کنید'}
                        value={cartName}
                        onChange={(value) => setCartName(value)}
                    />

                    <div className={style.formBtn}>

                        <button >تایید</button>
                    </div>
                </form>
                {/* </div> */}


            </div>

            {/* modal */}
            <Modal title={'بانک خود را انتخاب کنید'} show={showModal} onClose={closeModal}>

            </Modal>


        </>
    );
}
