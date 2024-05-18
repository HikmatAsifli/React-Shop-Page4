import React, { useContext } from 'react'
import './Menu.css'
import MainContext from '../../../context/context'

const Menu = () => {
    const {data} =useContext(MainContext)
  return (
    <section className='menu'>
        <span>OUR MENU</span>
        <h2>Discover Our Exclusive Menu</h2>
        <div className="cardspawn">
            {
                data.map((item,index)=>{
                    return (<Card key={index} item={item} />)
                })
            }
        </div>
    </section>
  )
}

export default Menu