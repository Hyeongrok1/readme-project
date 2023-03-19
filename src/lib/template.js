module.exports = {
  HTML: function (title, body, script) {
    return `
    <!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
      ${body}
      <br/>
      <input id="data"><br/>
      <div id="out"></div>
    </body>
    ${script}
    </html>
    `;
  },
};
