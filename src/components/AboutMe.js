import { useParams, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";

const AboutMe = (props) => {

  const { id, changeId } = props;
  if (id === false) {
    alert('로그인 후 열람 가능합니다.');
    return <Home id={id} changeId={changeId} />
  } else {
    return (
      <center className="aboutMe">
        <br />
        <h1>이   력   서</h1><br /><br />
        <div>
          {/*사진 및 기본 인적사항*/}
          <table id="table" align="center">
            {/*1줄*/}
            <tr>
              <td rowspan="5" align="center" width="200" height="150" bgcolor="#ccffff"><img src="사진" alt="사진" /></td>
              <td rowspan="2" align="center" id="color1">성 명</td>
              <td align="center" id="color1">한 글</td>
              <td width="225" align="center">김 형 준</td>
              <td align="center" width="120" id="color1">주 민 번 호</td>
              <td width="225" align="center">011204-3173612</td>
            </tr>

            {/*2줄*/}
            <tr>
              {/*<td></td>*/}
              {/*<td></td>*/}
              <td align="center" id="color1">한 자</td>
              <td align="center">金 亨 峻</td>
              <td align="center" id="color1">생 년 월 일</td>
              <td align="center"> 011204</td>
            </tr>

            {/*3줄*/}
            <tr>
              {/*<td></td>*/}
              <td colspan="2" align="center" width="120" id="color1">전 화 번 호</td>
              {/*<td></td>*/}
              <td align="center">02-936-1533</td>
              <td align="center" id="color1">휴 대 폰</td>
              <td align="center">010-6709-2326</td>
            </tr>

            {/*4줄*/}
            <tr>
              {/*<td></td>*/}
              <td colspan="2" align="center" id="color1">E-Mail</td>
              {/*<td></td>*/}
              <td colspan="3" align="center">kl1533@gachon.ac.kr</td>
              {/*<td></td>*/}
              {/*<td></td>*/}
            </tr>

            {/*5줄*/}
            <tr>
              {/*<td></td>*/}
              <td colspan="2" align="center" id="color1">현 주 소</td>
              {/*<td></td>*/}
              <td colspan="3" align="center">서초구 서초대로 340</td>
              {/*<td></td>*/}
              {/*<td></td>*/}
            </tr>

            <tr> 
              <td id="color1" align="center" rowSpan="3" width="200" height="150"> 자기소개 </td>
            </tr>
            
            <tr>
              <td id="intro" colspan="5">코드를 작성하는 것을 더 나은 사용자 경험으로 이어지는 디자인으로 만들어내는 것을 즐깁니다. 또한 적극적이고 열정적인 태도로 팀과 협업하며, 사용자들에게 혁신적이고 가치 있는 웹 경험을 제공하기 위해 노력하겠습니다.</td>
            </tr>
          </table>
        </div>

       
         
       
      </center>
    );
}
} 
export default AboutMe;
