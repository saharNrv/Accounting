import React from 'react';
import style from '@/styles/Home.module.css'
import { FaUser } from 'react-icons/fa';
import { IoSettings } from "react-icons/io5";
import { FaChartPie } from "react-icons/fa6";

export default function page() {
    return (
        <div className={style.homeWrapper}>
            {/* home navbar */}
            <div className={style.homeNav}>
                {/* home navbar right */}
                <div className={style.homeNavRight}>
                    <div className={style.homeNavIconWrap}>
                        <FaUser className={style.homeNavIcon} />
                    </div>
                    <div className={style.homeNavInfo}>
                        <p className={style.homeNavName}>سحر نوری</p>
                        <p className={style.homeNavPhone}>09124568956</p>
                    </div>
                </div>
                {/* home navbar left */}
                <div className={style.homeNavLeft}>
                    <div className={style.homeNavLeftIconWrap}>
                        <FaChartPie />
                        <IoSettings />

                    </div>
                </div>


            </div>
                <div className={style.homeNavPricce}>
                    <h1>20000 تومان</h1>
                </div>

        </div>
    );
}
