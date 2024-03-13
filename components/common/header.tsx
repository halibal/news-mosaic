import Image from "next/image";
import Link from "next/link";
import NewsMosaic from "@/public/images/news-mosaic-no-bg.png";

export default function Header() {
    return (
        <header>
            <nav className="bg-slate-200 shadow-md shadow-slate-300">
                <ul className="mx-auto flex max-w-6xl list-none items-center gap-4 p-4 text-clr_tertiary">
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
                    <div className="ms-auto flex gap-4">
                        <li>
                            <Link
                                href="/"
                                className="font-semibold transition-colors duration-500 hover:text-clr_primary"
                                title="Go To Home Page">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/news"
                                className="font-semibold transition-colors duration-500 hover:text-clr_primary"
                                title="Search The News">
                                News
                            </Link>
                        </li>
                    </div>
                </ul>
            </nav>
        </header>
    );
}
