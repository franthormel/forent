"use client"

import ButtonIconTextOutlined from "@/components/buttons/icon-text-outlined";
import Modal from "@/components/modal";
import { useState } from "react";
import ListingsSearchFiltersModalContent from "./search-filters-modal-content";

export default function ListingsSearchFiltersModalMenu() {
    const [showModalState, setShowModalState] = useState<boolean>(false);

    return (
        <div className="flex lg:hidden">
            <Modal props={{
                show: showModalState,
                close: (e) => {
                    setShowModalState(false)
                }
            }}>
                <div className="h-screen w-[75vw]">
                    <ListingsSearchFiltersModalContent
                        onSearch={() => {
                            setShowModalState(false)
                        }}
                    />
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