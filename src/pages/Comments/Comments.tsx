import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CommentCard from '../../components/CommentCard/CommentCard';
import type { IComment } from '../../types/types';

const Comments = () => {
    // Axios - then/catch
    const [commentsData, setCommentsData] = useState<IComment[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);
    useEffect(() => {
        setIsLoading(true);
        setError(null);
        axios.get(`https://dummyjson.com/comments?limit=30`)
            .then(res => {
                setCommentsData(res.data.comments);
            })
            .catch(e => {
                const err = e instanceof Error ? e : new Error("Unknown Error");
                console.log(err);
                setError(err);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }, [])
    console.log({ commentsData, isLoading, error });

    return (
        <section className='section_comments'>
            <div className='container'>
                <div className='comments_wrapper'>
                    <h1 className='text-xl md:text-2xl font-semibold mb-3.5'>Comments</h1>
                    <CommentCard commentsData={commentsData} isLoading={isLoading} />
                </div>
            </div>
        </section>
    )
}

export default React.memo(Comments);