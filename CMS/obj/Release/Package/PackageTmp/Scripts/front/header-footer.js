/*Nút tìm kiếm trên di động*/
$("#button-search").click(function () {
    console.log($("#search-box").is(":visible"));
    if (!$("#search-box").is(":visible")) {
        $("#search-box").slideToggle("medium");
        $("#dl-menu").css("border-bottom", "none");
    } else {
        $("#search-box").slideToggle("medium");
        //$("#search-box").css("display", "none");
        $("#dl-menu").css("border-bottom", "solid 2px rgb(12, 123, 7)");
    }
});

$(document).click(function (e) {
    if (!$(e.target).hasClass("search-btn") && !$(e.target).hasClass("search-box")) {
        $("#search-box").slideUp("Medium");
        $("#dl-menu").css("border-bottom", "solid 2px rgb(12, 123, 7)");
    }
});