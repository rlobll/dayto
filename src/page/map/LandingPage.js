import React, { useState } from "react";
import KakaoMap2 from "./kakaoMap2";

function LandingPage() {
  const [InputText, setInputText] = useState("");
  const [Place, setPlace] = useState("");
  console.log("Place", Place);

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlace(InputText);
    setInputText("");
  };

  return (
    <>
      <form className="inputForm" onSubmit={handleSubmit}>
        <input
          placeholder="검색어를 입력하세요"
          onChange={onChange}
          value={InputText}
        />
        <button type="submit">검색</button>
      </form>
      <KakaoMap2 searchPlace={Place} />
    </>
  );
}

export default LandingPage;
