import socket
import threading
import json
import re


def link_handle(conn, addr):
    print(addr)
    while 1:
        x = conn.recv(100).decode()
        if x == '$9991':
            conn.send(b"$9991")
        else:
            conn.send(b"$9990")
        print(x)
        with open('../../menjinxitong/static/a.json', 'r+')as file:
            json.dump(x, file)


if __name__ == "__main__":
    s = socket.socket()
    hp = ("0.0.0.0", 8080)
    s.bind(hp)
    s.listen(5)
    while True:
        conn, addr = s.accept()
        threading.Thread(target=link_handle, args=(conn, addr)).start()



import socket
import threading
import json
import re


def link_handle(conn, addr):
    print(addr)
    while 1:
        x = conn.recv(100).decode()
        if x == '$9991':
            conn.send(b"$9991")
        else:
            conn.send(b"$9990")
        print(x)
        with open('../../menjinxitong/static/a.json', 'r+')as file:
            json.dump(x, file)


if __name__ == "__main__":
    s = socket.socket()
    hp = ("0.0.0.0", 8080)
    s.bind(hp)
    s.listen(5)
    while True:
        conn, addr = s.accept()
        threading.Thread(target=link_handle, args=(conn, addr)).start()


