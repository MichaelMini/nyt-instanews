var $flex = $('.flex');
var toAppend = "";

$(document).ready(function(){

	
	$('select').change(function (event) {
	  event.preventDefault();
	  var $selected = $(this).val();
	  // $('.stories')empty();
	  $('.flex').empty();
	  console.log($selected);

	
	  $.ajax({
	    method: 'GET',
	    dataType: 'json',
	    url: 'http://api.nytimes.com/svc/topstories/v1/world.json?api-key=dde880b0bd965a351e347015fec95a43:3:75124077'
	  })

	  .done(function(data){    
	              // Test start
	        // Cuts off the api to only return 12 stories
			var nytData = data.results;
			nytData = nytData.filter(function (item) {
				// body...
				return item.multimedia.length > 0;
			}).splice(0, 12);

			nytData.forEach(function(item, index){
				// Make story text (value.abstract) into a url leading to the story page (value.url)
				$('.stories').append('<div class= "content-' + index + '"> <div class= "text"> <a href="' + item.url + '"> ' + item.abstract + 
				'</a> </div> </div>');
	        
			// Links Image into Content div

	        img = item.multimedia[4];
			$('.content-' + index).css("background-image", "url('" + img.url + "')");      
	        // $.each(data.results, function(index, value){
	        //   var arr = value.multimedia;
	        //   $(value.multimedia[4]).filter(function(index,value){
	        //         return arr.length!==0;
	        //       });
	          
	//           arr = $.filter(arr, function( index, value) {
	//   return ( 0!==value.multimedia.length );
	// });
	          console.log(this);
	          // return value.multimedia[1];
	              // Test end
	      toAppend += '<li class=\'flex-item\'><p>' + value.abstract + '</P></li>';
	          
	          // console.log(value.abstract);
	          // console.log(value.multimedia[4].url);
	          // console.log(data.results[].abstract);
	          
	        });
	    // console.log(toAppend);
	    $('.flex').append(toAppend);
	    $('.flex-item')
	    .css('background-image', 'url(https://static01.nyt.com/images/2016/05/01/world/ALEPPO1/ALEPPO1-mediumThreeByTwo210.jpg)')
	    .css('background-repeat', 'no-repeat')
	    .css('background-position', 'top center')
	    .css('background-size', '600px 300px')
	    .css('height', '300px');
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