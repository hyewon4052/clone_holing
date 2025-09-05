import * as S from "./Section5.styles";
import { MainText, TextBox } from "../Section2/Section2.styles";

function Section5() {
  const parents = [
    {
      img: "assets/images/root/parents/card1.png",
      title: "강의 덕분에 부모 도움이\n 필요없어요",
      name: "박O영",
      info: "초등학교 5학년 학부모",
      desc: "아이가 어려워하는 문제가 있으면 부모에게 물어보지 않아도 강의 영상으로 다시 한 번 개념을 확인할 수 있어서 좋아요.",
    },
    {
      img: "assets/images/root/parents/card2.png",
      title: "게임처럼 공부하니\n 지루해하지 않아요",
      name: "박O영",
      info: "초등학교 2학년 학부모",
      desc: "예습과 복습을 모두 할 수 있다는 게 장점이에요. 지루하지 않게 게임처럼 즐기면서 공부할 수 있는 학습 구성도 마음에 들어요.",
    },
    {
      img: "assets/images/root/parents/card3.png",
      title: "아이의 실력을 바로\n 확인할 수 있어요",
      name: "김O영",
      info: "초등학교 3학년 학부모",
      desc: "주간 학습 리포트로 지난주에 어떻게 공부했는지 알 수 있어요. 또, 학습현황을 보면서 아이의 문제 푸는 능력을 객관적으로 확인할 수 있어서 좋아요.",
    },
  ];

  return (
    <S.ParentsLayout>
      <TextBox>
        <MainText>
          <span style={{ color: "00AB15" }}>학부모</span>가 이야기하는 홀링
        </MainText>
      </TextBox>
      <S.ParentsCardList>
        {parents.map((p) => {
          return (
            <S.ParentsCard>
              <S.ParentsCardHeaderCol>
                <S.ParentsImgBox>
                  <img src={p.img} width="100%" />
                  <img
                    src="assets/images/root/parents/quote.svg"
                    width="50"
                    style={{ position: "relative", top: "-12px" }}
                  />
                </S.ParentsImgBox>
                <S.ParentsTitleText>{p.title}</S.ParentsTitleText>
                <S.ParentsContentCol>
                  <S.ParentsNameText>{p.name}</S.ParentsNameText>
                  <S.VerticalLine />
                  <S.ParentsInfoText>{p.info}</S.ParentsInfoText>
                </S.ParentsContentCol>
              </S.ParentsCardHeaderCol>
              <S.ParentsDescription>{p.desc}</S.ParentsDescription>
            </S.ParentsCard>
          );
        })}
      </S.ParentsCardList>
    </S.ParentsLayout>
  );
}

export default Section5;
