# 搭建一个在线电影网站，Python + Flask

目录结构方面，通常Flask项目会分成几个部分，比如应用工厂模式，这样结构更清晰。可能需要static文件夹放静态文件，templates放模板，models放数据库模型，routes放路由，还有config配置文件。还要考虑使用蓝本来组织路由，这样模块化更好。

然后，数据库部分，可能使用SQLAlchemy和Flask-SQLAlchemy来管理，这样用户可以用ORM操作数据库，比较方便。用户模型需要包含用户名、邮箱、密码哈希等字段，电影模型可能需要标题、描述、分类、上映时间、封面图片链接等。



模板方面，需要使用Jinja2，基础模板用base.html，其他页面继承它。首页显示电影列表，分类导航，登录注册链接。用户认证部分，需要处理注册、登录、注销的路由，密码哈希使用Werkzeug的security模块。



静态文件的话，CSS和JS放在static文件夹下，可能还需要图片上传功能，但这里可能先使用链接，后面再处理文件上传。



表单处理可以用Flask-WTF，定义注册和登录的表单类，进行字段验证。在模板中渲染表单字段，并处理POST请求。



路由部分，首页路由显示电影列表，电影详情页面根据ID显示详细信息，分类页面过滤电影。用户相关的路由包括注册、登录、注销。



可能需要初始化数据库，使用Flask-Migrate来做数据库迁移，这样用户创建和更新模型比较方便。



测试数据方面，可以在初始化的时候添加一些示例电影和用户，方便测试。

然后，要考虑安全性，比如密码不能明文存储，使用generate_password_hash和check_password_hash。还有CSRF保护，使用Flask-WTF默认开启的CSRF保护。



最后，运行应用需要设置FLASK_APP环境变量，初始化数据库，运行迁移命令，然后启动开发服务器。



用户可能需要更详细的功能，比如搜索、评论、收藏，或者管理员后台，但作为初始结构，先实现基本功能。需要确保提供的代码清晰，结构合理，用户能够在此基础上进行扩展。

## 目录结构

以下是一个基于Flask的在线电影网站基础代码示例和目录结构：

```
# 目录结构
/flask-movie-website
├── .env                # 新增的环境变量文件
│
├── app/
│   ├── __init__.py     # 修复此处代码
│   ├── routes.py
│   ├── models.py
│   ├── forms.py
│   ├── config.py       # 确保存在
│   │
│   ├── static/
│   │   └── css/
│   │       └── style.css
│   │
│   ├── templates/
│   │   ├── base.html
│   │   ├── index.html
│   │   ├── movie.html
│   │   ├── register.html
│   │   └── login.html
│   │
│   └── auth/
│       ├── __init__.py
│       └── routes.py
│
├── migrations/
├── venv/
├── requirements.txt
└── run.py
```

## 1.首先安装依赖（requirements.txt）

```text
Flask==3.0.2
Flask-SQLAlchemy==3.1.1
Flask-WTF==1.2.1
Flask-Migrate==4.0.5
python-dotenv==1.0.0
```

## 2.核心代码文件：app/**init**.py

```
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from config import Config
from .config import Config  # 修改为相对导入

db = SQLAlchemy()
migrate = Migrate()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)
    migrate.init_app(app, db)

    from app.routes import main
    from app.auth.routes import auth
    app.register_blueprint(main)
    app.register_blueprint(auth)

    return app
```

## 3.app/models.py:

```
from app import db
from werkzeug.security import generate_password_hash, check_password_hash

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(128))

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

class Movie(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text)
    genre = db.Column(db.String(50))
    release_year = db.Column(db.Integer)
    cover_url = db.Column(db.String(200))
```

## 4.app/routes.py:

```
from flask import Blueprint, render_template
from app.models import Movie

main = Blueprint('main', __name__)

@main.route('/')
def index():
    movies = Movie.query.all()
    return render_template('index.html', movies=movies)

@main.route('/movie/<int:movie_id>')
def movie_detail(movie_id):
    movie = Movie.query.get_or_404(movie_id)
    return render_template('movie.html', movie=movie)
```

## 5.app/auth/routes.py:

```
from flask import Blueprint, render_template, redirect, url_for, flash
from app.models import User
from app.forms import RegistrationForm, LoginForm

auth = Blueprint('auth', __name__)

@auth.route('/register', methods=['GET', 'POST'])
def register():
    form = RegistrationForm()
    if form.validate_on_submit():
        user = User(username=form.username.data, email=form.email.data)
        user.set_password(form.password.data)
        db.session.add(user)
        db.session.commit()
        flash('Registration successful!')
        return redirect(url_for('auth.login'))
    return render_template('register.html', form=form)

@auth.route('/login', methods=['GET', 'POST'])
def login():
    form = LoginForm()
    # 实现登录逻辑
    return render_template('login.html', form=form)
```

## 6.templates/base.html:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Movie Website</title>
    <link rel="stylesheet" href="{{ url_for('static', filename='css/style.css') }}">
