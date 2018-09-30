
use test

show dbs

/*
	增删改查 CRUD
		- Create
			db.collection.insert(文档对象)  向当前数据库指定集合内插入一条/多条文档数据
			db.collection.insertOne({文档对象}) 向当前数据库指定集合内插入一条文档数据
			db.collection.insertMany([文档对象]) 向当前数据库指定集合内插入多条文档数据
		- Read
			db.collection.find(查询条件[, 投影])	向当前数据库中指定集合内查询指定查询条件的所有文档
			db.collection.findOne(查询条件[, 投影])	向当前数据库中指定集合内查询指定查询条件的第一个文档
			- 操作符
				1. < <= > >= !=  $lt  $lte $gt $gte $ne
				2. 或   $or $in  非 $nin
				3. 正则表达式
				4. $where
		- update
			db.collection.update(查询条件, 要更新的内容[, 配置对象])	向当前数据库中指定集合内查询指定查询条件的一个文档并更新它
			db.collection.updateOne(查询条件, 要更新的内容[, 配置对象])
			db.collection.updateMany(查询条件, 要更新的内容[, 配置对象])
			
		- delete
			db.collection.remove(查询条件)
*/
db.students.find()

db.students.insert({name: 'Rose', age: 16})
db.students.insert([{name: 'Tom', age: 16}, {name: 'Jerry', age: 20}])

db.students.find({age: 16, name: 'Tom'})
db.students.find({age: {$gte: 18}})

db.students.find({age: {$in: [16, 18]}})
db.students.find({$or: [{age: {$lt: 18}}, {name: 'Jack'}]})

db.students.find({age: {$nin: [16, 18]}})

db.students.find({name: /^T/})

db.students.find({$where: function () {
    return this.age >= 18 && this.name === 'Jack';
  }})

//name: 1 只要name，其他属性默认都不要（_id会自动加上）
db.students.find({}, {name: 1, _id: 0})
// age: 0， _id: 0 不要age， _id，其他属性默认都要
db.students.find({}, {age: 0, _id: 0})

db.students.find()

db.students.update({name: 'Jack'}, {$set: {age: 20}}) //只修改指定字段，其他字段不变
db.students.update({name: 'Jack'}, {$inc: {age: 1}})  //能够让指定字段，增加1

db.students.update({}, {$inc: {age: 1}}, {multi: true})  //匹配多个，修改多个

db.students.remove({age: {$gte: 20}})
