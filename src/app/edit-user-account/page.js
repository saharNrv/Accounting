import React from 'react';
import style from '@/styles/Edit-user-account.module.css'
import Topbar from '@/components/module/topbar/Topbar';
import Input from '@/components/module/inputwrap/Input';

export default function page() {
    return (
        <div className={style.editUser}>
            <Topbar title={'ویرایش حساب کاربری'} showBtn={true} linkBtnUrl={'/settings'} />
            <form className={style.editUserForm}>
                <Input title={'نام و نام خانوادگی'} placeholder={'سحر نوری'} />
                <Input title={'آدرس ایمیل'} placeholder={'آدرس ایمیل خود را وارد کنید'} />
                <Input title={'شماره موبایل'} placeholder={'09456783456'} />
                <div className={style.formBtn}>

                    <button >تایید</button>
                </div>
            </form>

        </div>
    );
}
