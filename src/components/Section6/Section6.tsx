import { TextBox } from "../Section2/Section2.styles";
import { Background, SubTitle, Title, LoginBtn } from "./Section6.styles";

function Section6() {
  return (
    <Background>
      <TextBox>
        <SubTitle>학교, 학원에서 120만 학생이 경험한 수학 학습 솔루션</SubTitle>
        <Title>우리 아이의 첫 수학 학습, 홀링으로 시작하세요.</Title>
      </TextBox>
      <a>
        <LoginBtn>구독하기</LoginBtn>
      </a>
    </Background>
  );
}

export default Section6;
