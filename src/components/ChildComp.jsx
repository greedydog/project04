import React from 'react'
import { useState } from 'react'


function ChildComp({changeData}) {


const[inputTxt, setInputTxt] = useState('')
    return (
    <div>
        <p>이곳은 하위 컴포넌트입니다! 👽{inputTxt}</p>
        <input type='text' onChange={(e)=>{setInputTxt(e.target.value)}}/>
        <button onClick={()=>{changeData(inputTxt)}}>값보내기!</button>
    </div>
  )
}

export default ChildComp