import Topbar from '@/components/module/topbar/Topbar';
import React from 'react';
import style from '@/styles/Expensesboxdelete.module.css'
import { FaBoxOpen, FaBrush } from "react-icons/fa";
import { MdDelete } from 'react-icons/md';

export default function Expensesboxdelete() {
    return (
        <>
            <Topbar title={'12:16 - 1403/4/22'} showBtn={true} linkBtnUrl={'/cartdetails/1'} />
            <div className={style.expensesboxdelete}>
                <div className={style.expensesboxdeleteInfon}>
                    <p className={style.expensesboxdeleteTitle}>مبلغ</p>
                    <p className={style.ExpensesboxdeletePrice}>20000 تومان</p>
                </div>
                <div className={style.expensesboxdeleteInfon}>
                    <p className={style.expensesboxdeleteTitle}>دسته بندی</p>
                    <p className={style.expensesboxdeleteGroup}>
                        <span>دسته بندی نشده</span>
                        <FaBoxOpen />
                    </p>
                </div>
                <div className={style.expensesboxdeleteInfon}>
                    <p className={style.expensesboxdeleteTitle}>کارت</p>
                    <p className={style.expensesboxdeleteImgWrap}>
                        <span>بلو بانک</span>
                        <img className={style.expensesboxdeleteImg} src="https://jackblack.ir/wp-content/uploads/2021/06/blu-99-09-18-1.jpg" alt="img" />
                    </p>
                </div>

            </div>
            <div className={style.expensesboxdeleteBtn}>
                <button>    
                    حذف کارت
                    <MdDelete/>
                </button>
            </div>
        </>
    );
}
