import React, {useState} from 'react'
import Ex05MemberCard from './components/Ex05MemberCard'
/*
Map 함수
- 주어진 함수를 호출한 결과를 모아서 새로운 배열을 생성한다.
- map함수를 이용하려면 key값을 꼭! 작성해주어야한다!
- 이 때, key ㅏㄱㅄ은 서로 중복되면 안된다.
*/
function Ex05() {
    let name = [{
        name : '임나연',
        age : 27,
        gender : '여성'
    },
    {
        name : '차은우',
        age : 25,
        gender : '남성',
    }
    ]
    let nameList = name.map(item => {return <button key={item.name}>{item.name}</button>})
    console.log(nameList);
  return (
    <div>
        <h1>회원카드</h1>
        {nameList}
        {/* <Ex05MemberCard name={name[0]}/>
        <Ex05MemberCard name={name[1]}/>
        <Ex05MemberCard name={name[2]}/> */}
        {/* Case 2) map 함수를 이용할 경우 */}
        {name.map(item => <Ex05MemberCard list={item} key={item.name} />)}
    </div> 
  )
}

export default Ex05