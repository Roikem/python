import json
a=[]
with open('actvatom.txt','r') as rfile:
    for i in rfile:
        a.append(i[:-1])
s=json.dumps(a)
with open('a.json','w') as wfile:
    wfile.write(s)