import Image from "next/image";
import Link from "next/link";
import NoImageFound from "@/public/images/no-image-found.jpeg";

interface NewsCardSimpleProps {
    description?: string | undefined;
    imageUrl?: string | undefined;
    pathname: string;
    title: string | undefined;
}

const linkClass =
    "group relative flex min-h-52 w-full flex-col overflow-hidden rounded-xl shadow-lg shadow-slate-500";
const imageClass =
    "-z-20 h-auto w-full object-cover opacity-60 transition-all duration-500 group-hover:scale-125 group-hover:opacity-100";
const titleClass =
    "mt-auto bg-slate-400 bg-opacity-30 p-3 font-bold transition-all duration-500 lg:text-lg group-hover:bg-opacity-100";
const descriptionClass =
    "bg-white bg-opacity-30 p-3 transition-all duration-500 group-hover:bg-opacity-70 max-lg:text-xs";

export default function NewsCardSimple({
    description,
    imageUrl,
    pathname,
    title,
}: NewsCardSimpleProps) {
    return (
        <Link href={pathname} target="_blank" title={title || "No title"} className={linkClass}>
            <Image
                className={imageClass}
                src={imageUrl ?? NoImageFound}
                alt={title || "No image found"}
                fill
            />
            <h2 className={titleClass}>{title}</h2>
            {description && <p className={descriptionClass}>{description}</p>}
        </Link>
    );
}
