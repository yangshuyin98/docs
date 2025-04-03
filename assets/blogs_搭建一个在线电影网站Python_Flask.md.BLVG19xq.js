import{_ as a,c as n,o as i,ag as p}from"./chunks/framework.oP1PDRBo.js";const c=JSON.parse('{"title":"搭建一个在线电影网站，Python + Flask","description":"","frontmatter":{},"headers":[],"relativePath":"blogs/搭建一个在线电影网站Python+Flask.md","filePath":"blogs/搭建一个在线电影网站Python+Flask.md","lastUpdated":1743649620000}'),l={name:"blogs/搭建一个在线电影网站Python+Flask.md"};function t(e,s,h,k,r,o){return i(),n("div",null,s[0]||(s[0]=[p(`<h1 id="搭建一个在线电影网站-python-flask" tabindex="-1">搭建一个在线电影网站，Python + Flask <a class="header-anchor" href="#搭建一个在线电影网站-python-flask" aria-label="Permalink to &quot;搭建一个在线电影网站，Python + Flask&quot;">​</a></h1><p>目录结构方面，通常Flask项目会分成几个部分，比如应用工厂模式，这样结构更清晰。可能需要static文件夹放静态文件，templates放模板，models放数据库模型，routes放路由，还有config配置文件。还要考虑使用蓝本来组织路由，这样模块化更好。</p><p>然后，数据库部分，可能使用SQLAlchemy和Flask-SQLAlchemy来管理，这样用户可以用ORM操作数据库，比较方便。用户模型需要包含用户名、邮箱、密码哈希等字段，电影模型可能需要标题、描述、分类、上映时间、封面图片链接等。</p><p>模板方面，需要使用Jinja2，基础模板用base.html，其他页面继承它。首页显示电影列表，分类导航，登录注册链接。用户认证部分，需要处理注册、登录、注销的路由，密码哈希使用Werkzeug的security模块。</p><p>静态文件的话，CSS和JS放在static文件夹下，可能还需要图片上传功能，但这里可能先使用链接，后面再处理文件上传。</p><p>表单处理可以用Flask-WTF，定义注册和登录的表单类，进行字段验证。在模板中渲染表单字段，并处理POST请求。</p><p>路由部分，首页路由显示电影列表，电影详情页面根据ID显示详细信息，分类页面过滤电影。用户相关的路由包括注册、登录、注销。</p><p>可能需要初始化数据库，使用Flask-Migrate来做数据库迁移，这样用户创建和更新模型比较方便。</p><p>测试数据方面，可以在初始化的时候添加一些示例电影和用户，方便测试。</p><p>然后，要考虑安全性，比如密码不能明文存储，使用generate_password_hash和check_password_hash。还有CSRF保护，使用Flask-WTF默认开启的CSRF保护。</p><p>最后，运行应用需要设置FLASK_APP环境变量，初始化数据库，运行迁移命令，然后启动开发服务器。</p><p>用户可能需要更详细的功能，比如搜索、评论、收藏，或者管理员后台，但作为初始结构，先实现基本功能。需要确保提供的代码清晰，结构合理，用户能够在此基础上进行扩展。</p><h2 id="目录结构" tabindex="-1">目录结构 <a class="header-anchor" href="#目录结构" aria-label="Permalink to &quot;目录结构&quot;">​</a></h2><p>以下是一个基于Flask的在线电影网站基础代码示例和目录结构：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 目录结构</span></span>
<span class="line"><span>/flask-movie-website</span></span>
<span class="line"><span>├── .env                # 新增的环境变量文件</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── app/</span></span>
<span class="line"><span>│   ├── __init__.py     # 修复此处代码</span></span>
<span class="line"><span>│   ├── routes.py</span></span>
<span class="line"><span>│   ├── models.py</span></span>
<span class="line"><span>│   ├── forms.py</span></span>
<span class="line"><span>│   ├── config.py       # 确保存在</span></span>
<span class="line"><span>│   │</span></span>
<span class="line"><span>│   ├── static/</span></span>
<span class="line"><span>│   │   └── css/</span></span>
<span class="line"><span>│   │       └── style.css</span></span>
<span class="line"><span>│   │</span></span>
<span class="line"><span>│   ├── templates/</span></span>
<span class="line"><span>│   │   ├── base.html</span></span>
<span class="line"><span>│   │   ├── index.html</span></span>
<span class="line"><span>│   │   ├── movie.html</span></span>
<span class="line"><span>│   │   ├── register.html</span></span>
<span class="line"><span>│   │   └── login.html</span></span>
<span class="line"><span>│   │</span></span>
<span class="line"><span>│   └── auth/</span></span>
<span class="line"><span>│       ├── __init__.py</span></span>
<span class="line"><span>│       └── routes.py</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── migrations/</span></span>
<span class="line"><span>├── venv/</span></span>
<span class="line"><span>├── requirements.txt</span></span>
<span class="line"><span>└── run.py</span></span></code></pre></div><h2 id="_1-首先安装依赖-requirements-txt" tabindex="-1">1.首先安装依赖（requirements.txt） <a class="header-anchor" href="#_1-首先安装依赖-requirements-txt" aria-label="Permalink to &quot;1.首先安装依赖（requirements.txt）&quot;">​</a></h2><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Flask==3.0.2</span></span>
<span class="line"><span>Flask-SQLAlchemy==3.1.1</span></span>
<span class="line"><span>Flask-WTF==1.2.1</span></span>
<span class="line"><span>Flask-Migrate==4.0.5</span></span>
<span class="line"><span>python-dotenv==1.0.0</span></span></code></pre></div><h2 id="_2-核心代码文件-app-init-py" tabindex="-1">2.核心代码文件：app/<strong>init</strong>.py <a class="header-anchor" href="#_2-核心代码文件-app-init-py" aria-label="Permalink to &quot;2.核心代码文件：app/**init**.py&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>from flask import Flask</span></span>
<span class="line"><span>from flask_sqlalchemy import SQLAlchemy</span></span>
<span class="line"><span>from flask_migrate import Migrate</span></span>
<span class="line"><span>from config import Config</span></span>
<span class="line"><span>from .config import Config  # 修改为相对导入</span></span>
<span class="line"><span></span></span>
<span class="line"><span>db = SQLAlchemy()</span></span>
<span class="line"><span>migrate = Migrate()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>def create_app():</span></span>
<span class="line"><span>    app = Flask(__name__)</span></span>
<span class="line"><span>    app.config.from_object(Config)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    db.init_app(app)</span></span>
<span class="line"><span>    migrate.init_app(app, db)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    from app.routes import main</span></span>
<span class="line"><span>    from app.auth.routes import auth</span></span>
<span class="line"><span>    app.register_blueprint(main)</span></span>
<span class="line"><span>    app.register_blueprint(auth)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return app</span></span></code></pre></div><h2 id="_3-app-models-py" tabindex="-1">3.app/models.py: <a class="header-anchor" href="#_3-app-models-py" aria-label="Permalink to &quot;3.app/models.py:&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>from app import db</span></span>
<span class="line"><span>from werkzeug.security import generate_password_hash, check_password_hash</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class User(db.Model):</span></span>
<span class="line"><span>    id = db.Column(db.Integer, primary_key=True)</span></span>
<span class="line"><span>    username = db.Column(db.String(64), unique=True, nullable=False)</span></span>
<span class="line"><span>    email = db.Column(db.String(120), unique=True, nullable=False)</span></span>
<span class="line"><span>    password_hash = db.Column(db.String(128))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def set_password(self, password):</span></span>
<span class="line"><span>        self.password_hash = generate_password_hash(password)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    def check_password(self, password):</span></span>
<span class="line"><span>        return check_password_hash(self.password_hash, password)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Movie(db.Model):</span></span>
<span class="line"><span>    id = db.Column(db.Integer, primary_key=True)</span></span>
<span class="line"><span>    title = db.Column(db.String(100), nullable=False)</span></span>
<span class="line"><span>    description = db.Column(db.Text)</span></span>
<span class="line"><span>    genre = db.Column(db.String(50))</span></span>
<span class="line"><span>    release_year = db.Column(db.Integer)</span></span>
<span class="line"><span>    cover_url = db.Column(db.String(200))</span></span></code></pre></div><h2 id="_4-app-routes-py" tabindex="-1">4.app/routes.py: <a class="header-anchor" href="#_4-app-routes-py" aria-label="Permalink to &quot;4.app/routes.py:&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>from flask import Blueprint, render_template</span></span>
<span class="line"><span>from app.models import Movie</span></span>
<span class="line"><span></span></span>
<span class="line"><span>main = Blueprint(&#39;main&#39;, __name__)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@main.route(&#39;/&#39;)</span></span>
<span class="line"><span>def index():</span></span>
<span class="line"><span>    movies = Movie.query.all()</span></span>
<span class="line"><span>    return render_template(&#39;index.html&#39;, movies=movies)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@main.route(&#39;/movie/&lt;int:movie_id&gt;&#39;)</span></span>
<span class="line"><span>def movie_detail(movie_id):</span></span>
<span class="line"><span>    movie = Movie.query.get_or_404(movie_id)</span></span>
<span class="line"><span>    return render_template(&#39;movie.html&#39;, movie=movie)</span></span></code></pre></div><h2 id="_5-app-auth-routes-py" tabindex="-1">5.app/auth/routes.py: <a class="header-anchor" href="#_5-app-auth-routes-py" aria-label="Permalink to &quot;5.app/auth/routes.py:&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>from flask import Blueprint, render_template, redirect, url_for, flash</span></span>
<span class="line"><span>from app.models import User</span></span>
<span class="line"><span>from app.forms import RegistrationForm, LoginForm</span></span>
<span class="line"><span></span></span>
<span class="line"><span>auth = Blueprint(&#39;auth&#39;, __name__)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@auth.route(&#39;/register&#39;, methods=[&#39;GET&#39;, &#39;POST&#39;])</span></span>
<span class="line"><span>def register():</span></span>
<span class="line"><span>    form = RegistrationForm()</span></span>
<span class="line"><span>    if form.validate_on_submit():</span></span>
<span class="line"><span>        user = User(username=form.username.data, email=form.email.data)</span></span>
<span class="line"><span>        user.set_password(form.password.data)</span></span>
<span class="line"><span>        db.session.add(user)</span></span>
<span class="line"><span>        db.session.commit()</span></span>
<span class="line"><span>        flash(&#39;Registration successful!&#39;)</span></span>
<span class="line"><span>        return redirect(url_for(&#39;auth.login&#39;))</span></span>
<span class="line"><span>    return render_template(&#39;register.html&#39;, form=form)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@auth.route(&#39;/login&#39;, methods=[&#39;GET&#39;, &#39;POST&#39;])</span></span>
<span class="line"><span>def login():</span></span>
<span class="line"><span>    form = LoginForm()</span></span>
<span class="line"><span>    # 实现登录逻辑</span></span>
<span class="line"><span>    return render_template(&#39;login.html&#39;, form=form)</span></span></code></pre></div><h2 id="_6-templates-base-html" tabindex="-1">6.templates/base.html: <a class="header-anchor" href="#_6-templates-base-html" aria-label="Permalink to &quot;6.templates/base.html:&quot;">​</a></h2><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;!</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">DOCTYPE</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">head</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Movie Website&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">link</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> rel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;stylesheet&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;{{ url_for(&#39;static&#39;, filename=&#39;css/style.css&#39;) }}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">head</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">nav</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;{{ url_for(&#39;main.index&#39;) }}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Home&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {% if current_user.is_authenticated %}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;{{ url_for(&#39;auth.logout&#39;) }}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Logout&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {% else %}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;{{ url_for(&#39;auth.login&#39;) }}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Login&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;{{ url_for(&#39;auth.register&#39;) }}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Register&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {% endif %}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">nav</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {% block content %}{% endblock %}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="_7-运行文件-run-py" tabindex="-1">7.运行文件 run.py: <a class="header-anchor" href="#_7-运行文件-run-py" aria-label="Permalink to &quot;7.运行文件 run.py:&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>from app import create_app</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app = create_app()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if __name__ == &#39;__main__&#39;:</span></span>
<span class="line"><span>    app.run(debug=True)</span></span></code></pre></div><p>使用说明：</p><ol><li>创建虚拟环境并安装依赖</li><li>设置环境变量：<code>FLASK_APP=run.py</code></li><li>初始化数据库：</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">flask</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> db</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">flask</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> db</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> migrate</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">flask</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> db</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> upgrade</span></span></code></pre></div><h2 id="_8-app-models-py评论相关模型" tabindex="-1">8.app/models.py评论相关模型 <a class="header-anchor" href="#_8-app-models-py评论相关模型" aria-label="Permalink to &quot;8.app/models.py评论相关模型&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 在原有模型基础上添加</span></span>
<span class="line"><span>class Comment(db.Model):</span></span>
<span class="line"><span>    id = db.Column(db.Integer, primary_key=True)</span></span>
<span class="line"><span>    content = db.Column(db.Text, nullable=False)</span></span>
<span class="line"><span>    timestamp = db.Column(db.DateTime, index=True, default=datetime.utcnow)</span></span>
<span class="line"><span>    user_id = db.Column(db.Integer, db.ForeignKey(&#39;user.id&#39;))</span></span>
<span class="line"><span>    movie_id = db.Column(db.Integer, db.ForeignKey(&#39;movie.id&#39;))</span></span></code></pre></div><h2 id="_9-完整表单类-app-forms-py" tabindex="-1">9.完整表单类（app/forms.py） <a class="header-anchor" href="#_9-完整表单类-app-forms-py" aria-label="Permalink to &quot;9.完整表单类（app/forms.py）&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>from flask_wtf import FlaskForm</span></span>
<span class="line"><span>from wtforms import StringField, PasswordField, TextAreaField, SubmitField</span></span>
<span class="line"><span>from wtforms.validators import DataRequired, Email, EqualTo, Length</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class RegistrationForm(FlaskForm):</span></span>
<span class="line"><span>    username = StringField(&#39;Username&#39;, validators=[DataRequired(), Length(min=2, max=20)])</span></span>
<span class="line"><span>    email = StringField(&#39;Email&#39;, validators=[DataRequired(), Email()])</span></span>
<span class="line"><span>    password = PasswordField(&#39;Password&#39;, validators=[DataRequired()])</span></span>
<span class="line"><span>    confirm_password = PasswordField(&#39;Confirm Password&#39;, validators=[DataRequired(), EqualTo(&#39;password&#39;)])</span></span>
<span class="line"><span>    submit = SubmitField(&#39;Sign Up&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class LoginForm(FlaskForm):</span></span>
<span class="line"><span>    email = StringField(&#39;Email&#39;, validators=[DataRequired(), Email()])</span></span>
<span class="line"><span>    password = PasswordField(&#39;Password&#39;, validators=[DataRequired()])</span></span>
<span class="line"><span>    submit = SubmitField(&#39;Login&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class CommentForm(FlaskForm):</span></span>
<span class="line"><span>    content = TextAreaField(&#39;Comment&#39;, validators=[DataRequired(), Length(max=500)])</span></span>
<span class="line"><span>    submit = SubmitField(&#39;Post Comment&#39;)</span></span></code></pre></div><h2 id="_10-完整的movie-html模板-templates-movie-html" tabindex="-1">10.完整的movie.html模板（templates/movie.html） <a class="header-anchor" href="#_10-完整的movie-html模板-templates-movie-html" aria-label="Permalink to &quot;10.完整的movie.html模板（templates/movie.html）&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{% extends &quot;base.html&quot; %}</span></span>
<span class="line"><span>{% block content %}</span></span>
<span class="line"><span>&lt;div class=&quot;movie-container&quot;&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;movie-header&quot;&gt;</span></span>
<span class="line"><span>        &lt;img src=&quot;{{ movie.cover_url }}&quot; alt=&quot;{{ movie.title }} Cover&quot; class=&quot;movie-cover&quot;&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;movie-info&quot;&gt;</span></span>
<span class="line"><span>            &lt;h1&gt;{{ movie.title }}&lt;/h1&gt;</span></span>
<span class="line"><span>            &lt;p class=&quot;meta&quot;&gt;Release Year: {{ movie.release_year }} | Genre: {{ movie.genre }}&lt;/p&gt;</span></span>
<span class="line"><span>            &lt;p class=&quot;description&quot;&gt;{{ movie.description }}&lt;/p&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;div class=&quot;comments-section&quot;&gt;</span></span>
<span class="line"><span>        &lt;h2&gt;Comments ({{ movie.comments|length }})&lt;/h2&gt;</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        {% if current_user.is_authenticated %}</span></span>
<span class="line"><span>        &lt;form method=&quot;POST&quot; action=&quot;{{ url_for(&#39;main.movie_detail&#39;, movie_id=movie.id) }}&quot;&gt;</span></span>
<span class="line"><span>            {{ comment_form.hidden_tag() }}</span></span>
<span class="line"><span>            &lt;div class=&quot;form-group&quot;&gt;</span></span>
<span class="line"><span>                {{ comment_form.content(class=&quot;form-control&quot;, rows=4) }}</span></span>
<span class="line"><span>                {% for error in comment_form.content.errors %}</span></span>
<span class="line"><span>                &lt;span class=&quot;text-danger&quot;&gt;{{ error }}&lt;/span&gt;</span></span>
<span class="line"><span>                {% endfor %}</span></span>
<span class="line"><span>            &lt;/div&gt;</span></span>
<span class="line"><span>            {{ comment_form.submit(class=&quot;btn btn-primary&quot;) }}</span></span>
<span class="line"><span>        &lt;/form&gt;</span></span>
<span class="line"><span>        {% else %}</span></span>
<span class="line"><span>        &lt;p&gt;&lt;a href=&quot;{{ url_for(&#39;auth.login&#39;) }}&quot;&gt;Login&lt;/a&gt; to post comments&lt;/p&gt;</span></span>
<span class="line"><span>        {% endif %}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        &lt;div class=&quot;comments-list&quot;&gt;</span></span>
<span class="line"><span>            {% for comment in movie.comments %}</span></span>
<span class="line"><span>            &lt;div class=&quot;comment&quot;&gt;</span></span>
<span class="line"><span>                &lt;div class=&quot;comment-header&quot;&gt;</span></span>
<span class="line"><span>                    &lt;strong&gt;{{ comment.user.username }}&lt;/strong&gt;</span></span>
<span class="line"><span>                    &lt;span class=&quot;text-muted&quot;&gt;{{ comment.timestamp.strftime(&#39;%Y-%m-%d %H:%M&#39;) }}&lt;/span&gt;</span></span>
<span class="line"><span>                &lt;/div&gt;</span></span>
<span class="line"><span>                &lt;p&gt;{{ comment.content }}&lt;/p&gt;</span></span>
<span class="line"><span>            &lt;/div&gt;</span></span>
<span class="line"><span>            {% endfor %}</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span>{% endblock %}</span></span></code></pre></div><h2 id="_11-完整的登录功能-app-auth-routes-py" tabindex="-1">11.完整的登录功能（app/auth/routes.py）： <a class="header-anchor" href="#_11-完整的登录功能-app-auth-routes-py" aria-label="Permalink to &quot;11.完整的登录功能（app/auth/routes.py）：&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>from flask import Blueprint, render_template, redirect, url_for, flash, request</span></span>
<span class="line"><span>from werkzeug.security import check_password_hash</span></span>
<span class="line"><span>from flask_login import login_user, logout_user, current_user, login_required</span></span>
<span class="line"><span>from app import db</span></span>
<span class="line"><span></span></span>
<span class="line"><span># ... 保留原有导入 ...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@auth.route(&#39;/login&#39;, methods=[&#39;GET&#39;, &#39;POST&#39;])</span></span>
<span class="line"><span>def login():</span></span>
<span class="line"><span>    if current_user.is_authenticated:</span></span>
<span class="line"><span>        return redirect(url_for(&#39;main.index&#39;))</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    form = LoginForm()</span></span>
<span class="line"><span>    if form.validate_on_submit():</span></span>
<span class="line"><span>        user = User.query.filter_by(email=form.email.data).first()</span></span>
<span class="line"><span>        if user and user.check_password(form.password.data):</span></span>
<span class="line"><span>            login_user(user, remember=form.remember.data)</span></span>
<span class="line"><span>            next_page = request.args.get(&#39;next&#39;)</span></span>
<span class="line"><span>            return redirect(next_page) if next_page else redirect(url_for(&#39;main.index&#39;))</span></span>
<span class="line"><span>        else:</span></span>
<span class="line"><span>            flash(&#39;Login failed. Check email and password.&#39;, &#39;danger&#39;)</span></span>
<span class="line"><span>    return render_template(&#39;login.html&#39;, form=form)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@auth.route(&#39;/logout&#39;)</span></span>
<span class="line"><span>@login_required</span></span>
<span class="line"><span>def logout():</span></span>
<span class="line"><span>    logout_user()</span></span>
<span class="line"><span>    return redirect(url_for(&#39;main.index&#39;))</span></span></code></pre></div><h2 id="_12-login-html模板-templates-login-html" tabindex="-1">12.login.html模板（templates/login.html） <a class="header-anchor" href="#_12-login-html模板-templates-login-html" aria-label="Permalink to &quot;12.login.html模板（templates/login.html）&quot;">​</a></h2><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{% extends &quot;base.html&quot; %}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{% block content %}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;auth-form&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Login&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">form</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> method</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;POST&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {{ form.hidden_tag() }}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;form-group&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            {{ form.email.label }}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            {{ form.email(class=&quot;form-control&quot;) }}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            {% for error in form.email.errors %}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">span</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;{{ error }}&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">span</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            {% endfor %}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;form-group&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            {{ form.password.label }}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            {{ form.password(class=&quot;form-control&quot;) }}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            {% for error in form.password.errors %}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">span</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;error&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;{{ error }}&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">span</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            {% endfor %}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {{ form.submit(class=&quot;btn btn-primary&quot;) }}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">form</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Don&#39;t have an account? &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;{{ url_for(&#39;auth.register&#39;) }}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Register here&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{% endblock %}</span></span></code></pre></div><h2 id="_13-更新routes-py处理评论-app-routes-py" tabindex="-1">13.更新routes.py处理评论（app/routes.py） <a class="header-anchor" href="#_13-更新routes-py处理评论-app-routes-py" aria-label="Permalink to &quot;13.更新routes.py处理评论（app/routes.py）&quot;">​</a></h2><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> flask </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Blueprint, render_template, redirect, url_for</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> app.models </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Movie, Comment</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> app.forms </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CommentForm</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> flask_login </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> current_user, login_required</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@main.route</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/movie/&lt;int:movie_id&gt;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">methods</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;GET&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;POST&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> movie_detail</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(movie_id):</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    movie </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Movie.query.get_or_404(movie_id)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    form </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CommentForm()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> form.validate_on_submit() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">and</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> current_user.is_authenticated:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        comment </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Comment(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">content</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">form.content.data,</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">                          user_id</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">current_user.id,</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">                          movie_id</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">movie.id)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        db.session.add(comment)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        db.session.commit()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> redirect(url_for(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;main.movie_detail&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">movie_id</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">movie.id))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> render_template(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;movie.html&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">movie</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">movie, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">comment_form</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">form)</span></span></code></pre></div><h2 id="_14-基本样式-static-css-style-css" tabindex="-1">14.基本样式（static/css/style.css） <a class="header-anchor" href="#_14-基本样式-static-css-style-css" aria-label="Permalink to &quot;14.基本样式（static/css/style.css）&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>body {</span></span>
<span class="line"><span>    font-family: Arial, sans-serif;</span></span>
<span class="line"><span>    max-width: 1200px;</span></span>
<span class="line"><span>    margin: 0 auto;</span></span>
<span class="line"><span>    padding: 20px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.movie-header {</span></span>
<span class="line"><span>    display: flex;</span></span>
<span class="line"><span>    gap: 30px;</span></span>
<span class="line"><span>    margin-bottom: 40px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.movie-cover {</span></span>
<span class="line"><span>    max-width: 300px;</span></span>
<span class="line"><span>    height: auto;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.comments-section {</span></span>
<span class="line"><span>    margin-top: 40px;</span></span>
<span class="line"><span>    border-top: 1px solid #eee;</span></span>
<span class="line"><span>    padding-top: 20px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.comment {</span></span>
<span class="line"><span>    background: #f5f5f5;</span></span>
<span class="line"><span>    padding: 15px;</span></span>
<span class="line"><span>    margin: 10px 0;</span></span>
<span class="line"><span>    border-radius: 5px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.auth-form {</span></span>
<span class="line"><span>    max-width: 500px;</span></span>
<span class="line"><span>    margin: 0 auto;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.form-group {</span></span>
<span class="line"><span>    margin-bottom: 15px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.btn {</span></span>
<span class="line"><span>    padding: 8px 15px;</span></span>
<span class="line"><span>    background: #007bff;</span></span>
<span class="line"><span>    color: white;</span></span>
<span class="line"><span>    border: none;</span></span>
<span class="line"><span>    border-radius: 4px;</span></span>
<span class="line"><span>    cursor: pointer;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.error {</span></span>
<span class="line"><span>    color: red;</span></span>
<span class="line"><span>    font-size: 0.9em;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="_15创建配置文件-app-config-py" tabindex="-1">15<strong>创建配置文件（app/config.py）</strong> <a class="header-anchor" href="#_15创建配置文件-app-config-py" aria-label="Permalink to &quot;15**创建配置文件（app/config.py）**&quot;">​</a></h2><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> os</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> dotenv </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> load_dotenv</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">load_dotenv()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Config</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    SECRET_KEY</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> os.getenv(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;SECRET_KEY&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">or</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;your-secret-key&#39;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    SQLALCHEMY_DATABASE_URI</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> os.getenv(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;DATABASE_URL&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">or</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                              &#39;mysql+pymysql://movie_user:admin123@localhost:3306/movie_db&#39;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    SQLALCHEMY_TRACK_MODIFICATIONS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> False</span></span></code></pre></div><p><strong>2. 安装MySQL驱动（需额外安装）：</strong></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pymysql</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cryptography</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pymysql</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cryptography</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> python-dotenv</span></span></code></pre></div><p><strong>3. 创建MySQL数据库（通过MySQL Workbench执行）：</strong></p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">CREATE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> DATABASE</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> movie_db</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> CHARACTER</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> SET</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> utf8mb4 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">COLLATE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> utf8mb4_unicode_ci;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">CREATE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> USER</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">movie_user</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&#39;@</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;localhost&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> IDENTIFIED </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">BY</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;admin123&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">GRANT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ALL PRIVILEGES </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ON</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> movie_db.</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> TO</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;movie_user&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;localhost&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">FLUSH PRIVILEGES;</span></span></code></pre></div><p><strong>4. 创建.env文件（项目根目录）：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>DATABASE_URL=mysql+pymysql://movie_user:admin123@localhost/movie_db</span></span>
<span class="line"><span>SECRET_KEY=your-secret-key</span></span></code></pre></div><p>完整功能现在包括：</p><ol><li><p>完整的用户认证流程（注册/登录/退出）</p></li><li><p>电影详情页面带评论功能</p></li><li><p>评论表单验证和数据库存储</p></li><li><p>用户会话管理</p></li><li><p>基本响应式布局</p></li><li><p>表单错误处理</p></li><li></li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ALTER USER &#39;root&#39;@&#39;localhost&#39; IDENTIFIED WITH mysql_native_password BY &#39;admin123&#39;;</span></span>
<span class="line"><span>FLUSH PRIVILEGES;</span></span></code></pre></div><p>检查<code>movie_user</code>的权限是否正确：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mysql</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -u</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> root</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ALTER USER &#39;movie_user&#39;@&#39;localhost&#39; IDENTIFIED BY &#39;admin123&#39;;</span></span>
<span class="line"><span>FLUSH PRIVILEGES;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>SHOW GRANTS FOR &#39;movie_user&#39;@&#39;localhost&#39;;</span></span></code></pre></div><p>确保输出中包含以下内容：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>GRANT ALL PRIVILEGES ON \`movie_db\`.* TO \`movie_user\`@\`localhost\`</span></span></code></pre></div><p>这个基础版本包含：</p><ul><li>用户认证系统（注册/登录）</li><li>电影展示功能</li><li>数据库模型（用户和电影）</li><li>基本的前端模板</li><li>配置管理</li><li>数据库迁移支持</li></ul><p>你可以通过以下方式扩展功能：</p><ol><li>添加电影分类筛选</li><li>实现搜索功能</li><li>添加用户评论系统</li><li>集成支付功能</li><li>添加管理员后台</li><li>实现电影推荐算法</li></ol><p>需要根据实际需求添加更多功能和安全措施（如CSRF保护、密码强度验证等）。</p><h1 id="运行" tabindex="-1">运行 <a class="header-anchor" href="#运行" aria-label="Permalink to &quot;运行&quot;">​</a></h1><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 激活虚拟环境</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">venv</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Scripts</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">activate</span></span></code></pre></div><p>安装所有依赖</p><p>pip install -r requirements.txt</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> flask-sqlalchemy</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> flask-migrate</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> python-dotenv</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pymysql</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> flask-login</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> show</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> flask</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pymysql</span></span></code></pre></div><p>使用前需要：</p><ol><li>配置数据库连接（在config.py中设置SQLALCHEMY_DATABASE_URI）</li><li>执行数据库迁移：</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>flask db init</span></span>
<span class="line"><span>flask db migrate -m &quot;initial migration&quot;</span></span>
<span class="line"><span>flask db upgrade</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">python</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> flask</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> db</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> FLASK_APP=run.py</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">python</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> flask</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> db</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">python</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> flask</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> db</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> migrate</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;initial migration&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">python</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> flask</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> db</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> upgrade</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>python run.py</span></span>
<span class="line"><span></span></span>
<span class="line"><span>访问http://localhost:5000/auth/login</span></span>
<span class="line"><span></span></span>
<span class="line"><span>访问http://localhost:5000/auth/register</span></span>
<span class="line"><span>http://localhost:5000/auth/login</span></span></code></pre></div><h3 id="已添加的测试账户" tabindex="-1">已添加的测试账户 <a class="header-anchor" href="#已添加的测试账户" aria-label="Permalink to &quot;已添加的测试账户&quot;">​</a></h3><ol><li>重新登录测试： <ol><li>使用 testuser1/test123 登录</li></ol></li></ol><p>可以通过添加更多功能来扩展这个基础框架：</p><ol><li>用户个人资料页面</li><li>电影评分系统</li><li>收藏夹功能</li><li>电影分类浏览</li><li>管理员后台管理界面</li><li>电影搜索功能</li></ol>`,82)]))}const g=a(l,[["render",t]]);export{c as __pageData,g as default};
