"use strict";

/*
值类型（基本类型）：数值型（Number)，字符类型（String），布尔值型（Boolean），null 和 underfined
引用类型（类）：函数，对象，数组等
*/

var num = 16; // number
// special number
console.log( 1 / 0) // Infinity
console.log("not number" / 1) // NaN computation error

// big int end with n
big = 1234567890123456789012345678901234567890n;

var str = "Hello"; // string
var bol = true; // boolean

// object
var map1 = {name: "zhou", sur: "jun"}; // map
var arr1 = [1, 2, 3];


// undefined
var a ;

// null like null pointer in other language
var a = "string"
a = null; // reset to null

null === undefined         // false
null == undefined          // true

// typeof operator
console.log(typeof 0)


// object for complex struct

// symbol
// case 1 use symbol to replace the const or enum

const TYPE_AUDIO = 'AUDIO'
const TYPE_VIDEO = 'VIDEO'
const TYPE_IMAGE = 'IMAGE'

// const TYPE_AUDIO = Symbol()
// const TYPE_VIDEO = Symbol()
// const TYPE_IMAGE = Symbol()

function handleFileResource(resource) {
  switch(resource.type) {
    case TYPE_AUDIO:
      playAudio(resource)
      break
    case TYPE_VIDEO:
      playVideo(resource)
      break
    case TYPE_IMAGE:
      previewImage(resource)
      break
    default:
      throw new Error('Unknown type of resource')
  }
}

// case 2 private attribute for object
let obj = {
    [Symbol('name')]: '一斤代码',
    age: 18,
    title: 'Engineer'
 }
 
 Object.keys(obj)   // ['age', 'title']
 
 for (let p in obj) {
    console.log(p)   // 分别会输出：'age' 和 'title'
 }
 
 Object.getOwnPropertyNames(obj)   // ['age', 'title']
