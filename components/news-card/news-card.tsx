import Image from "next/image";
import Link from "next/link";
import React from "react";

interface NewsCardProps {
    source: string;
    author: string;
    title: string;
    description: string;
    url: string;
    imgUrl: string;
    publishedAt: string;
}

export default function NewsCard({
    source,
    author,
    title,
    description,
    url,
    imgUrl,
    publishedAt,
}: NewsCardProps) {
    return (
        <div className="flex h-48 max-h-52 w-full overflow-hidden rounded-xl bg-slate-100 shadow-lg shadow-slate-500"></div>
    );
}
