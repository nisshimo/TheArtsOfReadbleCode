const formatPretty = (obj) => {
  var str = "{\n";
  for (var key in obj) {
      str += "  " + key + " = " + obj[key] + "\n";
  }
  return str + "}";
}

export const ajaxPost = async ({
  url,
  data,
  onSuccess = (responseData) => {
    alert(formatPretty(responseData));
  },
}) => {
  const responseData = await fetch(url, {method: "POST", body: JSON.stringify(data)});
  onSuccess(data);
};