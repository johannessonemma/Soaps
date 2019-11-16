function searchFor() {

   let word = document.getElementById("searchWord").value;

   highlightSearchResult(word);
}

function highlightSearchResult(word) {

    $('.col-md-3.shop_box .description').each(function() {
        if($(this).text().match(word)) {
            // let regex = new RegExp('.', 'g');
            // let cleanString = $(this).text().replace(/./gi, "");
            // console.log(cleanString)

            let words =  $(this).text().split(' ');

            words = words.map(function(item) { return item === word ? "<span style='background-color:  yellow '>" + word + '</span>' : item });
            const new_words = words.join(' ');
            $(this).html(new_words);
        }
        else {
            $(this).closest('.shop_box').css("display", "none"); 
        }
    });
}