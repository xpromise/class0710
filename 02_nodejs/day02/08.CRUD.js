
use test

show dbs

/*
	增删改查 CRUD
		- Create
			db.collection.insert(文档对象)  向当前数据库指定集合内插入一条/多条文档数据
			db.collection.insertOne({文档对象}) 向当前数据库指定集合内插入一条文档数据
			db.collection.insertMany([文档对象]) 向当前数据库指定集合内插入多条文档数据
		- Read 
			db.collection.find(查询条件)	向当前数据库中指定集合内查询指定查询条件的所有文档
			
			- 操作符
				1. < <= > >= !=  $lt  $lte $gt $gte $ne
				2. 或   $or $in  非 $nin
				3. 正则表达式
				4. $where 
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


