"use client"
import Topbar from '@/components/module/topbar/Topbar';
import React, { useState } from 'react';
import style from '@/styles/Cartdetails.module.css'
import { IoMdArrowDropdown } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import Box from '@/components/module/box/Box';
import Modal from '@/components/module/modal/Modal';
import { Translate } from '../../../../context/CultureProvider';
import { Dictionary } from '../../../../lib/dictionary';
import Bg from '@/components/module/bg/Bg';

export default function CartDetails() {

    const [showModal, setShowModal] = useState(false)

    //  A function that shows a modal.
    const showModalHandler = () => {
        setShowModal(true)

    }
    //  A function that close a modal.
    const closeModalHandler = () => {

        setShowModal(false)
    }

    return (
        <div className={style.cartDetailsWrapper}>
            {/* bg component */}
            <Bg showModal={showModal}/>

            {/* tobar component It will get the title props from the data */}
            <Topbar title={'بلو کارت'} showBtn={true} linkBtnUrl={'/carts'} />
            {/* cart details */}
            <div className={style.cartDetailsInfowrap} >
                <div className={style.cartDetailsImgWrap}>
                    <img src="https://jackblack.ir/wp-content/uploads/2021/06/blu-99-09-18-1.jpg" className={style.cartDetailsImg} alt="img" />
                </div>
                <div className={style.cartDetailsInfo}>
                    <h3>{Translate(Dictionary.BANKS)}</h3>
                    <p>3789950003887747</p>

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
                    <button className={style.showExpensesBtn2}>
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
        </div>
    );
}
