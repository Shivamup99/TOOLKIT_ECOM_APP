import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setIsModalVisible, setModalData } from '../../store/modalSlice';
import { STATUS } from '../../utils/status';
import Error from '../error/Error';
import Loader from '../loader/Loader';
import Product from '../singleProduct/Product';
import { formatePrice } from '../../utils/healper';
import './products.scss'
const ProductList = ({products,status}) => {
    //console.log(products)
    const dispatch = useDispatch()
    const {isModalVisible} = useSelector((state)=>state.modal);
    const viewModal = (data)=>{
        dispatch(setModalData(data))
        dispatch(setIsModalVisible(data))
    }
    if(status===STATUS.ERROR) return (<Error/>);
    if(status===STATUS.LOADING) return(<Loader/>);
  return (
    <section className='product-lists'>
        {isModalVisible && <Product/>}

        <div className="container">
            <div className="product-content">
                <div className="section-title">
                    <h3>Our Products</h3>
                </div>
                <div className="product-items">
                {
                        products.slice(0,10).map((product)=>(
                            <div className="product-item" key={product.id} onClick={()=>viewModal(product)}>
                              <div className="product-item-img">
                                <img src={product.images[0] ? product.images[0]:'https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-4.png'} alt={product.title}/>
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

export default ProductList