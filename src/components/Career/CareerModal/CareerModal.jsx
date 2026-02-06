import { useContext } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { careerModalContext } from "../../../context/careerContext";
import CareerForm from "../CareerForm/CareerForm";

export default function CareerModal() {
  const { open, setOpen } = useContext(careerModalContext);

  return (
    <>
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-black text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div className="bg-mainColor  px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className=" sm:items-center justify-center">
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <DialogTitle
                      as="h3"
                      className="text-lg text-center  font-semibold leading-6 text-white "
                    >
                      Explore Opportunities
                    </DialogTitle>
                    <div className="">
                      <CareerForm />
                    </div>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
