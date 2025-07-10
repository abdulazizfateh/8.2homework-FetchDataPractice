import React from 'react'
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import type { IRecipe } from '../../types/types';
import RecipeCard from '../../components/RecipeCard/RecipeCard';

const Recipes = () => {
    // React Query
    const getRecipesData = () => {
        return axios.get(`https://dummyjson.com/recipes?limit=20&skip=20`)
    }

    const response = useQuery({
        queryKey: ["recipes"],
        queryFn: getRecipesData
    })

    const recipesData: IRecipe[] = response?.data?.data?.recipes;
    const isLoading: boolean = response?.isLoading;
    console.log({ recipesData, isLoading });

    return (
        <section className='section_recipes'>
            <div className="container">
                <div className='recipes_wrapper'>
                    <h1 className='text-xl md:text-2xl font-semibold mb-3.5'>Recipes</h1>
                    <RecipeCard recipesData={recipesData} isLoading={isLoading} />
                </div>
            </div>
        </section>
    )
}

export default React.memo(Recipes);