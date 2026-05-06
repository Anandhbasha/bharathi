import React, { createContext, useState } from 'react'
import Navabar from './Components/Navabar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AllProducts from './Pages/AllProducts'
import Mens from './Pages/Mens'
import Womens from './Pages/Womens'
import Kids from './Pages/Kids'
import "./App.css"
import Shirt1 from './assets/Images/shirt1.webp'
import Shirt2 from './assets/images/shirt2.avif' 
import Shirt3 from './assets/images/shirt3.webp' 
import Shirt4 from './assets/images/shirt4.avif' 
import Shirt5 from './assets/images/shirt5.webp' 
import Shirt6 from './assets/images/shirt6.jpg' 
import Shirt7 from './assets/images/shirt7.avif' 
import Shirt8 from './assets/images/shirt8.webp' 
import Shirt9 from './assets/images/shirt9.webp' 
import Shirt10 from './assets/images/shirt10.webp'
import Sari1 from './assets/images/sari1.jpg'
import Saree2 from './assets/images/saree2.jpg'
import Saree3 from './assets/images/saree3.jpg'
import Saree4 from './assets/images/saree4.avif'
import Saree5 from './assets/images/saree5.webp'
import Saree6 from './assets/images/saree6.jpeg'
import Saree7 from './assets/images/saree7.jpeg'
import Saree8 from './assets/images/saree8.webp'
import Saree9 from './assets/images/saree9.webp'
import Saree10 from './assets/images/saree10.webp' 

export const ShareValue = createContext() 

const App = () => {
  const [count,setCount] = useState(0)
  const all = [
    {
      prodCat:"Mens",
      productName: "Classic Shirt",
      productPrice: "Rs: 750",
      productDesrc: "Soft, breathable cotton with classic stripes that add a touch of sophistication to any outfit.",
      image: Shirt1
    },
    {
      prodCat:"Mens",
      productName: "Flannel Button-Down Shirt",
      productPrice: "Rs: 750",
      productDesrc: "Cozy and warm, this flannel shirt is perfect for cooler weather with a classic plaid pattern.",
      image: Shirt2
    },
    {
      prodCat:"Mens",
      productName: "Button-Down Shirt with Pocket",
      productPrice: "Rs: 700",
      productDesrc: "A classic button-down shirt featuring a chest pocket for added functionality and style.",
      image: Shirt3
    },
    {
      prodCat:"Mens",
      productName: "Embroidered Shirt",
      productPrice: "Rs: 950",
      productDesrc: "A stylish shirt with intricate embroidery that adds an elegant touch to casual wear.",
      image: Shirt4
    },
    {
      prodCat:"Mens",
      productName: "Hooded Shirt",
      productPrice: "Rs: 800",
      productDesrc: "Combining the comfort of a hoodie with the style of a shirt, perfect for a casual yet cozy look.",
      image: Shirt5
    },
    {
      prodCat:"Mens",
      productName: "Long Sleeve Button-Down Shirt",
      productPrice: "Rs: 900",
      productDesrc: "A versatile shirt suitable for any occasion, from work to weekend outings.",
      image: Shirt6
    },
    {
      prodCat:"Mens",
      productName: "Sheer Silk Shirt",
      productPrice: "Rs: 1200",
      productDesrc: "A luxurious and elegant sheer silk shirt that adds sophistication to any outfit.",
      image: Shirt7
    },
    {
      prodCat:"Mens",
      productName: "Checked Flannel Shirt",
      productPrice: "Rs: 850",
      productDesrc: "A stylish, warm flannel shirt with a timeless checked pattern, perfect for layering.",
      image: Shirt8
    },
    {
      prodCat:"Mens",
      productName: "Casual Chambray Shirt",
      productPrice: "Rs: 700",
      productDesrc: "A light and comfortable chambray shirt that's perfect for warm weather or a laid-back casual look.",
      image: Shirt9
    },
    {
      prodCat:"Mens",
      productName: "Rugged Utility Shirt",
      productPrice: "Rs: 950",
      productDesrc: "A durable, utility-style shirt with multiple pockets for functionality and a stylish rugged look.",
      image: Shirt10
    },
    { 
      prodCat:"Womens",
      productName: "Classic Silk Saree",
      productPrice: "Rs: 1500",
      productDesrc: "Elegantly designed with traditional motifs, this silk saree is perfect for weddings and festivals.",
      image: Sari1
    },
    {
      prodCat:"Womens",
      productName: "Georgette Saree",
      productPrice: "Rs: 1200",
      productDesrc: "Flowy and lightweight, this georgette saree offers a graceful drape, ideal for evening parties.",
      image: Saree2
    },
    {
      prodCat:"Womens",
      productName: "Banarasi Silk Saree",
      productPrice: "Rs: 5000",
      productDesrc: "A luxurious Banarasi silk saree with intricate gold patterns, a timeless choice for formal events.",
      image: Saree3
    },
    {
      prodCat:"Womens",
      productName: "Kanjivaram Saree",
      productPrice: "Rs: 8000",
      productDesrc: "This Kanjivaram saree features rich zari work, making it a magnificent piece for traditional ceremonies.",
      image: Saree4
    },
    {
      prodCat:"Womens",
      productName: "Cotton Saree",
      productPrice: "Rs: 700",
      productDesrc: "Lightweight and breathable, this cotton saree is perfect for daily wear, offering comfort and elegance.",
      image: Saree5
    },
    {
      prodCat:"Womens",
      productName: "Chiffon Saree",
      productPrice: "Rs: 1300",
      productDesrc: "This chiffon saree flows beautifully with a soft and delicate feel, ideal for casual parties and get-togethers.",
      image: Saree6
    },
    {
      prodCat:"Womens",
      productName: "Linen Saree",
      productPrice: "Rs: 1100",
      productDesrc: "Made with premium linen, this saree offers a modern and minimalistic design with a luxurious feel.",
      image: Saree7
    },
    {
      prodCat:"Womens",
      productName: "Embroidered Saree",
      productPrice: "Rs: 2200",
      productDesrc: "Intricate embroidery work makes this saree a perfect choice for weddings and grand celebrations.",
      image: Saree8
    },
    {
      prodCat:"Womens",
      productName: "Net Saree",
      productPrice: "Rs: 1500",
      productDesrc: "A contemporary net saree with stunning embellishments, ideal for evening events and cocktail parties.",
      image: Saree9
    },
    {
      prodCat:"Womens",
      productName: "Patola Silk Saree",
      productPrice: "Rs: 6000",
      productDesrc: "A stunning Patola silk saree with geometric patterns, known for its rich texture and vibrant colors.",
      image: Saree10
    }
  ];
  return (
    <BrowserRouter>
      <ShareValue.Provider value={{all,count,setCount}}>
        <div className='App'>
          <Navabar />
        </div>
        <Routes>
          <Route path='/' element={<AllProducts/>}/>
          <Route path='/mens' element={<Mens/>}/>
          <Route path='/womens' element={<Womens/>}/>
          <Route path='/kids' element={<Kids/>}/>
        </Routes>
      </ShareValue.Provider>
    </BrowserRouter>
  )
}

export default App