</head>
<body>
    <nav>
        <a href="{{ url_for('main.index') }}">Home</a>
        {% if current_user.is_authenticated %}
            <a href="{{ url_for('auth.logout') }}">Logout</a>
        {% else %}
            <a href="{{ url_for('auth.login') }}">Login</a>
            <a href="{{ url_for('auth.register') }}">Register</a>
        {% endif %}
    </nav>
    {% block content %}{% endblock %}
</body>
</html>
```

## 7.运行文件 run.py:

```
from app import create_app

app = create_app()

if __name__ == '__main__':
    app.run(debug=True)
```

使用说明：

1. 创建虚拟环境并安装依赖
2. 设置环境变量：`FLASK_APP=run.py`
3. 初始化数据库：

```bash
flask db init
flask db migrate
flask db upgrade
```

## 8.app/models.py评论相关模型

```
# 在原有模型基础上添加
class Comment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text, nullable=False)
    timestamp = db.Column(db.DateTime, index=True, default=datetime.utcnow)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    movie_id = db.Column(db.Integer, db.ForeignKey('movie.id'))
```

## 9.完整表单类（app/forms.py）

```
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, TextAreaField, SubmitField
from wtforms.validators import DataRequired, Email, EqualTo, Length

class RegistrationForm(FlaskForm):
    username = StringField('Username', validators=[DataRequired(), Length(min=2, max=20)])
    email = StringField('Email', validators=[DataRequired(), Email()])
    password = PasswordField('Password', validators=[DataRequired()])
    confirm_password = PasswordField('Confirm Password', validators=[DataRequired(), EqualTo('password')])
    submit = SubmitField('Sign Up')

class LoginForm(FlaskForm):
    email = StringField('Email', validators=[DataRequired(), Email()])
    password = PasswordField('Password', validators=[DataRequired()])
    submit = SubmitField('Login')

class CommentForm(FlaskForm):
    content = TextAreaField('Comment', validators=[DataRequired(), Length(max=500)])
    submit = SubmitField('Post Comment')
```

## 10.完整的movie.html模板（templates/movie.html）

```
{% extends "base.html" %}
{% block content %}
<div class="movie-container">
    <div class="movie-header">
        <img src="{{ movie.cover_url }}" alt="{{ movie.title }} Cover" class="movie-cover">
        <div class="movie-info">
            <h1>{{ movie.title }}</h1>
            <p class="meta">Release Year: {{ movie.release_year }} | Genre: {{ movie.genre }}</p>
            <p class="description">{{ movie.description }}</p>
        </div>
    </div>

    <div class="comments-section">
        <h2>Comments ({{ movie.comments|length }})</h2>
        
        {% if current_user.is_authenticated %}
        <form method="POST" action="{{ url_for('main.movie_detail', movie_id=movie.id) }}">
            {{ comment_form.hidden_tag() }}
            <div class="form-group">
                {{ comment_form.content(class="form-control", rows=4) }}
                {% for error in comment_form.content.errors %}
                <span class="text-danger">{{ error }}</span>
                {% endfor %}
            </div>
            {{ comment_form.submit(class="btn btn-primary") }}
        </form>
        {% else %}
        <p><a href="{{ url_for('auth.login') }}">Login</a> to post comments</p>
        {% endif %}

        <div class="comments-list">
            {% for comment in movie.comments %}
            <div class="comment">
                <div class="comment-header">
                    <strong>{{ comment.user.username }}</strong>
                    <span class="text-muted">{{ comment.timestamp.strftime('%Y-%m-%d %H:%M') }}</span>
                </div>
                <p>{{ comment.content }}</p>
            </div>
            {% endfor %}
        </div>
    </div>
</div>
{% endblock %}
```

## 11.完整的登录功能（app/auth/routes.py）：

```
from flask import Blueprint, render_template, redirect, url_for, flash, request
from werkzeug.security import check_password_hash
from flask_login import login_user, logout_user, current_user, login_required
from app import db

# ... 保留原有导入 ...

@auth.route('/login', methods=['GET', 'POST'])
def login():
    if current_user.is_authenticated:
        return redirect(url_for('main.index'))
    
    form = LoginForm()
    if form.validate_on_submit():
        user = User.query.filter_by(email=form.email.data).first()
        if user and user.check_password(form.password.data):
            login_user(user, remember=form.remember.data)
            next_page = request.args.get('next')
            return redirect(next_page) if next_page else redirect(url_for('main.index'))
        else:
            flash('Login failed. Check email and password.', 'danger')
    return render_template('login.html', form=form)

@auth.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('main.index'))
```

## 12.login.html模板（templates/login.html）

```html
{% extends "base.html" %}
{% block content %}
<div class="auth-form">
    <h2>Login</h2>
    <form method="POST">
        {{ form.hidden_tag() }}
        <div class="form-group">
            {{ form.email.label }}
            {{ form.email(class="form-control") }}
            {% for error in form.email.errors %}
            <span class="error">{{ error }}</span>
            {% endfor %}
        </div>
        <div class="form-group">
            {{ form.password.label }}
            {{ form.password(class="form-control") }}
            {% for error in form.password.errors %}
            <span class="error">{{ error }}</span>
            {% endfor %}
        </div>
        {{ form.submit(class="btn btn-primary") }}
    </form>
    <p>Don't have an account? <a href="{{ url_for('auth.register') }}">Register here</a></p>
