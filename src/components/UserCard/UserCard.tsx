import React from 'react'
import type { IUser } from '../../types/types';
import { PiBookmarkSimpleFill, PiBookmarkSimpleThin } from "react-icons/pi";
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import { addToSaved } from '../../redux/features/userSlice';

const LoadingUsers = ({ cardsPerPage }: { cardsPerPage: number }) => {
    const loadingArray = Array(cardsPerPage).fill("");
    return (
        <>
            {
                loadingArray.map((_, index) => (
                    <div key={index} className='border border-gray-100 bg-gray-50 rounded-lg p-2.5'>
                        <div className='flex items-center justify-between'>
                            <p className='text-xs sm:text-sm'><span className='text-gray-700'>Firstname: </span></p>
                            <PiBookmarkSimpleThin className='text-xl cursor-pointer shrink-0' />
                        </div>
                        <p className='text-xs sm:text-sm'><span className='text-gray-700'>Lastname: </span></p>
                        <p className='text-xs sm:text-sm text-[#05a6f4]'>@</p>
                        <p className='text-xs sm:text-sm'></p>
                    </div>
                ))
            }
        </>
    )
}

const UserCard = ({ usersData, isLoading }: { usersData: IUser[], isLoading: boolean }) => {
    const dispatch = useDispatch();
    const usersState = useSelector((state: RootState) => state.userReducer.users);
    return (
        <div className='users_cards grid auto-rows-[86px] sm:auto-rows-[102px] grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-2.5'>
            {
                isLoading ? <LoadingUsers cardsPerPage={30} /> :
                    usersData?.map(item => (
                        <div key={item.id} className='border border-gray-100 bg-gray-50 rounded-lg p-2.5'>
                            <div className='flex items-center justify-between'>
                                <p className='text-xs sm:text-sm line-clamp-1'><span className='text-gray-700'>Firstname:</span> {item.firstName}</p>
                                {
                                    usersState.some(i => i.id === item.id) ?
                                        <PiBookmarkSimpleFill onClick={() => dispatch(addToSaved(item))} className='text-xl cursor-pointer shrink-0' />
                                        :
                                        <PiBookmarkSimpleThin onClick={() => dispatch(addToSaved(item))} className='text-xl cursor-pointer shrink-0' />
                                }
                            </div>
                            <p className='text-xs sm:text-sm line-clamp-1'><span className='text-gray-700'>Lastname: </span>{item.lastName}</p>
                            <p className='text-xs sm:text-sm text-[#05a6f4]'>@{item.username}</p>
                            <p className='text-xs sm:text-sm line-clamp-1'>{item.email}</p>
                        </div>
                    ))
            }
        </div>
    )
}

export default React.memo(UserCard);