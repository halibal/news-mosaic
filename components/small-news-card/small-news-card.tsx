import Image from "next/image";
import NoImageFound from "@/public/images/no-image-found.jpeg";
import Link from "next/link";

interface SmallNewsCardProps {
    title?: string;
    description?: string;
    pathname?: string;
    imageUrl?: string;
}

export default function SmallNewsCard({
    title,
    description,
    imageUrl,
    pathname,
}: SmallNewsCardProps) {
    return (
        <Link
            href={pathname || "#"}
            title={title || "No title"}
            className="group relative h-80 min-w-64 cursor-pointer overflow-hidden rounded-xl border border-clr_primary shadow-lg shadow-slate-50 duration-500 max-xl:h-40">
            <Image
                className="-z-20 h-auto w-full object-cover opacity-60 transition-all duration-500 group-hover:scale-125 group-hover:opacity-100"
                src={imageUrl ?? NoImageFound}
                alt={title || "No image found"}
                fill
            />
            <div className="absolute top-[272px] w-full transition-all duration-500 group-hover:top-1/4 max-xl:top-[200px]">
                <h2 className="h-12 w-full truncate bg-slate-300 bg-opacity-50 p-3 font-bold transition-all duration-500 group-hover:h-36 group-hover:whitespace-normal group-hover:max-xl:h-16">
                    {title}
                </h2>

                <p className="h-40 w-full bg-white p-3 text-xs">
                    {description || "No description"}
                </p>
            </div>
        </Link>
    );
}
