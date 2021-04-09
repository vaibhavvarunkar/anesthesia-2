import React,{useState} from 'react'
import '../css/tab.css'
import startcase from '../images/plus.png'
import {NavLink} from 'react-router-dom'
const Tab = () => {
    const [isEnable,setEnable]=useState(false)

    const toggleCaseSummary=()=>{
        setEnable(!isEnable)
    }
    return (
        <div className="tab-container" >
            <NavLink exact to="/favorite" activeClassName="active" className="tab-container-tabs" >
                FAVORITES
                </NavLink>
            <NavLink exact to="/casesummary" className="tab-container-tabs" activeClassName="active" >RECENT</NavLink>
            
                <NavLink exact to="/casesummary" activeClassName="active" className="tab-container-tabs" >
                <img  src={startcase} className="start-icon" />
                </NavLink>
         
            
            
            
            <NavLink exact to="/allaction" activeClassName="active" className="tab-container-tabs" >ALL ACTIONS</NavLink>
            <NavLink exact to="/casesummary" className="tab-container-tabs" >ACTION<br/>SUMMARY</NavLink>
            
        </div>
    )
}

export default Tab
