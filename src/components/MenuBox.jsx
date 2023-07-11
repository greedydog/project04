import React from 'react'

function MenuBox({list}) {
  
  const style = {
    border: '1px solid black',
    margin: '1px',
    padding : '1px',
    width: '300px',
   
    

  }

  let imageStyle = {
    width:290
    
  }
  
    return (
    
    
    
    <div>
        <div style = {style}>
            <div>
            <img src={list.imgSrc} alt='asdf' style = {imageStyle}/>
            </div>
            
            <div>
            <div><p>{list.name}</p></div>
            <div><p>{list.price}</p></div>
            <div><p>{list.content}</p></div>
            </div>
        </div>
    </div>//menubox end
    
  )
}

export default MenuBox