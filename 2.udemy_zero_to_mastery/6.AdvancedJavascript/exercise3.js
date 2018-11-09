function writeSomething(genre){
	var writing;
	switch (genre){
		case "fantasy":
		writing = "YA novel"
		break;
	}
	switch (genre){
		case "comedy":
		writing = "web comic"
		break;
	}
	switch (genre){
		case "romance":
		writing = "e-book"
		break;
	}
	switch (genre){
		case "fiction":
		writing = "adult"
		break;
	}
	return writing;
}