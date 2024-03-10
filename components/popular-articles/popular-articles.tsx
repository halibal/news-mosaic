import { getEverything } from "@/actions/news-api/get-everything";
import { Article } from "@/types/article";
import NewsCard from "@/components/news-card/news-card";
import Loader from "@/components/common/loader";
import { wait } from "@/actions/news-api/wait";

export default async function PopularArticles() {
    const data = await getEverything();
    console.log(data?.articles);

    await wait(20000);

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
