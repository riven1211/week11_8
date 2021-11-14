import express from "express";
import { insertSql, selectSql, updateSql } from "../database/sql";
// insert, select와 관련된 쿼리 함수를 import

const router = express.Router();
//express내 router 함수를 사용

// 라이터 이후 원하는 uri 경로를 받을 수 있게함
router.get('/',(req, res) => {
   res.render('home');
});

router.post('/',(req, res) => {  
    const vars = req.body;
         // req.body로 데이터를 request(받고) vars에 저장
    const var_lenth = Object.keys(req.body).length;
// 객체의 키만을 담은 배열을 반환.
    if(var_lenth > 4){
        const data = { //employee table에 들어갈 arrtibute값 할당
            fname: vars.fname,
            minit: vars.minit,
            lname: vars.lname,
            ssn: vars.ssn,
            bdate: vars.bdate,
            address: vars.address,
            sex: vars.sex,
            salary: vars.salary,
            super_ssn: vars.super_ssn,
            dno: vars.dno
        };
        console.log('home.js',data);
        insertSql.setEmployee(data);
        //insertSql에서의 setEmployee 함수 data라는 객체를 넘겨줌
        //data.[   ] 이런식으로 데이터를 불러옴
    } else { 
        const data = { //department table에 들어갈 arrtibute값 할당
            dname: vars.dname,
            dnumber: vars.dnumber,
            mgr_ssn: vars.mgr_ssn,
            mgr_start_date: vars.mgr_start_date
        };
        console.log('department',data);
        insertSql.setDepartment(data);
    }
    res.redirect('/');
    // 입력 후, 홈 화면으로 갈것이다.
})

module.exports = router;