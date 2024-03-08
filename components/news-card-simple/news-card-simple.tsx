import Image from "next/image";
import Link from "next/link";

interface NewsCardSimpleProps {
    description?: string;
    imageUrl: string;
    pathname: string;
    title: string;
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
            title={title}
            className="w-full relative p-4 group rounded-xl overflow-hidden flex min-h-52 flex-col gap-4 shadow-lg shadow-slate-500">
            <Image
                className="w-full object-cover h-auto group-hover:scale-125 group-hover:opacity-60 transition-all duration-500 opacity-40 -z-20"
                src={imageUrl}
                alt={title}
                fill
            />
            <div className="absolute inset-0 bg-slate-400 opacity-30 group-hover:bg-transparent transition-all duration-500 -z-10"></div>
            <h2 className="lg:text-lg font-bold mt-auto">{title}</h2>
            {description && <p className="max-lg:text-xs">{description}</p>}
        </Link>
    );
}
