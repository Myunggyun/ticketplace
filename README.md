### 질문 1

How to build a movie search app using React Hooks 프로젝트가 있습니다. 이 프로젝트는 React+ES6로 만들어져 있습니다.

    -1. 이 프로젝트를 TypeScript를 이용해서 새롭게 만들어 보세요.
     -완료

    -2. 이 프로젝트에서는 Reducer를 통해서 일어나는 모든 이벤트를 정의하고 있는데, 이것을 더 낫게 바꿀 방법은 없을까요?
     - React는 component를 캡슐화 하고, component를 재사용을 높이려는 특징을 가지고 있습니다. useReducer로 작성된 코드는
       한 component안데 2가지의 함수를 가지고 있으며, 복잡하게 구성 되어 있습니다. 더욱이 component를 재사용 했을 때, Reducer로 작성된 함수까지 같이 오게 되며, React 특징을 잘 활용 되지 않았다고 판단 됩니다. 그래서 Rudux와 같은 상태 관리 라이브러리를 활용해서 Reducer 함수와 상태를 관리를 하는 store 파일들을 만들어서 React component의 재사용성을 높을 수 있도록 리팩토링 필요하다 판단됩니다.

    -3. 이 프로젝트를 제가 어떻게 하면 바로 실행해보고 테스트 해볼 수 있을지 README.md에 적어주세요.
    - 1)npm install을 한다.
    - 2)command line에서  ~/ticketplace$ npm start를 실행한다.

### 질문 2

less를 쓰는 것과 CSS를 쓰는 것의 차이는 뭘까요?

    -less :
    -CSS :
    -차이점 :
