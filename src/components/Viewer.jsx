import React from "react";

//이 컴포넌트는 이미지 혹은 동영상을 보여주는 컴포넌트입니다. 데이터의 형식은 mediaType 에 “video” 혹은 “image” 라는 값으로 전달이 될 것이고, 이에 따라 url 을 사용하여 동영상이나 이미지를 보여주게 됩니다. 추가적으로, loading 값은 데이터를 불러올 때 로딩표시를 하기 위하여 사용되는 props 입니다.
const Viewer = ({ mediaType, url, loading }) => {
  console.log(url);
  if (loading) {
    return <>loading</>;
  }
  if (!url) return null;

  return (
    <div className="viewer">
      {mediaType === "image" ? (
        <img
          src={url}
          alt="nasa"
          onClick={() => {
            window.open(url);
          }}
        />
      ) : (
        <video src={url} controls></video>
      )}
    </div>
  );
};

export default Viewer;
