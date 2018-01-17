#coding:utf-8
message="dajiahao"
print ("""\
Content-Type: text/html\n
<html>
<head>
<meta charset="utf-8">
<title></title>
</head>
<body>
   <p>%s</p>
</body>
</html>
""" % (message,))