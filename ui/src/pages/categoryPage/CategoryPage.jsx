import React from 'react'
import { STATUS } from '../../utils/status'
import Error from '../../components/error/Error'
import Loader from '../../components/loader/Loader'
import {formatePrice} from '../../utils/healper'
import './category.scss'
import { useDispatch, useSelector } from 'react-redux'
import {setIsModalVisible , setModalData} from '../../store/modalSlice'
import Product from '../../components/singleProduct/Product'
const CategoryPage = ({products,status}) => {
    const dispatch = useDispatch();
    const {isModalVisible} = useSelector((state)=>state.modal);
    const viewModal =(data)=>{
        dispatch(setModalData(data))
        dispatch(setIsModalVisible(data))
        console.log(data)
    }
  if(status===STATUS.ERROR) return (<Error/>);
  if(status===STATUS.LOADING) return(<Loader/>);
 
  return (
    <section className='single-category'>
        {isModalVisible && <Product/>}
        <div className="container">
            <div className="cat-content">
                <div className="section-title">
                    <h3>{products[0].category.name}</h3>
                </div>
                <div className="product-items">
                    {
                        products.map((product)=>(
                            <div className="product-item" key={product.id} onClick={()=>viewModal(product)}>
                              <div className="product-item-img">
                                <img src={product.images[0]} alt={product.title}/>
                                <div className="product-item-cat">
                                   <span> {product.category.name}</span>
                                </div>
                              </div>
                              <div className="product-item-body">
                                <div className="product-item-title">
                                    <h6>{product.title}</h6>
                                    <div className="product-price">
                                        {formatePrice(product.price)}
                                    </div>
                                </div>
                              </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default CategoryPage