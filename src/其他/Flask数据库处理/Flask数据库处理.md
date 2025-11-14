---
title: Flask数据库处理
date:  2024-05-03 19:43:06
categories:
  - 其他
tags:
  - 环境配置
sticky: 0
---


**flask_migrate新建数据库的表**

第一次导入就需要新建migrate

```
flask init
```

接着执行数据库迁移和更新的语句

```
flask db migrate
```

```
flask db upgrade
```

接着进入flask shell命令行

```
flask shell
```

接着导入你需要新建的表（这里我是直接将这张表全部导入进来），导入后只要你修改系统都能自动帮你更新

```
 from flaskProject.api.models.usersModel import *
```

然后执行创建和提交的命令

```
db.create_all()
```

```
db.session.commit()
```

