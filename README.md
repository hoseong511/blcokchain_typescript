# 블록체인으로 배우는 타입스크립트
  - 자바스크립트를 더 잘 사용할 수 있게 해준다.
  - 자바스크립트는 자유도가 높아 팀프로젝트에서는 자료타입 에러가 자주 발생한다.
  - 타입스크립트는 자바스크립트의 슈퍼셋이다.
  - 팀프로젝트에서 사용하기 좋다.
  ```sh
  npm install -g yarn
  yarn init
  yarn add typescript # yarn global add typescript
  mv tsconfig.json
  ```
  tsconfig.json 파일 셋팅 ( <span style="font-size:14px">todo: tsconfig.json 문서 확인하기</span>)
  ```json
  {
    "compilerOptions":{ //compileOptions라고 되어있어서 compile뒤에 r을 추가함
    "module": "commaonjs",
    "target": "ES2016",
    "sourceMap":true
    },
    "include": ["index.ts"],
    "exclude": ["node_module"]
  }
  ```
  - packge.json에서
    ```json
    {
      "scripts": {
        "start": "node index.js",
        "prestart": "tsc"
      }
    }    
    ```
    - tsc는 js로 컴파일하는 명령어이다.
    - node.js 는 TypeScript를 이해하지 못하기 때문에 javaScript 코드로 컴파일하는 작업을 거친다.
    - 매번 코드를 수정할때 마다 yarn start라는 과정을 안하게 해줄 tsc-watch 설치
      ```sh
      yarn global add tsc-watch --dev
      npm link typescript
      ```
      그리고 tsconfig.json 및 package.json수정
      ```json
      // tsconfig.json
      { 
        "compilerOptions":{
        "module": "commonjs",
        "target": "ES2016",
        "sourceMap":true,
        "outDir": "dist"
        },
        "include": ["src/**/*"],
        "exclude": ["node_modules"]
      }

      //package.json
      "scripts": {
        "start": "tsc-watch --onSuccess \"node dist/index.js\" "
      },
      ```
    
