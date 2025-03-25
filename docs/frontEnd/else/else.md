# 前端学习路线

1. HTML基础和CSS基础
2. 京东项目实战
3. JavaScript基础语法、DOM
4. JavaScript进阶特效
5. webapi
6. JavaScript高级
7. Jquery
8. php基础
9. Ajax
10. 阿里百秀项目实战
11. HTML5购物网站项目、HTML5API、CSS3
12. canvas框架
13. 框架封装
14. Git+AngularJS
15. 移动web视频、移动web开发基础功
16. 电商项目视频、移动web京东项目
17. 响应式开发基础知识
18. 微金所响应式开发项目
19. node.js
20. vue.js
21. reactJS
22. 项目实战（4大项目）
23. ES6零基础-彩票项目
24. Angular
25. Bootstrap

HTML

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Dynamic Demo</title>
</head>
<body>
  <div id="container">
    <h1>欢迎来到代码编辑器演示！</h1>
    <p>点击按钮和方块更改背景颜色。</p>
    <button id="colorButton">更改颜色</button>
    <div id="box"></div>
  </div>
</body>
</html>
```

Css样式

```css
/* 全局样式 */
body {
  margin: 0;
  padding: 0;
  font-family: 'Helvetica Neue', sans-serif;
  background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

/* 主容器 */
#container {
  text-align: center;
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  width: 80%;
  max-width: 600px;
}

/* 标题样式 */
h1 {
  color: #333;
  margin-bottom: 16px;
}

/* 段落样式 */
p {
  font-size: 16px;
  color: #666;
}

/* 按钮样式 */
button {
  background-color: #333;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #555;
}

/* 方块样式 */
#box {
  width: 100px;
  height: 100px;
  background-color: #ff6347;
  margin: 20px auto;
  border-radius: 8px;
  transition: transform 0.5s;
}

#box:hover {
  transform: scale(1.2);
}
```

javascript

```javascript
document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('colorButton');
  const box = document.getElementById('box');
  
  // 点击按钮后，随机改变背景渐变颜色
  btn.addEventListener('click', function() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.background = `linear-gradient(135deg, ${randomColor}, #c3cfe2)`;
  });
  
  // 点击方块后，随机改变方块背景色并打印日志
  box.addEventListener('click', function() {
    console.log('Box clicked! Enjoy the animation.');
    box.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  });
});
```
