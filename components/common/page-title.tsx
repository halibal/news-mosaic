export default function PageTitle({ title }: { title: string }) {
    return (
        <h1 className="text-center text-4xl capitalize text-clr_primary max-lg:text-2xl max-sm:text-xl">
            {title}
        </h1>
    );
}
