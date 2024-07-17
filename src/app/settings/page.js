import Topbar from '@/components/module/topbar/Topbar';
import React from 'react';
import style from '@/styles/Settings.module.css'
import { FaUser } from 'react-icons/fa';
import Link from 'next/link';
import { IoIosArrowBack } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { FaEuroSign } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";

export default function settings() {
    return (
        <div className={style.settingsWrap}>
            {/* tobar component */}
            <Topbar title={'تنظیمات'} showBtn={true} linkBtnUrl={'/'} />
            {/* setting info */}
            <div className={style.settingInfoWrap}>
                <div className={style.settingIconWrap}>
                    <FaUser className={style.settingIcon} />
                </div>
                <div className={style.settingInfo}>
                    <h3>سحر نوری</h3>
                    <p>تاریخ عضویت: 1403/04/18</p>
                </div>

            </div>
            {/* setting user account */}
            <div className={style.settingUser}>
                <p className={style.settingUserTitle}>تنظیمات حساب کاربری</p>
                <Link href={'/'} className={style.settingUserLink}>
                    <div className={style.settingUserIconWrap}>
                        <FaUser />
                        <p className={style.settingUserIconText}>ویرایش حساب کاربری</p>
                    </div>
                    <IoIosArrowBack />
                </Link>
                <Link href={'/'} className={style.settingUserLink}>
                    <div className={style.settingUserIconWrap}>
                        <FaLock />
                        <p className={style.settingUserIconText}>ویرایش رمز عبور</p>
                    </div>
                    <IoIosArrowBack />
                </Link>
                <Link href={'/'} className={style.settingUserLink}>
                    <div className={style.settingUserIconWrap}>
                        <MdLogout />
                        <p className={style.settingUserIconText}>خروج حساب کاربری</p>
                    </div>
                    <IoIosArrowBack />
                </Link>

            </div>
            {/* setting program */}
            <div className={style.settingUser}>
                <p className={style.settingUserTitle}>تنظیمات برنامه</p>
                <Link href={'/'} className={style.settingUserLink}>
                    <div className={style.settingUserIconWrap}>
                        <FaEuroSign />
                        <p className={style.settingUserIconText}>واحد پولی</p>
                    </div>
                    <IoIosArrowBack />
                </Link>
                <Link href={'/'} className={style.settingUserLink}>
                    <div className={style.settingUserIconWrap}>
                        <MdLanguage />
                        <p className={style.settingUserIconText}>ویرایش زبان</p>
                    </div>
                    <IoIosArrowBack />
                </Link>
               

            </div>
        </div>
    );
}
