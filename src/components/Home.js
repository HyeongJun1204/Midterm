import React, { useState } from "react";
import NotLogin from "./NotLogin.js"; 

function Home(props) {
  const { id, changeId } = props; 
  const [names, changeNames] = useState(' '); 

  if (!id) {
    return <NotLogin changeId={changeId} changeNames={changeNames}/>; // 이 부분을 수정하여 return 추가
  }
  
  return (
    <div id="home">
      <h1 id="wel"><span> {names} </span>님 환영합니다!</h1>
      <h1 id="info"> 이번에 앱 개발자를 지원한 김형준의 웹 포트폴리오입니다. </h1> 
    </div>
  );
}

export default Home;
