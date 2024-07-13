"use client"
import React from 'react';
import style from './Topbar.module.css';
import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa";


export default function Topbar({ title, showBtn, linkBtnUrl }) {


  return (
    <div className={style.topbar}>
      <h1>{title}</h1>
      {/* back button */}
      {
        showBtn ? (
          <div className={style.backBtn}>
            <Link href={linkBtnUrl}>
              <FaArrowRight />
            </Link>
          </div>
        ) : (<></>)
      }


    </div>
  );
}
