import * as S from "./Section4.styles";
import { TextBox, MainText } from "../Section2/Section2.styles";

function Section4() {
  const reasons = [
    {
      title: "30억 누적 데이터가 안내하는\n학습 경로로 더 빠르게",
      img: "assets/images/root/reason/reason1.svg",
    },
    {
      title: "학교 현장에서 인정받는\n학습 내용으로 더 촘촘하게",
      img: "assets/images/root/reason/reason2.svg",
    },
  ];

  return (
    <S.ReasonContainer>
      <TextBox>
        <MainText style={{ marginBottom: "20px", fontWeight: 300 }}>
          홀링으로 공부하면
          <br /> <span style={{ color: "#00AB15" }}>수학 실력이 오르는 </span>
          이유
        </MainText>
      </TextBox>
      <S.ReasonBox>
        {reasons.map((r) => {
          return (
            <S.ReasonContentBox>
              <S.ReasonSpan>{r.title}</S.ReasonSpan>
              <img src={r.img} />
            </S.ReasonContentBox>
          );
        })}
      </S.ReasonBox>
    </S.ReasonContainer>
  );
}

export default Section4;
