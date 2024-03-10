"use client";

import { getEverything } from "@/actions/news-api/get-everything";
import { Article } from "@/types/article";
import { useEffect, useState } from "react";
import { IoLogoReact } from "react-icons/io5";
import { useInView } from "react-intersection-observer";
import NewsCard from "@/components/news-card/news-card";

let page = 2;

export default function Loader() {
    const { inView, ref } = useInView();
    const [data, setData] = useState([]);

    useEffect(() => {
        if (inView) {
            getEverything(page).then((res) => {
                console.log(res);
                if (!res.articles) {
                    return;
                }
                setData([...data, ...res.articles]);
                page++;
            });
        }
    }, [inView, data]);

    return (
        <div className="flex justify-center my-5" ref={ref}>
            {data?.articles?.map((article: Article, index: number) => (
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
            <IoLogoReact className="animate-spin " size={30} />
        </div>
    );
}
