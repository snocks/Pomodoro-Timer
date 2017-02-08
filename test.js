var test = QUnit.test;
test("should return object", function (t) {
	var a = onLoad();
	t.ok(Object.prototype.toString.call(a), "[object Object]", "it\'s return Object")
});

test("should have count property", function(t){
	var a = onLoad();
	t.ok(a.hasOwnProperty("count"),"it has own property" )
});

test("should have plusB property", function(t){
	var a = onLoad();
	t.ok(a.hasOwnProperty("plusB"),"it has own property" )
});

test("should have minuesB property", function(t){
	var a = onLoad();
	t.ok(a.hasOwnProperty("minusB"),"it has own property" )
});

test("should have plusS property", function(t){
	var a = onLoad();
	t.ok(a.hasOwnProperty("plusS"),"it has own property" )
});

test("should have minuesS property", function(t){
	var a = onLoad();
	t.ok(a.hasOwnProperty("minusS"),"it has own property" )
});

test("if count minus minutes or not",function(t){
	var a = onLoad();
	t.deepEqual(a.count() == minutes, true, "it\'s minus")
});

test("if plusB minus break time or not",function(t){
	var a = onLoad();
	t.deepEqual(a.plusB() == breakTime, true, "it\'s plus")
});

test("if plusS minus Session time or not",function(t){
	var a = onLoad();
	t.deepEqual(a.plusB() == countTime, true, "it\'s plus")
});

