import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import success from "../assets/images/successfully-done.png";
import celebrate from "../assets/images/successful-man.png";
import Button from "./Button";

function Modal({ isOpen, setShowModal, headerText, paragraph }) {
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10 "
        onClose={() => setShowModal(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 bg-black/60 overflow-y-auto">
          <div className="flex min-h-full   items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-transparent border border-[#D434FE] p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title>
                  {/* Payment successful */}
                  <div className="flex items-center justify-center relative ">
                    <div className="absolute left-1">
                      <img src={success} alt="" />
                    </div>
                    <div className="relative z-[50]">
                      <img src={celebrate} alt="" />
                    </div>
                  </div>
                </Dialog.Title>
                <div className="mt-2">
                  <h2 className="text-[32px] font-montserrat font-semibold text-white">
                    {headerText}
                  </h2>
                  <p className="font-montserrat text-[14px] text-white text-center">
                    {paragraph}
                  </p>
                </div>

                <div className="mt-4">
                  <Button isFullWidth onPressButton={closeModal} text="Back" />
                  {/* <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={() => setShowModal(false)}
                  >
                    Got it, thanks!
                  </button> */}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default Modal;
