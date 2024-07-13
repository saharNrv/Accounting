import React from 'react';
import style from './Box.module.css';
import { FaBoxOpen } from "react-icons/fa";
import Link from 'next/link';

function Box() {
    return (
        <Link href={'/expensesboxdelete/1'} >
            <div className={style.boxWrap}>
                <div className={style.boxInfoWrap}>
                    <div className={style.boxIconWrap}>
                        <FaBoxOpen className={style.boxIcon} />
                    </div>
                    <div className={style.boxInfo}>
                        <div className={style.boxTitleWrap}>
                            <p className={style.boxTitle}>دسته بندی نشده</p>
                            <img className={style.boxImg} src="https://jackblack.ir/wp-content/uploads/2021/06/blu-99-09-18-1.jpg" alt="img" />
                        </div>
                        <p className={style.boxDate}>1403/04/18</p>
                    </div>

                </div>
                <div className={style.boxPrice}>12000 <span>تومان</span> </div>
            </div>
        </Link>
    );
}

export default Box;
