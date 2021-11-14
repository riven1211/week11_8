import mysql from "mysql2";

//데이터베이스 연결
const pool = mysql.createPool(
    // precess.env 사용자의 환경에 포함된 객체를 반환함
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'root',
        database: 'week8',
        password: '1234',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }
);

// async / await 사용
const promisePool = pool.promise();

// select querys
export const selectSql = {
    getEmployee : async()=> {
        //await 사용시, 뒤의 모든 내용 값을 받은 후 실행되는 것이 아닌,
        // await 함수 자체를 반환 해야, 받아오는 메인 함수 쪾에도 await 사용시 효과가 남
        const [rows] = await promisePool.query(`select * from employee`);
        console.log(rows)
        return rows
    },
    getDepartment : async () => {
        const [rows] = await promisePool.query(`select * from department`);

        return rows
    },
}

// insert query
export const insertSql = {
    //data라는 객체 타입의 파라미터에 입력할 정보 받아서 쿼리문 생성    
    setEmployee : async (data) => {
        // `  문 자 열 ` |  이때, ` ` 내에 ${  }을 통하여 변수 내용을 가져올 수 있음.
        // data.Fname = 현승 이라면, 
        //"현승" = "${data.Fname}"  같음.      
        console.log('sql.js',data);
        const sql = `insert into employee values ( 
            "${data.fname}", "${data.minit}", "${data.lname}", "${data.ssn}", "${data.bdate}",
            "${data.address}", "${data.sex}", "${data.salary}", "${data.super_ssn}", "${data.dno}" ) `;
                          
            await promisePool.query(sql);
            //insert 문이기 때문에 return값이 따로 필요없음
            //query(sql)을 넘겨줌.
    },

    setDepartment : async (data) => {
        const sql = `insert into department values ( 
            "${data.dname}", "${data.dnumber}", "${data.mgr_ssn}", "${data.mgr_start_date}")`;
            
            await promisePool.query(sql);
    },
}


// update query
export const updateSql ={
    updateEmployee : async () => {
        //where 조건을 만족하는 행에 대해서 salary 수정
        const sql = `update employee set "salary" = 700 where Minit = "F" `;
        await promisePool.query(sql);

    },
    updateDepartment : async (data) => {
        const sql = `update department set dname = "${data.Dname}"where number = 0" `;
        await promisePool.query(sql);
    },
}