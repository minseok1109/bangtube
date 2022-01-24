#youtube clone coding
유투브를 클론코딩합니다.

#error
2022/01/23
비밀번호를 암호화(hash)하여 저장하기 위해 mongoose의 pre를 사용하여 
저장하기 전에 암호화를 진행한 후 저장할려고 했다. 
```javascript
userSchema.pre("save", async (password) => {
  this.password = await bcrypt.hash(this.password, 5);
});
```
처음에는 위와 같이 es6의 arrow function을 사용해서 this를 사용했지만 undefinded가 나와서 
password가 암호화도 안되고 저장도 안되는 오류가 발생했다. 

>원인은 바로 arrow function이 가져오는 this가 다르기 때문이다.


arrow function에서 this는 전역객체를 가르킨다. 그 이유는 <strong>정적 스코프 규칙</strong>을 따르기때문이다.

###정적 스코프 규칙이란? <br>
함수 호출 스택이나 런타임이 아니라 코드상 함수 선언 위치에 따라서 상위 scope를 결정하는 것이다.

```javascript
userSchema.pre("save", async function (password) {
  this.password = await bcrypt.hash(this.password, 5);
});
```
따라서 mongoose의 this를 사용하기 위해서는 arrow function의 this가 아니라 function을 사용하여
위와 같이 변경해줘야한다.

참고
https://wikidocs.net/153884