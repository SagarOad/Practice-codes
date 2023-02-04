import React from 'react'
import Card from '../Components/Card'
import Data from '../Data/ProductData'


const Home = () => {
    const cardsRow = Data.map((data)=> {
     return <Card key={data.key} title={data.title} desc={data.desc} btnTxt={data.btnTxt} img={data.img} />
    })
  return (
    <div className='home-main'>
      <div className='card-container'>
       {cardsRow}
      </div>
    </div>
  )
}

export default Home