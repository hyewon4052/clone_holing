import * as S from "./Section8.styles";

function Section8() {
  return (
    <>
      <S.BannerContainer>
        <S.BannerImg>
          <S.BannerColor>
            <S.BannerContent>
              <S.BannerText>
                중·고등 수학은
                <span> 홀링 플러스</span>로 똑똑하게 공부하세요
              </S.BannerText>
              <img
                src="/assets/images/root/banner/chalk.svg"
                style={{ alignSelf: "flex-end" }}
              />
            </S.BannerContent>
          </S.BannerColor>
        </S.BannerImg>
      </S.BannerContainer>

      <S.ServiceContainer>
        <S.ServiceContent>
          <S.Title>
            매쓰홀릭의 다양한
            <br />
            수학서비스를 만나보세요.
          </S.Title>
          <S.ServiceList style={{ width: "100%" }}>
            <S.ServiceItem>
              <S.ServiceImg>
                <img
                  width={525}
                  src="/assets/images/root/services/service_01.png"
                  style={{ maxWidth: "100%" }}
                />
              </S.ServiceImg>
              <S.ServiceDetail>
                <S.ServiceTitleBox>
                  <S.ServiceTitle>매쓰홀릭</S.ServiceTitle>
                  <img
                    src="/assets/images/root/services/title_sep.svg"
                    width={"auto"}
                  />
                  <S.ServiceTitle>매쓰홀릭T</S.ServiceTitle>
                </S.ServiceTitleBox>
                <S.ServiceSubTitle>
                  학원, 학교에서 학생들의 학습을 분석하고 관리할 때
                </S.ServiceSubTitle>
                <S.ServiceDescription>
                  교과서, 참고서의 유사 문제를 만들고
                  <br />
                  학생별 취약유형을 분석해 맞춤 학습을 진행하세요.
                </S.ServiceDescription>
                <S.FlexRow20>
                  <img
                    src="/assets/images/root/services/school.svg"
                    width={100}
                  />
                  <img src="/assets/images/root/services/b2b.svg" width={100} />
                </S.FlexRow20>
                <S.FlexRow20>
                  <S.ThickBtnBox
                    href="https://www.matholic.com/"
                    style={{ marginTop: "65px" }}
                  >
                    <S.BtnContent>
                      <S.BtnTitle>바로가기</S.BtnTitle> <br />
                      <S.BtnText>(학원용 매쓰홀릭)</S.BtnText>
                    </S.BtnContent>
                    <img
                      src="/assets/images/root/services/link.svg"
                      height={14}
                    />
                  </S.ThickBtnBox>
                  <S.ThickBtnBox
                    href="https://school.matholic.com/"
                    style={{ marginTop: "65px" }}
                  >
                    <S.BtnContent>
                      <S.BtnTitle>바로가기</S.BtnTitle> <br />
                      <S.BtnText>(학교용 매쓰홀릭)</S.BtnText>
                    </S.BtnContent>
                    <img
                      src="/assets/images/root/services/link.svg"
                      height={14}
                    />
                  </S.ThickBtnBox>
                </S.FlexRow20>
              </S.ServiceDetail>
            </S.ServiceItem>

            <S.ServiceItem>
              <S.ServiceImg>
                <img
                  width={525}
                  src="/assets/images/root/services/service_02.png"
                  style={{ maxWidth: "100%" }}
                />
              </S.ServiceImg>
              <S.ServiceDetail>
                <S.ServiceTitleBox>
                  <S.ServiceTitle>연산대장</S.ServiceTitle>
                </S.ServiceTitleBox>
                <S.ServiceSubTitle>
                  수학 연산 훈련이 필요할 때
                </S.ServiceSubTitle>
                <S.ServiceDescription>
                  학년별 계산력/문장제 문제지를 만들고
                  <br />
                  반복 학습으로 연산 능력을 키워보세요.
                </S.ServiceDescription>
                <S.FlexRow20>
                  <img src="/assets/images/root/services/b2b.svg" width={100} />
                  <img
                    src="/assets/images/root/services/free.svg"
                    width={100}
                  />
                </S.FlexRow20>
                <S.FlexRow20>
                  <S.ThinBtnBox
                    href="https://ysdj.kr/"
                    style={{ marginTop: "65px" }}
                  >
                    <S.BtnContent>
                      <S.BtnTitle>바로가기</S.BtnTitle>
                    </S.BtnContent>
                    <img
                      src="/assets/images/root/services/link.svg"
                      height={14}
                    />
                  </S.ThinBtnBox>
                </S.FlexRow20>
              </S.ServiceDetail>
            </S.ServiceItem>

            <S.ServiceItem>
              <S.ServiceImg>
                <img
                  width={525}
                  src="/assets/images/root/services/service_03.png"
                  style={{ maxWidth: "100%" }}
                />
              </S.ServiceImg>
              <S.ServiceDetail>
                <S.ServiceTitleBox>
                  <S.ServiceTitle>시험대장</S.ServiceTitle>
                </S.ServiceTitleBox>
                <S.ServiceSubTitle>
                  우리학교 족보로 시험을 준비할 때
                </S.ServiceSubTitle>
                <S.ServiceDescription>
                  학교별 기출 시험지를 다운로드하고
                  <br />
                  유사 문제로 내신을대비하세요.
                </S.ServiceDescription>
                <S.FlexRow20>
                  <img src="/assets/images/root/services/b2b.svg" width={100} />
                  <img
                    src="/assets/images/root/services/free.svg"
                    width={100}
                  />
                </S.FlexRow20>
                <S.FlexRow20>
                  <S.ThinBtnBox
                    href="https://shdj.kr/"
                    style={{ marginTop: "65px" }}
                  >
                    <S.BtnContent>
                      <S.BtnTitle>바로가기</S.BtnTitle>
                    </S.BtnContent>
                    <img
                      src="/assets/images/root/services/link.svg"
                      height={14}
                    />
                  </S.ThinBtnBox>
                </S.FlexRow20>
              </S.ServiceDetail>
            </S.ServiceItem>
          </S.ServiceList>
        </S.ServiceContent>
      </S.ServiceContainer>
    </>
  );
}

export default Section8;
