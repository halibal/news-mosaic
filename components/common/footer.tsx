import Image from "next/image";
import Link from "next/link";
import { IoLogoGithub, IoLogoInstagram, IoMail } from "react-icons/io5";
import NewsMosaic from "@/public/images/news-mosaic-no-bg.png";

export default function Footer() {
    return (
        <footer className="bg-clr_secondary text-clr_primary min-h-64">
            <div className="max-w-6xl mx-auto h-full p-4 flex flex-col justify-center gap-4">
                <div className="flex flex-wrap max-lg:flex-col justify-between max-lg:gap-4">
                    <div className="flex max-lg:flex-col items-center gap-4 max-w-2xl max-lg:max-w-full">
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
                                    className="text-xs hover:text-white transition-colors duration-500 mr-4">
                                    Privacy Policy
                                </Link>
                                <Link
                                    href="#"
                                    title="Read the Terms of Service"
                                    className="text-xs hover:text-white transition-colors duration-500">
                                    Terms of Service
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center gap-4 items-center lg:items-end">
                        <h3 className="font-semibold text-xl">Follow Us</h3>
                        <div className="flex items-center">
                            <Link
                                title="Follow Halibal on GitHub"
                                href="https://github.com/halibal"
                                className=" rounded-full hover:text-white transition-colors duration-500 mr-4">
                                <IoLogoGithub />
                            </Link>
                            <Link
                                title="Follow Halibal on Instagram"
                                href="https://www.instagram.com/halibal__/"
                                className=" rounded-full hover:text-white transition-colors duration-500 mr-4">
                                <IoLogoInstagram />
                            </Link>
                            <Link
                                title="Send an Email to Halibal"
                                href="mailto:halibal95@gmail.com"
                                className=" rounded-full hover:text-white transition-colors duration-500">
                                <IoMail />
                            </Link>
                        </div>
                    </div>
                </div>
                <hr />
                <p className="text-xs text-center">
                    &copy; 2024 NewsMosaic. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
