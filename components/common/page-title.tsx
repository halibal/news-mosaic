export default function PageTitle({ title }: { title: string }) {
    return (
        <h1 className="text-center text-4xl capitalize text-clr_primary">
            {title}
        </h1>
    );
}
