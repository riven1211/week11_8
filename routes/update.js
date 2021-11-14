import express from "express";
import { selectSql, updateSql} from "../database/sql";

const router = express.Router();

//기존 입력 값 블러오기
// async await 함수는 자체적으로 promise 반환
router.get('/employee', async (req, res) => {
    const emp_res = await selectSql.getEmployee();
    res.render('updateEmployee',{
        title: "직원 테이블 갱신",
        emp_res
    });
});

//기존 입력 값 블러오기
router.get('/department', async (req, res) => {
    const dept_res = await selectSql.getDepartment();
    res.render('updateDepartment',{
        title: "부서테이블 갱신",
        dept_res
    })
});

//수정 버튼을 눌렀을 경우 update 쿼리 실행, 조회 페이지로 이동
router.post('/employee', async(req, res) => {
     await updateSql.updateEmployee();

    res.redirect('/select'); //다이렉트할 주소와 응답을 함께보낸다.
});

//수정 버튼을 눌렀을 경우 update 쿼리 실행, 조회 페이지로 이동
router.post('/department', async (req, res) =>{
    const vars = req.body;
    console.log(vars.dname);

    const data = {
        Dname: vars.dname
    }
    await updateSql.updateDepartment(data); 

    res.redirect('/select');  //다이렉트할 주소와 응답을 함께보낸다.
}); 

module.exports = router;