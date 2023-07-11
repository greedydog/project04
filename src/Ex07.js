import React from 'react'
import ChildComp from './components/ChildComp'
import { useState } from 'react'

function Ex07() {
    const [data, setData] = useState('')
    const changeData = (txt) => {
        // 금고 역할
        // 자식 컴포넌트가 부모 컴포넌트로 직접 데이터를 줄 수 없으니
        // 자식이 와서 데이터를 두고갈 수 있을만한 공간을 만들어두는것!
        console.log('changeData Function', txt);
        setData(txt)
    }   
  return (
    <div>
        <h1>상위 컴포넌트</h1>
        <p>{data}</p>
        <hr/>
        <ChildComp changeData={changeData}/>
    </div>
  )
}

export default Ex07