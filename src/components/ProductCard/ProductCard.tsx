import React from 'react'
import { PiBookmarkSimpleFill, PiBookmarkSimpleThin } from "react-icons/pi";
import type { IProduct } from '../../types/types';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import { addToSaved } from '../../redux/features/productSlice';

const LoadingProducts = ({ cardPerPage }: { cardPerPage: number }) => {
    const loadingArray: string[] = Array(cardPerPage).fill("");
    return (
        <>
            {
                loadingArray.map((_, index) => (
                    <div key={index} className='border border-gray-100 rounded-lg'>
                        <div className='h-40 md:h-[246px] bg-gray-50'></div>
                        <div className='h-[64px]'>
                            <div className='p-2.5 flex flex-col gap-2'>
                                <div className='flex items-center justify-between'>
                                    <div className='w-1/3 md:w-1/4 h-[14px] sm:h-[18px] bg-gray-100 rounded-lg'></div>
                                    <PiBookmarkSimpleThin className='text-xl cursor-pointer' />
                                </div>
                                <div className='w-3/4 md:w-2/4 h-[14px] sm:h-[18px] bg-gray-100 rounded-lg'></div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

const ProductCard = ({ productsData, isLoading }: { productsData: IProduct[], isLoading: boolean }) => {
    const dispatch = useDispatch();
    const productsState = useSelector((state: RootState) => state.productReducer.products);

    return (
        <div className='products_cards grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-2.5'>
            {
                isLoading ? <LoadingProducts cardPerPage={20} /> :
                    productsData?.map(item => (
                        <div key={item.id} className='border border-gray-100 rounded-lg'>
                            <div className='bg-gray-50'>
                                <img loading='eager' className='w-full h-40 md:h-[246px] object-contain cursor-pointer hover:scale-[1.03] duration-200 ease-out' src={item.thumbnail} alt={item.title} height={246} />
                            </div>
                            <div className='p-2.5 flex flex-col gap-1'>
                                <div className='flex items-center justify-between'>
                                    <p className='text-xs sm:text-sm font-medium'>${item.price}</p>
                                    {
                                        productsState.some(i => i.id === item.id) ?
                                            <PiBookmarkSimpleFill onClick={() => dispatch(addToSaved(item))} className='text-xl cursor-pointer' />
                                            :
                                            <PiBookmarkSimpleThin onClick={() => dispatch(addToSaved(item))} className='text-xl cursor-pointer' />
                                    }
                                </div>
                                <p className='text-xs sm:text-sm'>{item.title}</p>
                            </div>
                        </div>
                    ))
            }
        </div>
    )
}

export default React.memo(ProductCard);