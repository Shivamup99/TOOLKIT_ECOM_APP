import { createSlice } from "@reduxjs/toolkit";

const fetchFromLocalStorage = ()=>{
    let cart = localStorage.getItem('cart');
    if(cart){
        return JSON.parse(localStorage.getItem('cart'))
    } else{
        return [];
    }
}

const storeLocalStorage =(data)=>{
    localStorage.setItem('cart',JSON.stringify(data))
}


const cartSlice = createSlice({
    name:'cart',
    initialState:{
        data:fetchFromLocalStorage(),
        totalItems:0,
        totalAmount:0,
        deliveryCharge:500
    },
    reducers:{
        addToCart(state,action){
            const filterItem = state.data.find(item=>item.id===action.payload.id);
            if(filterItem){
                const itemCart = state.data.map(item=>{
                    if(item.id === action.payload.id){
                        let newQty = item.quantity + action.payload.quantity
                        let newTotalPrice = newQty * item.price;
                        return{
                            ...item , quantity:newQty, totalPrice:newTotalPrice
                        }
                    } else{
                        return item;
                    }
                })
                state.data = itemCart;
                storeLocalStorage(state.data)
            } else{
                state.data.push(action.payload)
                storeLocalStorage(state.data)
            }
        },
        removeFromCart(state,action){
            const itemCart = state.data.filter(item=>item.id!==action.payload)
            state.data = itemCart
            storeLocalStorage(state.data)
        },
        clearCart(state){
            state.data =[];
            storeLocalStorage(state.data)
        },
        getCartTotal(state){
            state.totalAmount = state.data.reduce((cartTotal,cartItem)=>{
                return cartTotal+= cartItem.totalPrice
            },0)
            state.totalItems = state.data.length;
        },
        toggalCartItems(state,action){
            let tempCart = state.data.map(item=>{
                if(item.id===action.payload){
                    let tempQty = item.quantity;
                    let tempTotalPrice = item.totalPrice
                    if(action.payload.type==='INC'){
                        tempQty++;
                        tempTotalPrice = tempQty * item.price
                    }else if(action.payload.type==='DEC'){

                        tempQty--;
                        if(tempQty<1) tempQty=1;
                        tempTotalPrice = tempQty * item.price
                    }
                    return {...item,quantity:tempQty,totalPrice:tempTotalPrice}
                } else{
                    return item;
                }
            });
            state.data = tempCart;
            storeLocalStorage(state.data)
        }
        
    }
});

export const {addToCart,removeFromCart,clearCart,getCartTotal,toggalCartItems} = cartSlice.actions;
export default cartSlice.reducer;