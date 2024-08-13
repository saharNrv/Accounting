import React from 'react';
import style from './Box.module.css';
import { FaBoxOpen } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';

function Box({ category, price, day, month, year, boxID,imgSrc }) {
    return (
        <Link href={`/expensesboxdelete/${boxID}`} >
            <div className={style.boxWrap}>
                <div className={style.boxInfoWrap}>
                    <div className={style.boxIconWrap}>
                        <FaBoxOpen className={style.boxIcon} />
                    </div>
                    <div className={style.boxInfo}>
                        <div className={style.boxTitleWrap}>
                            <p className={style.boxTitle}>{category}</p>
                            <Image
                                className={style.boxImg}
                                src={`/icon/${imgSrc}.png`}
                                width={50}
                                height={50}
                            />
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
