"use client"

import Navbar from '@/components/module/navbar/Navbar';
import Topbar from '@/components/module/topbar/Topbar';
import React, { useContext } from 'react';
import { CultureProviderContext, Translate } from '../../context/CultureProvider';
import { Dictionary } from '../../lib/dictionary';

const cultureList = [
  {
    rtl: true,
    local: 'fa',
    displayName: 'فارسی'
  },
  {
    rtl: false,
    local: 'en',
    displayName: 'english'
  }
]
export default function page() {

  const { setCulture } = useContext(CultureProviderContext)

  return (
    <>
      <button onClick={() => setCulture(cultureList[0])}>فارسی</button>
      <button onClick={() => setCulture(cultureList[1])}>english</button>
      <h1>{Translate(Dictionary.HELLO)}</h1>

    </>
  );
}

