html/css , javascript 

<스톱워치>

html/css
- 타이머, 스타트버튼, 스탑버튼, 리셋버튼

javascript
-start 버튼 : 버튼 눌렀을때 타이머의 seconds, tens 제어
 - 10ms마다 tens 1증가
 - tens가 99되면 seconds 1증가 tens = 0
 - tens와 seconds innerText에 tens와 seconds value 입력

-stop 버튼 : 버튼 눌렀을때 타이머 seconds, tens 정지
 - clearInterval()을 사용하여 현재 값 멈춤

-reset 버튼 : 버튼 눌렀을때 seconds, tens 값 초기화
 - clearInterval()을 사용하여 타이머를 정지
 - tens,seconds 값 초기화
 - tens,seconds innerText에 tens,seconds value 입력