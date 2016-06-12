// var toAppend = "";
var body = $('body');
var stories = $('.stories');
var select = $('select');
var loader = $('.loading');

$(document).ready(function(){

	select.change(function (event) {
		event.preventDefault();
		
		var selected = $(this).val();
		loader.show();
		stories.empty();
		body.addClass('active');

		$.ajax({
			method: 'GET',
			dataType: 'json',
			url: 'http://api.nytimes.com/svc/topstories/v1/' + selected + '.json?api-key=dde880b0bd965a351e347015fec95a43:3:75124077'
		})

		.done(function(data){   
			if (data.results.length === 0) {
				stories.append('<p>Sorry, no story found...</p>');
			} else {

				//Filter out Data without Img arrays in Multimedia 
				var nytData = data.results;
				var newYorkTimes = nytData.filter(function (item) {
					return item.multimedia.length;
				//return first 12 stories
				}).splice(0, 12);

				// Append each (value.abstract) story into HTML5 with a href url leading to the story page (value.url)
				newYorkTimes.forEach(function(item, index){
					stories.append('<li class= "content-' + index + '"> <a class="text" href="' + item.url + '" target="_blank"><p class="abstract-text"> ' + item.abstract + 
					'</p></a> </li>');

					// Nesting Image into Content div
					img = item.multimedia[4];
					$('.content-' + index).css("background-image", "url(\"" + img.url + "\")");
				});
			}

		})

		.always(function(){
				loader.hide();
		});

	});

});
