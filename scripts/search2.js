document.addEventListener('DOMContentLoaded', function () {
    var searching = document.getElementById("searchArea").innerHTML;
    searching = searching.toString();
    document.getElementById("search").onclick = function () {
        highlight_word(searching)
    };
}, false);

function highlight_word(searching) {
    var input = document.getElementById("search_products").value;
    if (input) {
        var pattern = new RegExp("(" + input + ")", "gi");
        var new_input = searching.replace(pattern, "<span class='highlight'>" + input + "</span>");
        document.getElementById("searchArea").innerHTML = new_input;
    }
}