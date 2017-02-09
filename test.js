
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

QUnit.test( " pause & reset' methods  work", function( t ) {
  var Test1 = t.async();
  var Test2 = t.async();
  setTimeout(function() {
    t.deepEqual( (seconds <= 56 ),true,'Timer counts correctly');
    Test1();
  }, 5000 );

setTimeout(function() {
    t.deepEqual( (seconds == 0 ),true,'run of reset method work');
    Test2();
  }, 11000 );

});
