query_params=get_query_string_parameters();

function resetSearchResults() {
	resultList.innerHTML = "";
}

function searchMovies(e) {

	//sjekker gjennom filmene i object.js
	for (var movie in movies_object){

		//Lager en liste av filmene i object.js
		var film = movies_object[movie];
		
		//sjekker tittel på filmene funnet
		var filmnavn = film["otitle"];
		var regissør = film["dir"];
		var land = film["country"];
		var skuespiller = film["folk"];
		
        list_element = document.getElementById("res_list");

    function logMovie() {

		console.log(film);
			movie_details = movies_object[movie];
        list_item = document.createElement("LI");

        item_link = document.createElement("A");
        item_link.href = "show_movie.html?id=" + movie;
		link_text = document.createTextNode(movie_details["otitle"]);
        item_link.appendChild(link_text);
	
        list_item.appendChild(item_link);
        list_element.appendChild(list_item); 

}
		//sammenligner input med Arrayen og printer film til konsollen
		if(filmnavn.toLowerCase().includes(query_params.film_title.toLowerCase())) {
			logMovie();	
		} if (regissør.toLowerCase().includes(query_params.film_title.toLowerCase())) {
			logMovie();
		} if (land.toLowerCase().includes(query_params.film_title.toLowerCase())) {
			logMovie();
		} if(film.folk) {
			if(skuespiller.toLowerCase().includes(query_params.film_title.toLowerCase())) {
				logMovie();
			}
		} else if(query_params.film_title==="") {
			resetSearchResults();
		}
		
	} 
}

searchMovies();