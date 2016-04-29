// append the stories if we found any

if ( nytData.length !== 0) {

	// make sure we only get populate the grid with 12 storie WITH photos

	nytData = nytData

		.filter(function(item){
			return item.multimedia.length;
		}).splice(0, 12);


}
http://api.nytimes.com/svc/topstories/v1/" + l + ".json?api-key=078610dfa1e38d3520b43e5169de5ee8:1:74798438
http://api.nytimes.com/svc/topstories/v1/world.json?api-key=dde880b0bd965a351e347015fec95a43:3:75124077
dde880b0bd965a351e347015fec95a43:3:75124077
9e5aed03daa3d0eec2d74bdeccd948ed:6:75124077
9e5aed03daa3d0eec2d74bdeccd948ed:6:75124077
http://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=9e5aed03daa3d0eec2d74bdeccd948ed%3A6%3A75124077

http://api.nytimes.com/svc/topstories/v1/world..json?api-key=