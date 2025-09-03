import {
  ParentsAuthor,
  ParentsCard,
  ParentsContainer,
  ParentsImgWrapper,
  ParentsInfo,
  ParentsName,
  ParentsTextWrapper,
  ParentsTitle,
  VerticalLine,
  ParentsDescription,
  ParentsBox,
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
      <ParentsBox>
        <ParentsCard>
          <ParentsTextWrapper>
            <ParentsImgWrapper>
              <img
                src={
                  import.meta.env.BASE_URL + "assets/images/parents/card1.png"
                }
                width="100%"
              />
              <img
                src={
                  import.meta.env.BASE_URL + "assets/images/parents/quote.svg"
                }
                width="50"
                style={{ position: "relative", top: "-12px" }}
              />
            </ParentsImgWrapper>
            <ParentsTitle>
              강의 덕분에 부모 도움이 <br />
              필요없어요
            </ParentsTitle>
            <ParentsAuthor
              style={{
                fontSize: "18px",
                fontWeight: 500,
                color: "rgb(117, 126, 133)",
              }}
            >
              <ParentsName>박O영</ParentsName>
              <VerticalLine />
              <ParentsInfo>초등학교 5학년 학부모</ParentsInfo>
            </ParentsAuthor>
          </ParentsTextWrapper>
          <ParentsDescription>
            아이가 어려워하는 문제가 있으면 부모에게 물어보지 않아도 강의
            영상으로 다시 한 번 개념을 확인할 수 있어서 좋아요.
          </ParentsDescription>
        </ParentsCard>
        <ParentsCard>
          <ParentsTextWrapper>
            <ParentsImgWrapper>
              <img
                src={
                  import.meta.env.BASE_URL + "assets/images/parents/card2.png"
                }
                width="100%"
              />
              <img
                src={
                  import.meta.env.BASE_URL + "assets/images/parents/quote.svg"
                }
                width="50"
                style={{ position: "relative", top: "-12px" }}
              />
            </ParentsImgWrapper>
            <ParentsTitle>
              게임처럼 공부하니
              <br /> 지루해하지 않아요
            </ParentsTitle>
            <ParentsAuthor
              style={{
                fontSize: "18px",
                fontWeight: 500,
                color: "rgb(117, 126, 133)",
              }}
            >
              <ParentsName>박O영</ParentsName>
              <VerticalLine />
              <ParentsInfo>초등학교 2학년 학부모</ParentsInfo>
            </ParentsAuthor>
          </ParentsTextWrapper>
          <ParentsDescription>
            예습과 복습을 모두 할 수 있다는 게 장점이에요. 지루하지 않게
            게임처럼 즐기면서 공부할 수 있는 학습 구성도 마음에 들어요.
          </ParentsDescription>
        </ParentsCard>
        <ParentsCard>
          <ParentsTextWrapper>
            <ParentsImgWrapper>
              <img
                src={
                  import.meta.env.BASE_URL + "assets/images/parents/card3.png"
                }
                width="100%"
              />
              <img
                src={
                  import.meta.env.BASE_URL + "assets/images/parents/quote.svg"
                }
                width="50"
                style={{ position: "relative", top: "-12px" }}
              />
            </ParentsImgWrapper>
            <ParentsTitle>
              아이의 실력을 바로
              <br />
              확인할 수 있어요
            </ParentsTitle>
            <ParentsAuthor
              style={{
                fontSize: "18px",
                fontWeight: 500,
                color: "rgb(117, 126, 133)",
              }}
            >
              <ParentsName>김O영</ParentsName>
              <VerticalLine />
              <ParentsInfo>초등학교 3학년 학부모</ParentsInfo>
            </ParentsAuthor>
          </ParentsTextWrapper>
          <ParentsDescription>
            주간 학습 리포트로 지난주에 어떻게 공부했는지 알 수 있어요. 또, 학습
            현황을 보면서 아이의 문제 푸는 능력을 객관적으로 확인할 수 있어서
            좋아요.
          </ParentsDescription>
        </ParentsCard>
      </ParentsBox>
    </ParentsContainer>
  );
}

export default Section5;
