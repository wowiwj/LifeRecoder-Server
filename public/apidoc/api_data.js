define({ "api": [  {    "type": "post",    "url": "/v1/login",    "title": "app登录",    "group": "Auth",    "permission": [      {        "name": "none"      }    ],    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "mobile",            "description": "<p>用户的手机号</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "password",            "description": "<p>用户的密码</p>"          }        ]      }    },    "version": "0.0.0",    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "{\n      \"status\": \"success\",\n      \"code\": 200,\n      \"token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjQsImlzcyI6Imh0dHA6XC9cL2xpZmVyZWNvZGVyLmRldlwvYXBpXC92MVwvbG9naW4uanNvbiIsImlhdCI6MTQ5MzY0NTgyMCwiZXhwIjoxNDkzNjQ5NDIwLCJuYmYiOjE0OTM2NDU4MjAsImp0aSI6Ijc5VGxIYzNubVVGMkJmczMifQ.usSRe47EgnIqgZ2UXAFb2RdF-u1N6Kn9ATRpWHDH0sU\",\n  }",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Error-Response:",          "content": "{\n      \"status\": \"error\",\n      \"code\": 400,\n      \"message\": \"用户名或密码错误\"\n }",          "type": "json"        }      ]    },    "filename": "app/Http/controllers/Api/AuthenticateController.php",    "groupTitle": "Auth",    "name": "PostV1Login"  },  {    "type": "post",    "url": "/v1/logout",    "title": "app退出登录",    "group": "Auth",    "permission": [      {        "name": "none"      }    ],    "header": {      "examples": [        {          "title": "Header-Example:",          "content": "{\n   \"Authorization\" : \"Bearer {token}\"\n}",          "type": "json"        }      ]    },    "version": "0.0.0",    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "{\n      \"status\": \"success\",\n      \"code\": 200,\n      \"message\": \"退出登录成功\",\n  }",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Error-Response:",          "content": "{\n      \"error\": \"token_invalid\"\n }",          "type": "json"        }      ]    },    "filename": "app/Http/controllers/Api/AuthenticateController.php",    "groupTitle": "Auth",    "name": "PostV1Logout"  },  {    "type": "post",    "url": "/v1/register",    "title": "app注册",    "group": "Auth",    "permission": [      {        "name": "none"      }    ],    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "mobile",            "description": "<p>用户的手机号</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "verifyCode",            "description": "<p>请求的验证码</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "password",            "description": "<p>用户的密码</p>"          }        ]      }    },    "version": "0.0.0",    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "{\n      \"status\": \"success\",\n      \"code\": 200,\n      \"token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjQsImlzcyI6Imh0dHA6XC9cL2xpZmVyZWNvZGVyLmRldlwvYXBpXC92MVwvbG9naW4uanNvbiIsImlhdCI6MTQ5MzY0NTgyMCwiZXhwIjoxNDkzNjQ5NDIwLCJuYmYiOjE0OTM2NDU4MjAsImp0aSI6Ijc5VGxIYzNubVVGMkJmczMifQ.usSRe47EgnIqgZ2UXAFb2RdF-u1N6Kn9ATRpWHDH0sU\",\n  }",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Error-Response:",          "content": "{\n      \"status\": \"error\",\n      \"code\": 400,\n      \"message\": \"用户名已经存在\"\n }",          "type": "json"        }      ]    },    "filename": "app/Http/controllers/Api/AuthenticateController.php",    "groupTitle": "Auth",    "name": "PostV1Register"  },  {    "type": "post",    "url": "/v1/seedCode",    "title": "获取手机验证码",    "description": "<p>获取手机的验证码，以便用于注册，验证等操作</p>",    "group": "Auth",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "mobile",            "description": "<p>用户用于获取验证码的手机号</p>"          }        ]      }    },    "version": "0.0.0",    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "{\n    \"status\": \"success\",\n    \"code\": 200,\n    \"message\": \"验证码发送成功\"\n }",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Error-Response:",          "content": "{\n     \"status\": \"error\",\n     \"code\": 400,\n     \"error\": {\n         \"message\": \"请求错误,请确认手机号是否有误\"\n     }\n }",          "type": "json"        }      ]    },    "filename": "app/Http/controllers/Api/AuthenticateController.php",    "groupTitle": "Auth",    "name": "PostV1Seedcode"  },  {    "type": "get",    "url": "/v1/galleries",    "title": "获取所有的图片集",    "group": "Gallery",    "permission": [      {        "name": "none"      }    ],    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "limit",            "description": "<p>每页默认返回的数量</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "page",            "description": "<p>不传默认返回第1页</p>"          }        ]      }    },    "version": "0.0.0",    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "{\n  \"status\": \"success\",\n  \"code\": 200,\n  \"data\": [\n      {\n          \"id\": 63,\n          \"title\": \"Qui recusandae voluptatum quia necessitatibus.\",\n          \"content\": \"Et rem provident est quaerat in voluptatem.\",\n          \"user\": {\n              \"id\": 86,\n              \"nickname\": \"隋帅\",\n              \"email\": \"adipisci.cum@example.net\",\n              \"avatar\": \"http://lorempixel.com/400/400/?60392\",\n              \"gender\": \"未设置\"\n          },\n          \"photos\": [\n          {\n              \"id\": 86,\n              \"name\": \"戴斌\",\n              \"path\": \"http://lorempixel.com/640/480/?93717\",\n              \"thumbnail_path\": \"http://lorempixel.com/400/400/?33995\",\n              \"description\": \"Rerum autem non eum aspernatur fugiat quasi qui.\"\n          }\n          ]\n      }],\n      \"pagination\": {\n      \"total\": 120,\n      \"count\": 1,\n      \"per_page\": 1,\n      \"current_page\": 3,\n      \"total_pages\": 120\n      }\n  }",          "type": "json"        }      ]    },    "filename": "app/Http/controllers/Api/GalleriesController.php",    "groupTitle": "Gallery",    "name": "GetV1Galleries"  },  {    "type": "get",    "url": "/v1/gallery/:id",    "title": "获取单个图片集",    "group": "Gallery",    "permission": [      {        "name": "none"      }    ],    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "id",            "description": "<p>所获取图片集的id</p>"          }        ]      }    },    "version": "0.0.0",    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "{\n  \"status\": \"success\",\n  \"code\": 200,\n  \"data\":\n      {\n          \"id\": 63,\n          \"title\": \"Qui recusandae voluptatum quia necessitatibus.\",\n          \"content\": \"Et rem provident est quaerat in voluptatem.\",\n          \"user\": {\n              \"id\": 86,\n              \"nickname\": \"隋帅\",\n              \"email\": \"adipisci.cum@example.net\",\n              \"avatar\": \"http://lorempixel.com/400/400/?60392\",\n              \"gender\": \"未设置\"\n          },\n          \"photos\": [\n          {\n              \"id\": 86,\n              \"name\": \"戴斌\",\n              \"path\": \"http://lorempixel.com/640/480/?93717\",\n              \"thumbnail_path\": \"http://lorempixel.com/400/400/?33995\",\n              \"description\": \"Rerum autem non eum aspernatur fugiat quasi qui.\"\n          }\n          ]\n      },\n\n  }",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Error-Response:",          "content": "{\n \"status\": \"error\",\n \"code\": 200,\n \"message\": \"没有找到该记录\"\n}",          "type": "json"        }      ]    },    "filename": "app/Http/controllers/Api/GalleriesController.php",    "groupTitle": "Gallery",    "name": "GetV1GalleryId"  }] });
