import Card from '../Components/Card'

const Womens = () => {
  return (
    <div className='Womens'>
        {
          WomensProduct.map((item)=>(
            <Card {...item}/>
          ))
        }
    </div>
  )
}

export default Womens