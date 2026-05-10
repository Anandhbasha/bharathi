import MCas from "../assets/Images/Cas.Webp"
import TshirtM from "../assets/Images/Tshirt.jpg"
import MFor from "../assets/Images/formal.jpg"
import WTop from "../assets/Images/tops.jpg"
import Wlegg from "../assets/Images/leggin.jpg"
import Wshirt from "../assets/Images/formalwomen.jpg"
import kid1 from "../assets/Images/kids1.jpg"
import kid2 from "../assets/Images/frogKids.jpg"
import kid3 from "../assets/Images/tho.jpg"
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    Products :[
        {
          id:1,
          prodCat:"Mens",
          prodName:"Casual Shirt",
          prodPrice:500,
          prodDesc:"Casula shirt is good shirt",
          Image:MCas
        },
        {
          id:2,
          prodCat:"Mens",
          prodName:"Formal Shirt",
          prodPrice:400,
          prodDesc:"CasFormal shirt is good shirt",
          Image:MFor
        },
        {
          id:3,
          prodCat:"Mens",
          prodName:"Casual TShirt",
          prodPrice:300,
          prodDesc:"Casual TShirt is good shirt",
           Image:TshirtM
        },
        {
          id:4,
          prodCat:"Womens",
          prodName:"Formal Shirt",
          prodPrice:600,
          prodDesc:"Formal shirt is good shirt",
          Image:Wshirt
        },
        {
          id:5,
          prodCat:"Womens",
          prodName:"Tops",
          prodPrice:200,
          prodDesc:"Tops is good shirt",
          Image:WTop
        },
        {
          id:6,
          prodCat:"Womens",
          prodName:"Leggins",
          prodPrice:150,
          prodDesc:"Leggin is good shirt",
          Image:Wlegg
        },
        {
          id:7,
          prodCat:"Kids",
          prodName:"Dhoththi",
          prodPrice:200,
          prodDesc:"Dhoththi shirt is good shirt",
          Image:kid1
        },
        {
          id:8,
          prodCat:"Kids",
          prodName:"Frogs",
          prodPrice:200,
          prodDesc:"Frogs is good shirt",
          Image:kid2
        },
        {
          id:9,
          prodCat:"Kids",
          prodName:"Set T Shirts",
          prodPrice:150,
          prodDesc:"Set T Shirts is good shirt",
          Image:kid3
        },
    
      ]
}

export const productSlice = createSlice({
    name:"Product",
    initialState,
    reducers:{
      addProduct:(state,action)=>{
        state.Products.push(action.payload)
      }
    }
})


export const {addProduct} = productSlice.actions