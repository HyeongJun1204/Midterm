import React, { useState } from "react";
import Home from "./Home";
import datas from "./datas";

function Project(props) {
  const { id, changeId } = props;
  const [data, changeData] = useState(datas[0]);
  const [selectedButton, setSelectedButton] = useState(0); // 현재 선택된 버튼의 인덱스

  function change(i) {
    changeData(datas[i]);
    setSelectedButton(i); // 클릭된 버튼의 인덱스를 상태로 저장
  }

  if (id === false) {
    alert('로그인 후 열람 가능합니다.');
    return <Home id={id} changeId={changeId} />
  } else {
    return (
      <div className="project">
        <input
          type="button"
          value="project1"
          onClick={() => change(0)}
          style={selectedButton === 0 ? { backgroundColor: "orange" } : {}}
        />
        <input
          type="button"
          value="project2"
          onClick={() => change(1)}
          style={selectedButton === 1 ? { backgroundColor: "orange" } : {}}
        />
        <input
          type="button"
          value="project3"
          onClick={() => change(2)}
          style={selectedButton === 2 ? { backgroundColor: "orange" } : {}}
        />

        <div className="eachPro">
          <div id="name">{data.name}</div>
          <div id="period">Period: {data.period}</div>
          <img id="img" width="500" height="350" src={data.image} />
          <div id="explain">{data.explain}</div>
        </div>
      </div>
    );
  }
}

export default Project;
