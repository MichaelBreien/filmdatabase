query_params=get_query_string_parameters();

function searchMovies(e) {

	//sjekker gjennom filmene i object.js
	for (var movie in movies_object){

		//Lager en liste av filmene i object.js
		var film = movies_object[movie];
		//sjekker tittel på filmene funnet
		var filmnavn = film["otitle"];
        list_element = document.getElementById("res_list");
		//sammenligner input med Arrayen og printer film til konsollen
		if(filmnavn.toLowerCase().includes(query_params.film_title.toLowerCase())) {
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
	} 
}

searchMovies();