# youtube APi Project!
 유튜브 API를 이용한 사이트 입니다!

![youtube01](https://github.com/hyeonbeen97/site2023-youtube01/assets/125417850/21364f9e-dc05-4fe7-abd1-2e00414582cf)
## 소개
useState와 useEffect 훅을 사용하여 상태를 관리하고, 선택된 카테고리에 따라 API를 호출하여 관련된 유튜버의 비디오 리스트를 보여줍니다. 
페이지에 접속하면 카테고리를 선택할 수 있으며, 선택된 카테고리에 따라 해당 유튜버의 비디오 목록이 동적으로 로드되는 기능이 구현되어 있습니다.
## 사용 스택
-React: JavaScript 라이브러리로 사용자 인터페이스를 구축하기 위해 사용됩니다.

-react-router-dom: React 애플리케이션의 클라이언트 사이드 라우팅을 관리하는 라이브러리입니다.

-BrowserRouter: react-router-dom에서 제공하는 라우터 구성 요소 중 하나로, HTML5 History API를 사용하여 브라우저의 주소 표시줄을 관리하고, 라우팅을 처리합니다.

-Route: react-router-dom에서 제공하는 라우터 구성 요소 중 하나로, 경로에 따라 특정 컴포넌트를 렌더링합니다.
 Routes: react-router-dom에서 제공하는 라우터 구성 요소로, 여러 Route를 그룹화하고, 라우팅 구성을 선언적으로 표현할 수 있도록 도와줍니다.

-fetch: 네트워크 요청을 보내기 위해 사용되는 자바스크립트 함수로, 비동기적으로 데이터를 가져오기 위해 사용됩니다. 해당 코드에서는 영화 데이터를 API로부터 가져오는데 사용되었습니다.

-useState: React 훅 중 하나로, 함수형 컴포넌트에서 상태(state)를 사용할 수 있게 해줍니다. 해당 코드에서는 영화 데이터를 상태로 관리하기 위해 사용되었습니다.

-useEffect: React 훅 중 하나로, 컴포넌트의 렌더링 이후에 실행되는 사이드 이펙트를 처리할 수 있도록 도와줍니다. 해당 코드에서는 초기 렌더링 시에 API를 호출하여 유튜브 데이터를 가져오는데 사용되었습니다.

-useRef: React 훅 중 하나로, 함수형 컴포넌트에서 DOM 요소에 접근하기 위해 사용됩니다. 해당 코드에서는 검색어 입력란(input 요소)에 접근하기 위해 사용되었습니다.
-map 함수: categories 배열을 순회하면서 각 카테고리에 대해 버튼을 생성합니다. map 함수는 배열 요소를 변환하고 새로운 배열을 생성하는 데 사용됩니다.

-Inline 스타일링: 각 버튼의 스타일은 style 속성 내에 인라인 스타일로 정의되어 있습니다. backgroundColor, borderRadius, 그리고 transition 속성을 지정하여 버튼의 배경색, 모서리 둥글기 및 전환 효과를 지정합니다.

-이벤트 핸들러: 각 버튼에 onClick 이벤트 핸들러가 설정되어 있으며, 클릭 시 setSelectCategory 함수를 호출하여 선택된 카테고리의 이름을 업데이트합니다.

## 상세페이지
![youtube01](https://github.com/hyeonbeen97/site2023-youtube01/assets/125417850/3258eeec-107e-4954-ad40-4077819cb9c0)

![youtube02](https://github.com/hyeonbeen97/site2023-youtube01/assets/125417850/b5d22213-70e5-480e-9cac-b9023267bd48)

![youtube03](https://github.com/hyeonbeen97/site2023-youtube01/assets/125417850/1bff630b-cf2a-4893-8af1-2db6a01c4c5d)


