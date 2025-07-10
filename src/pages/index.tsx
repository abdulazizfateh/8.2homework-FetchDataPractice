import React, { lazy } from 'react'
import { useRoutes } from 'react-router-dom';
const Layout = lazy(() => import("./Layout/Layout"));
const Quotes = lazy(() => import("./Quotes/Quotes"));
const Products = lazy(() => import("./Products/Products"));
const Comments = lazy(() => import("./Comments/Comments"));
const Users = lazy(() => import("./Users/Users"));
const Posts = lazy(() => import("./Posts/Posts"));
const Recipes = lazy(() => import("./Recipes/Recipes"));
const Saved = lazy(() => import("./Saved/Saved"));

const AppRoutes = () => {
  return (
    <>
      {
        useRoutes(
          [
            {
              path: "/", element: <Layout />, children: [
                {
                  path: "/", element: <Quotes />,
                },
                {
                  path: "/products", element: <Products />,
                },
                {
                  path: "/comments", element: <Comments />
                },
                {
                  path: "/users", element: <Users />
                },
                {
                  path: "/posts", element: <Posts />
                },
                {
                  path: "/recipes", element: <Recipes />
                },
                {
                  path: "/saved", element: <Saved />
                }
              ]
            }
          ]
        )
      }
    </>
  )
}

export default React.memo(AppRoutes);