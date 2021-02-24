## 타입스크립트 적용하기

0. 자바스크립트 파일에 JSDoc으로 타입 시스템 입히기
1. 타입스크립트의 기본 환경 구성
   - [] NPM 초기화
   - [] 타입스크립트 라이브러리 설치
   - [] 타입스크립트 설정 파일 생성 및 기본 값 추가
   - [] 자바스크립트 파일을 타입스크립트 파일로 변환
   - [] `tsc` 명령어로 타입스크립트 컴파일 하기
2. 명시적인 `any` 선언하기
   - `tsconfig.json` 파일에 `noImplicitAny` 값을 `true`로 추가
   - 가능한한 구체적인 타입으로 타입 정의
3. 프로젝트 환경 구성
   - babel, eslint, prettier 등의 환경 설정
4. 외부 라이브러리 모듈화

```
npm i -D typescript @babel/core @babel/preset-env @babel/preset-typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint prettier eslint-plugin-prettier
```

## 참고 자료

- [존스 홉킨스 코로나 현황](https://www.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6)
- [Postman API](https://documenter.getpostman.com/view/10808728/SzS8rjbc?version=latest#27454960-ea1c-4b91-a0b6-0468bb4e6712)
- [Type Vue without Typescript](https://blog.usejournal.com/type-vue-without-typescript-b2b49210f0b)