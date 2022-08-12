# Git 사용법 정리

## 들어가기 앞서

웬만하면 VSCode로 사용 가능하다.  
하지만 가끔가다가 이게.. 뭐야..? 하고 버벅거릴 때를 대비한 가이드라인!

<hr />

## Setting

-   _git config --global core.editor "code --wait"_  
    git의 기본 에디터가 vim에서 vscode로 변경

-   _git config --global init.defaultBranch main_  
    브렌치의 기본값을 main으로 설정

-   _git config --global user.email "내이메일@gmail.com"_
-   _git config --global user.name "내 이름"_
    => 깃에 내 정보 저장. 이 정보와 깃허브 정보가 맞지 않으면 잔디 날라간다. 프로젝트에 따라 정보 수정을 하고 싶을 경우 --global 제거하고 설정.

<hr />

## Basic

-   _git init_  
    작업 파일에서 git 쓰고 싶을 때 제일 먼저 쳐야 함

-   _git add 파일명.txt_  
    깃에 올리고 싶은 파일을 고름. 띄어씌기 하고 파일명 추가하면 여러개 올릴 수 있음. 모두 스테이징 하고 싶으면 git add .
-   _git commit -m '어쩌구 저쩌구'_  
    기록 저장소에 옮김.  
    => git add 로 staging area에 보내고 git commit으로 repository에 보냄. VSC코드의 스테이징이 commit 할 파일을 고른다는 뜻.

-   _git status_  
    상태창 열기. 스테이징한 파일과 수정 파일 확인.
-   _git log --all --oneline_  
    커밋 내역 확인

<hr />

## Merge and Conflict

-   _git branch 브랜치명_  
    main에서 새로운 브랜치 생성

-   _git switch 브랜치명_  
    브랜치로 이동

-   _git log --graph --oneline --all_  
    브랜치마다 커밋한 내역을 그래프로 보고 싶을 때 사용. log 했을 때 나오는 HEAD는 현재 위치를 뜻한다.

-   _git merge 병합할브랜치명_  
    main(master)와 갈라진 브랜치 병합

    => merge할 때 main으로 이동해서 한다. 이때 매인 브랜치와 병합하는 브랜치의 코드가 동일한 곳에서 작업이 됐는데 다른 코드일 경우 충돌나는 지점에서 conflict 가 발생한다.

```
conflict 해결방법

1. 에디터로 해당 파일을 열어서 충돌사항을 확인한다.
2. 남길 코드만 냅두고 정리한다.
3. git add 파일명 (add . 도 괜찮다)
4. git commit -m '남길 메세지'
```

<hr />

## Merge 방법들

### 3-way merge

merge의 기본 동작방식. 브랜치에 각각 신규 커밋이 1회 있을 경우 merge 명령을 내리면 두 개의 브랜치 코드를 합쳐서 새로운 commit을 자동으로 생성.  
이 방법으로 머지가 될 경우 나오지 않아도 되는 커밋로그도 같이 나와버리고 깃로그가 더러워지는 경우가 발생하는데 이걸 보완한 방법이 rebase, squash and merge.

### fast-forward merge

기존 브랜치에 신규 커밋이 없는 경우 발동. 만약에 싫으면 "git merge --no-ff 브랜치명"으로 강제로 3-way merge 가능.

### rebase

브랜치의 시작점을 다른 커밋으로 옮겨줌.
rebase로 신규브랜치의 시작점을 main 브랜치 최근 커밋으로 옮끼고 fast-forward merge를 한다.  
3-way merge로만 머지할 경우 깃 히스토리, 깃 로그가 너무 복잡해질 수 있다. 그럴 경우 사용하면 깔끔하게 관리가 가능.  
브랜치끼리 차이가 너무 많은 경우 conflict 가 발생하는데 해결하기 번거롭다는 단점 존재.

```
git switch 새로운브랜치 : 위치 조정이 필요한 브랜치로 이동
git rebase 중심브랜치명 : 시작점 변경

git switch 중심브랜치명 : 변경된 시작점으로 이동
git merge 새로운 브랜치 : 브랜치 머지
```

### squash and merge

새 브랜치에 있던 코드 변경사항들이 중심 브랜치로 이동. 브랜치의 깃로그를 출력해보면 merge가 완료된 브랜치의 commit은 출력되지 않음.

