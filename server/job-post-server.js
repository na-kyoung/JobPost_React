let http = require('http');
let express = require('express');
let app = express();

app.set('port', process.env.PORT || 5000);

//서버 생성 및 리소닝
let server = http.createServer(app).listen(app.get('port'), ()=>{
    console.log(`express 이용하여 서버 생성 후 리소닝 ..`);
});

//MYSQL 설정 (커넥션 풀 이용하여 DB 접근)
let mysql = require('mysql');
let pool = mysql.createPool({
    connectionLimit : 10,
    host : 'localhost',
    user : 'root',
    password : '111111',
    database : 'reactdb',
    debug : false
});

//특정 폴더에 url로 접근 설정
let static = require('serve-static');
let path = require('path');
const exp = require('constants');

//public 폴더까지의 경로
let pathName = path.join(__dirname, 'public');
console.log(`pathName: ${pathName}`);
//1. '/public/pathName' 으로 접근
app.use('/public', static(pathName));
//2. '/pathName' 으로 접근
app.use(static(pathName));

//POST 방식으로 데이터 가져오기
//application/x-www-form-urlencoded (name=hong)
app.use(express.urlencoded());
//application/json {"name":"hong"}
app.use(express.json());

//라우터 이용, 사용자 요청 처리
let router = express.Router();
app.use('/', router); //매우 중요!!

//리액트 연동, 요청 url이 오면 처리
//데이터 전체 출력 처리 - companyList
router.route('/api/companyList').all((req, res)=>{
    console.log(`/api/companyList`);
    pool.getConnection((err, conn)=>{
        if(err){
            console.log(`getConnection Error : ${err}`);
            if(conn){
                conn.release();
            }
            return;
        }
        // let sql = `select * from customerinfo`;
        let sql = 'select * from companyinfo where isDeleted=0';
        conn.query(sql, (err, results)=>{
            if(err){
                console.log(`Query Error : ${err}`);
                return;
            }
            //react cilent로 전송
            res.send(results);
        })
    })
});


// DB 연동
//데이터 저장 처리
const multer = require('multer');
//upload에 데이터 저장
const upload = multer({dest:'./upload'});

router.route('/api/companyUpload').all(upload.single('file'), (req, res)=>{
    console.log('/api/companyUpload');
    let logo = '/img/' + req.file.originalname; //file path 만들기
    console.log(req.file);
    let name = req.body.name || req.query.name;
    let num = req.body.num || req.query.num;
    let job = req.body.job || req.query.job;
    let date = req.body.date || req.query.date;
    console.log(`logo : ${logo}, name : ${name}, num : ${num}, job : ${job}, date : ${date}`);

    //DB 저장
    pool.getConnection((err, conn)=>{
        if(err){
            console.log(`getConnection Error : ${err}`);
            if(conn){
                conn.release();
            }
            return;
        }
        
        //삭제 기능 isDeleted 추가
        let params = [null, logo, name, num, job, date, 0];
        let sql = 'insert into companyinfo value (?,?,?,?,?,?,?)';
        conn.query(sql, params, (err, results)=>{
            if(err){
                console.log(`query Error : ${err}`);
                return;
            }
            res.send(results);
        })

    })
});

//데이터 삭제
router.route('/api/companyDelete').all((req, res)=>{
    console.log('/api/companyDelete');
    let id = req.body.id || req.query.id;
    console.log(`id : ${id}`);

    pool.getConnection((err, conn)=>{
        if(err){
            console.log(`getConnection Error : ${err}`);
            if(conn){
                conn.release();
            }
            return;
        }

        let sql = 'update companyinfo set isDeleted=1 where id=?';
        let params = [id];
        conn.query(sql, params, (err, results)=>{
            if(err){
                console.log(`query Error : ${err}`);
                return;
            }
            res.send(results);
        })
    })
});

//데이터 수정
router.route('/api/companyModify').all(upload.single('file'), (req,res)=>{
    console.log(`/api/companyModify`);
    let logo = '/img/' + req.file.originalname;
    let name = req.body.name || req.query.name;
    let num = req.body.num || req.query.num;
    let job = req.body.job || req.query.job;
    let date = req.body.date || req.query.date;
    let id = req.body.id || req.query.id;
    console.log(`logo : ${logo}, name : ${name}, num : ${num}, job : ${job}, date : ${date}, id : ${id}`);

    num = Number(num);

    //DB update
    pool.getConnection((err, conn)=>{
        if(err){
            console.log(`getConnection Error : ${err}`);
            if(conn){
                conn.release();
            }
            return;
        }
        
        let params = [logo, name, num, job, date, id];
        let sql = 'update companyinfo set logo=?, name=?, num=?, job=?, date=? where id=?';
        conn.query(sql, params, (err, results)=>{
            if(err){
                console.log(`query Error : ${err}`);
                return;
            }
            res.send(results);
        })
    })
});
