// memo sequence 생성
use mdb
db.createCollection('sequence')
db.sequence.insertOne({
    collectionName:'memo',
    count:1
})

db.sequence.find()
//$inc

db.memo.drop()
db.memo.find()
db.sequence.drop()