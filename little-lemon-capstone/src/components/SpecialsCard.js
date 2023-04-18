import React from 'react'
import "../components/styles/SpecialsCard.css"
import Dessert1 from "../components/assets/salad.jpg"
import Dessert2 from "../components/assets/bruschetta1.jpg"
import Dessert3 from "../components/assets/creme.jpg"
import { MdDeliveryDining } from "react-icons/md"
import { NavLink } from 'react-router-dom'

const SpecialsCard = () => {
    const specialMenus = [
        {   
            image: Dessert1,
            title: "Greek Salad",
            price: "$12.99",
            description: "The famous Greek salad of crispy lettuce, peppers, olives and our house-made herbed feta cheese, garnished with crunchy garlic croutons.",
            order: "Order delivery"
        },
        {
            image: Dessert2,
            title: "Bruschetta",
            price: "$5.99",
            description: "Our Bruschetta is made from grilled bread with garlic, lemon, salt, and olive oil; perfectly shareable.",
            order: "Order delivery"
        },
        {
            image: Dessert3,
            title: "Lemon Dessert",
            price: "$5.00",
            description: "A customer favorite! A delicious dessert made from locally-sourced lemons and raspberries.",
            order: "Order delivery"
        }
    ]

    const specialMenusItems = specialMenus.map(menu => {
            const image = menu.image;
            const title = menu.title;
            const price = menu.price;
            const description = menu.description;
            const order = menu.order;
            
            return (
                <div>
                    <div className="special-card-container">
                        <div className="image-container">
                                <img src={image} alt="Special dessert" />
                            </div>
                        <div className="special-card-text">
                            <div className="special-card-title">
                                <h3>{title}</h3>
                                <h3 className="price-tag">{price}</h3>
                            </div>
                            <p>{description}</p>
                            <NavLink to="#">
                                <h4>
                                    {order}
                                    { <MdDeliveryDining size={30} style={{ color: "#333333", marginLeft: "10px",}} /> }
                                </h4>
                            </NavLink>
                        </div>
                    </div>
                </div>
            )
    })


  return (
    <div>
      <div className="special-card">
        {specialMenusItems}
      </div>
    </div>
  )
}

export default SpecialsCard
