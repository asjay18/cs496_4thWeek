# 몰입캠프 Week4 Project: Recreation
## 프로젝트 개요
MT와 같은 단체활동에는 아이스브레이킹을 위한 레크리에이션 시간이 반드시 있다.
그 때문에 단체활동 진행자는 항상 각종 사전준비들을 해야하는데, 그 수고를 덜어주기 위해 각종 단체 게임들을 담은 웹페이지를 기획하게 되었다.
웹 개발 환경은 React, 서버와 DB는 각각 Node.js, Mysql을 사용했다.





## 기능 설명
### 메인 화면 및 게시판
> 레크리에이션 시간에 자주 활용되는 게임 카테고리들을 확인할 수 있다.\
> ![홈페이지](https://user-images.githubusercontent.com/51320553/181478437-def49756-4dff-4358-8857-ce02fa9fb726.PNG)
> \
> \
> 각 카테고리에서 다른 유저들이 업로드한 게임들을 확인한다.\
> 현재는 동일한 폼을 사용하는 네글자, 초성, 속담 퀴즈를 즐길 수 있다.\
> ![게시판](https://user-images.githubusercontent.com/51320553/181479399-7ca3be32-f472-41c4-b414-c5d645ff793f.PNG)






### 컨텐츠 진행
> 간단히 슬라이드쇼를 넘기듯이 컨텐츠를 진행한다.\
> 문제-정답의 일괄적인 형식을 따른다.\
> ![게임화면](https://user-images.githubusercontent.com/51320553/181479091-00a11620-4994-4a3f-afde-d1e70930a61b.png)





### 컨텐츠 생성
> 게시판에 퀴즈를 만들기 위해서는 로그인/회원가입을 요구한다.\
> 간단한 구현을 위해 sessionStorage에 로그인 여부를 저장해 구현했다.\
> ![로그인폼](https://user-images.githubusercontent.com/51320553/181481784-2a2c89e9-c371-4956-adb2-a7ca34027d58.png)
> \
> \
> 게시물 제목과 퀴즈에 필요한 문제-정답 폼을 작성하면 쉽게 게시물을 작성할 수 있다.\
> ![퀴즈만들기](https://user-images.githubusercontent.com/51320553/181481868-28520e05-b859-4e52-ae33-582b32f96a4f.PNG)
> \
> \
> 로그인에 성공하면 '내가 만든 퀴즈' 버튼이 활성화되고, 내가 작성한 게시물들을 모아볼 수 있다.\
> ![내만퀴](https://user-images.githubusercontent.com/51320553/181482217-9c039f5c-e319-4e67-b1c3-5b08445e8933.PNG)



#### 개발팀원
* 신혁교(한양대학교 컴퓨터소프트웨어학과)
* 정세진(고려대학교 컴퓨터학과)
