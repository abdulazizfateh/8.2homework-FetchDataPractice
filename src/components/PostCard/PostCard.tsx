import React from 'react'
import type { IPost } from '../../types/types';
import { PiBookmarkSimpleFill, PiBookmarkSimpleThin } from 'react-icons/pi';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import { addToSaved } from '../../redux/features/postSlice';

const LoadingPosts = ({ cardsPerPage }: { cardsPerPage: number }) => {
    const loadingArray = Array(cardsPerPage).fill("");
    return (
        <>
            {
                loadingArray.map((_, index) => (
                    <div key={index} className='bg-gray-50 border border-gray-100 rounded-lg p-2.5 flex flex-col gap-3.5 sm:gap-4'>
                        <div className='flex items-start justify-between gap-1.5'>
                            <div className='w-full flex flex-col gap-1'>
                                <div className='w-[96%] h-3 sm:h-4 bg-[#ecedee] rounded-lg relative overflow-hidden'>
                                    <div className="absolute inset-0 shimmer z-10"></div>
                                </div>
                                <div className='w-[45%] h-3 sm:h-4 bg-[#ecedee] rounded-lg relative overflow-hidden'>
                                    <div className="absolute inset-0 shimmer z-10"></div>
                                </div>
                            </div>
                            <PiBookmarkSimpleThin className='text-xl cursor-pointer shrink-0' />
                        </div>
                        <div className='w-full flex flex-col gap-1'>
                            <div className='w-[96%] h-3 sm:h-4 bg-[#ecedee] rounded-lg relative overflow-hidden'>
                                <div className="absolute inset-0 shimmer z-10"></div>
                            </div>
                            <div className='w-[96%] h-3 sm:h-4 bg-[#ecedee] rounded-lg relative overflow-hidden'>
                                <div className="absolute inset-0 shimmer z-10"></div>
                            </div>
                            <div className='w-[96%] h-3 sm:h-4 bg-[#ecedee] rounded-lg relative overflow-hidden'>
                                <div className="absolute inset-0 shimmer z-10"></div>
                            </div>
                            <div className='w-[96%] h-3 sm:h-4 bg-[#ecedee] rounded-lg relative overflow-hidden'>
                                <div className="absolute inset-0 shimmer z-10"></div>
                            </div>
                            <div className='w-[96%] h-3 sm:h-4 bg-[#ecedee] rounded-lg relative overflow-hidden'>
                                <div className="absolute inset-0 shimmer z-10"></div>
                            </div>
                            <div className='w-[96%] h-3 sm:h-4 bg-[#ecedee] rounded-lg relative overflow-hidden'>
                                <div className="absolute inset-0 shimmer z-10"></div>
                            </div>
                            <div className='w-[96%] h-3 sm:h-4 bg-[#ecedee] rounded-lg relative overflow-hidden'>
                                <div className="absolute inset-0 shimmer z-10"></div>
                            </div>
                            <div className='w-[96%] h-3 sm:h-4 bg-[#ecedee] rounded-lg relative overflow-hidden'>
                                <div className="absolute inset-0 shimmer z-10"></div>
                            </div>
                            <div className='w-[96%] h-3 sm:h-4 bg-[#ecedee] rounded-lg relative overflow-hidden'>
                                <div className="absolute inset-0 shimmer z-10"></div>
                            </div>
                            <div className='w-[96%] h-3 sm:h-4 bg-[#ecedee] rounded-lg relative overflow-hidden'>
                                <div className="absolute inset-0 shimmer z-10"></div>
                            </div>
                            <div className='w-[70%] h-3 sm:h-4 bg-[#ecedee] rounded-lg relative overflow-hidden'>
                                <div className="absolute inset-0 shimmer z-10"></div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

const PostCard = ({ postsData, isLoading }: { postsData: IPost[], isLoading: boolean }) => {
    const dispatch = useDispatch();
    const postsState = useSelector((state: RootState) => state.postReducer.posts);
    return (
        <div className='posts_cards grid auto-rows-[222px] sm:auto-rows-[270px] grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-2.5'>
            {
                isLoading ? <LoadingPosts cardsPerPage={20} /> :
                    postsData?.map(item => (
                        <div key={item.id} className='bg-gray-50 border border-gray-100 rounded-lg p-2.5 flex flex-col gap-1.5'>
                            <div className='flex items-start justify-between gap-1.5'>
                                <p className='text-xs sm:text-sm font-medium line-clamp-2'>{item.title}</p>
                                {
                                    postsState.some(i => i.id === item.id) ?
                                        <PiBookmarkSimpleFill onClick={() => dispatch(addToSaved(item))} className='text-xl cursor-pointer shrink-0' />
                                        :
                                        <PiBookmarkSimpleThin onClick={() => dispatch(addToSaved(item))} className='text-xl cursor-pointer shrink-0' />
                                }
                            </div>
                            <p className='text-xs sm:text-sm text-gray-500 line-clamp-10'>{item.body}</p>
                        </div>
                    ))
            }
        </div>
    )
}

export default React.memo(PostCard);