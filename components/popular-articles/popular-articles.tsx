import { getEverythingFromNewsApi } from "@/actions/news-api/get-everything-from-news-api";
import { Article } from "@/types/article";
import NewsCard from "@/components/news-card/news-card";
import Loader from "@/components/common/loader";

export default async function PopularArticles() {
    // const data = await getEverythingFromNewsApi();
    const data = {};

    const isData = data?.articles && data.articles.length > 0;

    return (
        <div className="flex flex-col gap-4">
            {isData &&
                data?.articles?.map((article: Article, index: number) => (
                    <NewsCard
                        author={article?.author}
                        description={article?.description}
                        imgUrl={article?.urlToImage}
                        publishedAt={article?.publishedAt}
                        source={article?.source?.name}
                        title={article?.title}
                        url={article?.url}
                        key={index}
                    />
                ))}

            <Loader />
        </div>
    );
}
