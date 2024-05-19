import React, { useContext } from 'react'
import './Menu.css'
import MainContext from '../../../context/context'
import { Link } from 'react-router-dom'

const Menu = () => {
    const { data, addToBasket } = useContext(MainContext)
    return (
        <section className='menu'>
            <span>OUR MENU</span>
            <h2>Discover Our Exclusive Menu</h2>
            <div className="container">
                <div className="row">
                    {
                        data.map((item) => (
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div key={item._id} className="card" style={{ width: "18rem" }}>
                                    <img src={item.image} alt={item.title} className="card-img-top" />
                                    <div className="card-body">
                                        <h5 className='card-title'>{item.title}</h5>
                                        <p className='card-text'>{item.price}</p>
                                        <br />
                                        <Link className="btn btn-success" onClick={() => addToBasket(item._id)}>
                                            Add to Basket
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Menu