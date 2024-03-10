export default function SectionTitle({ title }: { title: string }) {
    return (
        <h1 className="text-xl text-clr_primary font-bold mt-10 mb-5">
            {title}
        </h1>
    );
}
