import "_skills.scss";

function Career() {
    return (
        <article className={"container flex__column"}>
            <h1>Career & Experience</h1>
            <p>
                I started my career as a Product Management in a travel IT company.
                I co-worked with many developers and was able to learn IT industry terms.
                With a growing curiosity, I jumped into the new world.
            </p>
            <section className={"box"}>
                <h4 className={"box__title"}>(주)미래해양정보기술</h4>
                <div className={"flex__between"}>
                    <div className="w--25">
                        <h5>서비스개발부, 선임연구원</h5>
                        <h5>2020.11 ~ 2022.05</h5>
                    </div>
                    <div className={"w--75"}>
                        <h4>해상교통정보 웹 서비스 (Front-end) - oceantraffic.net</h4>
                        <ul>
                            <li>오픈소스 지도(Leaflet) 기반 SPA 개발</li>
                            <li>지도 위 선박 항로 및 데이터(GeoJson) 시각화 구현</li>
                            <li>Redux를 통한 상태 관리 개선</li>
                            <li>반응형 웹 퍼블리싱</li>
                        </ul>
                        <h4>해상교통정보 웹 서비스 (Back-end)</h4>
                        <ul>
                            <li>Python-Flask RESTful API 개발</li>
                            <li>AWS (EC2, ubuntu) 배포 및 서버 관리</li>
                        </ul>
                        <h4>기타 프로젝트</h4>
                        <ul>
                            <li>해양분야 교육 웹 서비스 반응형 웹 퍼블리싱</li>
                            <li>인공지능 경진대회 참가 등 데이터 분석 프로젝트 일부 참여</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className={"box"}>
                <h4 className={"box__title"}>Amadeus IT Group</h4>
                <div className={"flex__between"}>
                    <div className="w--25">
                        <h5>Product Management</h5>
                        <h5>2016.07 ~ 2017.02</h5>
                    </div>
                    <div className={"w--75"}>
                        <h4>Amadeus Destination Content (Asia Regional Product)</h4>
                        <ul>
                            <li>여행 상품 예약 플랫폼 이슈 관리 및 파일럿 예약 통계 도출</li>
                            <li>신규 론칭 대비 플랫폼 User Guide, Specifications, 마케팅 등 문서 제작</li>
                            <li>플랫폼 웹 디자인 시안 제작 및 스토리보드 작성</li>
                            <li>한국 결제 시스템 도입을 위한 한영 문서 번역</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className={"box"}>
                <h4 className={"box__title"}>산업별 프로젝트 기반 빅데이터 전략 마에스트로 과정</h4>
                <div className={"flex__between"}>
                    <div className="w--25">
                        <h5>한국경제신문/제주테크노파크</h5>
                        <h5>2019.11 ~ 2020.06</h5>
                    </div>
                    <div className={"w--75"}>
                        <ul>
                            <li>기초통계학 및 R/Python을 통한 공공 데이터 분석과 시각화</li>
                            <li>MySQL을 통한 데이터베이스 이해</li>
                            <li>웹 크롤링(BeautifulSoup/Selenium)을 통한 웹 데이터 수집</li>
                            <li>Tensorflow/Keras 프레임워크 활용 머신러닝 및 딥러닝 모델링</li>
                            <li>자연어처리(NLP) 활용 제주 관광 정보 인공지능 챗봇 개발 <br/>
                                (2020 제주 공공데이터 활용 창업경진대회 참가)
                            </li>

                        </ul>
                    </div>
                </div>
            </section>
        </article>
    )
}

export default Career;