import React from "react";

//이 컴포넌트는 앞, 혹은 뒤로 넘기는 버튼들을 내장하고 있습니다. 각 버튼에 연결 될 함수 onPrev 와 onNext 를 props 로 받습니다.
const SpaceNavigator = ({ onPrev, onNext }) => {
  return (
    <div className="space-navigator">
      <div className="left end">
        <div className="circle" onClick={onPrev}>
          L
        </div>
      </div>
      <div className="right end">
        <div className="circle" onClick={onNext}>
          R
        </div>
      </div>
    </div>
  );
};

export default SpaceNavigator;
