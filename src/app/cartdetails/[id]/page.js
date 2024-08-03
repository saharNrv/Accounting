"use client"
import Topbar from '@/components/module/topbar/Topbar';
import React, { useEffect, useState } from 'react';
import style from '@/styles/Cartdetails.module.css'
import { IoMdArrowDropdown } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import Box from '@/components/module/box/Box';
import Modal from '@/components/module/modal/Modal';
import { Translate } from '../../../../context/CultureProvider';
import { Dictionary } from '../../../../lib/dictionary';
import Navbar from '@/components/module/navbar/Navbar';
import { useParams, useRouter } from 'next/navigation';
import { apiDeleteBank, apiGetByIdBank } from '../../../../api/bank';
import Image from 'next/image';

export default function CartDetails() {
    // id is a bank that get from url
    const { id } = useParams()
    const router = useRouter()

    // <--- States --->
    const [showModal, setShowModal] = useState(false)

    // info cart is for store bankCart details 
    const [infoCart, setInfoCart] = useState()
    const [showDeleteModal, setShowDeleteModal] = useState(false)


    // <--- Effects --->

    useEffect(() => {

        apiGetByIdBank(id)
            .then(res => {
                console.log(res);
                if (res.result !== null) {

                    setInfoCart(res.result)
                }
            })

    }, [])



    // <--- Handlers --->
    //  A function that shows a modal.
    const showModalHandler = () => {
        setShowModal(true)

    }
    //  A function that close a modal.
    const closeModalHandler = () => {

        setShowModal(false)
        setShowDeleteModal(false)
    }

    const showDeleteModalHandler = () => {
        setShowDeleteModal(true)

    }

    const deleteCartHandler = (bankID) => {

        console.log(bankID);
        apiDeleteBank(bankID)
            .then(res => {
                if(res.result !== null){
                    router.replace('/carts')
                }
            })
    }

    return (
        <>
            <Navbar />
            <div className={style.cartDetailsWrapper}>

                {/* tobar component It will get the title props from the data */}
                <Topbar title={(!!infoCart && infoCart.name !== '') ? infoCart.name : ''} showBtn={true} linkBtnUrl={'/carts'} />
                {/* cart details */}
                <div className={style.cartDetailsInfowrap} >
                    <div className={style.cartDetailsImgWrap}>
                        {
                            !!infoCart && (
                                <Image
                                className={style.cartDetailsImg}
                                width={50}
                                height={50}
                            src={`/icon/${infoCart.bank_slug}.png`}
                            />
                            )
                        }
                    </div>
                    <div className={style.cartDetailsInfo}>
                        <h3>{Translate(Dictionary.BANKS)}</h3>
                        <p>{(!!infoCart && infoCart.bank_number !== '') ? infoCart.bank_number : ''}</p>

                    </div>

                </div>

                {/* Show expenses */}
                <div className={style.showExpenses}>
                    <h2 className={style.showExpensesTitle}>نمایش مخارج</h2>
                    <div className={style.showExpensesBtnWrap}>
                        <button className={style.showExpensesBtn1} onClick={showModalHandler}>
                            <span >ماه جاری</span>
                            <IoMdArrowDropdown />
                        </button>
                        <button onClick={showDeleteModalHandler} className={style.showExpensesBtn2}>
                            <span>حذف کارت</span>
                            <MdDelete />
                        </button>
                    </div>

                </div>
                {/* show add expenses */}
                <div className={style.showAddExpenses}>
                    <p className={style.showAddExpensesTitle}>جمع مخارج</p>
                    <p className={style.showAddExpensesPrice}>20000 تومان</p>

                </div>
                {/* box */}
                <Box />
                {/* cart details modal */}

                <Modal show={showModal} onClose={closeModalHandler} title={'نمایش مخارج'}>

                    <div className={style.modalBtnWrap}>
                        <button className={style.ModalBtn1}>ماه جاری</button>
                        <button className={style.ModalBtn2}>کل مخارج</button>

                    </div>
                </Modal>

                {/* modal delete */}
                <Modal show={showDeleteModal} onClose={closeModalHandler} title={'ایا از حذف کارت مطمین هستید؟'}>
                    <div className={style.detelteBox}>
                        <button className={style.detelteBox1} onClick={() => deleteCartHandler(id)} >بله</button>
                        <button className={style.detelteBox2} onClick={() => setShowDeleteModal(false)}>خیر</button>
                    </div>

                </Modal>

            </div>


        </>

    );
}
