# JavaScript

## 1. JavaScript简介

JavaScript是一种脚本语言，主要用于网页开发。
JavaScript是一种解释型语言，不需要编译，直接在浏览器中运行。
JavaScript是一种弱类型语言，变量的类型可以随时改变。
JavaScript是一种面向对象语言，支持面向对象编程。
JavaScript是一种动态语言，变量的类型可以随时改变。
JavaScript是一种跨平台语言，可以在任何平台上运行。
JavaScript是一种安全语言，不直接操作计算机硬件。
JavaScript是一种弱语言，语法不严谨，容易出错。

## 1. JavaScript基础

### 1.1 JavaScript语法

JavaScript的语法非常简单，使用关键字和标识符来定义变量和函数。

## 2. JavaScript内置对象常用方法

### 2.1 数组方法

#### 2.1.1 push()方法

push()方法用于在数组的末尾添加一个或多个元素，并返回数组的新长度。

```javascript
let arr = [1, 2, 3];
arr.push(4, 5);
console.log(arr); // [1, 2, 3, 4, 5]
```

#### 2.1.2 pop()方法

pop()方法用于删除数组的最后一个元素，并返回该元素的值。

```javascript
let arr = [1, 2, 3];
let last = arr.pop();
console.log(last); // 3
console.log(arr); // [1, 2]
```

#### 2.1.3 shift()方法

shift()方法用于删除数组的第一个元素，并返回该元素的值。

```javascript
let arr = [1, 2, 3];
let first = arr.shift();
console.log(first); // 1
console.log(arr); // [2, 3]
```

#### 2.1.4 unshift()方法

unshift()方法用于在数组的开头添加一个或多个元素，并返回数组的新长度。

```javascript
let arr = [1, 2, 3];
arr.unshift(0);
console.log(arr); // [0, 1, 2, 3] 
```

#### 2.1.5 slice()方法

slice()方法用于从数组中提取指定的元素，并返回一个新数组。

```javascript
let arr = [1, 2, 3, 4, 5];
let newArr = arr.slice(1, 3);
console.log(newArr); // [2, 3]
```

#### 2.1.6 splice()方法

splice()方法用于删除数组中的元素，并返回被删除的元素组成的数组。

```javascript
let arr = [1, 2, 3, 4, 5];
let removed = arr.splice(1, 2);
console.log(removed); // [2, 3]
console.log(arr); // [1, 4, 5]
```

#### 2.1.7 sort()方法

sort()方法用于对数组中的元素进行排序，并返回排序后的数组。

```javascript
let arr = [3, 1, 4, 2];
arr.sort();
console.log(arr); // [1, 2, 3, 4]
```

#### 2.1.8 reverse()方法

reverse()方法用于反转数组中的元素，并返回反转后的数组。

```javascript
let arr = [1, 2, 3, 4];
arr.reverse();
console.log(arr); // [4, 3, 2, 1]
```

#### 2.1.9 concat()方法

concat()方法用于合并两个或多个数组，并返回合并后的数组。

```javascript
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let newArr = arr1.concat(arr2);
console.log(newArr); // [1, 2, 3, 4, 5, 6]
```

#### 2.1.10 indexOf()方法

## 3. 常见DOM树操作大全

## 4.ECCMAscript

## 5.DOM

## 6.BOM

## 7.定时器和焦点图

## 8.事件
