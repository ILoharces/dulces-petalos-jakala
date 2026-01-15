'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Header from '../../components/header';
import ProductDetails from '../../productDetails';
import { useFlowers } from '../../hooks/useFowers';
import { Flower } from '../../types/flower';

export default function ProductPage() {
  const params = useParams();
  const id = params?.id as string;
  const { getFlowerById } = useFlowers();
  const [flower, setFlower] = useState<Flower | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFlower = async () => {
      if (id) {
        setLoading(true);
        const flowerData = await getFlowerById(id);
        setFlower(flowerData);
        setLoading(false);
      }
    };

    fetchFlower();
  }, [id]);

  if (loading) {
    return (
      <div className="flex min-h-screen flex-col font-sans" style={{ backgroundColor: 'whitesmoke' }}>
        <Header />
        <main className="flex w-full flex-col items-center justify-center py-8" style={{ backgroundColor: 'whitesmoke', minHeight: 'calc(100vh - 4rem)' }}>
          <p className="text-lg text-gray-600">Cargando...</p>
        </main>
      </div>
    );
  }

  if (!flower) {
    return (
      <div className="flex min-h-screen flex-col font-sans" style={{ backgroundColor: 'whitesmoke' }}>
        <Header />
        <main className="flex w-full flex-col items-center justify-center py-8" style={{ backgroundColor: 'whitesmoke', minHeight: 'calc(100vh - 4rem)' }}>
          <p className="text-lg text-gray-600">Flor no encontrada</p>
        </main>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col font-sans" style={{ backgroundColor: 'whitesmoke' }}>
      <Header />
      <main className="flex w-full flex-col py-8" style={{ backgroundColor: 'whitesmoke', minHeight: 'calc(100vh - 4rem)' }}>
        <ProductDetails flower={flower} />
      </main>
    </div>
  );
}
