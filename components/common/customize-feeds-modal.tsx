"use client";

import { ModalContext } from "@/providers/modal-provider";
import { useContext, useEffect, useRef, useState } from "react";
import Select, { MultiValue } from "react-select";
import { countryOptions } from "@/lib/options/country-options";
import { categoryOptions } from "@/lib/options/category-options";
import { getSources } from "@/actions/news-api/get-sources";
import { transformArticlesDataToOptions } from "@/lib/functions/transform-articles-data-to-options";
import { setCookies } from "@/actions/set-cookies";
import { IoCheckmarkOutline } from "react-icons/io5";

// This component is a modal that will be used to customize the feeds using the country, category, and sources.
// Both the country and category will be dropdowns, and the sources will be a multi-select dropdown.
// country, category can't be mixed with sources, so if the user selects a country or category, the sources will be reset to the default value.
// The user can select multiple sources, and the sources will be fetched from the news API.

export default function CustomizeFeedsModal() {
    const { isModalOpen, setIsModalOpen } = useContext(ModalContext);
    const [data, setData] = useState<any>(null);
    const [message, setMessage] = useState<string | null>(null);
    const [selectedCountryOption, setSelectedCountryOption] = useState<{
        value: string;
        label: string;
    } | null>(null);

    const [selectedCategoryOption, setSelectedCategoryOption] = useState<{
        value: string;
        label: string;
    } | null>(null);

    const [selectedSourceOptions, setSelectedSourceOptions] =
        useState<MultiValue<{
            value: string;
            label: string;
        }> | null>(null);

    const containerRef = useRef<HTMLDivElement>(null);

    const handleFilterFeeds = () => {
        const isSourcesSelected = !!selectedSourceOptions?.length;
        setCookies({
            category: selectedCategoryOption?.value,
            country: selectedCountryOption?.value,
            sources: isSourcesSelected
                ? selectedSourceOptions?.map((option) => option.value).join(",")
                : undefined,
        });
        setMessage("Feeds filtered successfully");
    };

    useEffect(() => {
        getSources().then((data) => {
            setData(data);
        });
    }, []);

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (
                containerRef.current &&
                !containerRef.current.contains(e.target as Node)
            ) {
                setIsModalOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClick);

        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isModalOpen]);


    if (!isModalOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-slate-500 bg-opacity-35 p-4">
            <div
                ref={containerRef}
                className="flex w-full max-w-96 flex-col gap-4 rounded-lg bg-slate-500 p-4 text-white">
                <h1 className="text-center">CUSTOMIZE YOUR FEEDS</h1>
                <p className="text-center text-sm">
                    Either select country and category
                </p>
                {/* COUNTRY */}
                <Select
                    options={countryOptions}
                    onChange={setSelectedCountryOption}
                    inputId="language"
                    placeholder="Select a country..."
                    className="text-slate-800 max-lg:text-xs"
                />

                {/* CATEGORY */}
                <Select
                    options={categoryOptions}
                    onChange={setSelectedCategoryOption}
                    inputId="category"
                    placeholder="Select a category..."
                    className="text-slate-800 max-lg:text-xs"
                />
                <p className="text-center">— OR —</p>
                {/* SOURCES */}
                <Select
                    onChange={setSelectedSourceOptions}
                    options={transformArticlesDataToOptions(data?.sources)}
                    isMulti
                    inputId="sources"
                    placeholder="Select a source..."
                    className="text-slate-800 max-lg:text-xs"
                    noOptionsMessage={() => "No sources found"}
                />

                <button
                    type="button"
                    title="Filter Feeds"
                    className="w-full rounded-lg bg-emerald-200 p-2 text-slate-800 transition-colors duration-500 hover:bg-emerald-300 hover:text-white"
                    onClick={handleFilterFeeds}>
                    Filter Feeds
                </button>
                {message && (
                    <p className="flex items-center justify-center gap-1 text-xs text-emerald-300">
                        <IoCheckmarkOutline size={16} /> {message}
                    </p>
                )}
            </div>
        </div>
    );
}
