//Sjekker om 
function isEmpty(param) {
	if(param === "") {
		return true;
	} else {
		return false;
	}
}


var searchParameters = get_query_string_parameters();

for(movies in movies_object) {
	var found1 = false;
	var found2 = false;
	var found3 = false;
	var found4 = false;
	var found5 = false;

		if(movies_object[movies].otitle) {
			if(movies_object[movies].otitle.includes(searchParameters.film_title) || isEmpty(searchParameters.film_title)) {
				found1 = true;
			}
			
		}
		if(movies_object[movies].folk) {
			if(movies_object[movies].folk.includes(searchParameters.actor) || isEmpty(searchParameters.actor)) {
				found2 = true;
			}
		}
		if(movies_object[movies].dir) {
			if(movies_object[movies].dir.includes(searchParameters.director) || isEmpty(searchParameters.director)) {
				found3 = true;
			}
		
		}
		if(movies_object[movies].country == searchParameters.country|| isEmpty(searchParameters.country)) {
			found4 = true;
		}

		if(movies_object[movies].genre == searchParameters.genre|| isEmpty(searchParameters.genre)) {
			found5 = true;
		}
		if(found1 && found2 && found3 &&found4 && found5) {
			console.log(movies_object[movies]);
			
		}
}
