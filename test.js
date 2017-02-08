
var test = QUnit.test;

test("should return object", function (t) {
	var a = Timer();
	t.ok(Object.prototype.toString.call(a), "[object Object]", "it\'s return Object")
});

test("should have count property", function(t){
	var a = Timer();
	t.ok(a.hasOwnProperty("count"),"it has own property" )
});

test("should have minusB property", function(t){
	var a = Timer();
	t.ok(a.hasOwnProperty("minusB"),"it has own property" )
});

test("should have plusB property", function(t){
	var a = Timer();
	t.ok(a.hasOwnProperty("plusB"),"it has own property" )
});

test("should have minusS property", function(t){
	var a = Timer();
	t.ok(a.hasOwnProperty("minusS"),"it has own property" )
});

test("should have plusS property", function(t){
	var a = Timer();
	t.ok(a.hasOwnProperty("minusS"),"it has own property" )
});

test("should have start property", function(t){
	var a = Timer();
	t.ok(a.hasOwnProperty("start"),"it has own property" )
});

test("should have pause property", function(t){
	var a = Timer();
	t.ok(a.hasOwnProperty("pause"),"it has own property" )
});

test("should have reset property", function(t){
	var a = Timer();
	t.ok(a.hasOwnProperty("reset"),"it has own property" )
});

test("check time changed or not",function(t) {
	var test1 = Timer().count();
	var test2 = Timer().count();
	t.deepEqual(test1 !== test2, true, "it\'s Work")
});

test("check if button start work ", function(t){
	var a = minutes;
	var b = Timer().start();
	console.log(a);
	console.log(b);
	t.deepEqual(a !== b , true, "it\'s Work")
});

test("check if button pause work ", function(t){
	var c = minutes;
	var d = Timer().pause();
	console.log(c);
	console.log(d);
	t.deepEqual(c == d , true, "it\'s Work")
});
