/* Her kan dere implementere en søkefunksjon. For eksempel:
function search_for_X() {
}
*/

/* Her kan dere implementere en display function som viser resulatetene av søket. For eksempel:
function display_X() {
}
*/

window.onload = function() {
	query_params = get_query_string_parameters();

	search_results = movies_object;
	
	if (query_params.film_title) {
        film_title = document.getElementById("film_title");
		//Her kan dere for eksempel kalle en søkefunksjon som søker for tittel.
    }
	
	if (query_params.actor) {
        actor = document.getElementById("actor");
		
    }
	
	if (query_params.director) {
		director = document.getElementById("director");
		
    }
	
	if (query_params.genre) {
        genre = document.getElementById("genre");
		
    }
	
	if (query_params.country) {
        country = document.getElementById("country");
		
    }
	
	//Her kan dere for eksempel kalle en (display) funksjon som viser søkeresultater 
}