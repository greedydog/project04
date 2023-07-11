//rfce + enter 컴포넌트 구성요소 꺼내주기


import React, {useState} from 'react'
/* React Event
    1. onClick={함수이름}
    이 때, 선언되어있는 함수가 아니라면 바로 호출
    onClick={ck}
    onClick={() => {}}
    - 변수는 값이 변한다고 해서 화면이 다시 렌더링되지는 않는다.
        만약 화면에 변수를 바뀐값으로 띄워주려면 바뀔때마다 재 렌더링을 
        해줘야함
    - state는 컴포넌트 내부에서 관리되는 변경이 가능한 데이터,
    값이 바뀔때마다 화면이 재렌더링되어서 반응이 빠름
    
*/
/*
State 
- 변수는 값이 변한다고 해서 화면이 다시 렌더링 되지 않는다.
const [state, setState] = useState(초기값)
*/


let num = 0

const ck = () => {
    num +=1
    console.log("현재 num은", num);
}


const Ex01 = (props) => {

  //state로 값 변경해보기!
  //const[변수이름, set변수이름] = useState(초기값)
  //내가 만약 state의 값을 변경하고 싶다면 set변수이름 함수를 호출

  // 예) 내가 화면에 바로 갱신되는 num2를 3으로 값을 변경하고 싶다면?
  // setNum(3)
const [num2, setNum2] = useState(0)
  const ck2 = () => {
    setNum2(num2+1)
    // 일반적으로 num이라는 변수에 3을 선언
    // num 이라는 변수안에 5을 대입
    //let num = 3;
    //num = 5;
    //화면에 바로 변화될 변수 num2를 만들어서 3을 선언
    //num2라는 변수 안에 5를 대입
  }
  // ** 간단한 예제! -1이 적힌 버튼을 기재해서 state옆의 숫자를 하나씩 감소
  const ck3 = () => {
    setNum2(num2-1)
  }
return (
    <div>
    <p>변수 : {num}</p>
    <p>state : {num2}</p>
    <button onClick={ck}>+1</button>
    <button onClick={ck2}>+1</button>
    <button onClick={ck3}>-1</button>
    </div>
   

  )
}

export default Ex01