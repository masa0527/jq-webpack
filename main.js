import $ from "jquery";
import moment from "moment";

$(() => {
    let $msg = $("#msg");
    let $btn = $('#btn');
    $btn.one('click', () => {
        $msg.fadeOut("slow", () => {
            $msg.text("(°ε°((⊂(`ω´∩)ﾄﾞｶｯ " +
                moment().format("YYYY-MM-DD HH:mm:ss"))
                .css("color", "#03a9f4")
                .fadeIn("slow");
        });
    });
});