import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import PostCard from '../../components/PostCard/PostCard';
import type { IPost } from '../../types/types';

const Posts = () => {
    // React Query
    const response = useQuery({
        queryKey: ["post"],
        queryFn: () => axios.get(`https://dummyjson.com/posts?limit=20`)
    })
    const postsData: IPost[] = response?.data?.data?.posts;
    const isLoading: boolean = response?.isLoading;
    console.log({ postsData, isLoading });

    return (
        <section className='section_posts'>
            <div className="container">
                <div className='posts_wrapper'>
                    <h1 className='text-xl md:text-2xl font-semibold mb-3.5'>Posts</h1>
                    <PostCard postsData={postsData} isLoading={isLoading} />
                </div>
            </div>
        </section>
    )
}

export default React.memo(Posts);