import React, {useState} from 'react'

const Ex03 = () => {
/* 참참참 게임을 해보자!
1) 좌, 정면, 우 중 랜덤하게 값을 추출해보자.
2) 랜덤하게 추출된 값과, 내가 선택한 버튼의 값을 비교해보자 (단, return문 안에서)
3) - 만약 두 값이 같다면 "나의 승리!" <p>나의 승리!</p>
    - 만약 두 값이 다르다면 "나의 패배!"<p>나의 패배!</p>
4) 각각 변화하는 값들 (내선택, 컴퓨터선택, 결과각ㅄ)은 바로바로 화면에 보여지게
*/
    
//     const [num, setNum] = useState(0)
//     const [num2, setNum2] = useState(0)
//     const [choice, setChoice] = useState("")
//     const [str1, setStr1] = useState("")
    
    
//     const btnCk = (e)=>{
//         console.log("btn Ck", e.target.innerText);
//         console.log(parseInt(Math.random()*3+1));
//         if (e.target.innerText === "좌"){
//             setNum(1)
//             setChoice("좌")
//         }else if(e.target.innerText == "정면"){
//             setNum(2)
//             setChoice("정면")
//         }else if(e.target.innerText == "우"){
//             setNum(3)
//             setChoice("우")
//         }
//         // setNum2(1)
//         let ran1 = parseInt(Math.random()*3+1)
//         if (ran1 === 1){
//             setStr1("좌")
//         }else if (ran1 === 2){
//             setStr1("정면")
//         }else if (ran1 === 3){
//             setStr1("우")
//         }
//         setNum2(ran1)
//     }
    
// return (
//     <div>
//         <h1></h1>
//         <button onClick={btnCk}>좌</button>
//         <button onClick={btnCk}>정면</button>
//         <button onClick={btnCk}>우</button>

//         <p>나의 선택!</p>
//         {choice}
//         <p>컴퓨터의 선택!</p>
//         {str1}
//         { num === 0 ? <p> </p>  : num === num2 ?  <p>이겼습니다</p> : <p>졌습니다</p>}
       
//        {/* 결과 비교 : 나의 선택과 컴퓨터의 선택이 같으면 나의 승리
//         선택 두개가 다르면 나의 패배
//         단, 결과 비교는 무조건 return 문 안에서 진행
//         */}

//     </div>
//   )

let list = ['좌','정면','우']
const [ranChoice, setRanChoice] = useState("좌")
const [myChoice, setMyChoice] = useState("좌")

const btnCk = (e)=>{
    console.log('btn Ck', e.target.innerText);
    //나의 선택을 세팅
    setMyChoice(e.target.innerText)
    //컴퓨터의 선택을 세팅
    setRanChoice(list[parseInt(Math.random()*3)])
   
    console.log("나", myChoice, "컴퓨터", ranChoice);

}


return(
       <div>
         <h1></h1>
         <button onClick={btnCk}>좌</button>
         <button onClick={btnCk}>정면</button>
         <button onClick={btnCk}>우</button>

         <p>나의 선택!</p>
         {myChoice}
         <p>컴퓨터의 선택!</p>
         {ranChoice}
         {ranChoice === myChoice ?
         <p>나의 승리~</p>
         : <p>나의 패배..</p>}
        {/* 결과 비교 : 나의 선택과 컴퓨터의 선택이 같으면 나의 승리
         선택 두개가 다르면 나의 패배
         단, 결과 비교는 무조건 return 문 안에서 진행
         */}
     </div>
)
}

export default Ex03