```
git switch 중심브랜치
git merge --squash 브랜치명
git commit -m '메세지'
```

<br />

-   _git branch -d 브랜치명_  
    머지 완료된 브랜치 삭제
-   _git branch -D 브랜치명_  
    머지 안한 브랜치 삭제

<hr />

## 깃을 되돌리고 싶을 경우

### 파일 단위의 복구

-   _git restore 파일명_  
    최근 커밋 상태로 파일을 복구
-   _git restore --source 커밋아이디 파일명_  
    특정 커밋 시점으로 파일 복구
-   _git restore --staged 파일명_  
    특정 파일의 스테이징 취소

### 커밋 단위의 복구

깃은 과거 커밋을 삭제해주세요! 이런 기능은 없음. 대신 과거 커밋을 취소(제거)하는 커밋은 생성 가능.

-   _git revert 커밋아이디_  
    커밋 취소하기. 커밋아이디는 동시에 입력 가능.  
    => 실행 후 에디터가 뜨면 커밋메세지 수정하고 닫으면 끝!  
    => vim 에디터가 뜨면 i를 눌러서 글자 수정하고 esc 눌러서 나오기. :wq 눌러서 커밋 메세지 저장.
-   _git revert HEAD_  
    최근 커밋 취소.

이 과정을 거치면 git log에는 revert 해줬다는 커밋이 자동으로 생성됨.  
머지 된 커밋도 취소가 가능하다.

### 특정된 시점으로 되돌리기

협업할 때 잘 쓰지는 않음. 다른 사람이 협업하는 시점의 커밋메세지도 날려버릴 수 있음. 협업 시 사용금지.

-   _git reset --hard 커밋아이디_  
    커밋아이디 시점으로 모든걸 되돌려줌
-   _git reset --soft 커밋아이디_  
    리셋인데 변동사항 지우지 말고 스테이징
-   _git reset --mixed 커밋아이디_  
    리셋인데 변동사항 지우지 말고 unstage 해놓기

<hr />

## github는 다르다, github는!

git이 책갈피라면 github는 책갈피를 모아서 저장할 수 있는 저장소.  
저장소 생성 후 아주 친절하게 사용하는 방법을 적어놓고 있으니 그대로 따라가기.

-   _git push -u 원격저장소주소.git main_  
    main은 저장하고 싶은 브랜치명을 넣어도 됨. 원격저장소의 주소로 저장해주세요!  
    push 할 때 -u를 추가하면 주소 기억하라는 뜻. 한 번 썼었다 하면 git push로 계속 푸쉬 가능
-   _git remote add origin 원격저장소주소.git_  
    git 주소를 origin이라는 변수에 저장. origin이라고 할때마다 깃주소가 남아있을 것.
-   _git clone 원격저장소주소.git_  
    저장소에서 코드 클론하기.  
    협업을 할 때 이걸 쓴다면 팀원이 깃헙 아이디가 있어야 하고, 깃헙 아이디를 설정에서 등록해놔야 git push 가능.
-   _git pull_  
    원격과 로컬의 내용이 다르면 git push가 어려움.  
    git push 전에 git pull을 해서 땡겨오고 푸시하기.  
    git fetch + git merge = git pull, git fetch는 원격저장소에 있는 커밋 중 로컬에 없는 신규 커밋 가지고 오라는 소리.

<hr />

## pull request

협업하면서 곧바로 머지하는 경우는 잘 없고 코드리뷰를 거친 다음에 진행한다.  
저장소에서도 브랜치 생성 가능하다. 깃허브에서 직접 만들거나,

```
git branch 새브랜치명
git switch 새브린치명
git add .
git commit -m "커밋메세지"
git push 원격저장소주소(또는 origin) 새브랜치명
```

이렇게 브랜치를 생성하고 커밋하고 나면 어느 시점에서 머지를 해야하는 상황이 발생한다. pull requset를 열어서 어디 브랜치에 합칠지 선택하고 생성한다. 만약에 conflict가 발생하는 성태면 깃허브에서도 수정이 가능하다.  
pull request 로 코드리뷰가 끝나면 merge pull request 버튼을 누를 수 있는데, 머지하는 방법은 위에서 언급한 머지하는 3가지 방법과 같다.
