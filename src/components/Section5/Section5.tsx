import {
  ParentsAuthor,
  ParentsCard,
  ParentsContainer,
  ParentsContentBox,
  ParentsImgWrapper,
  ParentsTextWrapper,
  ParentsTitle,
} from "./Section5.styles";
import { MainText, TextBox } from "../Section2/Section2.styles";

function Section5() {
  return (
    <ParentsContainer>
      <TextBox>
        <MainText>
          <span style={{ color: "00AB15" }}>학부모</span>가 이야기하는 홀링
        </MainText>
      </TextBox>
      <ParentsCard>
        <ParentsTextWrapper>
          <ParentsImgWrapper>
            <img
              src={import.meta.env.BASE_URL + "assets/images/parents/card1.png"}
              width="100%"
            />
            <img
              src={import.meta.env.BASE_URL + "assets/images/parents/quote.svg"}
              width="50"
              style={{ position: "relative", top: "-12px" }}
            />
          </ParentsImgWrapper>
          <ParentsTitle>강의 덕분에 부모 도움이 필요없어요</ParentsTitle>
          <ParentsAuthor>
            <span>초등학교 5학년 학부모</span>
          </ParentsAuthor>
        </ParentsTextWrapper>
      </ParentsCard>
    </ParentsContainer>
  );
}

export default Section5;
