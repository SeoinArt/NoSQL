show dbs

use mdb
db.createCollection('emp')
show dbs

show collections
// 컬렉션의 이름 변경 : db.컬렉션명.renameCollection('변경할 이름')
// emp 이름을 'employee'로 변경해보세요

db.emp.renameCollection('employee')

show collections;
// 컬렉션 삭제: db.컬렉션명.drop()
db.employee.drop()
show collections;

// 컬렉션 생성시 옵션 : capped:true, size:10000
// 저장 공간이 차면 기존 공간을 재상해서 새로운 데이터로 저장
db.member.find()

db.member.insert({ name: '김유신', userid: 'you', tel: '010-7777-8888', age: 33 })

db.member.insertMany([
    { name: '김유신', userid: 'you', tel: '010-7777-8888', age: 33 },
    { name: '최유신', userid: 'you', tel: '010-7777-8888', age: 33 },
    { name: '신유신', userid: 'you', tel: '010-7777-8888', age: 33 }
])
db.member.find()

db.createCollection('user')


db.user.insertMany([
    { _id: 1, name: '김철수', uid: 'kim1', upw: '111' },
    { _id: 2, name: '이영희', uid: 'lee', upw: '222' },
    { _id: 1, name: '홍길동', uid: 'hong', upw: '333' }
], { ordered: true })

db.user.find()

db.user

/* [실습1]---------------------------------------------------------------------
    1. boardDB생성
    2. board 컬렉션 생성
    3. board 컬렉션에 name 필드값으로 "자유게시판"을 넣어본다
    4. article 컬렉션을 만들어 document들을 삽입하되,
       bid필드에 3에서 만든 board컬렉션 자유게시판의 _id값이 참조되도록 처리해보자.
    
    5. 똑 같은 방법으로 "공지사항게시판"을 만들고 그 안에 공지사항 글을 작성하자.
-------------------------------------------------------------------------- */

// 1. boardDB 생성
use boardDB
db.article.drop()
db.board.drop()
show dbs

// 2. board 컬렉션 생성
db.createCollection('board')
db.createCollection('article')
show dbs
show collections

// 3. board 컬렉션에 name 필드값으로 "자유게시판"을 넣어본다
res = db.board.insertOne({name:'자유게시판2'})
freeboard_id = res.insertedId
db.article.insertMany([
    {bid:freeboard_id, title:'안녕하세요',write:'홍길동', content:'오늘 처음 글을 씁니다.'},
    {bid:freeboard_id, title:'반갑습니다',write:'이선호', content:'저도 처음 글을 씁니다.'},
    {bid:freeboard_id, title:'두번째 쓰는 글',write:'홍길동', content:'오늘 두번째 글을 씁니다.'}
])
db.board.find()
db.article.find()

db.board.remove({name:'공지사항 게시판'})
db.article.remove({write:'admin'})
notice_rest = db.board.insertOne({name:'공지사항 게시판'})
notice_id = pul.insertedId
db.article.insertMany([
    {bid:notice_id, title:'오늘 모임 공지합니다.',content:'저녁 6시에 신촌에서 모입시다', write:'admin'}
])
db.board.find()
db.article.find({bid:ObjectId('646c408d0e7d7314bc7d37ed')})
db.article.find({write:'홍길동'});






