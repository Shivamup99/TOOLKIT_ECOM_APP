import React from "react";
import { useEffect } from "react";
import {
  BsChevronRight,
  BsHouseFill,
  BsTrash,
  BsDash,
  BsPlus,
} from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart, getCartTotal, removeFromCart } from "../../store/cartSlice";
import { formatePrice } from "../../utils/healper";
import { toggalCartItems} from '../../store/cartSlice'
import "./cart.scss";
const Cart = () => {
  const dispatch = useDispatch();
  const {
    data: cartProducts,
    totalItems,
    totalAmount,
    deliveryCharge,
  } = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(getCartTotal());
  }, [useSelector((state) => state.cart)]);
  const emptyCart = <h4>No Item </h4>;
  return (
    <div className="cart-page">
      <div className="container">
        <div className="bread">
          <ul className="bread-items">
            <li className="bread-item">
              <Link to="/">
                <span className="home-icon">
                <BsHouseFill />
                </span>
                <span className="bread-sep">
                  <BsChevronRight />
                </span>
              </Link>
            </li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="section-title">
            <h3>My Cart</h3>
            <button className=" btn btn-danger clear-cart" onClick={()=>dispatch(clearCart())}>Clear Cart</button>
          </div>
          {cartProducts.length === 0 ? (
            emptyCart
          ) : (
            <div className="cart-content">
              <div className="cart-left">
                <div className="cart-items">
                  {cartProducts.map((cartProduct) => (
                    <div className="cart-item" key={cartProduct.id}>
                      <div className="cart-item-img">
                        <img
                          src={cartProduct.images[0]}
                          alt={cartProduct.title}
                        />
                      </div>
                      <div className="cart-item-info">
                        <h6>{cartProduct.title}</h6>
                        <div className="qty">
                          <span className="qty-text">Qty: </span>
                          <div className="qty-change">
                            <button className="qty-dec" onClick={()=>dispatch(toggalCartItems({id:cartProduct.id,type:'DEC'}))}>
                              <BsDash />
                            </button>
                            <span className="qty-value">
                              {cartProduct.quantity}
                            </span>
                            <button className="qty-dec" onClick={()=>dispatch(toggalCartItems({id:cartProduct.id,type:'INC'}))}>
                              <BsPlus />
                            </button>
                          </div>
                        </div>
                        <div className="flex-between flex">
                            <div className="price">Price: {formatePrice(cartProduct.price)}
                            <button className="rmv-from-cart" onClick={()=>dispatch(removeFromCart(cartProduct.id))}>
                          <BsTrash />
                        </button>
                            </div>
                            <div className="sub-total">
                                <span>Sub Total: </span>
                                <span>{formatePrice(cartProduct.totalPrice)}</span>
                            </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="cart-right">
                <h6>Order Summary</h6>
                <ul className="cart-summary">
                    <li className="flex flex-between">
                    <span>Total {totalItems} item(s) Price</span>
                    <span>{formatePrice(totalAmount)}</span>
                    </li>
                   <li className="flex flex-between">
                    <span>Discount</span>
                    <span>
                    <span>-&nbsp;</span>
                    <span>{formatePrice(0)}</span>
                    </span>
                    
                   </li>
                   <li className="flex flex-between">
                    <span>Delivery Cost</span>
                    <span>
                    <span>+&nbsp;</span>
                    <span>{formatePrice(deliveryCharge)}</span>
                    </span>
                   </li>
                </ul>
                <div className="cart-summary-total">
                    <span>Grand Total</span>
                    <span>{formatePrice(totalAmount + deliveryCharge)}</span>

                </div>
                <div className="cart-summary-btn">
                    <button className="checkout">Proceed to Checkout</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
