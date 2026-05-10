import Card from '../Components/Card'

const Mens = () => {
  return (
    <div className='Mens'>
        {
          MensProduct.map((item)=>(
            <Card {...item}/>
          ))
        }
    </div>
  )
}

export default Mens