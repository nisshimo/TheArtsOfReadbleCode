import base64
import json
from ssl import _Cipher

PRIVATE_KEY = ""
INIT_VECTOR= []
ENCODE = ""

user_info = {"username": "...", "password": "..."}
user_str = json.dumps(user_info)
cipher = _Cipher(
    "aes_128_cbc",
    key=PRIVATE_KEY,
    init_vector=INIT_VECTOR,
    op=ENCODE
)
encrypted_bytes = cipher.update(user_str)
encrypted_bytes += cipher.final()  # flush out the current 128 bit block
url = "http://example.com/?user_info=" + \
    base64.urlsafe_b64encode(encrypted_bytes)
