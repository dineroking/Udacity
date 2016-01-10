/**
 * Project: Udacity.
 * By: Ronny Rosabal
 * Date: 1/8/2016
 * Time: 5:57 PM
 * Content: understanding the "this" parameter (keyword)
 */

var fn = function(a , b){
  console.log( this, a, b );
};
var fn1 = function(a , b){
  console.log( this, a, b );
};

var r ={}, g ={}, b = {}, y = {};
r.method = fn; //adds function fn as a method of the object r
console.log("r.method(g,b):");
r.method( g, b ); //calls the method passing it objects literal g and b as parameters
//the above method call logs as values three Object. First Object is r with its values because "this" is used in the
//fn function inside log. Because "this" refers to the object that is to the left of the dot of the function that
//calls it. Then empty Object g and b are logged.
console.log("fn(g, b):");
fn( g, b ); //this logs Window, Object, Object
console.log("fn1.call(r, g, b):");
fn1.call(r, g, b); //this like r.method( g, b ); logs Object{} Object{} Object{}
console.log("r.method.call(y, g, b):");
r.method.call( y, g, b );

/*var random = Math.floor(Math.random() * 6 + 1);
setInterval(function(){
  console.log("I show up every " + random + " seconds.");
  random = Math.floor(Math.random() * 6 + 1);
}, random * 1000);*/

console.log("new r.method(g, b):");
new r.method(g, b);