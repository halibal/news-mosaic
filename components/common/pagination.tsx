import page from "@/app/page";
import Link from "next/link";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    pageSize: number;
    searchParams: { [key: string]: string | undefined };
}

const linkStyles = `flex h-12 w-12 items-center justify-center rounded-full bg-purple-300 text-white transition-all duration-500 hover:bg-purple-900`;

const styles = {
    pageItem: `flex h-12 w-12 items-center max-xl:h-8 max-xl:w-8 max-xl:text-xs justify-center rounded-full bg-purple-300 text-white transition-all duration-500 hover:bg-purple-900`,
    active: `border border-purple-900 bg-purple-900 text-white hover:bg-purple-200 hover:text-purple-900`,
    ellipses: `flex items-center justify-center rounded-full bg-purple-300 text-white transition-all duration-500 hover:bg-purple-900`,
    disabled: "pointer-events-none text-purple-200",
    prev: "flex items-center justify-center text-purple-500 cursor-pointer hover:text-purple-900 md:text-xl xl:text-4xl",
};

export default function Pagination({
    currentPage,
    totalPages,
    pageSize,
    searchParams,
}: PaginationProps) {
    const previousPage = currentPage === 1 ? currentPage : currentPage - 1;
    const nextPage = currentPage === totalPages ? currentPage : currentPage + 1;

    const isSources = searchParams.sources
        ? `&sources=${searchParams.sources}`
        : "";
    const isLanguage = searchParams.language
        ? `&language=${searchParams.language}`
        : "";
    const isFrom = searchParams.from ? `&from=${searchParams.from}` : "";
    const isTo = searchParams.to ? `&to=${searchParams.to}` : "";

    const { q } = searchParams;

    const queries = `&q=${q}${isLanguage}${isSources}${isFrom}${isTo}`;

    const renderDirectPageLinks = () => {
        return Array.from({ length: totalPages }, (_, i) => (
            <Link
                href={`/news?pageSize=${pageSize}&page=${i + 1}${queries}`}
                key={`page-${i + 1}`}
                className={`${styles.pageItem} ${
                    currentPage === i + 1
                        ? `${styles.active} ${styles.disabled}`
                        : ""
                }`}
                title={`Go To Page ${i + 1}`}>
                {i + 1}
            </Link>
        ));
    };

    const renderPaginationWithEllipses = () => {
        let startPage: number;
        let endPage: number;

        if (currentPage <= 3) {
            startPage = 2;
            endPage = 4;
        } else if (currentPage >= totalPages - 2) {
            startPage = totalPages - 3;
            endPage = totalPages - 1;
        } else {
            startPage = currentPage - 1;
            endPage = currentPage + 1;
        }

        return (
            <>
                <Link
                    href={`/news?pageSize=${pageSize}&page=1${queries}`}
                    className={`${styles.pageItem} ${
                        currentPage === 1
                            ? `${styles.active} ${styles.disabled}`
                            : ""
                    }`}
                    title={`Go To Page 1`}
                    scroll={false}>
                    1
                </Link>
                <span>...</span>
                {Array.from(
                    { length: endPage - startPage + 1 },
                    (_, i) => startPage + i
                ).map((page) => (
                    <Link
                        href={`/news?pageSize=${pageSize}&page=${page}${queries}`}
                        key={`page-${page}`}
                        className={`${styles.pageItem} ${
                            currentPage === page
                                ? `${styles.active} ${styles.disabled}`
                                : ""
                        }`}
                        title={`Go To Page ${page}`}
                        scroll={false}>
                        {page}
                    </Link>
                ))}

                <span>...</span>
                <Link
                    href={`/news?pageSize=${pageSize}&page=${totalPages}${queries}`}
                    className={`${styles.pageItem} ${
                        currentPage === totalPages
                            ? `${styles.active} ${styles.disabled}`
                            : ""
                    }`}
                    title={`Go To Page ${totalPages}`}
                    scroll={false}>
                    {totalPages}
                </Link>
            </>
        );
    };
    return (
        <div className="flex items-center justify-center p-2">
            <Link
                className={`${styles.prev} ${
                    currentPage === 1 ? styles.disabled : ""
                }`}
                href={`/news?pageSize=${pageSize}&page=1${queries}`}
                title="Go To First Page">
                <IoChevronBackOutline className="-mr-5 md:-mr-4" />
                <IoChevronBackOutline />
            </Link>
            <Link
                className={`${styles.prev} ${
                    currentPage === 1 ? styles.disabled : ""
                }`}
                href={`/news?pageSize=${pageSize}&page=${previousPage}${queries}`}
                title="Go To Previous Page">
                <IoChevronBackOutline />
            </Link>
            <div className="flex items-center justify-center gap-2">
                {totalPages < 5
                    ? renderDirectPageLinks()
                    : renderPaginationWithEllipses()}
            </div>
            <Link
                className={`${styles.prev} ${
                    currentPage === totalPages ? styles.disabled : ""
                }`}
                href={`/news?pageSize=${pageSize}&page=${nextPage}${queries}`}
                title="Go To Next Page">
                <IoChevronForwardOutline />
            </Link>
            <Link
                className={`${styles.prev} ${
                    currentPage === totalPages ? styles.disabled : ""
                }`}
                href={`/news?pageSize=${pageSize}&page=${nextPage}${queries}`}
                title="Go To Last Page">
                <IoChevronForwardOutline className="-mr-5 md:-mr-4" />
                <IoChevronForwardOutline />
            </Link>
        </div>
    );
}
