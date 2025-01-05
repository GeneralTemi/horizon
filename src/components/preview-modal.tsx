"use client"

import { ResponsiveModal } from "@/components/responsive-modal";
import useModalStore from "@/hooks/use-modal-store";
import { PreviewPopup } from "./preview-popup";



export const PreviewModal = () => {
    const { isOpen, modalData, closeModal } = useModalStore();

    return (
        <ResponsiveModal open={isOpen} onOpenChange={closeModal} >
            {
                modalData && (
                    <div >
                        <PreviewPopup amount={modalData?.amount} beneficiary={modalData?.beneficiary} name={modalData?.name} senderBank={modalData?.senderBank} />
                    </div>

                )
            }



        </ResponsiveModal>
    )
}