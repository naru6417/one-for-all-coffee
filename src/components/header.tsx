import Link from "next/link";
import Soundwave from "./subcomponents/soundwave";
export default function Header(){
    return(
        <div className="flex justify-between text-center max-w-7xl mx-auto py-8 mb-10">
            <div className="grid grid-cols-2 gap-2">
                <Link href="/" prefetch={false}>
                ONE FOR ALL COFFEE
            </Link>
            <Soundwave />
            </div>
            
            <div className="grid grid-cols-4 gap-8">
                <Link href="/home" prefetch={false}>Home</Link>
                <Link href="/about" prefetch={false}>About</Link>
                <Link href="/menu" prefetch={false}>Our Menu</Link>
                <Link href="/contact" prefetch={false}>Contact</Link>
            </div>
        </div>
    );
}