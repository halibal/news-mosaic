"use client";

import { Option } from "@/types/option";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect, useRef } from "react";

const handleClickOutside = (event: any, ref: any, callback: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
        callback(false);
    }
};

const toggleItemSelection = (itemValue: string, callback: any) => {
    callback((prevSelectedItems: any[]) => {
        if (prevSelectedItems.includes(itemValue)) {
            return prevSelectedItems.filter((i) => i !== itemValue);
        } else {
            return [...prevSelectedItems, itemValue];
        }
    });
};

export default function MultiSelect({
    queryName,
    options,
    title,
}: {
    queryName: string;
    options: Option[];
    title: string;
}) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedItems, setSelectedItems] = useState<any[]>([]);
    const dropdownRef = useRef(null);
    console.log(searchParams);
    console.log(selectedItems.join(","));


    useEffect(() => {
        document.addEventListener("mousedown", (e) =>
            handleClickOutside(e, dropdownRef, setIsDropdownOpen)
        );
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <div className="relative w-full" ref={dropdownRef}>
            <button
                className="flex h-10 w-full items-center rounded-sm border border-slate-400 bg-slate-400 p-2 text-white"
                type="button"
                title={`Select ${title}`}
                onClick={() => setIsDropdownOpen((prev) => !prev)}>
                {selectedItems.length > 0
                    ? `${selectedItems.length} selected`
                    : `Select ${title}`}
            </button>
            {isDropdownOpen && (
                <div className="absolute z-10 flex w-full flex-wrap gap-2 overflow-hidden rounded-sm border border-slate-400 bg-white p-2 text-xs">
                    {options.map((option: any) => (
                        <div
                            key={option.value}
                            className="flex items-center gap-1 text-orange-500 transition-all duration-500">
                            <input
                                type="checkbox"
                                id={option.value}
                                name={option.value}
                                className="cursor-pointer"
                                checked={selectedItems.includes(option.value)}
                                onChange={() =>
                                    toggleItemSelection(
                                        option.value,
                                        setSelectedItems
                                    )
                                }
                            />
                            <label
                                title={option.label}
                                className="cursor-pointer"
                                htmlFor={option.value}>
                                {option.label}
                            </label>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
