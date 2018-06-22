$(document).ready(function(){
    $("#searchBtn").on("click", function(){

        $.ajax({
            url: "https://api.nytimes.com/svc/search/v2/articlesearch.json?apikey=a6b6df30f4c540eda9db5f2a9a2324de",
            method: "GET"
        }).then(function(response) {

        console.log(response.copyright);

        });
    });

    $("#clearBtn").on("click", function(){

    });
});
