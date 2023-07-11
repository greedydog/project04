import React, {useState} from 'react'
import picSrc from './img/pic1.jpg'
const Ex02 = () => {

    // React 에서 내부 이미지 경로 지정하는 방법
    // src 폴더 내에 있는 이미지 사용하기
    //import 이미지변수 from '경로'
    const [emoji, setEmoji] = useState("♥️")
    const [num, setNum] = useState(0)
    //2) public 폴더 내에 있는 이미지 사용하기
    const handleLike = () => {
        console.log("handleLike function");
        if(num === 0){
            setEmoji("💕")
            setNum(1)
        }else{
            setEmoji("♥️")
            setNum(0)
        }
    }
    
  return (
    <div>
    <img
        src={picSrc}
        width='250px'
    ></img>
    <p>
        <span onClick={handleLike}>{emoji}</span>
        <span></span>{" "}
        <span>좋아요 {num}개</span>
    </p>
    </div>
    )
}

export default Ex02