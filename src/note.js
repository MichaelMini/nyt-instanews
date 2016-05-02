$(function() {

	$('.headline').on('change'), function(){
		var selection = $('.headline').val();

		$('.stories').empty();

	// Get the api for NYT
	$.ajax({
		method: 'GET',
		url: 'http://api.nytimes.com/svc/topstories/v1/world.json?api-key=dde880b0bd965a351e347015fec95a43:3:75124077'
	})

	.done(function(data){

			// Cuts off the api to only return 12 stories
			var nytData = data.results;
			nytData = nytData.filter(function (item) {
				// body...
				return item.multimedia.length > 0;
			}).splice(0, 12);

			nytData.forEach(function(item, index){
				// Make story text (value.abstract) into a url leading to the story page (value.url)
				$('.stories').append('div class= "content-' + index + '"> <div class= "text"> <a href="' + item.url + '"> ' + item.abstract + 
				'</a> </div> </div>');

			// Links Image into Content div

			img = item.multimedia[4];
			$('.content-' + index).css("background-image", "url('" + img.url + "')");

			});
		});
	};
});