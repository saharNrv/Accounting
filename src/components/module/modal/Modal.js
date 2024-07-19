import React, { Children } from 'react';
import style from './Modal.module.css';
import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import Bg from '../bg/Bg';


export default function Modal({show,onClose,title,children}) {
    

    return (
      <>
      <Bg showModal={show}/>
  
        <Dialog open={show} as="div" className={style.dialog} onClose={onClose}>
          <div className={style.modalWrap}>
            <div className={style.modal}>
              <DialogPanel
                transition
                className={style.dialogPanel}
              >
                <DialogTitle as="h3" className={style.dialogTitle}>
                  {title}
                </DialogTitle>
               
                {children}
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      </>
    )
  }
