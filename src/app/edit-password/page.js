"use client"
import React, { useState } from 'react';
import style from '@/styles/Edit-password.module.css'
import Topbar from '@/components/module/topbar/Topbar';
import Input from '@/components/module/inputwrap/Input';
import Navbar from '@/components/module/navbar/Navbar';

export default function EditPassword() {

    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')

    return (
        <>
            <Navbar />
            <div className={style.editPassword}>
                <Topbar title={'تغییر رمز عبور'} showBtn={true} linkBtnUrl={'/settings'} />
                <form className={style.editPasswordForm}>
                    <Input
                        title={'رمز عبور فعلی'}
                        placeholder={'رمز عبور فعلی خود را وارد کنید'}
                        value={oldPassword}
                        onChange={(value)=>setOldPassword(value)}
                    />
                    <Input
                        title={'رمز عبور جدید'}
                        placeholder={'رمز عبور جدید خود را وارد کنید'}
                        value={newPassword}
                        onChange={(value)=>setNewPassword(value)}
                    />
                    <Input
                        title={'تکرار رمز عبور جدید'}
                        placeholder={'رمز عبور جدید خود را تکرار کنید'}
                        value={repeatPassword}
                        onChange={(value)=>setRepeatPassword(value)}
                    />
                    <div className={style.formBtn}>

                        <button >تایید</button>
                    </div>

                </form>

            </div>
        </>

    );
}
