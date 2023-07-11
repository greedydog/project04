import React from 'react'
import MenuBox from './components/MenuBox'
function Ex06() {
    // 푸딩 메뉴판을 제작해보자!
    let menuList = [
        {
            "name" : "카라멜 커스터드 푸딩", 
            "price" : 4000, 
            "content" : "고려시대에 원나라에서 목화씨를 훔쳐온 문익점 선생님을 아시나요?",
            "imgSrc" : "https://cdn.imweb.me/thumbnail/20230412/72ab39bf2c337.jpg"

        } , {
            "name" : "블루베리 푸딩", 
            "price" : 4300,
            "content" : "라즈베리 블루베리가 여름을 맞이하여 다시 돌아왔습니다~", 
            "imgSrc": "https://cdn.imweb.me/thumbnail/20230427/ff04ae058095e.jpg"
        }, {
            "name" : "라즈베리 푸딩", 
            "price" : 4300, 
            "content" : "라즈베리 블루베리가 여름을 맞이하여 다시 돌아왔습니다~", 
            "imgSrc" : "https://cdn.imweb.me/thumbnail/20230427/d2e739dd19f3c.jpg"
        }
    ]
    console.log(menuList);
    const boxStyle = {
        display : 'flex'
    }
  return (
    <div>
        <h1>메뉴판</h1>
        <div style = {boxStyle}>
        
        {menuList.map(item => {return <MenuBox list={item} key={item.name}/>})}
        </div>
    </div>
  )
}

export default Ex06


// React 핵심 4가지 

// 1. 컴포넌트 (Component) 
// > 내가 직접 만드는 태그 (사용자 정의 태그) 
// > 대문자로 시작
// > 리액트를 이루는 최소단위
 
// 2. Props 
// > 상위 컴포넌트에서 하위 컴포넌트로 값을 전달할 때 사용 
//  ex) <MenuBox name="아메리카노"/>
//    const MenuBox = ({name})=>{ console.log(name) }

// 3. State 
// > 화면에서 바로바로 변화하는 값