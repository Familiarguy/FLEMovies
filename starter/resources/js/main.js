(function( $ ) {
	$.getJSON("data/movies.json", function(data) {
		var moviesDiv = $('div').attr('class', 'movies');

		$.each(data.movies, function(index, movie) {
			var movieElement = $(document.createElement('div'))
				.attr('class', 'movie')
				.attr('id', movie.id)
				.attr('style', 'clear:both')
				.append($(document.createElement('img'))
					.attr('src', movie.posters.detailed)
					.attr('style', 'float:left'))
				.append(movie.synopsis)
				.append($(document.createElement('hr')));

			moviesDiv.append(movieElement);
		});
	});
})( jQuery );
