import React,{useState} from 'react'
import Header from '../CustomComponent/Header'
import Tab from '../CustomComponent/Tab'
import '../css/index.css'
import BurgerMenuModal from '../CustomComponent/BurgerMenuModal'

const Favorites = () => {
    const [burgerMenu,setburgerMenu]=useState(false)
    const burgerMenuClick=()=>{
        setburgerMenu(!burgerMenu)
    }
    
    return (
        <div  >

            <BurgerMenuModal modalIsOpen={burgerMenu} />

            <Header onMenuClick={()=> burgerMenuClick()} />
            <div className="index-tab-container" >
            <Tab/>
            </div>
            <div  >
            You Do Not Have Any Favorites Yet



            </div>
         </div>
    
        )
}

export default Favorites
