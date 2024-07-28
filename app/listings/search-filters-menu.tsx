"use client"

import ButtonIconTextOutlined from "@/components/buttons/icon-text-outlined";
import Modal from "@/components/modal";
import { useState } from "react";

export default function ListingsSearchFiltersMenu() {
    const [showModalState, setShowModalState] = useState<boolean>(false);

    return (
        <div className="flex lg:hidden">
            {/* TODO: Show correct components for `sm` and `md` screens */}
            <Modal props={{
                show: showModalState,
                close: (e) => {
                    setShowModalState(false)
                }
            }}>
                <div className="h-screen w-[75vw]">
                    <h1>Helfo</h1>
                </div>
            </Modal>
            <ButtonIconTextOutlined props={{
                text: "Filters",
                dataCy: "button-filter-menu",
                onClick: (e) => {
                    setShowModalState(true)
                }
            }}>
                <svg xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    width="24"
                    viewBox="0 -960 960 960">
                    <path d="M400-240v-80h160v80H400ZM240-440v-80h480v80H240ZM120-640v-80h720v80H120Z" />
                </svg>
            </ButtonIconTextOutlined>
        </div>
    )
}