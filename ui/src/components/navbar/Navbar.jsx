import React from 'react'
import './nav.scss'
import { BsCart, BsSearch } from "react-icons/bs";
import { Link, NavLink } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react';
import { fetchCategories } from '../../store/categorySlice';
import { getCartTotal } from '../../store/cartSlice';
const Navbar = () => {
    const dispatch = useDispatch();
    const {data:categories} = useSelector((state)=>state.category)
    const {totalItems} = useSelector((state)=>state.cart)
    useEffect(()=>{
        dispatch(fetchCategories())
        dispatch(getCartTotal())
    },[dispatch])
    // console.log(categories[2].name)
  return (
    <div className="navbar-data">
      <div className='navbar'>
        <Link to='/' className="left">
            <span>Shopping</span>
            <span>HUB</span>
        </Link>
        <div className="right">
            <div className="search-box">
                <form>
                    <input placeholder='search here..'/>
                    <button>
                     <BsSearch/>
                    </button>
                </form>
            </div>
            <div className="cart">
            <BsCart className='icon'/>
            <span className='count'>{totalItems}</span>
            </div>
        </div>
    </div>
    <div className="nav-areas">
        <div className="nav-c">
            <ul className="nav-links">
              {categories.map((category)=>(
                 <li key={category.id}>
                 <NavLink to={`/category/${category.id}`} className='nav-link'>{category.name}</NavLink>
             </li>
              ))}
            </ul>
        </div>
    </div>
    </div>
  )
}

export default Navbar