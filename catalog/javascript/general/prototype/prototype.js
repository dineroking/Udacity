/**
 * Project: Udacity.
 * By: Ronny Rosabal
 * Date: 1/9/16
 * Time: 10:37 PM
 * Content: practice using prototype
 */

var gold = {
  a : 1
};
//copies gold object into the blue object
var blue = $.extend({}, gold);
//links gold object into the rose object
var rose = Object.create(gold);
console.log("gold.a:");
console.log(gold.a);
console.log("gold.z:");
console.log(gold.z);
console.log("blue.a:");
console.log(blue.a);
console.log("rose.a:");
console.log(rose.a);

gold.b = 2;
console.log("gold.b:");
console.log(gold.b);
console.log("blue.b:");
console.log(blue.b);
console.log("rose.b:");
console.log(rose.b);