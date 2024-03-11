import { getSources } from "@/actions/news-api/get-sources";
import MultiSelect from "@/components/common/multi-select";
import { transformArticlesDataToOptions } from "@/lib/functions/transform-articles-data-to-options";

interface SourcesProps {
    category?: string;
    country?: string;
    language?: string;
}

export default async function Sources({
    category,
    country,
    language,
}: SourcesProps) {
    const data = await getSources();
    console.log(data);
    const isData = data?.sources && data.sources.length > 0;

    return (
        <MultiSelect
            title="News Source"
            options={transformArticlesDataToOptions(data?.sources)}
            queryName="sources"
        />
    );
}
