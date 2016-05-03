// var toAppend = "";
var body = $('body');


$(document).ready(function(){

	
	$('select').change(function (event) {
	  event.preventDefault();
	  var selected = $(this).val();
$('.loading').show();
	  $('.stories').empty();
	  console.log(selected);

	  body.addClass('active');

	
	  $.ajax({
	    method: 'GET',
	    dataType: 'json',
	    url: 'http://api.nytimes.com/svc/topstories/v1/' + selected + '.json?api-key=dde880b0bd965a351e347015fec95a43:3:75124077'
	  })

	  .done(function(data){   
        if (data.results.length === 0) {
        	$('.stories').append('<p>Sorry, no story found...</p>');
        } else {


	        //Filter out Data without Img arrays in Multimedia 
			var nytData = data.results;
			var newYorkTimes = nytData.filter(function (item) {
				return item.multimedia.length;
	        //return first 12 stories
			}).splice(0, 12);

			// Append each (value.abstract) story into HTML5 with a href url leading to the story page (value.url)
			newYorkTimes.forEach(function(item, index){
				$('.stories').append('<li class= "content-' + index + '"> <a class="text" href="' + item.url + '"><p class="abstract-text"> ' + item.abstract + 
				'</p></a> </li>');
	        
			// Nesting Image into Content div

	        img = item.multimedia[4];
			$('.content-' + index).css("background-image", "url('" + img.url + "')");      

	        });

		}
	 
	  })

	  .always(function(){
	  		$('.loading').hide();
	  });
	  
	});


});








// // append the stories if we found any

// if ( nytData.length !== 0) {

// 	// make sure we only get populate the grid with 12 storie WITH photos

// 	nytData = nytData

// 		.filter(function(item){
// 			return item.multimedia.length;
// 		}).splice(0, 12);


// }
// http://api.nytimes.com/svc/topstories/v1/" + l + ".json?api-key=078610dfa1e38d3520b43e5169de5ee8:1:74798438
// http://api.nytimes.com/svc/topstories/v1/world.json?api-key=dde880b0bd965a351e347015fec95a43:3:75124077
// dde880b0bd965a351e347015fec95a43:3:75124077
// 9e5aed03daa3d0eec2d74bdeccd948ed:6:75124077
// 9e5aed03daa3d0eec2d74bdeccd948ed:6:75124077
// http://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=9e5aed03daa3d0eec2d74bdeccd948ed%3A6%3A75124077

// http://api.nytimes.com/svc/topstories/v1/world..json?api-key=