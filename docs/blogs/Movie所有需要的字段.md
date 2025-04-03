# Movie所有需要的字段

现在我来详细说明如何重新创建`Movie`表并插入示例数据，然后通过Flask应用查询和展示这些数据。

### **1. 修改模型**

确保`Movie`模型中包含所有需要的字段：`id`、`title`、`src`、`release_year`和`description`。

**示例模型：**modles.py

```python
from app import db

class Movie(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    src = db.Column(db.String(255), nullable=False)
    release_year = db.Column(db.Integer)
    description = db.Column(db.Text)
```



### **2. 更新数据库表结构**

如果数据库中没有`movie`表，需要通过以下方式创建：

**手动创建表**：

```sql
CREATE TABLE movie (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    src VARCHAR(255) NOT NULL,
    release_year INT,
    description TEXT
);
```

**使用Flask-Migrate**：

flask db init
flask db migrate -m "initial migration"
flask db upgrade

```bash
python -m flask db migrate -m "生成迁移脚本" 
python -m flask db upgrade  # 应用迁移脚本

```

### **3. 插入示例数据**

将示例数据插入到`movie`表中。假设视频文件存储在项目的`static/videos`目录下。

**示例代码：**

```
from app import create_app, db
from app.models import Movie

app = create_app()

def add_movie(title, src, release_year=None, description=None):
    with app.app_context():
        movie = Movie(
            title=title,
            src=src,
            release_year=release_year,
            description=description
        )
        db.session.add(movie)
        db.session.commit()
        print(f"电影 '{title}' 已添加到数据库")

# 示例：添加两个电影
add_movie(
    title="02_身份认证的概念.mp4",
    src="02_身份认证的概念.mp4",
    release_year=2023,
    description="关于身份认证的概念介绍"
)
add_movie(
    title="movie1.mp4",
    src="movie1.mp4",
    release_year=2023,
    description="示例电影"
)
```

### **4. 查询视频信息**

在Flask路由中查询视频信息并传递给模板。

**示例路由：**

```python
from flask import render_template
from app import create_app
from app.models import Movie

app = create_app()

@main.route('/')
def index():
    with app.app_context():
        # 查询电影的ID和标题
        movies = Movie.query.with_entities(Movie.id, Movie.title).all()
        print("movies:", movies)
        return render_template('index.html', movies=movies)
```

### **5. 在模板中展示视频**

在`index.html`模板中，可以展示视频的标题，并提供播放链接或直接嵌入视频播放器。

**示例模板：**

```
<!DOCTYPE html>
<html>
<head>
    <title>电影列表</title>
</head>
<body>
    <h1>电影列表</h1>
    <ul>
        {% for movie in movies %}
            <li>
                <a href="{{ url_for('main.play_movie', movie_id=movie.id) }}">{{ movie.title }}</a>
            </li>
        {% endfor %}
    </ul>
</body>
</html>
```

### **6. 播放视频**

可以添加一个路由来播放视频。通过`url_for`生成视频路径。

**示例播放路由：**

```
@main.route('/play/<int:movie_id>')
def play_movie(movie_id):
    with app.app_context():
        movie = Movie.query.get_or_404(movie_id)
        return render_template('play.html', movie=movie)
```

**播放模板（play.html）：**

```
<!DOCTYPE html>
<html>
<head>
    <title>播放 {{ movie.title }}</title>
</head>
<body>
    <h1>播放 {{ movie.title }}</h1>
    <p>发布年份: {{ movie.release_year }}</p>
    <p>描述: {{ movie.description }}</p>
    <video width="800" controls>
        <source src="{{ movie.src }}" type="video/mp4">
        您的浏览器不支持视频播放。
    </video>
</body>
</html>
```

### **验证**

1. **检查数据库表结构**：确保`movie`表已创建，并包含所有需要的列。
2. **检查数据插入**：确保示例数据已成功插入数据库。
3. **运行应用**：启动Flask应用，访问`http://localhost:5000`，确保电影列表正确显示。
4. **播放视频**：点击电影链接，确保视频能够正确播放。