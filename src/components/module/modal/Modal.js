import React, { Children, Fragment } from 'react';
import style from './Modal.module.css';
import { Dialog, Disclosure, Transition } from "@headlessui/react";


export default function Modal(props) {


  return (
    <>
      {/* <Bg showModal={show}/>
  
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
        </Dialog> */}

      <Transition
        show={props.show}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Dialog
          as="div"
          className={`fixed inset-0 z-50 overflow-y-auto ${style.rtl}`}
          onClose={props.onClose}
        >
          <Dialog.Overlay className="fixed  bg-slate-500/50" />
          <div className="min-h-screen  text-center overflow-hidden flex flex-col items-center justify-stretch">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div
                className={`${style.modal_container} modal.fa overflow-hidden fixed inset-y-4`}
              >
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
