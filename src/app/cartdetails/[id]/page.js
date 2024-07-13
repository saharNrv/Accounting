"use client"
import Topbar from '@/components/module/topbar/Topbar';
import React, { useState } from 'react';
import style from '@/styles/Cartdetails.module.css'
import { IoMdArrowDropdown } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import Box from '@/components/module/box/Box';

export default function cartDetails() {

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

            <div className={showModal ? style.cartDetailsBG : ''}></div>
            {/* tobar component It will get the title props from the data */}
            <Topbar title={'بلو کارت'} />
            {/* cart details */}
            <div className={style.cartDetailsInfowrap} >
                <div className={style.cartDetailsImgWrap}>
                    <img src="https://jackblack.ir/wp-content/uploads/2021/06/blu-99-09-18-1.jpg" className={style.cartDetailsImg} alt="img" />
                </div>
                <div className={style.cartDetailsInfo}>
                    <h3>بلو بانک</h3>
                    <p>3789950003887747</p>

                </div>

            </div>

            {/* Show expenses */}
            <div className={style.showExpenses}>
                <h2 className={style.showExpensesTitle}>نمایش مخارج</h2>
                <div className={style.showExpensesBtnWrap}>
                    <button className={style.showExpensesBtn1}>
                        <span onClick={showModalHandler}>ماه جاری</span>
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
            <div className={!showModal ? style.cartDetailsModalWrap : style.cartDetailsModalWrapShow}>
                <div className={style.cartDetailsModal}>

                    <div className={style.cartDetailsModalTitleWrap}>
                        <p className={style.cartDetailsModalTitle}>نمایش مخارج</p>
                        <p className={style.cartDetailsModalClose} onClick={closeModalHandler}>x</p>

                    </div>
                    <div className={style.cartDetailsModalInfowrap}>
                        <button className={style.cartDetailsModalBtn1}>ماه جاری</button>
                        <button className={style.cartDetailsModalBtn2}>کل مخارج</button>

                    </div>

                </div>
            </div>
        </div>
    );
}
