## 第二十二讲 set puts expr for循环的讲解

变量不需要在使用之前声明

### set命令

创建变量使用set命令

```
set a 1.2
set a {please enter your id}
set a “please enter your id”
set a 10
set a [expr $a +20]
set b [expr $a-1 ]
```

删除变量使用unset命令-->**set a 10**

```
unset a              //删除变量
puts $a               //输出a，can`t read “a”: no such variable
```

###  puts命令

输出一个字符使用puts命令

```
puts “please enter your id”
puts Hyperworks
```

如果字符串多于一个单词，则字符串必须使用双引号（””）或者大括号（{}）包起来

```
puts{ajj jsid 23 5.0 56 00}
```

### expr 表达式

操作对象可以是：

数值（整数或浮点型）

```
expr 4+1
```

以使用$的变量

```
expr $a-$b
```

以双引号或大括号括起来的字符串 

```
expr sin(10)              //正弦
```

用括号括起来的TCL命令

```
expr abs(-155)
express 1=1
expr $a%$b                   //取整
expr $a**$b                 //次方，指数
```

### if else

```
set x 35
If{$x==35}{
	puts “Handling is good.”}
	elseif{$x==20}{ puts “Ride is good.”}
	else{ puts “I am not sure of the quality of ride or handling.”}
```

### while

```
set i 0
while {$i<5} {
    put “In the while loop,and I ==$i”
    incr i 1}
```

### 讲解内容for

```
for { set i 0} {$i<5} { incr 1} {
	put “In the while loop,and I ==$i” }
```

### foreach对数据进行循环

```
foreach vowel {a e I o u}{

	put “$vowel is a vowel”}
```



```
*createmarkpanel elems 1 “please select elems”   //弹出elems选择对话框
set  elems_id    [hm_getmark elem 1]              //结点单元
set  l_elems     [llength $elems_id]              //结点单元的数量
for { set  i  0}  {  $i<  $l_elems  } {  incr  1 } {
		set id { lindex  $elems_id  $i }    	 //列表索引
		put “this elems is $id”           		 // this elems is 192004
	}   
```

