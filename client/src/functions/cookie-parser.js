const cookieParser = cookies => {
  if (cookies) {
    return cookies
      .split("; ")
      .map(cookie => cookie.split("="))
      .reduce((acc, cookie) => {
        return Object.assign({}, acc, { [cookie[0]]: cookie[1] });
      }, {});
  } else return {};
};

export default cookieParser;
