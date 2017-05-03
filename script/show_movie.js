window.onload = function() {
    query_params = get_query_string_parameters();
    if (!query_params.id) {
        panic("No id given");
        return;
    }
    
    // get the movie_object from the "database" movies_object
    movie_object = movies_object[query_params.id];
    if (!movie_object) {
	panic("Could not retrieve movie_object!");
	return;
    }

    // get the genre info (if it exists)
    genre_object = genres_object[query_params.id];
    // get the review info (if it exists)
    review_object = reviews_object[query_params.id];
    
    var genre_element = document.getElementById("genre");
    var i = 0;
    for(key in genre_object){
        genre_element.innerHTML += genre_object[i] + " ";
        i++;
    }
    
    // render page
    var title_element = document.getElementById("otitle");
    // title_element.appendChild(document.createTextNode(movie_object["otitle"]));    
    title_element.innerHTML = movie_object["otitle"];

    // henter filmens beskrivelse
    var description_element = document.getElementById("description");
    description_element.innerHTML = movie_object["description"];

    // henter ut skuespillere
    var folk_element = document.getElementById("folk");
    folk_element.innerHTML = movie_object["folk"];

    // henter ut utgivelsesår
    var year_element = document.getElementById("year");
    year_element.innerHTML = movie_object["year"];

    // henter ut regissør
  var dir_element = document.getElementById("dir");
    dir_element.innerHTML = movie_object["dir"];

    //henter ut utgivelsesland
      var country_element = document.getElementById("country");
    country_element.innerHTML = movie_object["country"];

    //henter ut filmens lengde
      var length_element = document.getElementById("length");
    length_element.innerHTML = movie_object["length"];

    var firstNumber = 0;
    if (query_params.id >999) {
        firstNumber = String(query_params.id).charAt(0);
    }

    var trailer = movie_object["youtube trailer id"]

    if(trailer) {
        var trailer_element = document.getElementById("youtube trailer id");
        var youtube = "https://www.youtube.com/embed/";
        trailer_element.src = youtube + trailer;
    }
   
   document.getElementById("poster").src = "https://nelson.uib.no/o/" + firstNumber + "/" + query_params.id + ".jpg";


    var review_list = document.getElementById("review_list");
    var snitt = document.getElementById("snitt");
    snitt.innerHTML = review(query_params.id) + "/5";

    for(var a in review_object){
    
    var reviews = review_object[a];
    var rating = reviews["rating"]
    var kommentar = reviews["comment"]
    var dato = reviews["mod_date"]
    var brukernavn = reviews["username"]
    var p = document.createElement("p");
    p.innerHTML=  "<br />" + "Brukernavn: " + brukernavn + "<br />" + " Rating:" + " " + rating + "<br /> " + " Dato: " + dato  + "<br /> " + " Kommentar: " + " " + kommentar
    review_list.appendChild(p);

};

function review(id){
  var theReviews = 0;
  var reviewTotal = 0;
  review_object = reviews_object[id];
  //Sjekker om det finnes noen rating, returner 0 hvis ikke.
  if(review_object == null){
    return 0;
}
  for(var a in review_object){
    var reviews = review_object[a];
    var rating = reviews["rating"];
     
    theReviews++;
    reviewTotal += rating;
}
 var svar = reviewTotal/theReviews;
 return svar.toFixed(1);
}
}
