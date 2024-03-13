import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Header from "@/components/common/header";
import "./globals.css";
import Footer from "@/components/common/footer";
import { ModalProvider } from "@/providers/modal-provider";
import CustomizeFeedsModal from "@/components/common/customize-feeds-modal";

const open_sans = Open_Sans({
    display: "swap",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
    style: ["italic", "normal"],
    variable: "--font-open-sans",
});

export const metadata: Metadata = {
    title: {
        default: "NewsMosaic | Your Spectrum of World News",
        template: "%s | NewsMosaic",
    },
    description:
        "Explore NewsMosaic, the ultimate destination for news enthusiasts seeking a comprehensive view of global news. Dive into a mosaic of perspectives, where politics, technology, sports, and culture converge. Discover, engage, and stay informed with NewsMosaic.",
    publisher: "Halibal",
    authors: [
        {
            name: "Halibal",
            url: "https://github.com/halibal",
        },
    ],
    creator: "Halibal",
    applicationName: "NewsMosaic",
    generator: "Next.js",
    icons: {
        icon: "/images/favicon.ico",
    },
    keywords:
        "world news, global news perspectives, politics, technology, sports, culture, comprehensive news platform, NewsMosaic",
    robots: "index, follow",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://newsmosaic.vercel.app/",
        siteName: "NewsMosaic",
        images: [
            {
                url: "/images/newsmosaic-card.jpeg",
                width: 1200,
                height: 630,
                alt: "NewsMosaic",
            },
        ],
        description:
            "Explore NewsMosaic, the ultimate destination for news enthusiasts seeking a comprehensive view of global news. Dive into a mosaic of perspectives, where politics, technology, sports, and culture converge. Discover, engage, and stay informed with NewsMosaic.",
        title: "NewsMosaic | Your Spectrum of World News",
    },
    twitter: {
        site: "@halibal",
        creator: "@halibal",
        card: "summary_large_image",
        description: "NewsMosaic | Your Spectrum of World News",
        images: [
            {
                url: "/images/newsmosaic-card.jpeg",
                width: 1200,
                height: 630,
                alt: "NewsMosaic | Your Spectrum of World News",
            },
        ],
    },
    metadataBase: new URL("https://newsmosaic.vercel.app/"),
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${open_sans.className} flex flex-col`}>
                <ModalProvider>
                    <Header />
                    <div className="flex flex-1 flex-col items-center">
                        {children}
                    </div>
                    <Footer />
                    <CustomizeFeedsModal />
                </ModalProvider>
            </body>
        </html>
    );
}
