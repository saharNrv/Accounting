'use client'
import React, { useEffect, useState } from 'react';
import style from '@/styles/Home.module.css'
import { FaUser } from 'react-icons/fa';
import { IoSettings } from "react-icons/io5";
import { FaChartPie } from "react-icons/fa6";
import Link from 'next/link';
import Box from '@/components/module/box/Box';
import Navbar from '@/components/module/navbar/Navbar';
import ProtectedLayout from '@/components/protectedLayout/ProtectedLayout';
import { apiGetAccount } from '../../api/account';

export default function Page() {

    const [accountData, setAccountData] = useState(null)

    useEffect(() => {
        apiGetAccount()
            .then(res => {
                console.log(res);
                setAccountData(res.result)
            })
    }, [])

    return (
        <ProtectedLayout>
            <Navbar />
            <div className={style.homeWrapper}>
                {/* home navbar */}
                <div className={style.homeNav}>
                    {/* home navbar right */}
                    <div className={style.homeNavRight}>
                        <div className={style.homeNavIconWrap}>
                            <FaUser className={style.homeNavIcon} />
                        </div>
                        <div className={style.homeNavInfo}>
                            <p className={style.homeNavName}>
                                {(accountData && accountData.full_name !== '') ? accountData.full_name : 'نام کاربری'}
                            </p>
                            <p className={style.homeNavPhone}>
                                {
                                    (accountData && accountData.user_name )
                                }
                            </p>
                        </div>
                    </div>
                    {/* home navbar left */}
                    <div className={style.homeNavLeft}>
                        <div className={style.homeNavLeftIconWrap}>
                            <Link href={'/'}>
                                <FaChartPie />
                            </Link>
                            <Link href={'/settings'}>
                                <IoSettings />
                            </Link>

                        </div>
                    </div>
                </div>
                {/* home navbar price */}
                <div className={style.homeNavPricce}>
                    <h1>20000 تومان</h1>
                </div>

            </div>
            {/* recent expenses */}
            <div className={style.recentExpenses}>
                <h3>مخارج اخیر</h3>
                <Link href={'/show-all-carts'}>مشاهده همه</Link>
            </div>
            <div className={style.homeBox}>
                <Box />
                <Box />

            </div>
        </ProtectedLayout>


    );
}
