"use client"
import React, { useEffect, useState } from 'react';
import style from '@/styles/Addnewcart.module.css'
import Topbar from '@/components/module/topbar/Topbar';
import Link from 'next/link';
import Input from '@/components/module/inputwrap/Input';
import Navbar from '@/components/module/navbar/Navbar';
import Modal from '@/components/module/modal/Modal';
import { apiGetAllBank, apiPostBank } from '../../../api/bank';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { replaceFaNum2EnNum } from '../../../lib/string';
export default function AddNewCart() {

    const router = useRouter()

    const [bank, setBank] = useState({
        name: '',
        bank_slug: ''
    })
    const [cartNumber, setCartNumber] = useState('')
    const [cartName, setCartName] = useState('')
    const [showModal, setShowModal] = useState(false)
    const [allBanks, setAllBanks] = useState([])


    // choice bank handler func
    const choiceBank = (event) => {
        event.preventDefault()
        setShowModal(true)


    }
    // close modal handler
    const closeModal = () => {
        setShowModal(false)
    }

    useEffect(() => {
        apiGetAllBank()
            .then(res => {
                console.log(res);
                if (res.result !== null) {

                    setAllBanks(res.result)
                }
            })
    }, [])

    // select bank_slug
    const selectBank = (bankInfo) => {
        setBank(bankInfo)
        setShowModal(false)
    }

    // submit handler
    const submitHandler = (event) =>{
        event.preventDefault()

        const newCart={
            bank_number:Number(replaceFaNum2EnNum(cartNumber)),
            bank_slug:bank.bank_slug,
            name:cartName
        }

        apiPostBank(newCart)
                .then(res=>{
                    
                    router.replace('/carts')
                })
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
                        <button className={style.addnewcartBtn} onClick={choiceBank}>
                            {
                                bank.name === '' ? "بانک خود را انتخاب کنید" : bank.name
                            }
                        </button>
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

                        <button onClick={submitHandler} >تایید</button>
                    </div>
                </form>
                {/* </div> */}




            </div>

            {/* modal */}
            <Modal title={'بانک خود را انتخاب کنید'} show={showModal} onClose={closeModal}>

                <div className={style.gridContainer}>

                    {
                        allBanks.length > 0 && allBanks.map((bank, index) => (
                            <button key={index} onClick={() => selectBank({
                                name: bank.name,
                                bank_slug: bank.bank_slug
                            })}>
                                <span>{bank.name}</span>

                                <Image
                                    src={`/icon/${bank.bank_slug}.png`}
                                    width={30}
                                    height={30}
                                    alt={bank.bank_slug}
                                />
                            </button>
                        ))
                    }

                </div>

            </Modal>

        </>
    );
}
