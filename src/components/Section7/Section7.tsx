import { useState } from "react";
import * as S from "./Section7.styles";

function Section7() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const qna = [
    {
      question: "누가 이용할 수 있나요?",
      answer: "초등, 중등, 고등의 1,2학기 전체 과정을 모두 이용할 수 있어요.",
    },
    {
      question: "어떤 기기를 사용해야 하나요?",
      answer: `태블릿(갤럭시탭, 아이패드 등), 크롬북, 스마트폰에서 사용 가능하며 태블릿을 사용하면 가장 편리해요.\n* 권장 사양: 안드로이드 버전 8 이상 / iOS 버전 13.5 이상`,
    },
    {
      question: "무료체험은 어떻게 진행되나요?",
      answer: `'무료체험 시작하기' 버튼 또는 로그인 버튼을 눌러 회원가입만 하면 바로 홀링의 모든 서비스를 7일간 무료로 경험하실 수 있어요. \n무료체험이 끝나고 홀링을 계속 이용하시려면 구독 플랜에서 월 정기구독 또는 3,6,12개월 구독권을 구매해 주세요.`,
    },
    {
      question: "요금과 결제 방법이 궁금해요.",
      answer: `매달 30,000원이 결제되는 '월 정기구독'과 3,6,12개월마다 각각 79,000원, 139,000원, 249,000원이 결제되는 '기간별 구독' 중 선택하실 수 있어요.\n결제는 네이버페이 또는 카드 등록으로 편리하게 이용 가능해요.`,
    },
    {
      question: "아이의 학습 결과를 어떻게 확인하나요?",
      answer: `홀링 앱의 학습 현황에서 아이의 실시간 학습 내역을 확인할 수 있고,\n매주 월요일마다 공개되는 주간 학습 리포트에서 지난 일주일의 학습 결과를 확인할 수 있어요.`,
    },
  ];

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <S.QnAContainer>
      <S.Title>자주 묻는 질문</S.Title>
      <S.QuestionCardList>
        {qna.map((q, index) => {
          const isOpen = openIndex === index;
          return (
            <S.QuestionCard key={index} onClick={() => toggleQuestion(index)}>
              <S.QuestionCardHeader>
                <S.QuestionLabel>
                  <img
                    src={
                      isOpen
                        ? "/assets/images/root/qna/question_opened.svg"
                        : "/assets/images/root/qna/question_collapsed.svg"
                    }
                  />
                  <S.QuestionTitle color={isOpen ? "#00ab15" : "black"}>
                    {q.question}
                  </S.QuestionTitle>
                </S.QuestionLabel>
                <img
                  src={
                    isOpen
                      ? "/assets/images/root/qna/collapse.svg"
                      : "/assets/images/root/qna/open.svg"
                  }
                />
              </S.QuestionCardHeader>
              {isOpen && <S.QuestionAnswer>{q.answer}</S.QuestionAnswer>}
            </S.QuestionCard>
          );
        })}
      </S.QuestionCardList>
    </S.QnAContainer>
  );
}

export default Section7;
