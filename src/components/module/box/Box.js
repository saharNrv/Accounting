import React from 'react';
import style from './Box.module.css';
import { FaBoxOpen } from "react-icons/fa";
import Link from 'next/link';

function Box({category, price, day, month, year}) {
    return (
        <Link href={'/expensesboxdelete/1'} >
            <div className={style.boxWrap}>
                <div className={style.boxInfoWrap}>
                    <div className={style.boxIconWrap}>
                        <FaBoxOpen className={style.boxIcon} />
                    </div>
                    <div className={style.boxInfo}>
                        <div className={style.boxTitleWrap}>
                            <p className={style.boxTitle}>{category}</p>
                            <img className={style.boxImg} src="https://jackblack.ir/wp-content/uploads/2021/06/blu-99-09-18-1.jpg" alt="img" />
                        </div>
                        <p className={style.boxDate}>{`${year}/${month}/${day}`}</p>
                    </div>

                </div>
                <div className={style.boxPrice}>{price}<span> تومان</span> </div>
            </div>
        </Link>
    );
}

export default Box;
