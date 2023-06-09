const formatPretty = (obj, indent = "") => {
  // Handle null, undefined, strings, and non-objects. if (obj === null) return "null";
  if (obj === undefined) return "undefined";
  if (typeof obj === "string") return '"' + obj + '"'; if (typeof obj !== "object") return String(obj);
          if (indent === undefined) indent = "";
          // Handle (non-null) objects.
          var str = "{\n";
          for (var key in obj) {
              str += indent + "  " + key + " = ";
  str += formatPretty(obj[key], indent + " ") + "\n"; }
          return str + indent + "}";
      };

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