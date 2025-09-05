import * as S from "./Section3.styles";
import { TextBox, SubText, MainText } from "../Section2/Section2.styles";

function Section3() {
  return (
    <S.StepLayout>
      <TextBox>
        <SubText>
          초등 수학 공부, <S.MobileBr />
          아이가 잘 따라갈 수 있을까요?
        </SubText>
        <MainText style={{ marginBottom: 80 }}>
          홀링은 <span>스스로 끝까지</span> <S.MobileBr />
          해낼 수 있는
          <br />
          습관과 자신감을 길러줘요
        </MainText>
      </TextBox>
      <S.StepBoxList>
        <S.StepLeftBox>
          <S.StepImgBox
            style={{
              backgroundImage: `url(${
                import.meta.env.BASE_URL + "assets/images/root/steps/step1.png"
              })`,
            }}
          >
            <img
              className="firstBeaver"
              src={"assets/images/root/steps/step1_beaver.svg"}
            />
            <img
              className="firstOverlay"
              src={"assets/images/root/steps/step1_overlay.svg"}
            />
          </S.StepImgBox>
          <S.StepTextBoxCol>
            <S.NumberCircleBox>
              <span>1</span>
            </S.NumberCircleBox>
            <S.TitleBoxCol>
              <S.SubTitleText>문제풀이를 도와주는</S.SubTitleText>
              <S.TitleText>동영상 강의</S.TitleText>
            </S.TitleBoxCol>
            <S.StepDescriptionText>
              어려운 문제가 있으면 동영상 강의를 듣고 기초 개념과 유형을 다시
              학습해 보세요.
            </S.StepDescriptionText>
          </S.StepTextBoxCol>
        </S.StepLeftBox>
        <S.StepRightBox>
          <S.StepImgBox
            style={{
              backgroundImage: `url(${
                import.meta.env.BASE_URL + "assets/images/root/steps/step2.png"
              })`,
            }}
          >
            <img
              className="secondRuby"
              src={
                import.meta.env.BASE_URL + "assets/images/root/steps/ruby.svg"
              }
            />
          </S.StepImgBox>
          <S.StepTextBoxCol>
            <S.NumberCircleBox>
              <span>2</span>
            </S.NumberCircleBox>
            <S.TitleBoxCol>
              <S.SubTitleText>개념과 유형을 모두 잡는</S.SubTitleText>
              <S.TitleText>단계별 구성</S.TitleText>
            </S.TitleBoxCol>
            <S.StepDescriptionText>
              기초 개념부터 마무리까지 정해진 구성을 따라 학습하면서 단원을
              마스터해보세요.
            </S.StepDescriptionText>
          </S.StepTextBoxCol>
        </S.StepRightBox>
        <S.StepLeftBox>
          <S.StepImgBox
            style={{
              backgroundImage: `url(${
                import.meta.env.BASE_URL + "assets/images/root/steps/step3.png"
              })`,
            }}
          ></S.StepImgBox>
          <S.StepTextBoxCol>
            <S.NumberCircleBox>
              <span>3</span>
            </S.NumberCircleBox>
            <S.TitleBoxCol>
              <S.SubTitleText>실력을 업그레이드하는</S.SubTitleText>
              <S.TitleText>레벨업 학습</S.TitleText>
            </S.TitleBoxCol>
            <S.StepDescriptionText>
              레벨을 점점 올리면서 난이도 있는 문제를 풀고, 내 실력도 함께
              높여보세요.
            </S.StepDescriptionText>
          </S.StepTextBoxCol>
        </S.StepLeftBox>
        <S.StepRightBox>
          <S.StepImgBox
            style={{
              backgroundImage: `url(${
                import.meta.env.BASE_URL + "assets/images/root/steps/step4.png"
              })`,
            }}
          >
            <img
              className="fourthBeaver"
              src={"assets/images/root/steps/step4_beaver.svg"}
            />
          </S.StepImgBox>
          <S.StepTextBoxCol>
            <S.NumberCircleBox>
              <span>4</span>
            </S.NumberCircleBox>
            <S.TitleBoxCol>
              <S.SubTitleText>취약 유형을 클리어하는</S.SubTitleText>
              <S.TitleText>챌린지 학습</S.TitleText>
            </S.TitleBoxCol>
            <S.StepDescriptionText>
              AI 학습 분석으로 현재 실력을 진단하고, 부족한 유형을 보완해
              보세요.
            </S.StepDescriptionText>
          </S.StepTextBoxCol>
        </S.StepRightBox>

        <S.StepLeftBox>
          <S.StepImgBox
            style={{
              backgroundImage: `url(${
                import.meta.env.BASE_URL + "assets/images/root/steps/step5.png"
              })`,
            }}
          >
            <img
              className="fifthBeaver"
              src={"assets/images/root/steps/step5_beaver.svg"}
            />
          </S.StepImgBox>
          <S.StepTextBoxCol>
            <S.NumberCircleBox>
              <span>5</span>
            </S.NumberCircleBox>
            <S.TitleBoxCol>
              <S.SubTitleText>의욕과 재미를 더하는</S.SubTitleText>
              <S.TitleText>학습 보상</S.TitleText>
            </S.TitleBoxCol>
            <S.StepDescriptionText>
              학습 목표를 달성해 루비를 모으고 게임도 참여하면서 즐겁게 공부해
              보세요.
            </S.StepDescriptionText>
          </S.StepTextBoxCol>
        </S.StepLeftBox>
      </S.StepBoxList>
    </S.StepLayout>
  );
}

export default Section3;
