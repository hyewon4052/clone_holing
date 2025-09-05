import * as S from "./Section8.styles";

function Section8() {
  return (
    <>
      <S.BannerLayout>
        <S.BannerBgRow>
          <S.BannerOverlayCol>
            <S.BannerContentRow>
              <S.BannerText>
                중·고등 수학은
                <span> 홀링 플러스</span>로 똑똑하게 공부하세요
              </S.BannerText>
              <img
                src="/assets/images/root/banner/chalk.svg"
                style={{ alignSelf: "flex-end" }}
              />
            </S.BannerContentRow>
          </S.BannerOverlayCol>
        </S.BannerBgRow>
      </S.BannerLayout>

      <S.ServiceLayout>
        <S.ServiceContentCol>
          <S.Title>
            매쓰홀릭의 다양한
            <br />
            수학서비스를 만나보세요.
          </S.Title>
          <S.ServiceList style={{ width: "100%" }}>
            <S.ServiceItemRow>
              <S.ServiceImgBox>
                <img src="/assets/images/root/services/service_01.png" />
              </S.ServiceImgBox>
              <S.ServiceDetailCol>
                <S.ServiceTitleBox>
                  <S.ServiceTitleText>매쓰홀릭</S.ServiceTitleText>
                  <img
                    src="/assets/images/root/services/title_sep.svg"
                    width={"auto"}
                  />
                  <S.ServiceTitleText>매쓰홀릭T</S.ServiceTitleText>
                </S.ServiceTitleBox>
                <S.ServiceSubTitleText>
                  학원, 학교에서 학생들의 학습을 분석하고 관리할 때
                </S.ServiceSubTitleText>
                <S.ServiceDescriptionText>
                  교과서, 참고서의 유사 문제를 만들고
                  <br />
                  학생별 취약유형을 분석해 맞춤 학습을 진행하세요.
                </S.ServiceDescriptionText>
                <S.ServiceIconRow>
                  <img
                    src="/assets/images/root/services/school.svg"
                    width={100}
                  />
                  <img src="/assets/images/root/services/b2b.svg" width={100} />
                </S.ServiceIconRow>
                <S.BtnRow>
                  <S.ThickBtnBox href="https://www.matholic.com/">
                    <S.BtnContentCol>
                      <S.BtnTitleText>바로가기</S.BtnTitleText> <br />
                      <S.BtnSubText>(학원용 매쓰홀릭)</S.BtnSubText>
                    </S.BtnContentCol>
                    <img
                      src="/assets/images/root/services/link.svg"
                      height={14}
                    />
                  </S.ThickBtnBox>
                  <S.ThickBtnBox href="https://school.matholic.com/">
                    <S.BtnContentCol>
                      <S.BtnTitleText>바로가기</S.BtnTitleText> <br />
                      <S.BtnSubText>(학교용 매쓰홀릭)</S.BtnSubText>
                    </S.BtnContentCol>
                    <img
                      src="/assets/images/root/services/link.svg"
                      height={14}
                    />
                  </S.ThickBtnBox>
                </S.BtnRow>
              </S.ServiceDetailCol>
            </S.ServiceItemRow>

            <S.ServiceItemRow>
              <S.ServiceImgBox>
                <img src="/assets/images/root/services/service_02.png" />
              </S.ServiceImgBox>
              <S.ServiceDetailCol>
                <S.ServiceTitleBox>
                  <S.ServiceTitleText>연산대장</S.ServiceTitleText>
                </S.ServiceTitleBox>
                <S.ServiceSubTitleText>
                  수학 연산 훈련이 필요할 때
                </S.ServiceSubTitleText>
                <S.ServiceDescriptionText>
                  학년별 계산력/문장제 문제지를 만들고
                  <br />
                  반복 학습으로 연산 능력을 키워보세요.
                </S.ServiceDescriptionText>
                <S.ServiceIconRow>
                  <img src="/assets/images/root/services/b2b.svg" width={100} />
                  <img
                    src="/assets/images/root/services/free.svg"
                    width={100}
                  />
                </S.ServiceIconRow>
                <S.BtnRow>
                  <S.ThinBtnBox href="https://ysdj.kr/">
                    <S.BtnContentCol>
                      <S.BtnTitleText>바로가기</S.BtnTitleText>
                    </S.BtnContentCol>
                    <img
                      src="/assets/images/root/services/link.svg"
                      height={14}
                    />
                  </S.ThinBtnBox>
                </S.BtnRow>
              </S.ServiceDetailCol>
            </S.ServiceItemRow>

            <S.ServiceItemRow>
              <S.ServiceImgBox>
                <img src="/assets/images/root/services/service_03.png" />
              </S.ServiceImgBox>
              <S.ServiceDetailCol>
                <S.ServiceTitleBox>
                  <S.ServiceTitleText>시험대장</S.ServiceTitleText>
                </S.ServiceTitleBox>
                <S.ServiceSubTitleText>
                  우리학교 족보로 시험을 준비할 때
                </S.ServiceSubTitleText>
                <S.ServiceDescriptionText>
                  학교별 기출 시험지를 다운로드하고
                  <br />
                  유사 문제로 내신을대비하세요.
                </S.ServiceDescriptionText>
                <S.ServiceIconRow>
                  <img src="/assets/images/root/services/b2b.svg" width={100} />
                  <img
                    src="/assets/images/root/services/free.svg"
                    width={100}
                  />
                </S.ServiceIconRow>
                <S.BtnRow>
                  <S.ThinBtnBox href="https://shdj.kr/">
                    <S.BtnContentCol>
                      <S.BtnTitleText>바로가기</S.BtnTitleText>
                    </S.BtnContentCol>
                    <img
                      src="/assets/images/root/services/link.svg"
                      height={14}
                    />
                  </S.ThinBtnBox>
                </S.BtnRow>
              </S.ServiceDetailCol>
            </S.ServiceItemRow>
          </S.ServiceList>
        </S.ServiceContentCol>
      </S.ServiceLayout>
    </>
  );
}

export default Section8;
