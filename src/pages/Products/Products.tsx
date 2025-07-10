import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/ProductCard/ProductCard';
import type { IProduct } from '../../types/types';

const Products = () => {
    // Fetch - async/await inside try/catch (to handle error)
    const [productsData, setProductsData] = useState<IProduct[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);
    useEffect(() => {
        const getCartsData = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/products?limit=20&skip=40`);
                if (!response.ok) {
                    throw new Error(`HTTP Error!, ${response.status}`)
                }
                const data = await response.json();
                setProductsData(data.products);
            } catch (e) {
                const err = e instanceof Error ? e : new Error('Unknown Error');
                console.log(err);
                setError(err);
            } finally {
                setIsLoading(false);
            }
        }
        setIsLoading(true);
        setError(null);
        getCartsData();
    }, [])
    console.log({ productsData, isLoading, error });

    return (
        <section className='section_products'>
            <div className="container">
                <div className='products_wrapper'>
                    <h1 className='text-xl md:text-2xl font-semibold mb-3.5'>Products</h1>
                    <ProductCard productsData={productsData} isLoading={isLoading} />
                </div>
            </div>
        </section>
    )
}

export default React.memo(Products);