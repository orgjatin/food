import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className="explore-menu-text">
        Planning a daily menu isn't difficult as long as each meal and snack has some protein, fiber, complex carbohydrates, and a little bit of fat. Food is what people, plants and animals eat to live. Every organism needs energy to carry on with the process of living which comes from food.
        </p>
        <div  className="explore-menu-list">
            {
                menu_list.map((item,index)=>{
                    return(
                        <div onClick={()=> setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                            <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })
                
            }
        </div>
            <hr />
    </div>
  )
}

export default ExploreMenu