</div>
{% endblock %}
```

## 13.更新routes.py处理评论（app/routes.py）

```python
from flask import Blueprint, render_template, redirect, url_for
from app.models import Movie, Comment
from app.forms import CommentForm
from flask_login import current_user, login_required

@main.route('/movie/<int:movie_id>', methods=['GET', 'POST'])
def movie_detail(movie_id):
    movie = Movie.query.get_or_404(movie_id)
    form = CommentForm()
    
    if form.validate_on_submit() and current_user.is_authenticated:
        comment = Comment(content=form.content.data,
                          user_id=current_user.id,
                          movie_id=movie.id)
        db.session.add(comment)
        db.session.commit()
        return redirect(url_for('main.movie_detail', movie_id=movie.id))
    
    return render_template('movie.html', movie=movie, comment_form=form)
```

## 14.基本样式（static/css/style.css）

```
body {
    font-family: Arial, sans-serif;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

.movie-header {
    display: flex;
    gap: 30px;
    margin-bottom: 40px;
}

.movie-cover {
    max-width: 300px;
    height: auto;
}

.comments-section {
    margin-top: 40px;
    border-top: 1px solid #eee;
    padding-top: 20px;
}

.comment {
    background: #f5f5f5;
    padding: 15px;
    margin: 10px 0;
    border-radius: 5px;
}

.auth-form {
    max-width: 500px;
    margin: 0 auto;
}

.form-group {
    margin-bottom: 15px;
}

.btn {
    padding: 8px 15px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.error {
    color: red;
    font-size: 0.9em;
}
```

## 15**创建配置文件（app/config.py）**

```python
import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    SECRET_KEY = os.getenv('SECRET_KEY') or 'your-secret-key'
    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL') or \
                              'mysql+pymysql://movie_user:admin123@localhost:3306/movie_db'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
```

**2. 安装MySQL驱动（需额外安装）：**

```bash
pip install pymysql cryptography
pip install pymysql cryptography python-dotenv
```

**3. 创建MySQL数据库（通过MySQL Workbench执行）：**

```sql
CREATE DATABASE movie_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'movie_user'@'localhost' IDENTIFIED BY 'admin123';
GRANT ALL PRIVILEGES ON movie_db.* TO 'movie_user'@'localhost';
FLUSH PRIVILEGES;
```

**4. 创建.env文件（项目根目录）：**

```
DATABASE_URL=mysql+pymysql://movie_user:admin123@localhost/movie_db
SECRET_KEY=your-secret-key
```

完整功能现在包括：

1. 完整的用户认证流程（注册/登录/退出）
2. 电影详情页面带评论功能
3. 评论表单验证和数据库存储
4. 用户会话管理
5. 基本响应式布局
6. 表单错误处理

1. 



```
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'admin123';
FLUSH PRIVILEGES;
```

检查`movie_user`的权限是否正确：

```bash
mysql -u root -p
```

```
ALTER USER 'movie_user'@'localhost' IDENTIFIED BY 'admin123';
FLUSH PRIVILEGES;
```

```
SHOW GRANTS FOR 'movie_user'@'localhost';
```

确保输出中包含以下内容：

```
GRANT ALL PRIVILEGES ON `movie_db`.* TO `movie_user`@`localhost`
```





这个基础版本包含：

- 用户认证系统（注册/登录）
- 电影展示功能
- 数据库模型（用户和电影）
- 基本的前端模板
- 配置管理
- 数据库迁移支持

你可以通过以下方式扩展功能：

1. 添加电影分类筛选
2. 实现搜索功能
3. 添加用户评论系统
4. 集成支付功能
5. 添加管理员后台
6. 实现电影推荐算法

需要根据实际需求添加更多功能和安全措施（如CSRF保护、密码强度验证等）。





# 运行

```bash
# 激活虚拟环境
.\venv\Scripts\activate
```





安装所有依赖

pip install -r requirements.txt

```bash
pip install flask-sqlalchemy
pip install flask-migrate
pip install python-dotenv
pip install pymysql
pip install flask-login
pip show flask
pip install pymysql
```



使用前需要：

1. 配置数据库连接（在config.py中设置SQLALCHEMY_DATABASE_URI）
2. 执行数据库迁移：

```
flask db init
flask db migrate -m "initial migration"
flask db upgrade
```



```bash
python -m flask db init
set FLASK_APP=run.py
python -m flask db init
python -m flask db migrate -m "initial migration"
python -m flask db upgrade
```

```
python run.py

访问http://localhost:5000/auth/login

访问http://localhost:5000/auth/register
http://localhost:5000/auth/login
```



### 已添加的测试账户

1. 重新登录测试：
   1. 使用 testuser1/test123 登录

可以通过添加更多功能来扩展这个基础框架：

1. 用户个人资料页面
2. 电影评分系统
3. 收藏夹功能
4. 电影分类浏览
5. 管理员后台管理界面
6. 电影搜索功能