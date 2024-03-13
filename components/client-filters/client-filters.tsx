"use client";
import { Option } from "@/types/option";
import { useState } from "react";
import Select, { MultiValue } from "react-select";
import { categoryOptions } from "@/lib/options/category-options";
import Link from "next/link";
import { addDays, format } from "date-fns";
import { DateRange } from "react-day-picker";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { languageOptions } from "@/lib/options/language-options";
import SearchInput from "@/components/common/search-input";
import { useRouter } from "next/navigation";

export default function ClientFilter({
    searchParams,
    sourcesOptions,
}: {
    searchParams: { [key: string]: string | undefined };
    sourcesOptions: Option[];
}) {
    const router = useRouter();

    // ============== STATES ==============
    const [selectedSourceOptions, setSelectedSourceOptions] =
        useState<MultiValue<{
            value: string;
            label: string;
        }> | null>(null);

    const [selectedCategoryOption, setSelectedCategoryOption] = useState<{
        value: string;
        label: string;
    } | null>(null);

    const [selectedLanguageOption, setSelectedLanguageOption] = useState<{
        value: string;
        label: string;
    } | null>(null);

    const [date, setDate] = useState<DateRange | undefined>({
        from: addDays(
            searchParams.from
                ? new Date(decodeURIComponent(searchParams.from))
                : new Date(),
            -30
        ),
        to: searchParams.to
            ? new Date(decodeURIComponent(searchParams.to))
            : new Date(),
    });

    const [query, setQuery] = useState<string>(searchParams.q || "");

    // ============== VARIABLES ==============
    const isSelectedSourceOptions = selectedSourceOptions
        ? selectedSourceOptions.length > 0
        : false;

    const sources = selectedSourceOptions
        ? selectedSourceOptions.map((option) => option.value).join(",")
        : null;

    const handleResetFilters = () => {
        setSelectedCategoryOption(null);
        setSelectedSourceOptions(null);
        setSelectedLanguageOption(null);
        setDate(undefined);
        router.push(`/news?q=${query}`);
    };

    return (
        <div className="flex flex-1 flex-col gap-2">
            <SearchInput setQuery={setQuery} searchParams={searchParams} />
            {/* DATE SELECTION */}
            <div className={cn("grid w-full gap-2")}>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                            id="date"
                            variant={"outline"}
                            className={cn(
                                "w-full justify-start text-left font-normal max-lg:text-xs",
                                !date && "text-muted-foreground"
                            )}>
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date?.from ? (
                                date.to ? (
                                    <>
                                        {format(date.from, "LLL dd, y")} -{" "}
                                        {format(date.to, "LLL dd, y")}
                                    </>
                                ) : (
                                    format(date.from, "LLL dd, y")
                                )
                            ) : (
                                <span>Pick a date</span>
                            )}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                            initialFocus
                            mode="range"
                            defaultMonth={date?.from}
                            selected={date}
                            onSelect={setDate}
                            numberOfMonths={2}
                            className="max-lg:text-xs"
                        />
                    </PopoverContent>
                </Popover>
            </div>
            {/* CATEGORY SELECTION */}
            <Select
                options={categoryOptions}
                onChange={(option) => {
                    if (option?.value) {
                        if (option.value === "all") {
                            router.push(`?q=${query}`);
                        } else {
                            router.push(
                                `?q=${query}&category=${option?.value}`
                            );
                        }
                    }
                    setSelectedCategoryOption(option);
                }}
                inputId="category"
                isDisabled={isSelectedSourceOptions}
                placeholder="Select a category..."
                className="max-lg:text-xs"
            />
            <p className="text-[10px] text-red-500">
                *Category selection only and instantly effects the source listing
            </p>
            {/* SOURCE SELECTION */}
            <Select
                defaultValue={selectedSourceOptions}
                onChange={setSelectedSourceOptions}
                options={sourcesOptions}
                isMulti
                inputId="sources"
                placeholder="Select a source..."
                className="max-lg:text-xs"
                noOptionsMessage={() => "No sources found"}
            />

            {/* LANGUAGE SELECTION */}
            <Select
                options={languageOptions}
                onChange={setSelectedLanguageOption}
                inputId="language"
                placeholder="Select a language..."
                className="max-lg:text-xs"
            />
            <Link
                href={{
                    query: {
                        ...searchParams,
                        sources,
                        language: selectedLanguageOption?.value,
                        q: query,
                        from: date?.from?.toISOString(),
                        to: date?.to?.toISOString(),
                        pageSize: "5",
                        page: "1",
                    },
                }}
                title="Filter Search"
                className={`flex h-9 w-full items-center justify-center self-end rounded-sm border bg-white p-2 text-xs transition-colors duration-500 hover:bg-emerald-200 hover:text-clr_primary lg:text-sm`}>
                Filter Search
            </Link>
            <Link
                href={{
                    pathname: "/news",
                    query: {
                        q: query,
                    },
                }}
                title="Clear Filters"
                className={`mt-auto flex h-9 w-full items-center justify-center self-end rounded-sm border bg-white p-2 text-xs transition-all duration-500 hover:bg-rose-200 hover:text-clr_primary lg:text-sm`}
                onClick={handleResetFilters}>
                Clear Filters
            </Link>
        </div>
    );
}
