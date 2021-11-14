import express from "express";
// express내 Router()를 사용할 것이기 때문에 import 해줌
import { selectSql } from "../database/sql";
// { }는 사용자가 만드는 모듈을 의미

const router = express.Router();
//기본적으로 get함수는 req,res를 가짐
router.get('/', async function(req, res){
    // 여기서 '/'의미는 '/selecet'를 의미
    // 즉 /부서는  -> '/select/부서' 를 뜻함
    const employee = await selectSql.getEmployee();
    // seletSqol 에서 getEmployee() 불러옴. employee에 저장
    const department = await selectSql.getDepartment();
// res.render (뷰,테이터), 템플릿 엔진을 렌더링해서 응답할때 사용
//여기서는 hbs파일 중 select를 가져옴
    res.render('select', {
        title: '직원 테이블',
        title2: '부서 테이블',
        employee,
        department
    });
});

module.exports = router;