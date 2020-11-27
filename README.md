### 질문 1

How to build a movie search app using React Hooks 프로젝트가 있습니다. 이 프로젝트는 React+ES6로 만들어져 있습니다.

1. 이 프로젝트를 TypeScript를 이용해서 새롭게 만들어 보세요.

   > 완료

2. 이 프로젝트에서는 Reducer를 통해서 일어나는 모든 이벤트를 정의하고 있는데, 이것을 더 낫게 바꿀 방법은 없을까요?

   > App.tsx 파일은 서버에서 데이터를 받아오기 때문에 비동기 처리를 해야한다고 생각합니다. request를 하고 서버 응답에 따라\
   > success인지 fail을 판단 하면 좋을 것 같습니다. useReducers는 순수 함수로 작성해야 하기 때문에 비동기 처리를 지원 \
   > 하지 않습니다. 그래서 search 함수에서 비동기 처리를 단계적으로 나누거나 Redux를 활용해서 비동기 처리를 하면 좋을 것 같습니다.

   ````const search = async (searchValue:string) => {
         dispatch({
            type: "SEARCH_MOVIES_REQUEST"
         });
         awiat fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
            .then(response => response.json())
            .then(jsonResponse => {
            if (jsonResponse.Response === "True") {
               dispatch({
                  type: "SEARCH_MOVIES_SUCCESS",
                  payload: jsonResponse.Search
               });
            } else {
               dispatch({
                  type: "SEARCH_MOVIES_FAILURE",
                  error: jsonResponse.Error
               });
            }
            });
     };```

   ````

3. 이 프로젝트를 제가 어떻게 하면 바로 실행해보고 테스트 해볼 수 있을지 README.md에 적어주세요.
   > 1)https://github.com/Myunggyun/ticketplace에 접속을 한다.\
   > 2)code를 clone 한다.\
   > 3)command line에서 ~/ticketplace$ npm install을 한다.\
   > 4)command line에서 ~/ticketplace$ npm start로 실행한다.

### 질문 2

less를 쓰는 것과 CSS를 쓰는 것의 차이는 뭘까요?

> 차이점 : less를 사용할 때는 함수와 변수를 사용할 수 있어서 반복성이 좋고, 관리하기 용이합니다.\

           그래서 CSS 보다 적은 코드로 작성이 가능합니다.
