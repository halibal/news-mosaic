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
        <div className="max-w-sm rounded-lg flex flex-col gap-4 overflow-hidden shadow-lg">
            <Image
                className="w-full object-cover"
                width={300}
                height={200}
                src="https://photos5.appleinsider.com/gallery/58882-120071-Killers-of-the-Flower-Moon-xl.jpg"
                alt="Apple TV+ movies struggling to prevail in theaters still considered 'profitable'"
            />
            <div className="p-4 flex flex-col gap-4">
                <div className="flex flex-col gap-4">
                    <div className="font-bold text-md">
                        Apple TV+ movies struggling to prevail in theaters still
                        considered &apos;profitable&apos;
                    </div>
                    <p className="text-gray-700 text-xs text-justify">
                        Apple TV+ appears to be pulling some accounting magic
                        after its latest $700 million run of films, which
                        captured only $466 million in revenue, but the company
                        still considers two of them profitable.
                    </p>
                </div>
                <div className="flex flex-wrap gap-2">
                    <span className="inline-block bg-gray-200 rounded-full text-sm font-semibold text-gray-700">
                        Author: Wesley Hilliard
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full text-sm font-semibold text-gray-700">
                        Source: AppleInsider
                    </span>
                    <Link
                        title="Read More"
                        href="https://appleinsider.com/articles/24/03/08/apple-tv-movies-struggling-to-prevail-in-theaters-still-considered-profitable"
                        className="inline-block bg-clr_primary rounded-full text-sm font-semibold text-white">
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    );
}
