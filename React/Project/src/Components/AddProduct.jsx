import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../Slices/productSlices'

const AddProduct = () => {
    const dispatch = useDispatch()
    const[formData,setFormData] = useState({
        prodCat:"",
        prodName:"",
        prodPrice:"",
        prodDesc:"",
        Image:""
    })
    const handleChange = (e)=>{
  const { name, value, files } = e.target

  if (files) {
    setFormData({
      ...formData,
      [name]: URL.createObjectURL(files[0])
    })
  } else {
    setFormData({
      ...formData,
      [name]: value
    })
  }
}
    const handleSumbit = (e)=>{
        e.preventDefault()
        const newProd = {
            id:Date.now(),
            ...formData
        }
        dispatch(addProduct(newProd))
        setFormData({
            prodCat:"",
            prodName:"",
            prodPrice:"",
            prodDesc:"",
            Image:""
        })
        alert(e.target.value)
    }
  return (
    <div className='AddProduct'>
        <form onSubmit={handleSumbit}>
            <input type='text' name='prodCat' onChange={handleChange} placeholder='category' value={formData.prodCat}></input>
            <input type='text' name='prodName' onChange={handleChange} placeholder='product Name' value={formData.prodName}></input>
            <input type='number' name='prodPrice' onChange={handleChange} placeholder='price' value={formData.prodPrice}></input>
            <input type='text' name='prodDesc' onChange={handleChange} placeholder='Desc' value={formData.prodDesc}></input>
            <input type='file'name='Image'  onChange={handleChange} />
            <button type='submit'>Add Product</button>
        </form>
    </div>
  )
}

export default AddProduct