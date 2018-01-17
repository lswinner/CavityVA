- ### 2018-01-17
>访问：
>> - 先运行server.bat打开服务
>> - 浏览器(最好Chrome，别的没试)访问http://localhost:1123
>> - 点击open加载本地csv文件

>www下文件：
>> - cgi-bin暂时没用了，之前是打算先上传csv到指定目录再加载，现在可以直接解析本地文件了
>> - css 样式文件 字体图标库
>> - data 暂时也没什么用了
>> - js javascript文件
>>>> -  ++csv2json 下是解析csv的库
>>>> - ++jquery 
>>>> - ++mol.js 暂时作为本项目的入口吧，具体注释见该文件内
>> - 1.png logo
>> - index.html 主页
>> - layout.png 页面布局
>> - server.bat 简单的开启一个服务。所以本项目还需要python支持，***python3***。不需要其他python库，原生python。