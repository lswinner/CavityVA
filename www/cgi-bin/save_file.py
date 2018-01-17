#!/usr/bin/python3
#coding:utf-8

import cgi, os
import cgitb; cgitb.enable()

form = cgi.FieldStorage()

# 获取文件名
fileitem = form['file']
message=""
# 检测文件是否上传
if fileitem.filename:
   # 设置文件路径 
   fn = os.path.basename(fileitem.filename)
   f=open('data/' + fn, 'wb')
   f.write(fileitem.file.read())
   f.close()

   message = '文件 "' + fn + '" 上传成功'
   
else:
   message = '文件没有上传'
   
print(message)