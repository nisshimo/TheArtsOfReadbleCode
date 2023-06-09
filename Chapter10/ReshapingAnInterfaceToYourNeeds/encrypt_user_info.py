import base64
import json
from ssl import _Cipher

PRIVATE_KEY = ""
INIT_VECTOR= []
ENCODE = ""


def url_safe_encrypt_obj(obj):
    obj_str = json.dumps(obj)
    return url_safe_encrypt_str(obj_str)


def url_safe_encrypt_str(data):
    encrypted_bytes = encrypt(data)
    return base64.urlsafe_b64encode(encrypted_bytes)


def encrypt(data):
    cipher = make_cipher()
    encrypted_bytes = cipher.update(data)
    # flush out any remaining bytes return encrypted_bytes
    encrypted_bytes += cipher.final()


def make_cipher():
    return _Cipher("aes_128_cbc", key=PRIVATE_KEY, init_vector=INIT_VECTOR, op=ENCODE)

user_info = {"username" : "...", "password": "..."}
url = "http://example.com/?user_info=" + url_safe_encrypt(user_info)