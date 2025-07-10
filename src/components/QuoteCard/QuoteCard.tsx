import React from 'react'
import { PiBookmarkSimpleFill, PiBookmarkSimpleThin } from "react-icons/pi";
import type { IQuote } from '../../types/types';
import { useDispatch, useSelector } from 'react-redux';
import { addToSaved } from '../../redux/features/quoteSlice';
import type { RootState } from '../../redux/store';

const LoadingQuotesCard = ({ cardsPerPage }: { cardsPerPage: number }) => {
    const loadingArray = Array(cardsPerPage).fill("");
    return (
        <>
            {
                loadingArray.map((_, index) => (
                    <div key={index} className='p-2.5 rounded-lg bg-gray-50 border border-gray-100 flex flex-col gap-1.5'>
                        <div className='flex flex-col gap-1'>
                            <div className='w-[96%] h-[14px] sm:h-4 bg-[#ecedee] rounded-lg overflow-hidden relative'>
                                <div className='absolute shimmer z-10 inset-0'></div>
                            </div>
                            <div className='w-[76%] h-[14px] sm:h-4 bg-[#ecedee] rounded-lg overflow-hidden relative'>
                                <div className='absolute shimmer z-10 inset-0'></div>
                            </div>
                            <div className='w-[56%] h-[14px] sm:h-4 bg-[#ecedee] rounded-lg overflow-hidden relative'>
                                <div className='absolute shimmer z-10 inset-0'></div>
                            </div>
                        </div>
                        <div className='flex-1 flex items-end gap-2 justify-between'>
                            <PiBookmarkSimpleThin className='text-xl cursor-pointer shrink-0' />
                            <div className='w-[45%] h-[14px] sm:h-4 md:w-[30%] bg-[#ecedee] rounded-lg overflow-hidden relative'>
                                <div className='absolute shimmer z-10 inset-0'></div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

interface IQuotesCardProps {
    quotesData: IQuote[];
    isLoading: boolean;
}
const QuotesCard = ({ quotesData, isLoading }: IQuotesCardProps) => {
    const dispatch = useDispatch();
    const quotesState = useSelector((state: RootState) => state.quoteReducer.quotes);
    return (
        <div className='quotes_cards grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[105px] sm:auto-rows-[120px] gap-2 sm:gap-2.5'>
            {
                isLoading ? <LoadingQuotesCard cardsPerPage={20} /> :
                    quotesData?.map((item) => (
                        <div key={item.id} className='p-2.5 rounded-lg bg-gray-50 border border-gray-100 flex flex-col gap-1.5'>
                            <p className='text-xs sm:text-sm line-clamp-3'>{item.quote}</p>
                            <div className='flex-1 flex items-end gap-2 justify-between'>
                                {
                                    quotesState.some(i => i.id === item.id) ?
                                        <PiBookmarkSimpleFill onClick={() => dispatch(addToSaved(item))} className='text-xl cursor-pointer shrink-0' />
                                        :
                                        <PiBookmarkSimpleThin onClick={() => dispatch(addToSaved(item))} className='text-xl cursor-pointer shrink-0' />
                                }
                                <p className='text-xs sm:text-sm italic text-gray-500 line-clamp-1 select-none'>{item.author}</p>
                            </div>
                        </div>
                    ))
            }
        </div>
    )
}

export default React.memo(QuotesCard);