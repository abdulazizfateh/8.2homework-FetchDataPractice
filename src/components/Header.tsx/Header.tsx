import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import "./style.css"
import { PiBookmarkSimpleThin } from 'react-icons/pi';
import { Popover, Space } from 'antd';
import { PiInfoThin } from "react-icons/pi";

const Header = () => {
  const content = (
    <div>
      <p><Link to="/quotes">/quotes</Link> - fetch with then/catch</p>
      <p><Link to="/products">/products</Link> - fetch with async/await inside try/catch</p>
      <p><Link to="/comments">/comments</Link> - axios with then/catch</p>
      <p><Link to="/users">/users</Link> - axios with async/await inside try/catch</p>
      <p><Link to="/posts">posts</Link> - tanstack query</p>
      <p><Link to="/recipes">/recipes</Link> - tanstack query</p>
    </div>
  );
  return (
    <header className='site_header bg-gray-50 border-b border-gray-200 relative'>
      <div className="container">
        <nav className='header_nav h-16 md:h-[70px] relative flex items-center justify-end sm:justify-between'>
          <div className='hidden sm:block'>
            <Space wrap>
              <Popover content={content} title="Practiced fetching data using different ways" trigger="click" placement="topLeft">
                <PiInfoThin className='text-2xl cursor-pointer' />
              </Popover>
            </Space>
          </div>
          <div className='absolute top-1/2 left-0 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2 flex items-center gap-1.5 sm:gap-4'>
            <NavLink className='header_nav_link link_hover text-sm sm:text-base select-none' to={"/"}>Quotes</NavLink>
            <NavLink className='header_nav_link link_hover text-sm sm:text-base select-none' to={"/products"}>Products</NavLink>
            <NavLink className='header_nav_link link_hover text-sm sm:text-base select-none' to={"/comments"}>Comments</NavLink>
            <NavLink className='header_nav_link link_hover text-sm sm:text-base select-none' to={"/users"}>Users</NavLink>
            <NavLink className='header_nav_link link_hover text-sm sm:text-base select-none' to={"/posts"}>Posts</NavLink>
            <NavLink className='header_nav_link link_hover text-sm sm:text-base select-none' to={"/recipes"}>Recipes</NavLink>
          </div>
          <div className='h-full flex items-center gap-0.5 sm:gap-2'>
            <NavLink className='header_nav_link text-sm sm:text-base select-none' to={"/saved"}>
              <PiBookmarkSimpleThin className='text-xl sm:text-2xl cursor-pointer' />
            </NavLink>
            <div className='sm:hidden flex items-center justify-center'>
              <Space wrap>
                <Popover content={content} title="Practiced fetching data using different ways" trigger="click" placement="bottomLeft">
                  <PiInfoThin className='text-xl cursor-pointer' />
                </Popover>
              </Space>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default React.memo(Header);