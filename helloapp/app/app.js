/// <reference path="@types/jquery/index.d.ts" />
// $(document).ready(() => {
//     $("#content").html("<h1>Привет мир</h1>");
// });
// $(() => {
//     $("#content").html("<h1>Привет мир</h1>");
// });
$(function () {
    $("#alertBtn").click(function (e) { $("#content").html("<h2>Привет мир</h2>"); });
});
