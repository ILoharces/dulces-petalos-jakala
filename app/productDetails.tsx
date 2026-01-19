"use client";

import { Flower } from "./types/flower";
import Breadcrumbs from "./components/breadcrumbs";
import { useTranslate } from "./hooks/useTranslate";

interface ProductDetailsProps {
  flower: Flower;
}

export default function ProductDetails({ flower }: ProductDetailsProps) {
  const { translatedText: translatedFertilizer, isLoading: isLoadingTranslation } = useTranslate(flower.fertilizerType);

  const formattedPrice = Number.isFinite(flower.price) ? flower.price.toFixed(2) : String(flower.price);
  
  const handleAddToCart = () => {
    // Funcion de placeholder
  };

  return (
    <div
      className="w-full px-8 md:px-16 lg:px-24 py-8"
      style={{ backgroundColor: "whitesmoke" }}
    >
      <Breadcrumbs flowerName={flower.name} />
      <div className="flex flex-col md:flex-row gap-8 md:gap-12">
        <div className="w-full md:w-1/2">
          <div className="w-full bg-gray-100 rounded-2xl overflow-hidden aspect-square">
            <img
              src={flower.imgUrl}
              alt={flower.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-start">
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-black mb-2">
                {flower.name}
              </h1>
              <p className="text-lg md:text-xl text-gray-600 italic">
                {flower.binomialName}
              </p>
            </div>

            <div>
              <p className="text-3xl md:text-4xl font-bold text-black">
                € {formattedPrice}
              </p>
            </div>

            <ul className="list-disc pl-5 space-y-1 text-base text-gray-700">
              <li>regar {flower.wateringsPerWeek} ve{flower.wateringsPerWeek === 1 ? "z" : "ces"} por semana</li>
              <li>fertilizar con {isLoadingTranslation ? flower.fertilizerType : translatedFertilizer}</li>
            </ul>

            <button
              onClick={handleAddToCart}
              className="bg-[#781e42] text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-[#5c1633] transition-colors duration-200"
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
