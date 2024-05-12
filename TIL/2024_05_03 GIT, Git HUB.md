## GIT & Git Hub

**GIT** : 분산 버전 관리 툴

**Git Hub** : Git을 관리해주는 웹 호스팅 서비스

## Git Hub를 이용해 간단한 Web 페이지 만들기

### Repository 생성

Git Hub → Create → New repository → Repository Name 작성 → Public or Private 선택 → ✅Add a README file → Create Repository

키보드 (.) 누르면 VSC로 넘어감

url com → dev 로 입력해도 동일함

index.html 수정

html:5 입력

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/e8f11927-b70c-4524-9227-a3efac08e7aa/d9864d63-ecb1-4270-97d3-fcafb242e204/Untitled.png)

<body>

h${hello world}*6  →입력

</body>

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/e8f11927-b70c-4524-9227-a3efac08e7aa/41e22a73-08b6-4c53-8108-3cc41cf20797/Untitled.png)

Setting → Pages → Branch를 main 으로 변경 →url 생성됨

---

## README 수정/깃모지/머메이드

https://mermaid.live/

claude, 머메이드 활용한 다이어그램

목표/ 개발환경 / 간트차트

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/e8f11927-b70c-4524-9227-a3efac08e7aa/0de88aac-6fdf-471f-9a9e-4190f61ce472/0c18a1f1-5465-4971-bec2-91539dbddf93.png)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/e8f11927-b70c-4524-9227-a3efac08e7aa/bfacba0b-4346-40c6-a9ca-1ef4085416d7/Untitled.png)

**깃모지(Gitmoji) 컨벤션**

커밋 메시지에 이모지를 사용하여 커밋의 목적을 시각적으로 표현합니다. 다음은 자주 사용되는 깃모지 목록입니다.

- ✨ (`:sparkles:`) 새로운 기능 추가
- 🐛 (`:bug:`) 버그 수정
- 📝 (`:memo:`) 문서 수정
- 💄 (`:lipstick:`) UI/스타일 파일 수정
- 🎨 (`:art:`) 코드 구조 개선
- ⚡️ (`:zap:`) 성능 개선
- 🔥 (`:fire:`) 코드 또는 파일 삭제
- 🚑 (`:ambulance:`) 크리티컬한 버그 수정
- 🚀 (`:rocket:`) 배포
- 💚 (`:green_heart:`) CI 빌드 수정
- ✅ (`:white_check_mark:`) 테스트 추가/수정
- 🔒 (`:lock:`) 보안 이슈 수정
- 🍎 (`:apple:`) iOS 관련 수정
- 🤖 (`:robot:`) Android 관련 수정
- 🌐 (`:globe_with_meridians:`) 국제화/현지화
- 📦 (`:package:`) 패키지 관련 수정
- ⬆️ (`:arrow_up:`) 디펜던시 업그레이드
- ⬇️ (`:arrow_down:`) 디펜던시 다운그레이드
- 🔀 (`:twisted_rightwards_arrows:`) 브랜치 병합
- 📸 (`:camera_flash:`) 스냅샷 추가/수정

---

## GIT/Git Hub로 협업하기

### CLI 기본 명령어(★★★★★)

```bash
git pull //코드를 원격 저장소에서 가져오기
git add . //새로운 버전을 만들기 위한 준비 작업
//변경된 소스코드 등록
git commit //새로운 버전을 만들기
git push //원격 저장소에 코드를 업로드
```

### 실습1

1.1 repo 생성(리드미 추가한 채로 생성)
1.2 code > https://github.com/paullabkorea/ormitest.git 링크 복사
1.3 내 컴퓨터에 blog 폴더에서 git bash를 엽니다.
1.4 git clone https://github.com/paullabkorea/ormitest.git .
1.5 파일 수정, 삭제, 추가를 진행합니다.
1.6 git add .
1.7 git commit -m ':pencil: 문서추가1'
1.8 git push

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/e8f11927-b70c-4524-9227-a3efac08e7aa/d6ee83ae-3efe-42c4-beca-fa83004bbddf/Untitled.png)

## 실습2

1. hello 레파지토리 안에 a라는 폴더를 만들어서 github에 올려주세요.(안됩니다. => 빈폴더는 업로드되지 않습니다. 빈 파일 하나 넣어서 올려주셔야 합니다.)
2. 레파지토리 안에 README.md에 간단한 항목 3개 작성하셔서 github에 올려주세요.
- hello
- hello
- hello
1. a.html, b.html, index.html 파일을 빈 파일로 생성해서 레파지토리에 올려주세요.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/e8f11927-b70c-4524-9227-a3efac08e7aa/a39fc1a4-562b-4681-8142-53c6516a0915/Untitled.png)

## 기타 명령어

```bash
touch [빈파일.md](http://xn--ex3bi2oytj.md/) // 빈파일 만드는 명령어
mkdir a // 폴더 생성
cd a // 폴더 안으로 들어가는 명령어
cd .. //폴더 밖으로 빠져나오는 명령어
```