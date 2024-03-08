import Link from "next/link";
import { IoLogoGithub, IoLogoInstagram, IoMail } from "react-icons/io5";

export default function Footer() {
    return (
        <footer className="bg-clr_secondary text-clr_primary">
            <div className="max-w-6xl mx-auto p-4 flex flex-col gap-4">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full flex flex-col gap-4 sm:w-2/3 md:w-1/2 lg:w-1/3">
                        <h3 className="font-semibold text-lg">
                            About NewsMosaic
                        </h3>
                        <p className="text-sm">
                            Diving deep into the world&apos;s news with a mosaic
                            of perspectives. Stay informed, engaged, and
                            enlightened with NewsMosaic.
                        </p>
                        <div>
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
                    <div className="w-full flex flex-col gap-4 sm:w-1/3 md:w-1/4 lg:w-1/6 mt-4 sm:mt-0 items-end">
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
