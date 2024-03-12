import { getSources } from "@/actions/news-api/get-sources";
import { transformArticlesDataToOptions } from "@/lib/functions/transform-articles-data-to-options";
import ClientFilter from "@/components/client-filters/client-filters";
import { SearchParamsProps } from "@/types/search-params";

export default async function Filters({ searchParams }: SearchParamsProps) {
    const { category } = searchParams;
    const data = await getSources(category);

    return (
        <ClientFilter
            searchParams={searchParams}
            sourcesOptions={transformArticlesDataToOptions(data?.sources)}
        />
    );
}
