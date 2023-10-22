# 🪪 채용 공고 웹사이트
학과 채용 공고를 한눈에!

<br />

## 프로젝트 개요
> 개인 프로젝트입니다.

Database 연동과 Node.js를 이용한 서버 연결을 활용한 프로젝트로, <br />
채용 공고를 카드 형태로 한 눈에 확인할 수 있는 웹사이트를 구현

<br />

## 개발 기간
> 2023.08.15 - 2023.08.18
<br />

## 개발 환경
- FrontEnd : React
- BackEnd : Node.js
- Database : MySQL
- IDE : VSCode, HeidiSQL

<br />

## 구현 기능
- 채용 공고 보기
- 채용 공고 추가
- 채용 공고 수정
- 채용 공고 삭제
- 반응형 웹 디자인

<br />

## 구현 방법
1. Node.js를 이용한 서버 생성 및 연결
- http 모듈 - 서버 객체 생성 (포트번호 : 5000)
- express 모듈 - 서버 생성 및 설정
   - get 방식, post 방식 둘 다 고려한 파라미터 검사
   - post 방식으로 데이터 가져오기 (JSON 형식 / x-www-form-urlencoded 형식)
2. Database 연동
- DBCP(DataBase Connection Pool) 사용 → DB 부하 줄임, 자원 효율적 관리
- Multer 모듈 → 이미지 파일 저장
- 데이터 삭제 → DB에서 실제로 삭제하지 않고, isDeleted 칼럼을 추가, 값(0/1)에 따라 화면 출력에서 제외
3. Hooks 활용하여 데이터 처리
4. Component 구성
5. React-Bootstrap 활용
6. 반응형 웹 디자인 (화면 크기에 따라 카드 크기 및 개수 변화)

<br />

## 결과
