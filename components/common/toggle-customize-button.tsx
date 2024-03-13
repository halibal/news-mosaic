"use client";

import { ModalContext } from "@/providers/modal-provider";
import { useContext } from "react";

export const ToggleCustomizeButton = () => {
    const { setIsModalOpen } = useContext(ModalContext);

    return (
        <button
            type="button"
            title="Customize Feeds"
            className="rounded-md bg-emerald-300 px-4 py-2 hover:bg-emerald-100"
            onClick={() => setIsModalOpen(prev => !prev)}>
            Customize Feeds
        </button>
    );
};
