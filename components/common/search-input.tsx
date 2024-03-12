"use client";

import { Input } from "@/components/ui/input";
import { SearchParamsProps } from "@/types/search-params";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchInput({
    searchParams,
    setQuery,
}: {
    searchParams: { [key: string]: string | undefined };
    setQuery?: (query: string) => void;
}) {
    const [q, setQ] = useState(searchParams.q);
    const router = useRouter();

    const { date, sources, language } = searchParams;

    const isDate = date ? `&date=${date}` : "";
    const isSources = sources ? `&sources=${sources}` : "";
    const isLanguage = language ? `&language=${language}` : "";

    const queries = `?q=${q}${isDate}${isSources}${isLanguage}`;

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            router.push(`/news${queries}`);
            setQuery && setQuery(q || "");
        }
    };

    return (
        <div className="my-6 flex flex-col gap-4">
            <label
                htmlFor="q"
                className="px-2 text-center text-base text-clr_primary">
                SEARCH IN NEWS
            </label>
            <Input
                className=" bg-sky-100 focus-visible:ring-blue-300 focus-visible:ring-offset-0"
                placeholder="Press enter to search..."
                value={q}
                id="q"
                onChange={(e) => {
                    setQ(e.target.value);
                    setQuery && setQuery(e.target.value);
                }}
                onKeyDown={handleKeyDown}
            />
        </div>
    );
}
