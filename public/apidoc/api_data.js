define({ "api": [  {    "type": "post",    "url": "/v1/login",    "title": "app登录",    "group": "Auth",    "permission": [      {        "name": "none"      }    ],    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "mobile",            "description": "<p>用户的手机号</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "password",            "description": "<p>用户的密码</p>"          }        ]      }    },    "version": "0.0.0",    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "{\n      \"status\": \"success\",\n      \"code\": 200,\n      \"token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjQsImlzcyI6Imh0dHA6XC9cL2xpZmVyZWNvZGVyLmRldlwvYXBpXC92MVwvbG9naW4uanNvbiIsImlhdCI6MTQ5MzY0NTgyMCwiZXhwIjoxNDkzNjQ5NDIwLCJuYmYiOjE0OTM2NDU4MjAsImp0aSI6Ijc5VGxIYzNubVVGMkJmczMifQ.usSRe47EgnIqgZ2UXAFb2RdF-u1N6Kn9ATRpWHDH0sU\",\n  }",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Error-Response:",          "content": "{\n      \"status\": \"error\",\n      \"code\": 400,\n      \"message\": \"用户名或密码错误\"\n }",          "type": "json"        }      ]    },    "filename": "app/Http/controllers/Api/AuthenticateController.php",    "groupTitle": "Auth",    "name": "PostV1Login"  },  {    "type": "post",    "url": "/v1/logout",    "title": "app退出登录",    "group": "Auth",    "permission": [      {        "name": "none"      }    ],    "header": {      "examples": [        {          "title": "Header-Example:",          "content": "{\n   \"Authorization\" : \"Bearer {token}\"\n}",          "type": "json"        }      ]    },    "version": "0.0.0",    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "{\n      \"status\": \"success\",\n      \"code\": 200,\n      \"message\": \"退出登录成功\",\n  }",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Error-Response:",          "content": "{\n      \"error\": \"token_invalid\"\n }",          "type": "json"        }      ]    },    "filename": "app/Http/controllers/Api/AuthenticateController.php",    "groupTitle": "Auth",    "name": "PostV1Logout"  },  {    "type": "post",    "url": "/v1/register",    "title": "app注册",    "group": "Auth",    "permission": [      {        "name": "none"      }    ],    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "mobile",            "description": "<p>用户的手机号</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "verifyCode",            "description": "<p>请求的验证码</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "password",            "description": "<p>用户的密码</p>"          }        ]      }    },    "version": "0.0.0",    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "{\n      \"status\": \"success\",\n      \"code\": 200,\n      \"token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjQsImlzcyI6Imh0dHA6XC9cL2xpZmVyZWNvZGVyLmRldlwvYXBpXC92MVwvbG9naW4uanNvbiIsImlhdCI6MTQ5MzY0NTgyMCwiZXhwIjoxNDkzNjQ5NDIwLCJuYmYiOjE0OTM2NDU4MjAsImp0aSI6Ijc5VGxIYzNubVVGMkJmczMifQ.usSRe47EgnIqgZ2UXAFb2RdF-u1N6Kn9ATRpWHDH0sU\",\n  }",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Error-Response:",          "content": "{\n      \"status\": \"error\",\n      \"code\": 400,\n      \"message\": \"用户名已经存在\"\n }",          "type": "json"        }      ]    },    "filename": "app/Http/controllers/Api/AuthenticateController.php",    "groupTitle": "Auth",    "name": "PostV1Register"  },  {    "type": "post",    "url": "/v1/seedCode",    "title": "获取手机验证码",    "description": "<p>获取手机的验证码，以便用于注册，验证等操作</p>",    "group": "Auth",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "mobile",            "description": "<p>用户用于获取验证码的手机号</p>"          }        ]      }    },    "version": "0.0.0",    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "{\n    \"status\": \"success\",\n    \"code\": 200,\n    \"message\": \"验证码发送成功\"\n }",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Error-Response:",          "content": "{\n     \"status\": \"error\",\n     \"code\": 400,\n     \"error\": {\n         \"message\": \"请求错误,请确认手机号是否有误\"\n     }\n }",          "type": "json"        }      ]    },    "filename": "app/Http/controllers/Api/AuthenticateController.php",    "groupTitle": "Auth",    "name": "PostV1Seedcode"  },  {    "type": "delete",    "url": "/v1/comments/:id",    "title": "删除评论",    "group": "Comment",    "header": {      "examples": [        {          "title": "Header-Example:",          "content": "{\n   \"Authorization\" : \"Bearer {token}\"\n}",          "type": "json"        }      ]    },    "permission": [      {        "name": "none"      }    ],    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "int",            "optional": false,            "field": "id",            "description": "<p>要删除评论的id</p>"          }        ]      }    },    "version": "0.0.0",    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "{\n  \"status\": \"success\",\n  \"code\": 200,\n  \"message\": \"删除成功\"\n }",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Error-Response:",          "content": "{\n \"status\": \"error\",\n \"code\": 403,\n \"message\": \"没有此权限\"\n}",          "type": "json"        }      ]    },    "filename": "app/Http/controllers/Api/CommentsController.php",    "groupTitle": "Comment",    "name": "DeleteV1CommentsId"  },  {    "type": "get",    "url": "/v1/{galleries}/{gallery}/comments",    "title": "获取单个图片集或文章的所有评论",    "group": "Comment",    "permission": [      {        "name": "none"      }    ],    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "int",            "optional": false,            "field": "gallery",            "description": "<p>图片集的id</p>"          },          {            "group": "Parameter",            "type": "int",            "optional": false,            "field": "galleries",            "description": "<p>传galleries获取图片集评论,传articles获取文章评论</p>"          }        ]      }    },    "version": "0.0.0",    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "{\n  \"status\": \"success\",\n  \"code\": 200,\n  \"data\": [\n         {\n          \"id\": 63,\n          \"body\": \"Qui recusandae voluptatum quia necessitatibus.\",\n          \"create_at\": \"2017-05-06 22:34:30\",\n          \"user\": {\n              \"id\": 86,\n              \"nickname\": \"隋帅\",\n              \"email\": \"adipisci.cum@example.net\",\n              \"avatar\": \"http://lorempixel.com/400/400/?60392\",\n              \"gender\": \"未设置\"\n             }\n         }\n       ],\n      \"pagination\": {\n      \"total\": 120,\n      \"count\": 1,\n      \"per_page\": 1,\n      \"current_page\": 3,\n      \"total_pages\": 120\n      }\n  }",          "type": "json"        }      ]    },    "filename": "app/Http/controllers/Api/CommentsController.php",    "groupTitle": "Comment",    "name": "GetV1GalleriesGalleryComments"  },  {    "type": "post",    "url": "/v1/commentable/{commentable}/comments",    "title": "给时光集或者文章评论",    "group": "Comment",    "header": {      "examples": [        {          "title": "Header-Example:",          "content": "{\n   \"Authorization\" : \"Bearer {token}\"\n}",          "type": "json"        }      ]    },    "permission": [      {        "name": "none"      }    ],    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "int",            "optional": false,            "field": "commentable",            "description": "<p>对应图片集或文章的id</p>"          },          {            "group": "Parameter",            "type": "string",            "optional": false,            "field": "comment_type",            "description": "<p>评论的类型 文章:articles,图片集:galleries</p>"          },          {            "group": "Parameter",            "type": "string",            "optional": false,            "field": "body",            "description": "<p>评论的内容</p>"          }        ]      }    },    "version": "0.0.0",    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "{\n  \"status\": \"success\",\n  \"code\": 200,\n  \"message\": \"添加成功\"\n }",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Error-Response:",          "content": "{\n \"status\": \"error\",\n \"code\": 400,\n \"message\": \"评论类容不能为空\"\n}",          "type": "json"        }      ]    },    "filename": "app/Http/controllers/Api/CommentsController.php",    "groupTitle": "Comment",    "name": "PostV1CommentableCommentableComments"  },  {    "type": "delete",    "url": "/v1/galleries/:id",    "title": "删除时光图片集",    "group": "Gallery",    "header": {      "examples": [        {          "title": "Header-Example:",          "content": "{\n   \"Authorization\" : \"Bearer {token}\"\n}",          "type": "json"        }      ]    },    "permission": [      {        "name": "none"      }    ],    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "int",            "optional": false,            "field": "id",            "description": "<p>要删除时光集的id</p>"          }        ]      }    },    "version": "0.0.0",    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "{\n  \"status\": \"success\",\n  \"code\": 200,\n  \"message\": \"删除成功\"\n }",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Error-Response:",          "content": "{\n \"status\": \"error\",\n \"code\": 403,\n \"message\": \"没有此权限\"\n}",          "type": "json"        }      ]    },    "filename": "app/Http/controllers/Api/GalleriesController.php",    "groupTitle": "Gallery",    "name": "DeleteV1GalleriesId"  },  {    "type": "get",    "url": "/v1/galleries",    "title": "获取所有的图片集",    "group": "Gallery",    "permission": [      {        "name": "none"      }    ],    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "int",            "optional": true,            "field": "limit",            "description": "<p>每页默认返回的数量</p>"          },          {            "group": "Parameter",            "type": "int",            "optional": true,            "field": "page",            "description": "<p>不传默认返回第1页</p>"          }        ]      }    },    "version": "0.0.0",    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "{\n  \"status\": \"success\",\n  \"code\": 200,\n  \"data\": [\n      {\n          \"id\": 63,\n          \"title\": \"Qui recusandae voluptatum quia necessitatibus.\",\n          \"content\": \"Et rem provident est quaerat in voluptatem.\",\n          \"user\": {\n              \"id\": 86,\n              \"nickname\": \"隋帅\",\n              \"email\": \"adipisci.cum@example.net\",\n              \"avatar\": \"http://lorempixel.com/400/400/?60392\",\n              \"gender\": \"未设置\"\n          },\n          \"photos\": [\n          {\n              \"id\": 86,\n              \"name\": \"戴斌\",\n              \"path\": \"http://lorempixel.com/640/480/?93717\",\n              \"thumbnail_path\": \"http://lorempixel.com/400/400/?33995\",\n              \"description\": \"Rerum autem non eum aspernatur fugiat quasi qui.\"\n          }\n          ]\n      }],\n      \"pagination\": {\n      \"total\": 120,\n      \"count\": 1,\n      \"per_page\": 1,\n      \"current_page\": 3,\n      \"total_pages\": 120\n      }\n  }",          "type": "json"        }      ]    },    "filename": "app/Http/controllers/Api/GalleriesController.php",    "groupTitle": "Gallery",    "name": "GetV1Galleries"  },  {    "type": "get",    "url": "/v1/galleries/:id",    "title": "获取单个图片集",    "group": "Gallery",    "permission": [      {        "name": "none"      }    ],    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "int",            "optional": false,            "field": "id",            "description": "<p>所获取图片集的id</p>"          }        ]      }    },    "version": "0.0.0",    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "{\n  \"status\": \"success\",\n  \"code\": 200,\n  \"data\":\n      {\n          \"id\": 63,\n          \"title\": \"Qui recusandae voluptatum quia necessitatibus.\",\n          \"content\": \"Et rem provident est quaerat in voluptatem.\",\n          \"user\": {\n              \"id\": 86,\n              \"nickname\": \"隋帅\",\n              \"email\": \"adipisci.cum@example.net\",\n              \"avatar\": \"http://lorempixel.com/400/400/?60392\",\n              \"gender\": \"未设置\"\n          },\n          \"photos\": [\n          {\n              \"id\": 86,\n              \"name\": \"戴斌\",\n              \"path\": \"http://lorempixel.com/640/480/?93717\",\n              \"thumbnail_path\": \"http://lorempixel.com/400/400/?33995\",\n              \"description\": \"Rerum autem non eum aspernatur fugiat quasi qui.\"\n          }\n          ]\n      },\n\n  }",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Error-Response:",          "content": "{\n \"status\": \"error\",\n \"code\": 404,\n \"message\": \"没有找到该记录\"\n}",          "type": "json"        }      ]    },    "filename": "app/Http/controllers/Api/GalleriesController.php",    "groupTitle": "Gallery",    "name": "GetV1GalleriesId"  },  {    "type": "post",    "url": "/v1/galleries",    "title": "建立时光图片集",    "group": "Gallery",    "header": {      "examples": [        {          "title": "Header-Example:",          "content": "{\n   \"Authorization\" : \"Bearer {token}\"\n}",          "type": "json"        }      ]    },    "permission": [      {        "name": "none"      }    ],    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "title",            "description": "<p>时光集的标题</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "content",            "description": "<p>时光集的内容</p>"          },          {            "group": "Parameter",            "type": "int",            "optional": true,            "field": "mood_id",            "description": "<p>时光集的心情</p>"          }        ]      }    },    "version": "0.0.0",    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "{\n  \"status\": \"success\",\n  \"code\": 200,\n  \"message\": \"添加成功\"\n }",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Error-Response:",          "content": "{\n \"status\": \"error\",\n \"code\": 400,\n \"message\": \"标题不能为空\"\n}",          "type": "json"        }      ]    },    "filename": "app/Http/controllers/Api/GalleriesController.php",    "groupTitle": "Gallery",    "name": "PostV1Galleries"  },  {    "type": "post",    "url": "/v1/galleries/:id/photos",    "title": "在时光集添加照片",    "group": "Gallery",    "header": {      "examples": [        {          "title": "Header-Example:",          "content": "{\n   \"Authorization\" : \"Bearer {token}\"\n}",          "type": "json"        }      ]    },    "permission": [      {        "name": "form-data"      }    ],    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "photo",            "description": "<p>时光集的照片</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "description",            "description": "<p>照片的描述</p>"          }        ]      }    },    "version": "0.0.0",    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "{\n  \"status\": \"success\",\n  \"code\": 200,\n  \"message\": \"添加成功\"\n }",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Error-Response:",          "content": "{\n \"status\": \"error\",\n \"code\": 400,\n \"message\": \"上传图片不能为空\"\n}",          "type": "json"        }      ]    },    "filename": "app/Http/controllers/Api/PhotosController.php",    "groupTitle": "Gallery",    "name": "PostV1GalleriesIdPhotos"  },  {    "type": "put",    "url": "/v1/galleries/:id",    "title": "更新时光图片集",    "group": "Gallery",    "header": {      "examples": [        {          "title": "Header-Example:",          "content": "{\n   \"Authorization\" : \"Bearer {token}\"\n}",          "type": "json"        }      ]    },    "permission": [      {        "name": "none"      }    ],    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "title",            "description": "<p>时光集的标题</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "content",            "description": "<p>时光集的内容</p>"          },          {            "group": "Parameter",            "type": "int",            "optional": true,            "field": "mood_id",            "description": "<p>时光集的心情</p>"          }        ]      }    },    "version": "0.0.0",    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "{\n  \"status\": \"success\",\n  \"code\": 200,\n  \"message\": \"修改成功\"\n }",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Error-Response:",          "content": "{\n \"status\": \"error\",\n \"code\": 403,\n \"message\": \"没有此权限\"\n}",          "type": "json"        }      ]    },    "filename": "app/Http/controllers/Api/GalleriesController.php",    "groupTitle": "Gallery",    "name": "PutV1GalleriesId"  },  {    "type": "delete",    "url": "/v1/photos/:id",    "title": "删除照片",    "group": "Photo",    "header": {      "examples": [        {          "title": "Header-Example:",          "content": "{\n   \"Authorization\" : \"Bearer {token}\"\n}",          "type": "json"        }      ]    },    "permission": [      {        "name": "只能删除用户自己图集的照片"      }    ],    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "int",            "optional": false,            "field": "id",            "description": "<p>要删除照片的id</p>"          }        ]      }    },    "version": "0.0.0",    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "{\n  \"status\": \"success\",\n  \"code\": 200,\n  \"message\": \"删除成功\"\n }",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Error-Response:",          "content": "{\n \"status\": \"error\",\n \"code\": 400,\n \"message\": \"没有找到改图片\"\n}",          "type": "json"        }      ]    },    "filename": "app/Http/controllers/Api/PhotosController.php",    "groupTitle": "Photo",    "name": "DeleteV1PhotosId"  },  {    "type": "put",    "url": "/v1/photos/:id",    "title": "更新照片和描述信息",    "group": "Photo",    "header": {      "examples": [        {          "title": "Header-Example:",          "content": "{\n   \"Authorization\" : \"Bearer {token}\"\n}",          "type": "json"        }      ]    },    "permission": [      {        "name": "form-data  [?_method=put]  无法上传的话在url影藏域添加此参数"      }    ],    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "photo",            "description": "<p>时光集的照片</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "description",            "description": "<p>照片的描述</p>"          }        ]      }    },    "version": "0.0.0",    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "{\n  \"status\": \"success\",\n  \"code\": 200,\n  \"message\": \"修改成功\"\n }",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Error-Response:",          "content": "{\n \"status\": \"error\",\n \"code\": 400,\n \"message\": \"上传文件必须为图片格式\"\n}",          "type": "json"        }      ]    },    "filename": "app/Http/controllers/Api/PhotosController.php",    "groupTitle": "Photo",    "name": "PutV1PhotosId"  }] });
