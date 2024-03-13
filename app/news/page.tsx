import Filters from "@/components/filters/filters";
import NewsList from "@/components/news-list/news-list";
import NewsListSkeleton from "@/components/news-list/news-list-skeleton";
import { SearchParamsProps } from "@/types/search-params";
import { Suspense } from "react";

export default function NewsPage({ searchParams }: SearchParamsProps) {
    return (
        <div className="my-10 flex w-full max-w-6xl flex-1 gap-8 p-4 max-md:flex-col">
            <div className="flex flex-col gap-4 rounded-lg bg-slate-50 p-2 max-xl:w-full">
                <Filters searchParams={searchParams} />
            </div>
            <div className="flex flex-1 flex-col gap-4">
                <Suspense fallback={<NewsListSkeleton />}>
                    <NewsList searchParams={searchParams} />
                </Suspense>
            </div>
        </div>
    );
}
