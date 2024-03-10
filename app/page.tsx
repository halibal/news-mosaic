import SectionTitle from "@/components/common/section-title";
import NewsCardSimple from "@/components/news-card-simple/news-card-simple";
import PopularArticles from "@/components/popular-articles/popular-articles";
import PopularArticlesSkeleton from "@/components/popular-articles/popular-articles-skeleton";
import { Suspense } from "react";

export default function Home({searchParams}) {
    const {size} = searchParams;

// TODO: ilk sayfaya 3 tane latest news koy
// TODO: Altina personalized news uanina da read more

    return (
        <main className="max-w-6xl mx-auto my-10 p-4">
            <h1 className="flex gap-4 mb-10 font-bold text-xl text-clr_primary items-center">
                Welcome to NewsMosaic
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                <NewsCardSimple
                    pathname="/news/1"
                    imageUrl="https://photos5.appleinsider.com/gallery/58882-120071-Killers-of-the-Flower-Moon-xl.jpg"
                    title="Apple TV+ movies struggling to prevail in theaters still
                        considered 'profitable'"
                    description="Apple TV+ appears to be pulling some accounting magic
                        after its latest $700 million run of films, which
                        captured only $466 million in revenue, but the company
                        still considers two of them profitable."
                />
                <div className="grid grid-cols-1 gap-4">
                    <NewsCardSimple
                        pathname="/news/1"
                        imageUrl="https://photos5.appleinsider.com/gallery/58882-120071-Killers-of-the-Flower-Moon-xl.jpg"
                        title="Apple TV+ movies struggling to prevail in theaters still
                        considered 'profitable'"
                        description="Apple TV+ appears to be pulling some accounting magic
                        after its latest $700 million run of films, which
                        captured only $466 million in revenue, but the company
                        still considers two of them profitable."
                    />
                    <NewsCardSimple
                        pathname="/news/1"
                        imageUrl="https://photos5.appleinsider.com/gallery/58882-120071-Killers-of-the-Flower-Moon-xl.jpg"
                        title="Apple TV+ movies struggling to prevail in theaters still
                        considered 'profitable'"
                        description="Apple TV+ appears to be pulling some accounting magic
                        after its latest $700 million run of films, which
                        captured only $466 million in revenue, but the company
                        still considers two of them profitable."
                    />
                </div>
            </div>
            <div className="">
                <SectionTitle title="Popular Articles" />
                <Suspense fallback={<PopularArticlesSkeleton />}>
                    <PopularArticles size sfasf />
                </Suspense>
            </div>
        </main>
    );
}
