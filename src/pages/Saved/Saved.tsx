import React from 'react'
import QuoteCard from '../../components/QuoteCard/QuoteCard';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import ProductCard from '../../components/ProductCard/ProductCard';
import CommentCard from '../../components/CommentCard/CommentCard';
import UserCard from '../../components/UserCard/UserCard';
import PostCard from '../../components/PostCard/PostCard';
import RecipeCard from '../../components/RecipeCard/RecipeCard';

const Saved = () => {
    const quotesState = useSelector((state: RootState) => state.quoteReducer.quotes);
    const productsState = useSelector((state: RootState) => state.productReducer.products);
    const commentsState = useSelector((state: RootState) => state.commentReducer.comments);
    const usersState = useSelector((state: RootState) => state.userReducer.users);
    const postsState = useSelector((state: RootState) => state.postReducer.posts);
    const recipesState = useSelector((state: RootState) => state.recipeReducer.recipes);
    return (
        <section className='section_saved'>
            <div className="container">
                <div className='saved_wrapper flex flex-col gap-12'>
                    <div className='quotes_wrapper'>
                        <h1 className='text-xl md:text-2xl font-semibold mb-3.5'>Quotes</h1>
                        {
                            quotesState.length <= 0 ? <div>
                                <p className='text-xs sm:text-sm text-gray-500'>Quotes not saved yet</p>
                            </div>
                                :
                                <QuoteCard quotesData={quotesState} isLoading={false} />
                        }
                    </div>
                    <div className='quotes_wrapper'>
                        <h1 className='text-xl md:text-2xl font-semibold mb-3.5'>Products</h1>
                        {
                            productsState.length <= 0 ? <div>
                                <p className='text-xs sm:text-sm text-gray-500'>Quotes not saved yet</p>
                            </div>
                                :
                                <ProductCard productsData={productsState} isLoading={false} />
                        }
                    </div>
                    <div className='quotes_wrapper'>
                        <h1 className='text-xl md:text-2xl font-semibold mb-3.5'>Comments</h1>
                        {
                            commentsState.length <= 0 ? <div>
                                <p className='text-xs sm:text-sm text-gray-500'>Quotes not saved yet</p>
                            </div>
                                :
                                <CommentCard commentsData={commentsState} isLoading={false} />
                        }
                    </div>
                    <div className='quotes_wrapper'>
                        <h1 className='text-xl md:text-2xl font-semibold mb-3.5'>Users</h1>
                        {
                            usersState.length <= 0 ? <div>
                                <p className='text-xs sm:text-sm text-gray-500'>Quotes not saved yet</p>
                            </div>
                                :
                                <UserCard usersData={usersState} isLoading={false} />
                        }
                    </div>
                    <div className='quotes_wrapper'>
                        <h1 className='text-xl md:text-2xl font-semibold mb-3.5'>Posts</h1>
                        {
                            postsState.length <= 0 ? <div>
                                <p className='text-xs sm:text-sm text-gray-500'>Quotes not saved yet</p>
                            </div>
                                :
                                <PostCard postsData={postsState} isLoading={false} />
                        }
                    </div>
                    <div className='quotes_wrapper'>
                        <h1 className='text-xl md:text-2xl font-semibold mb-3.5'>Recipes</h1>
                        {
                            recipesState.length <= 0 ? <div>
                                <p className='text-xs sm:text-sm text-gray-500'>Quotes not saved yet</p>
                            </div>
                                :
                                <RecipeCard recipesData={recipesState} isLoading={false} />
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default React.memo(Saved);