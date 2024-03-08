import Image from "next/image";
import Link from "next/link";
import NewsMosaic from "@/public/images/news-mosaic-no-bg.png";

export default function Header() {
    return (
        <header>
            <nav className="bg-slate-200 shadow-md shadow-slate-300">
                <ul className="list-none flex p-4 gap-4 max-w-6xl mx-auto items-center text-clr_tertiary">
                    <li>
                        <Link href="/" title="NewsMosaic">
                            <Image
                                src={NewsMosaic}
                                alt="NewsMosiac"
                                title="NewsMosaic"
                                quality={100}
                                width={100}
                            />
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/"
                            className="font-semibold hover:text-clr_primary transition-colors duration-500"
                            title="Go To Home Page">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/news"
                            className="font-semibold hover:text-clr_primary transition-colors duration-500"
                            title="Search The News">
                            News
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
