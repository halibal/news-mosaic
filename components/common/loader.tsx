"use client";
import { Article } from "@/types/article";
import { useEffect, useState } from "react";
import { IoLogoReact } from "react-icons/io5";
import { useInView } from "react-intersection-observer";
import NewsCard from "@/components/news-card/news-card";

let page = 2;

export default function Loader() {
    const { inView, ref } = useInView();
    const [data, setData] = useState([]);

    return (
        <div className="my-5 flex justify-center" ref={ref}>
            <IoLogoReact className="animate-spin " size={30} />
        </div>
    );
}
