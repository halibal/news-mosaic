import Image from "next/image";
import Link from "next/link";
import { IoLogoGithub, IoLogoInstagram, IoMail } from "react-icons/io5";
import NewsMosaic from "@/public/images/news-mosaic-no-bg.png";

export default function Footer() {
    return (
        <footer className="bg-clr_secondary text-clr_primary">
            <div className="mx-auto flex h-full min-h-64 max-w-6xl flex-col justify-center gap-4 p-4">
                <div className="flex flex-wrap justify-between max-lg:flex-col max-lg:gap-4">
                    <div className="flex max-w-2xl items-center gap-4 max-lg:max-w-full max-lg:flex-col">
                        <Image src={NewsMosaic} alt="NewsMosaic" width={140} />
                        <div className="flex flex-col gap-4">
                            <p className="text-sm max-lg:text-center">
                                Diving deep into the world&apos;s news with a
                                mosaic of perspectives. Stay informed, engaged,
                                and enlightened with NewsMosaic.
                            </p>
                            <div className="flex max-lg:justify-center">
                                <Link
                                    href="#"
                                    title="Read the Privacy Policy"
                                    className="mr-4 text-xs transition-colors duration-500 hover:text-white">
                                    Privacy Policy
                                </Link>
                                <Link
                                    href="#"
                                    title="Read the Terms of Service"
                                    className="text-xs transition-colors duration-500 hover:text-white">
                                    Terms of Service
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4 lg:items-end">
                        <h3 className="text-xl font-semibold">Follow Us</h3>
                        <div className="flex items-center">
                            <Link
                                title="Follow Halibal on GitHub"
                                href="https://github.com/halibal"
                                className=" mr-4 rounded-full transition-colors duration-500 hover:text-white">
                                <IoLogoGithub />
                            </Link>
                            <Link
                                title="Follow Halibal on Instagram"
                                href="https://www.instagram.com/halibal__/"
                                className=" mr-4 rounded-full transition-colors duration-500 hover:text-white">
                                <IoLogoInstagram />
                            </Link>
                            <Link
                                title="Send an Email to Halibal"
                                href="mailto:halibal95@gmail.com"
                                className="rounded-full transition-colors duration-500 hover:text-white">
                                <IoMail />
                            </Link>
                        </div>
                    </div>
                </div>
                <hr />
                <p className="text-center text-xs">
                    &copy; 2024 NewsMosaic. Created by{" "}
                    <Link
                        href="https://github.com/halibal"
                        title="Halibal"
                        className="transition-colors duration-500 hover:text-purple-500">
                        Halibal
                    </Link>
                </p>
            </div>
        </footer>
    );
}
