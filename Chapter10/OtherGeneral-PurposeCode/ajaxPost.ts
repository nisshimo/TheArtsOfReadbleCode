export const ajaxPost = async ({
  url,
  data,
  onSuccess = (responseData) => {
    var str = "{\n";
    for (var key in responseData) {
      str += "  " + key + " = " + responseData[key] + "\n";
    }
    alert(str + "}");
    // Continue handling 'responseData' ...
  },
}) => {
  const responseData = await fetch(url, data);
  onSuccess(data);
};
