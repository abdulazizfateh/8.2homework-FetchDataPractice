import React from 'react'
import { PiBookmarkSimpleFill, PiBookmarkSimpleThin } from "react-icons/pi";
import type { IRecipe } from '../../types/types';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import { addToSaved } from '../../redux/features/recipeSlice';

const LoadingRecipes = ({ cardPerPage }: { cardPerPage: number }) => {
    const loadingArray: string[] = Array(cardPerPage).fill("");
    return (
        <>
            {
                loadingArray.map((_, index) => (
                    <div key={index} className='border border-gray-100 rounded-lg'>
                        <div className='h-40 md:h-[265px] bg-gray-50 relative overflow-hidden'>
                            <div className='absolute z-10 shimmer inset-0'></div>
                        </div>
                        <div className='h-[64px]'>
                            <div className='p-2.5 flex flex-col gap-2'>
                                <div className='flex items-center justify-between'>
                                    <div className='w-1/3 md:w-1/4 h-[14px] sm:h-[18px] bg-[#ecedee] rounded-lg relative overflow-hidden'>
                                        <div className='absolute z-10 shimmer inset-0'></div>
                                    </div>
                                    <PiBookmarkSimpleThin className='text-xl cursor-pointer' />
                                </div>
                                <div className='w-3/4 md:w-2/4 h-[14px] sm:h-[18px] bg-[#ecedee] rounded-lg relative overflow-hidden'>
                                    <div className='absolute z-10 shimmer inset-0'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

const RecipeCard = ({ recipesData, isLoading }: { recipesData: IRecipe[], isLoading: boolean }) => {
    const dispatch = useDispatch();
    const recipesState = useSelector((state: RootState) => state.recipeReducer.recipes);
    return (
        <div className='recipes_cards grid grid-cols-2 min-[440px]:grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-2.5'>
            {
                isLoading ? <LoadingRecipes cardPerPage={20} /> :
                    recipesData?.map(item => (
                        <div key={item.id} className='border border-gray-100 rounded-lg overflow-hidden'>
                            <div className=' bg-gray-50 overflow-hidden'>
                                <img loading='eager' className='w-full h-40 md:h-[265px] object-cover object-center cursor-pointer hover:scale-[1.01] duration-200 ease-out' src={item.image} alt={item.name} height={246} />
                            </div>
                            <div className='p-2.5 flex flex-col gap-1'>
                                <div className='flex items-center justify-between'>
                                    <p className='text-xs sm:text-sm font-medium'><span className='text-gray-600 font-normal'>Servings: </span>{item.servings}</p>
                                    {
                                        recipesState.some(i => i.id === item.id) ?
                                            <PiBookmarkSimpleFill onClick={() => dispatch(addToSaved(item))} className='text-xl cursor-pointer' />
                                            :
                                            <PiBookmarkSimpleThin onClick={() => dispatch(addToSaved(item))} className='text-xl cursor-pointer' />
                                    }
                                </div>
                                <p className='text-xs sm:text-sm'>{item.name}</p>
                            </div>
                        </div>
                    ))
            }
        </div>
    )
}

export default React.memo(RecipeCard);