# 2021-02-database

## week8 실습 
*************
## 1. 웹에서 insert, update, select 명령어 사용

## 2. 라우터 구성 
+ **'/' : 홈 화면 (데이터 삽입)** <br/>
+    '/select' : 조회 화면 <br/>
+    '/update/employee' : 직원 데이터 수정 <br/>
+    '/update/department' : 부서 데이터 수정  <br/>

## 3. 테이터 테이블
> mysql 상에서 employee데이블 5개, department 테이블 3개 이상 입력
    
**<span style="color:red">PK : 빨간색</span><br/>**

 **직원 테이블**
fname|minit|lname|<span style="color:red">ssn</span>|bdate|address|sex|salary|super_ssn|dno
---|---|---|---|---|---|---|---|---|---
현승|A|강|<span style="color:red">10001000</span>|2000|서울|남|9000||1
현승|M|강|<span style="color:red">33334444</span>|2001|서울|남|9000|10001000|1
진섭|C|김|<span style="color:red">44445555</span>|2002|경기|남|5000||1
청수|F|이|<span style="color:red">44447777</span>|2003|경기|남|500|44445555|2
이|F|현지|<span style="color:red">80008000</span>|2005|인천|여|500||3

 **부서 테이블**
dname|<span style="color:red">dnumber</span>|mgr_ssn|mgr_start_date
---|---|---|---|
정보통신|<span style="color:red">1</span>|10001000|2001|
컴퓨터공학|<span style="color:red">2</span>|44445555|2003|
마케팅|<span style="color:red">3</span>|80008000|2007|
 


## 4. Emloyee 테이블 Salary 필드 값 수정 예시
!(https://github.com/riven1211/week11_8/blob/main/week3_1.png)





# week11_8
