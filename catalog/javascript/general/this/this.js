/**
 * Project: Udacity.
 * By: Ronny Rosabal
 * Date: 1/8/2016
 * Time: 5:57 PM
 * Content: understanding the "this" parameter (keyword)
 */

var fn = function(a , b){
  console.log(this);
};

var fn1 = function(one , two){
  console.log( one, two );
};

var r ={}, g ={}, b = {};

fn(g, b);