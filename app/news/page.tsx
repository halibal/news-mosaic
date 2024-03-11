import MultiSelect from "@/components/common/multi-select";
import Filters from "@/components/sources/sources";
import NewsList from "@/components/news-list/news-list";
import NewsListSkeleton from "@/components/news-list/news-list-skeleton";
import { SearchParamsProps } from "@/types/search-params";
import { Suspense } from "react";
import { categoryOptions } from "@/lib/options/category-options";
import { languageOptions } from "@/lib/options/language-options";

export default function NewsPage({ searchParams }: SearchParamsProps) {
    const { q, date, category, source, language, country } = searchParams;

    return (
        <div className="mx-auto my-10 flex max-w-6xl gap-8 p-4">
            <div className="flex w-80 flex-col gap-4">
                <MultiSelect
                    title="Select Language"
                    options={languageOptions}
                    queryName="language"
                />
                <MultiSelect
                    title="Select Category"
                    options={categoryOptions}
                    queryName="category"
                />
                <Filters
                    category={category}
                    country={country}
                    language={language}
                />
            </div>

            <div className="flex-1">
                <Suspense fallback={<NewsListSkeleton />}>
                    <NewsList date={date} q={q} source={source} />
                </Suspense>
            </div>
        </div>
    );
}
