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
        <div className="w-full rounded-xl h-48 flex overflow-hidden bg-slate-100 shadow-lg shadow-slate-500 max-h-52">
            {imgUrl && (
                <Image
                    className="object-cover min-w-48"
                    width={300}
                    height={200}
                    src={imgUrl}
                    alt={title}
                />
            )}
            <div className="p-4 flex flex-col w-full gap-4">
                <div className="flex flex-col gap-4">
                    <div className="font-bold text-md">{title}</div>
                    <p className="text-gray-700 text-xs text-justify">
                        {description}
                    </p>
                </div>
                <div className="flex flex-wrap gap-2">
                    <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700">
                        Author: {author}
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700">
                        Source: {source}
                    </span>
                    <Link
                        title="Read More"
                        href={url}
                        className="inline-block bg-clr_primary rounded-full px-2 py-1 text-sm font-semibold text-white">
                        Read More
                    </Link>
                    
                </div>
            </div>
        </div>
    );
}
