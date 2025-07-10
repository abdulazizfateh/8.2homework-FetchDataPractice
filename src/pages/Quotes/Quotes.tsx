import React, { useEffect, useState } from 'react'
import type { IQuote } from '../../types/types';
import QuotesCard from '../../components/QuoteCard/QuoteCard';

const Quotes = () => {
    // Fetch - then/catch
    const [quotesData, setQuotesData] = useState<IQuote[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);
    useEffect(() => {
        setIsLoading(true);
        setError(null);
        fetch(`https://dummyjson.com/quotes?limit=24`)
            .then(res => {
                console.log(res);
                if (!res.ok) {
                    throw new Error(`HTTP Error!, ${res.status}`)
                }
                return res.json();
            })
            .then(res => {
                console.log(res);
                setQuotesData(res.quotes);
            })
            .catch(e => {
                const err = e instanceof Error ? e : new Error('Unknown Error');
                console.log(err);
                setError(err);
            })
            .finally(() => setIsLoading(false));
    }, [])
    console.log({ quotesData, isLoading, error });

    return (
        <section className='section_quotes'>
            <div className="container">
                <div className='quotes_wrapper'>
                    <h1 className='text-xl md:text-2xl font-semibold mb-3.5'>Quotes</h1>
                    <QuotesCard quotesData={quotesData} isLoading={isLoading} />
                </div>
            </div>
        </section>
    )
}

export default React.memo(Quotes);