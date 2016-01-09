/**
 * Project: Udacity.
 * By: Ronny Rosabal
 * Date: 1/6/2016
 * Time: 6:04 PM
 * Content: testing the concepts of closures
 */
var middle = [];
var inner = [];

var outer = function(){
  var outerVariable = "outer variable";
  console.log(outerVariable);

  middle.push(function(){
    var middleVariable = "middle variable";
    console.log(middleVariable);

    inner.push(function(){
      var innerVariable = "inner variable";
      console.log(innerVariable);
    });
    inner[0]();
  });
  middle[0]();
};

console.log("WITH CLOSURE");
console.log("outer():");
outer();
console.log("");
console.log("middle[0]():");
middle[0]();
console.log("");
console.log("inner[0]():");
inner[0]();
console.log("");
console.log("");



var outer2 = function(){
  var outerVariable = "outer variable";
  console.log(outerVariable);

  var middle2 = function(){
    var middleVariable = "middle variable";
    console.log(middleVariable);

    var inner2 = function(){
      var innerVariable = "inner variable";
      console.log(innerVariable);
    };
    inner2();
  };
  middle2();
};

console.log("WITHOUT CLOSURE");
console.log("outer2():");
outer2();
console.log("");
console.log("middle2():");
middle2();
console.log("");
console.log("inner2():");
inner2();