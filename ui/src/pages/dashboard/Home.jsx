import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Category from '../../components/category/Category'
import ProductList from '../../components/products/ProductList'
import SingleCategory from '../../components/singleCategory/SingleCategory'
import Slider from '../../components/slider/Slider'
import { fetchCategories, fetchProductByCategory } from '../../store/categorySlice'
import {fetchProducts} from '../../store/productSlice'
import CategoryPage from '../categoryPage/CategoryPage'
const Home = () => {
  const dispatch = useDispatch()
  const{data:categories,status:categoryStatus} = useSelector((state)=>state.category)
  useEffect(()=>{
    dispatch(fetchProducts())
    dispatch(fetchCategories())
    dispatch(fetchProductByCategory(1,'all'))
    dispatch(fetchProductByCategory(2,'all'))
  },[dispatch])
  const {catProductAll : productsByCategory,catProductAllStatus} = useSelector((state)=>state.category) 
  const {data:products , status:productStatus} = useSelector((state)=>state.product);
  return (
    <div className="home">
      <Slider/>
    <div className='container'>
     <Category categories={categories} status={categoryStatus}/>
     </div>
     <div>
     <ProductList products={products} status={productStatus}/>
    </div>
    <div>
      {/* <CategoryPage products={Catproducts} status={productStatus}/> */}
    </div>
    <section>
      {
        productsByCategory[1] && <SingleCategory products ={productsByCategory[1]} status={catProductAllStatus}/> 
      }
    </section>
    <section>
      {
        productsByCategory[0] && <SingleCategory products ={productsByCategory[0]} status={catProductAllStatus}/> 
      }
    </section>
    </div>
  )
}

export default Home