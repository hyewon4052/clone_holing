import { useRef, useState } from "react";
import {
  GoalContainer,
  TextBox,
  SubText,
  MainText,
  VideoBox,
  VideoWrapper,
} from "./Section2.styles";

function Section2() {
  const videos = [
    "assets/videos/videos_01.mp4",
    "assets/videos/videos_02.mp4",
    "assets/videos/videos_03.mp4",
  ];

  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleEnded = () => {
    if (currentIndex < videos.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  return (
    <GoalContainer>
      <TextBox>
        <SubText>초등부터 중·고등까지</SubText>
        <MainText style={{ marginBottom: "80px" }}>
          <span>하루 30분</span>
          이면 한 학기 수학을 완성할 수 있어요
        </MainText>
      </TextBox>
      <VideoBox>
        <VideoWrapper>
          <video
            ref={videoRef}
            key={currentIndex}
            autoPlay
            onEnded={handleEnded}
            style={{
              width: "100%",
              display: "block",
              border: "1px solid rgb(191, 197, 203)",
            }}
          >
            <source src={videos[currentIndex]} type="video/mp4" />
          </video>
        </VideoWrapper>
      </VideoBox>
    </GoalContainer>
  );
}

export default Section2;
