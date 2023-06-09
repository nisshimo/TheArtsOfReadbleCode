import datetime
import re
from urllib import request


class Business:
    pass


business = Business()
business.name = request.POST["name"]
url_path_name = business.name.lower()
url_path_name = re.sub(r"['\.]", "", url_path_name)
url_path_name = re.sub(r"[^a-z0-9]+", "-", url_path_name)
url_path_name = url_path_name.strip("-")
business.url = "/biz/" + url_path_name
business.date_created = datetime.datetime.utcnow()
business.save_to_database()
