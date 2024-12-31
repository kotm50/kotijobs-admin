import { useState } from "react";

function Test() {
  const [text, setText] = useState(
    "http://millinienimg.godohosting.com%2Fc10055336_8273.gif"
  );

  const test = text => {
    setText(
      text.replace(/http:\/\//g, "https://cafecon.co.kr/redirect?url=http://")
    );
  };
  return (
    <div className="mt-[200px] bg-white w-fit">
      {text} <br />
      <button
        className="bg-blue-600 text-white p-2"
        onClick={() => {
          test(text);
        }}
      >
        테스트
      </button>
    </div>
  );
}

export default Test;
