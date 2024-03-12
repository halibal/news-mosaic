import PageTitle from "@/components/common/page-title";
import SearchInput from "@/components/common/search-input";
import LatestNews from "@/components/latest-news/latest-news";
import LatestNewsSkeleton from "@/components/latest-news/latest-news-skeleton";
import PersonalizedNews from "@/components/personalized-news/personalized-news";
import PersonalizedNewsSkeleton from "@/components/personalized-news/personalized-news-skeleton";
import { SearchParamsProps } from "@/types/search-params";
import { Suspense } from "react";

export default function Home({ searchParams }: SearchParamsProps) {
    let { country, category } = searchParams;

    return (
        <main className="mx-auto my-10 flex max-w-6xl flex-col gap-8 p-4">
            <PageTitle title="Welcome to NewsMosaic" />
            <SearchInput searchParams={searchParams}  />
            <Suspense fallback={<LatestNewsSkeleton />}>
                <LatestNews country={country} />
            </Suspense>
            <Suspense fallback={<PersonalizedNewsSkeleton />}>
                <PersonalizedNews />
            </Suspense>
        </main>
    );
}
