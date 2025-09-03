import {
  BannerColor,
  BannerContainer,
  BannerContent,
  BannerImg,
  BannerText,
  ServiceContainer,
  ServiceContent,
  ServiceDescription,
  ServiceDetail,
  ServiceImg,
  ServiceItem,
  ServiceList,
  ServiceSubTitle,
  ServiceTitle,
  ServiceTitleBox,
  FlexRow20,
  Title,
  ThickBtnBox,
  BtnTitle,
  BtnContent,
  BtnText,
  ThinBtnBox,
} from "./Section8.styles";

function Section8() {
  return (
    <>
      <BannerContainer>
        <BannerImg>
          <BannerColor>
            <BannerContent>
              <BannerText>
                중·고등 수학은
                <span> 홀링 플러스</span>로 똑똑하게 공부하세요
              </BannerText>
              <img
                src="/assets/images/root/banner/chalk.svg"
                style={{ alignSelf: "flex-end" }}
              />
            </BannerContent>
          </BannerColor>
        </BannerImg>
      </BannerContainer>

      <ServiceContainer>
        <ServiceContent>
          <Title>
            매쓰홀릭의 다양한
            <br />
            수학서비스를 만나보세요.
          </Title>
          <ServiceList style={{ width: "100%" }}>
            <ServiceItem>
              <ServiceImg style={{ width: "50%" }}>
                <img
                  width={525}
                  src="/assets/images/root/services/service_01.png"
                  style={{ maxWidth: "100%" }}
                />
              </ServiceImg>
              <ServiceDetail
                style={{ paddingTop: "32px", paddingLeft: "64px" }}
              >
                <ServiceTitleBox>
                  <ServiceTitle>매쓰홀릭</ServiceTitle>
                  <img
                    src="/assets/images/root/services/title_sep.svg"
                    width={"auto"}
                  />
                  <ServiceTitle>매쓰홀릭T</ServiceTitle>
                </ServiceTitleBox>
                <ServiceSubTitle>
                  학원, 학교에서 학생들의 학습을 분석하고 관리할 때
                </ServiceSubTitle>
                <ServiceDescription>
                  교과서, 참고서의 유사 문제를 만들고
                  <br />
                  학생별 취약유형을 분석해 맞춤 학습을 진행하세요.
                </ServiceDescription>
                <FlexRow20>
                  <img
                    src="/assets/images/root/services/school.svg"
                    width={100}
                  />
                  <img src="/assets/images/root/services/b2b.svg" width={100} />
                </FlexRow20>
                <FlexRow20>
                  <ThickBtnBox
                    href="https://www.matholic.com/"
                    style={{ marginTop: "65px" }}
                  >
                    <BtnContent>
                      <BtnTitle>바로가기</BtnTitle> <br />
                      <BtnText>(학원용 매쓰홀릭)</BtnText>
                    </BtnContent>
                    <img
                      src="/assets/images/root/services/link.svg"
                      height={14}
                    />
                  </ThickBtnBox>
                  <ThickBtnBox
                    href="https://school.matholic.com/"
                    style={{ marginTop: "65px" }}
                  >
                    <BtnContent>
                      <BtnTitle>바로가기</BtnTitle> <br />
                      <BtnText>(학교용 매쓰홀릭)</BtnText>
                    </BtnContent>
                    <img
                      src="/assets/images/root/services/link.svg"
                      height={14}
                    />
                  </ThickBtnBox>
                </FlexRow20>
              </ServiceDetail>
            </ServiceItem>

            <ServiceItem>
              <ServiceImg style={{ width: "50%" }}>
                <img
                  width={525}
                  src="/assets/images/root/services/service_02.png"
                  style={{ maxWidth: "100%" }}
                />
              </ServiceImg>
              <ServiceDetail
                style={{ paddingTop: "32px", paddingLeft: "64px" }}
              >
                <ServiceTitleBox>
                  <ServiceTitle>연산대장</ServiceTitle>
                </ServiceTitleBox>
                <ServiceSubTitle>수학 연산 훈련이 필요할 때</ServiceSubTitle>
                <ServiceDescription>
                  학년별 계산력/문장제 문제지를 만들고
                  <br />
                  반복 학습으로 연산 능력을 키워보세요.
                </ServiceDescription>
                <FlexRow20>
                  <img src="/assets/images/root/services/b2b.svg" width={100} />
                  <img
                    src="/assets/images/root/services/free.svg"
                    width={100}
                  />
                </FlexRow20>
                <FlexRow20>
                  <ThinBtnBox
                    href="https://ysdj.kr/"
                    style={{ marginTop: "65px" }}
                  >
                    <BtnContent>
                      <BtnTitle>바로가기</BtnTitle>
                    </BtnContent>
                    <img
                      src="/assets/images/root/services/link.svg"
                      height={14}
                    />
                  </ThinBtnBox>
                </FlexRow20>
              </ServiceDetail>
            </ServiceItem>

            <ServiceItem>
              <ServiceImg style={{ width: "50%" }}>
                <img
                  width={525}
                  src="/assets/images/root/services/service_03.png"
                  style={{ maxWidth: "100%" }}
                />
              </ServiceImg>
              <ServiceDetail
                style={{ paddingTop: "32px", paddingLeft: "64px" }}
              >
                <ServiceTitleBox>
                  <ServiceTitle>시험대장</ServiceTitle>
                </ServiceTitleBox>
                <ServiceSubTitle>
                  우리학교 족보로 시험을 준비할 때
                </ServiceSubTitle>
                <ServiceDescription>
                  학교별 기출 시험지를 다운로드하고
                  <br />
                  유사 문제로 내신을대비하세요.
                </ServiceDescription>
                <FlexRow20>
                  <img src="/assets/images/root/services/b2b.svg" width={100} />
                  <img
                    src="/assets/images/root/services/free.svg"
                    width={100}
                  />
                </FlexRow20>
                <FlexRow20>
                  <ThinBtnBox
                    href="https://shdj.kr/"
                    style={{ marginTop: "65px" }}
                  >
                    <BtnContent>
                      <BtnTitle>바로가기</BtnTitle>
                    </BtnContent>
                    <img
                      src="/assets/images/root/services/link.svg"
                      height={14}
                    />
                  </ThinBtnBox>
                </FlexRow20>
              </ServiceDetail>
            </ServiceItem>
          </ServiceList>
        </ServiceContent>
      </ServiceContainer>
    </>
  );
}

export default Section8;
