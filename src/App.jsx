import React, { useState, useEffect } from "react";
import "./styles.css";
import ViewerTemplate from "./components/ViewerTemplate";
import SpaceNavigator from "./components/spaceNavigator";
import Viewer from "./components/Viewer";
import * as api from "./lib/api";
import moment from "moment";

export default function App() {
  //state
  const [loading, setLoading] = useState(false);
  const [maxDate, setMaxDate] = useState(null);
  const [date, setDate] = useState(null);
  const [url, setUrl] = useState(null);
  const [mediaType, setMediaType] = useState(null);

  const result = async (date) => {
    if (loading) return; //이미 요청중이라면 무시
    setLoading(true);
    try {
      const response = await api.getAPOD(date);
      console.log(response);
      // 비구조화 할당 + 새로운 이름
      const { date: retrievedDate, url, media_type: mediaType } = response.data;

      if (!{ maxDate }) {
        // 만약에 maxDate 가 없으면 지금 받은 date 로 지정
        setMaxDate(retrievedDate);
      }

      // 전달받은 데이터 넣어주기
      setDate(retrievedDate);
      setMediaType(mediaType);
      setUrl(url);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  function handlePrev() {
    const prevDate = moment(date).subtract(1, "days").format("YYYY-MM-DD");
    console.log(prevDate);
    result(prevDate);
  }

  function handleNext() {
    if (date === maxDate) return;
    const nextDate = moment(date).add(1, "days").format("YYYY-MM-DD");
    console.log(nextDate);
    result(nextDate);
  }

  useEffect(() => {
    result();
  }, []);

  return (
    <div>
      <ViewerTemplate
        spaceNavigator={
          <SpaceNavigator onPrev={handlePrev} onNext={handleNext} />
        }
        viewer={<Viewer url={url} mediaType={mediaType} loading={loading} />}
      />
    </div>
  );
}
