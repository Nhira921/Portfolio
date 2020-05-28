"use strict"
{
    $("#en-btn").click(function () {
        $(".lang-ja").removeClass("ja")
        $(".lang-ja").addClass("invisible-ja")
        $(".lang-en").removeClass("invisible-en")
    })
    $("#ja-btn").click(function () {
        $(".lang-en").addClass("invisible-en")
        $(".lang-ja").removeClass("invisible-ja")
        $(".lang-ja").addClass("ja")
    })
}
