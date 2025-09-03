import {
  ReasonContainer,
  ReasonBox,
  ReasonContentBox,
  ReasonText,
  ReasonSpan,
} from "./Section4.styles";
import { TextBox, MainText } from "../Section2/Section2.styles";

function Section4() {
  return (
    <ReasonContainer>
      <TextBox>
        <MainText style={{ marginBottom: "20px", fontWeight: 300 }}>
          홀링으로 공부하면
          <br /> <span style={{ color: "#00AB15" }}>수학 실력이 오르는 </span>
          이유
        </MainText>
      </TextBox>
      <ReasonBox>
        <ReasonContentBox>
          <ReasonText>
            <ReasonSpan>
              30억 누적 데이터가 안내하는
              <br />
              학습 경로로 더 빠르게
            </ReasonSpan>
            <img
              src={
                import.meta.env.BASE_URL + "assets/images/reason/reason1.svg"
              }
              width="100%"
            />
          </ReasonText>
        </ReasonContentBox>
        <ReasonContentBox>
          <ReasonText>
            <ReasonSpan>
              학교 현장에서 인정받는
              <br />
              학습 내용으로 더 촘촘하게
            </ReasonSpan>
            <img
              src={
                import.meta.env.BASE_URL + "assets/images/reason/reason2.svg"
              }
              width="100%"
            />
          </ReasonText>
        </ReasonContentBox>
      </ReasonBox>
    </ReasonContainer>
  );
}

export default Section4;
