import Link from "next/link";

export default function Header(){
    return(
        <div className="flex justify-between text-center max-w-7xl mx-auto py-8 mb-10">
            <Link href="/" prefetch={false}>
                ONE FOR ALL COFFEE
            </Link>
            <div className="grid grid-cols-4 gap-8">
                <Link href="/" prefetch={false}>Home</Link>
                <Link href="/" prefetch={false}>Our Menu</Link>
                <Link href="/" prefetch={false}>About</Link>
                <Link href="/" prefetch={false}>Contact</Link>
            </div>
        </div>
    );
}