import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  cartItem: JSON.parse(localStorage.getItem("cart")) || [],
  showCart: false,
  totalAmount: 0
}

const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {

    addtoCart: (state, action) => {
      state.cartItem.push(action.payload)
      localStorage.setItem("cart", JSON.stringify(state.cartItem))
    },

    removeFromCart: (state, action) => {
      state.cartItem = state.cartItem.filter(
        (item) => item.id !== action.payload
      )

      localStorage.setItem("cart", JSON.stringify(state.cartItem))
    },

    toggleCart: (state) => {
      state.showCart = !state.showCart
    },

    calculateTotal: (state) => {
      state.totalAmount = state.cartItem.reduce(
        (total, item) => total + item.price,
        0
      )
    },

    clearCart: (state) => {
      state.cartItem = []
      localStorage.removeItem("cart")
    }

  }
})

export const {
  addtoCart,
  removeFromCart,
  toggleCart,
  calculateTotal,
  clearCart
} = cartSlice.actions

export default cartSlice




// let value = "
// [
// {
// }
// ]"