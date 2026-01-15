import { useEffect, useState } from "react";
import { Flower } from "../types/flower";

const mapApiResponseToFlower = (apiData: any): Flower => {
    return {
        id: apiData.id || "",
        name: apiData.name || "",
        binomialName: apiData.binomialName || "",
        price:
            typeof apiData.price === "number"
                ? apiData.price
                : parseFloat(apiData.price) || 0,
        imgUrl: apiData.imgUrl || "",
        wateringsPerWeek:
            typeof apiData.wateringsPerWeek === "number"
                ? apiData.wateringsPerWeek
                : parseInt(apiData.wateringsPerWeek) || 0,
        fertilizerType: apiData.fertilizerType || "",
        heightInCm:
            typeof apiData.heightInCm === "number"
                ? apiData.heightInCm
                : parseInt(apiData.heightInCm) || 0,
    };
};

export const useFlowers = () => {
    const [flowers, setFlowers] = useState<Flower[]>([]);

    const getFlowers = async () => {
        try {
            const response = await fetch(
                "https://dulces-petalos.jakala.es/api/v1/product"
            );

            if(!response.ok) {
                throw new Error("HTTP error: " + response.status);
            }

            const data = await response.json();

            if(!Array.isArray(data)) {
                throw new Error("Invalid server response");
            }

            setFlowers(data.map(mapApiResponseToFlower));
        } catch (error) {
            console.error("Error fetching flowers:", error);
        }
    };

    const getFlowerById = async (id: string) => {
        if(!id) {
            throw new Error("Invalid flower ID");
        }
        try {
            const response = await fetch(
                `https://dulces-petalos.jakala.es/api/v1/product/${id}`
            );

            if(!response.ok) {
                throw new Error("HTTP error: " + response.status);
            }

            const data = await response.json();

            if(!data) {
                throw new Error("Invalid server response");
            }

            return mapApiResponseToFlower(data);
        } catch (error) {
            console.error("Error fetching flower by id:", error);
            return null;
        }
    };

    return { flowers, getFlowers, getFlowerById };
};
