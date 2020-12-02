module.exports = (method, url, headers, body, callback) => {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    const { readyState, status, responseText } = this;

    readyState === 4 && callback(status, responseText);
  };

  xhr.open(method, url);

  for (const key in headers) xhr.setRequestHeader(key, headers[key]);

  xhr.send(body);
};
