const express = require("express");
const router = express.Router();
const app = express();
const template = require("../lib/template.js");

router.get("/", function (req, res) {
  let title = "Welcome";
  let description = "깃허브 README.me 생성기에 방문해주셔서 감사합니다!";
  let script = `
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script type="text/javascript">

  $(document).ready(function(){

    $("#data").keyup(function(){

      $("#out").text($("#data").val());
    });

  });
  </script>`;

  var html = template.HTML(
    title,
    `
      <h2 href="/">${title}</h2>${description}
      `,
    script
  );
  res.send(html);
});

module.exports = router;
