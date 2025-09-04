import * as S from "./Section3.styles";
import { TextBox, SubText, MainText } from "../Section2/Section2.styles";

function Section3() {
  return (
    <S.StepContainer>
      <TextBox>
        <SubText>초등 수학 공부, 아이가 잘 따라갈 수 있을까요?</SubText>
        <MainText style={{ marginBottom: 80 }}>
          홀링은 <span>스스로 끝까지</span> 해낼 수 있는
          <br />
          습관과 자신감을 길러줘요
        </MainText>
      </TextBox>
      <S.StepBoxList>
        <S.StepBox1>
          <S.StepImgBox
            style={{
              backgroundImage: `url(${
                import.meta.env.BASE_URL + "assets/images/root/steps/step1.png"
              })`,
            }}
          >
            <img
              src={
                import.meta.env.BASE_URL +
                "assets/images/root/steps/step1_beaver.svg"
              }
              style={{ position: "absolute", left: -"55px", bottom: "-22px" }}
            />
            <img
              src={
                import.meta.env.BASE_URL +
                "assets/images/root/steps/step1_overlay.svg"
              }
              width="264"
              style={{ position: "absolute", right: "-19px", top: "96.08px" }}
            />
          </S.StepImgBox>
          <S.StepTextBox
            style={{ marginTop: "50px", marginLeft: "50px", width: "300px" }}
          >
            <S.NumberCircle>
              <span>1</span>
            </S.NumberCircle>
            <S.TitleBox>
              <S.ContentSpan style={{ color: "#00AB15", fontSize: 20 }}>
                문제풀이를 도와주는
              </S.ContentSpan>
              <S.ContentSpan style={{ color: "black", fontSize: 38 }}>
                동영상 강의
              </S.ContentSpan>
            </S.TitleBox>
            <S.StepDescription>
              어려운 문제가 있으면 동영상 강의를 듣고 기초 개념과 유형을 다시
              학습해 보세요.
            </S.StepDescription>
          </S.StepTextBox>
        </S.StepBox1>
        <S.StepBox2>
          <S.StepImgBox
            style={{
              backgroundImage: `url(${
                import.meta.env.BASE_URL + "assets/images/root/steps/step2.png"
              })`,
            }}
          >
            <img
              src={
                import.meta.env.BASE_URL + "assets/images/root/steps/ruby.svg"
              }
              style={{ position: "absolute", right: "-73px", bottom: "-30px" }}
            />
          </S.StepImgBox>
          <S.StepTextBox
            style={{ marginTop: "50px", marginLeft: "50px", width: "300px" }}
          >
            <S.NumberCircle>
              <span>2</span>
            </S.NumberCircle>
            <S.TitleBox>
              <S.ContentSpan style={{ color: "#00AB15", fontSize: 20 }}>
                개념과 유형을 모두 잡는
              </S.ContentSpan>
              <S.ContentSpan style={{ color: "black", fontSize: 38 }}>
                단계별 구성
              </S.ContentSpan>
            </S.TitleBox>
            <S.StepDescription>
              기초 개념부터 마무리까지 정해진 구성을 따라 학습하면서 단원을
              마스터해보세요.
            </S.StepDescription>
          </S.StepTextBox>
        </S.StepBox2>
        <S.StepBox1>
          <S.StepImgBox
            style={{
              backgroundImage: `url(${
                import.meta.env.BASE_URL + "assets/images/root/steps/step3.png"
              })`,
            }}
          ></S.StepImgBox>
          <S.StepTextBox
            style={{ marginTop: "50px", marginLeft: "50px", width: "300px" }}
          >
            <S.NumberCircle>
              <span>3</span>
            </S.NumberCircle>
            <S.TitleBox>
              <S.ContentSpan style={{ color: "#00AB15", fontSize: 20 }}>
                실력을 업그레이드하는
              </S.ContentSpan>
              <S.ContentSpan style={{ color: "black", fontSize: 38 }}>
                레벨업 학습
              </S.ContentSpan>
            </S.TitleBox>
            <S.StepDescription>
              레벨을 점점 올리면서 난이도 있는 문제를 풀고, 내 실력도 함께
              높여보세요.
            </S.StepDescription>
          </S.StepTextBox>
        </S.StepBox1>
        <S.StepBox2>
          <S.StepImgBox
            style={{
              backgroundImage: `url(${
                import.meta.env.BASE_URL + "assets/images/root/steps/step4.png"
              })`,
            }}
          >
            <img
              src={
                import.meta.env.BASE_URL +
                "assets/images/root/steps/step4_beaver.svg"
              }
              style={{ position: "absolute", right: "-73px", bottom: "-30px" }}
            />
          </S.StepImgBox>
          <S.StepTextBox
            style={{ marginTop: "50px", marginLeft: "50px", width: "300px" }}
          >
            <S.NumberCircle>
              <span>4</span>
            </S.NumberCircle>
            <S.TitleBox>
              <S.ContentSpan style={{ color: "#00AB15", fontSize: 20 }}>
                취약 유형을 클리어하는
              </S.ContentSpan>
              <S.ContentSpan style={{ color: "black", fontSize: 38 }}>
                챌린지 학습
              </S.ContentSpan>
            </S.TitleBox>
            <S.StepDescription>
              AI 학습 분석으로 현재 실력을 진단하고, 부족한 유형을 보완해
              보세요.
            </S.StepDescription>
          </S.StepTextBox>
        </S.StepBox2>

        <S.StepBox1>
          <S.StepImgBox
            style={{
              backgroundImage: `url(${
                import.meta.env.BASE_URL + "assets/images/root/steps/step5.png"
              })`,
            }}
          >
            <img
              src={
                import.meta.env.BASE_URL +
                "assets/images/root/steps/step5_beaver.svg"
              }
              style={{ position: "absolute", right: "-73px", bottom: "-30px" }}
            />
          </S.StepImgBox>
          <S.StepTextBox
            style={{ marginTop: "50px", marginLeft: "50px", width: "300px" }}
          >
            <S.NumberCircle>
              <span>5</span>
            </S.NumberCircle>
            <S.TitleBox>
              <S.ContentSpan style={{ color: "#00AB15", fontSize: 20 }}>
                의욕과 재미를 더하는
              </S.ContentSpan>
              <S.ContentSpan style={{ color: "black", fontSize: 38 }}>
                학습 보상
              </S.ContentSpan>
            </S.TitleBox>
            <S.StepDescription>
              학습 목표를 달성해 루비를 모으고 게임도 참여하면서 즐겁게 공부해
              보세요.
            </S.StepDescription>
          </S.StepTextBox>
        </S.StepBox1>
      </S.StepBoxList>
    </S.StepContainer>
  );
}

export default Section3;
