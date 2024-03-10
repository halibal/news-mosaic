import Image from "next/image";
import Link from "next/link";
import NoImageFound from "@/public/images/no-image-found.jpeg";

interface NewsCardSimpleProps {
    description?: string | undefined;
    imageUrl?: string | undefined;
    pathname: string;
    title: string | undefined;
}

export default function NewsCardSimple({
    description,
    imageUrl,
    pathname,
    title,
}: NewsCardSimpleProps) {
    return (
        <Link
            href={pathname}
            title={title || "No title"}
            className="group relative flex min-h-52 w-full flex-col gap-4 overflow-hidden rounded-xl p-4 shadow-lg shadow-slate-500">
            <Image
                className="-z-20 h-auto w-full object-cover opacity-40 transition-all duration-500 group-hover:scale-125 group-hover:opacity-60"
                src={imageUrl ?? NoImageFound}
                alt={title || "No image found"}
                fill
            />
            <div className="absolute inset-0 -z-10 bg-slate-400 opacity-30 transition-all duration-500 group-hover:bg-transparent"></div>
            <h2 className="mt-auto font-bold lg:text-lg">{title}</h2>
            {description && <p className="max-lg:text-xs">{description}</p>}
        </Link>
    );
}
