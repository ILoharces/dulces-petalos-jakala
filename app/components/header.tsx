import Link from "next/link";
import Image from "next/image";

export const Header = () => {
    return (
        <header className="w-full h-12 sm:h-14 md:h-16 flex items-center justify-center bg-white dark:bg-black px-2 sm:px-4" style={{ backgroundColor: 'white', pointerEvents: 'none' }}>
            <Link href="/" className="block" style={{ pointerEvents: 'auto', lineHeight: 0, display: 'inline-block' }}>
                <Image 
                    src="/flowerHeader.jpg" 
                    alt="Dulces Pétalos" 
                    width={70}
                    height={192}
                    className="cursor-pointer object-contain h-full max-h-12 sm:max-h-14 md:max-h-16 w-auto block"
                    priority
                />
            </Link>
        </header>
    );
};

export default Header;