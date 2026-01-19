'use client';

import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import { Flower } from "../types/flower";

export const FlowerItem = ({ flower }: { flower: Flower }) => {
    const router = useRouter();

    const formattedPrice = Number.isFinite(flower.price) ? flower.price.toFixed(2) : String(flower.price);

    const handleClick = () => {
        router.push(`/product/${flower.id}`);
    };

    return (
        <div 
            onClick={handleClick}
            className="w-full flex flex-col items-start justify-start bg-white rounded-2xl shadow-md overflow-visible cursor-pointer hover:shadow-lg transition-shadow duration-200" 
            style={{ minHeight: '400px', height: 'auto', padding: '1rem', paddingBottom: '1.25rem', width: '100%', maxWidth: '100%' }}
        >
            <h2 className="text-xl font-bold text-black mb-2 line-clamp-2" style={{ lineHeight: '1.3' }}>{flower.name}</h2>
            <p className="text-sm text-black mb-3 line-clamp-1" style={{ lineHeight: '1.4' }}>{flower.binomialName}</p>
            <div className="w-full mb-0 rounded-lg overflow-hidden flex flex-col items-center justify-center flex-grow min-h-0">
                <div className="w-full bg-gray-100 rounded-lg overflow-hidden relative aspect-square">
                    <img
                        src={flower.imgUrl}
                        alt={flower.name}
                        className="w-full h-full object-cover"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center',
                        }}
                        loading="lazy"
                    />
                    <div className="absolute bottom-3 left-3 bg-white bg-opacity-90 px-3 py-1.5 rounded-lg shadow-sm">
                        <p className="text-base text-black font-semibold">{formattedPrice} €</p>
                    </div>
                    <div className="absolute bottom-3 right-3 bg-white bg-opacity-90 px-3 py-1.5 rounded-lg shadow-sm">
                        <span className="text-2xl text-black flex items-center justify-center">
                            <Icon icon="mdi:arrow-top-right" width={22} height={22} />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}