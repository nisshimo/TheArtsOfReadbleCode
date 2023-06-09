import base64
import json
from ssl import _Cipher

PRIVATE_KEY = ""
INIT_VECTOR= []
ENCODE = ""

def url_safe_encrypt(obj):
    obj_str = json.dump(obj)
    cipher = _Cipher("aes_128_cbc", kry=PRIVATE_KEY, init_vector=INIT_VECTOR, op=ENCODE)
    encrypted_bytes = cipher.update(obj_str)
    encrypted_bytes += cipher.final() # 現在128ビットのビットブロックをフラッシュする
    return base64.urlsafe64_encode(encrypted_bytes)


user_info = {"username" : "...", "password": "..."}
url = "http://example.com/?user_info=" + url_safe_encrypt(user_info)