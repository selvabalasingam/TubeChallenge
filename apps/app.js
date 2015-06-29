// On submit (to get request 'Pixiwoo')
$(function(){
  $('#search-term').submit(function(event){
    event.preventDefault();
    var searchTerm = $('#query').val();
    getRequest(searchTerm);
  });
});

// To get request
function getRequest(searchTerm){
  var params = {
    s: searchTerm,
    r: 'json',
    part:'snippet',
    key: 'AIzaSyBLO_74kbdhUfBOFDlKDEdCGKOlfd71dww'
  	};
  	url = 'https://www.googleapis.com/youtube/v3/search';

  	$.getJSON(url, params, function(data){
    showResults(data.items);
 	});
}

// To show results
function showResults(data.items){
	var html = "";
	$.each(results, function(index,value){
	    html += '<p>' + value.Title + '</p>';
	    console.log(value.Title);
	});
	$('#search-results').html(html);
	}