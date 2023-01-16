![header](https://capsule-render.vercel.app/api?type=cylinder&color=2D6806&height=300&section=header&text=Lechou&fontSize=90)


### Product Manager : 류건호(B) Project Manmager : 권나현(F)
### Teammates
- 김진우(F)
- 정다경(F)
- 조윤환(F)
- 권태령(B)
---
### 👁 프로젝트 리뷰
- 오설록 클론 프로젝트
- 오설록의 기본 디자인은 가져가되, 저희가 직접 기획안을 구상하여 새로운 사이트를 만들었습니다.
- 저희 Le chou는 세 가지 문제: 처음 채식을 시도하는 사람들의 접근성이 제한되는 문제, 채식주의자들의 선택 제한, 그리고 환경보호에 가치를 두는 소비자들의 선택지를 늘려주기 위한 해답을 개발에서 찾았습니다.
- 짧은 프로젝트 기간동안 두번의 스프린트 미팅을 가지면서, 해결하고자하는 문제점들을 개발을 중심으로 프로젝트를 진행하였습니다.
- 개발은 초기 세팅부터 전부 직접 구현했으며, 아래 데모 영상에서 보이는 부분은 모두 백앤드와 연결하여 실제 사용할 수 있는 서비스 수준으로 개발한 것입니다.
---
### 👩‍👩‍👧‍👧 개발 인원 및 기간

- 개발기간 : 2023/01/02 ~ 2023/01/13
- 개발 인원 : 프론트엔드 4명, 백엔드 2명
---

### ？ 프로젝트 선정이유
현재 국내 채식 상품 시장에서 고급화 전략을 내세운 곳은 없습니다. 채식주의자들을 위한 웹서비스를 살펴봐도 UI/UX가 과거의 산물인 경우가 많았습니다. 
또한 상세한 영양소를 깔끔한 UI로 정리 해놓은 웹사이트가 없었습니다. 저희 돼지테리안 팀은 그점에 유의해 채식을 했을때의 장점인 지구 온난화의 주 원인인 이산화탄소, 
매탄가스를 감소 시킨다는 점을 강조 해 환경을 생각하는 사람들과, 채식을 원하는 모든 고객들, 
채식을 처음 시도 해 보려는 고객들을 타겟층으로 삼아 한눈에 보이는 깔끔한 상품 UI와 영양소 정보를 제공 해 충성고객을 확보하면 좋겠다 생각해 프로젝트를 시작하게 되었습니다.

---

### ⚒ 사용한 기술 스택
<div>
  <img src="https://img.shields.io/badge/REACT-61DAFB?style=flat&logo=REACT&logoColor=white"/>
  <img src="https://img.shields.io/badge/React Router-CA4245?style=flat&logo=React-Router&logoColor=white"/>
  <img src="https://img.shields.io/badge/Sass-CC6699?style=flat&logo=SASS&logoColor=white"/>
  <img src="https://img.shields.io/badge/Git-F05032?style=flat&logo=GIT&logoColor=white"/>
  <img src="https://img.shields.io/badge/GitHub-F05032?style=flat&logo=GitHub&logoColor=white"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=white"/>
</div>

## 구현 기능 (FE)

- 로그인 페이지
    - 회원가입 (정다경)
    - 로그인 (정다경)
    - 로그아웃 (김진우)
        - JWT 토큰을 가지고 있을 때 로그인 회원가입 버튼이 사라지고, 로그아웃, 마이페이지 버튼이 나오게 구현 로그아웃 버튼을 누르면 토큰을 LocalStorage에서 삭제하고 메인화면으로 리다이렉팅 기능 구현
        
    - 마이페이지 (김진우 & 정다경)
        - 전에 눌러보았던 상품들을 볼 수 있는 히스토리 섹션 구현
        
- Nav/Footer
    - 스크롤 위치에 따른 스타일이 변경되는 Nav바 구현 (김진우)
    - Search Bar - Modal (권나현)
    - Footer 구현 (조윤환)
    
- Main page (조윤환)
    - 이미지 슬라이드로 서비스의 주력 상품을 소개함
    
- Best page (조윤환)
    - 제일 잘팔리는 순으로 sort하여 이미지를 제공해줌
    
- Product page (권나현)
    - 판매하고 있는 전체 상품들을 나열해줌
    - ProductDetail page
        - 상품의 디테일한 정보와 카트와 결제창으로 이어지는 기능
        
- Present page (김진우)
    - 이미지슬라이드로 주력 상품들 소개
    - 4개의 버튼으로 각각의 섹션으로 바로 이동할 수 있는 버튼 구현
    - 여러가지 상품을 UI를 해치지 않고 보여줄 수 있게 페이지네이션 구현
    
- Cart page (권나현)
    - Product 페이지에서 담은 상품들을 볼 수 있고, 총 가격을 볼 수 있음.
    - 담은 제품을 삭제하고 수량을 변경 할 수 있음.
    
- Payment page (조윤환)
    - 장바구니에 담은 아이템 목록들을 볼 수 있고, 포인트로 결제하는 수단 구현
