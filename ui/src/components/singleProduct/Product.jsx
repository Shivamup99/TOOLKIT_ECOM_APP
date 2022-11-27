import React from 'react'
import { useState } from 'react'
import { BsCart, BsDash, BsPlus, BsXCircle } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addToCart } from '../../store/cartSlice'
import { setIsModalVisible } from '../../store/modalSlice'
import { formatePrice } from '../../utils/healper'
import './product.scss'

const Product = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {data:product} = useSelector((state)=>state.modal);
    const [qty,setQty] = useState(1);
    const incQty =()=>{
        setQty((preQty)=>{
            let newQty = preQty + 1;
            if(newQty>10){
                alert('not more than 10 product can add a time')
            }
            return newQty
        })
    }

    const decQty =()=>{
        setQty((preQty)=>{
            let newQty = preQty - 1;
            if(newQty<1){
                newQty = 1
            }
            return qty;
        })
    }
    const addToCartHandler =(product)=>{
      let totalPrice = qty * product.price
      const tempProduct = {
        ...product , quantity:qty,totalPrice
      }
      dispatch(addToCart(tempProduct))
      dispatch(setIsModalVisible(false))
      navigate('/cart')
    }
  return (
    <div className='s-product'>
        <div className="product-detail-modal">
            <button className="close-button" onClick={()=>dispatch(setIsModalVisible(false))}>
                <BsXCircle/>
            </button>
            <div className="detail-content">
                <div className="detail-left">
                    <div className="detail-img">
                        <img src={product.images[0]} alt={product.title}/>
                    </div>
                </div>
                <div className="detail-right">
                    <div className="detail-info">
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                        <div className="price">Price: {formatePrice(product.price)}</div>
                        <div className="qty">
                            <span className='qty-text'>Qty: </span>
                            <div className="qty-change">
                            <button className='qty-dec' onClick={()=>decQty()}>
                                <BsDash/>
                            </button>
                            <span className='qty-value'>{qty}</span>
                            <button className='qty-dec' onClick={()=>incQty()}>
                                <BsPlus/>
                            </button>
                            </div>
                        </div>
                        <button type='button' className='btn btn-primary add-btn' onClick={()=>addToCartHandler(product)}>
                            <span className="btn-icon">
                                <BsCart/>
                            </span>
                            <span className="btn-text">
                                Add To Cart
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product