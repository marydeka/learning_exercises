//array called movies and inside array there are movie objects
//title: string, haswatched: boolean, rating: number
//loop through and print

var movies = [
	{
		title: "The Greatest Showman",
		rating: 5,
		hasWatched: true
	},
	{
		title: "Moscow Does Not Believe in Tears",
		rating: 2,
		hasWatched: true
	},
	{
		title: "Que Tan Lejos",
		rating: 4,
		hasWatched: false
	},
	{
		title: "Like Water For Chocolate",
		rating: 3,
		hasWatched: false
	}
]

	movies.forEach(function(movie){
		var result = "You have ";
		if(movie.hasWatched){
			result += "watched ";
		} else {
			result =+ "not seen ";
		}
		result += "\"" + movie.title + "\" - ";
		result += movie.rating + " stars";
		console.log(result)
	})

	//why is the result showing NaN for the movies that haven't been watched?
	//You have watched "The Greatest Showman" - 5 stars
	//You have watched "Moscow Does Not Believe in Tears" - 2 stars
	//NaN"Que Tan Lejos" - 4 stars
	//NaN"Like Water For Chocolate" - 3 stars