import React, { Children, Fragment } from 'react';
import style from './Modal.module.css';
import { Dialog, DialogPanel, DialogTitle, DialogBackdrop } from "@headlessui/react";


export default function Modal({ title, show, onClose, children }) {


  return (
    <div className={style.modalWrappper}>

      <Dialog open={show} as="div" className={style.dialog} onClose={onClose}>
        <DialogBackdrop
          transition
          className={style.backdrup}
        />


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

    </div>
  )
}
