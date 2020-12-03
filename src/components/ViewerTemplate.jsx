import React from "react";

//이 컴포넌트는 템플릿 컴포넌트로서 JSX 형태의 props 인 viewer, spaceNavigator 를 받아와서 적당한 위치에 렌더링해줍니다.
const ViewerTemplate = ({ viewer, spaceNavigator }) => {
  return (
    <div className="viewer-template">
      <header>Astronomy Picture of the Day</header>
      <div className="viewer-wraper">
        {viewer}
        <div className="space-navigator-wraper">{spaceNavigator}</div>
      </div>
    </div>
  );
};

export default ViewerTemplate;
