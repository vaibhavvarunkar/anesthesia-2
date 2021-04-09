import React,{useState,useEffect} from 'react'
import Header from '../CustomComponent/Header'
import Tab from '../CustomComponent/Tab'
import '../css/AllAction.css'
import BurgerMenuModal from '../CustomComponent/BurgerMenuModal'

const AllAction = () => {
    const [isSub,setSub]=useState(false)
    const [actionLibraryData,setactionLibraryData]=useState([])
    const [burgerMenu,setburgerMenu]=useState(false)
    const [subCategory,setsubCategory]=useState([])
    const [subsubCategory,setsubsubCategory]=useState([])
    const [subsub,setsubsub]=useState(false)
    const [subId,setsubId]=useState(null)
    const [subName,setsubName]=useState(null)
   
    useEffect(() => {
        getActionLibrary()
     }, [])
  

    
    const getActionLibrary=()=>{
        var token= sessionStorage.getItem("token")
        fetch(`http://admin.anesthesiaone.com/api/action-library-data?token=${token}`,{
            method: 'GET',
            
            headers: { 
                'Content-Type': 'application/json'
            }}).then(response => response.json())
            .then(res =>{
                const obj=[{
                    name:"Crisese",
                    data:res.data.crises


                },{
                    name:"CaseTips",
                    data:res.data.caseTips
                },{
                    name:"airwayAndEquipments",
                    data:res.data.airwayAndEquipments
                },{
                   name:"drugs",
                   data:res.data.drugs 
                },{
                    name:"preoperativeEvaluations",
                    data:res.data.preoperativeEvaluations
                },{
                    name:"regionalAndNAnesthesia",
                    data:res.data.regionalAndNAnesthesia
                }]
                console.log(obj)
                
                setactionLibraryData(obj)
            })
    }

    
    
    
       const burgerMenuClick=()=>{
        setburgerMenu(!burgerMenu)
       }

       const onClickCategory=(name)=>{
           setsubName(name)
            for(var i=0;i<actionLibraryData.length;i++){
                if(actionLibraryData[i].name===name){
                    setsubCategory(actionLibraryData[i].data)
                    setSub(true)
          
                }
            }
       }

        const onClickSubCategory=(id,name)=>{
            setsubId(id)
            for(var i=0;i<subCategory.length;i++){
                if(subCategory[i].id===id&&name==="Crisese"){
                    setsubsub(true)
                   setsubsubCategory(subCategory[i].crises_sub_type)
                }else if(subCategory[i].id===id&&name==="CaseTips") {
                    setsubsub(true)
                  
                    setsubsubCategory(subCategory[i].case_tip_sub_type)
                }else if(subCategory[i].id===id&&name==="airwayAndEquipments"){
                    setsubsub(true)
                    setsubsubCategory(subCategory[i].sub_type)
                }else if(subCategory[i].id===id&&name==="drugs"){
                    setsubsub(true)
                    setsubsubCategory(subCategory[i].sub_type)
                    
                }else if(subCategory[i].id===id&&name==="preoperativeEvaluations"){
                    setsubsub(true)
                    setsubsubCategory(subCategory[i].sub_type)
                    
                }else if(subCategory[i].id===id&&name==="regionalAndNAnesthesia"){
                    setsubsub(true)
                    setsubsubCategory(subCategory[i].sub_type)
                    
                }
            }
        }

       
    return (
                <div  >
                    <BurgerMenuModal modalIsOpen={burgerMenu} />
            <Header  onMenuClick={()=> burgerMenuClick()}   />
            <div className="all-action-container" >
            <Tab/>
            <div className="all-action-subcontainer" >
                   {
                       actionLibraryData.map((data)=>{
                           return(
                           <div  >
                               <div className="all-action-subcontainer-content" >
                                   <i className="material-icons dropdown-icon" >play_arrow</i>
                               <div style={{cursor:"pointer"}} onClick={()=>onClickCategory(data.name)} >{data.name}</div>
                               </div>
                               {    isSub&&subName===data.name?
                                   subCategory.map((data1)=>{
                                      //console.log(data1)
                                      console.log(data.name,subsub,subId)
                                       return(
                                           <div>
                                               <div  style={{marginLeft:20}} className="all-action-subcontainer-content" >
                                               <i className="material-icons dropdown-icon" >play_arrow</i>
                               
                                           <div style={{cursor:"pointer"}} onClick={()=>onClickSubCategory(data1.id,data.name)} >{data1.name}</div>
                                           </div>
                                           {
                                               data.name==="Crisese"&&subsub&&data1.id===subId?
                                               subsubCategory.map((data2)=>{
                                                //   console.log(data2)
                                                   return(
                                                       <div style={{marginLeft:40}} className="all-action-subcontainer-content" >
                                                              <i className="material-icons dropdown-icon" >play_arrow</i>
                                
                                                       <div>{data2.name}</div>
                                                       </div>
                                                   )
                                               }):<></>

                                           }
                                           {
                                               data.name==="CaseTips"&&subsub&&data1.id===subId?
                                               subsubCategory.map((data2)=>{
                                                  // console.log(data2)
                                                   return(
                                                    <div style={{marginLeft:40}} className="all-action-subcontainer-content" >
                                                    <i className="material-icons dropdown-icon" >play_arrow</i>
                      
                                             <div>{data2.name}</div>
                                             </div>
                                         
                                                    )
                                               }):<></>
                                           }
                                           {
                                               data.name==="airwayAndEquipments"&&subsub&&data1.id===subId?
                                               subsubCategory.map((data2)=>{
                                                  // console.log(data2)
                                                   return(
                                                    <div style={{marginLeft:40}} className="all-action-subcontainer-content" >
                                                    <i className="material-icons dropdown-icon" >play_arrow</i>
                      
                                             <div>{data2.name}</div>
                                             </div>
                                         
                                                    )
                                               }):<></>
                                           }
                                             {
                                               data.name==="drugs"&&subsub&&data1.id===subId?
                                               subsubCategory.map((data2)=>{
                                                  // console.log(data2)
                                                   return(
                                                    <div style={{marginLeft:40}} className="all-action-subcontainer-content" >
                                                    <i className="material-icons dropdown-icon" >play_arrow</i>
                      
                                             <div>{data2.name}</div>
                                             </div>
                                         
                                                    )
                                               }):<></>
                                           }
                                             {
                                               data.name==="preoperativeEvaluations"&&subsub&&data1.id===subId?
                                               subsubCategory.map((data2)=>{
                                                  // console.log(data2)
                                                   return(
                                                    <div style={{marginLeft:40}} className="all-action-subcontainer-content" >
                                                    <i className="material-icons dropdown-icon" >play_arrow</i>
                      
                                             <div>{data2.name}</div>
                                             </div>
                                         
                                                    )
                                               }):<></>
                                           }
                                             {
                                               data.name==="regionalAndNAnesthesia"&&subsub&&data1.id===subId?
                                               subsubCategory.map((data2)=>{
                                                  // console.log(data2)
                                                   return(
                                                    <div style={{marginLeft:40}} className="all-action-subcontainer-content" >
                                                    <i className="material-icons dropdown-icon" >play_arrow</i>
                      
                                             <div>{data2.name}</div>
                                             </div>
                                         
                                                    )
                                               }):<></>
                                           }
                                           
                                         
                                           </div>
                                       )
                                   }):<></>
                               }
                           </div>
                           )
                       })
                   }
            </div>
         
            </div>
         </div>
    

        )
}

export default AllAction
