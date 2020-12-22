$(function(){
  
    loaddata(); //Load the saved data
    // function loadData
    function loaddata() {
        $('#data').html(localStorage.mydata);
    }
    $("#sendAll").click(function() {
      // template data
      var name = $('#name').val();
      var story = $('#story').val();
      var data = '<h3>' + name + '</h3>' +
                '<p>' + story + '</p>';         
       localStorage.mydata = data;   
       // convert to html
       $('#data').html(localStorage.mydata);
      // view in console
      console.log(localStorage.mydata);
      // sucess 
      $.jnotify('Save data in local storage', 500);
      return false;
    });

    
  // call local storage plugin
  $('#form').sisyphus({
    customKeyPrefix: 'data_form', //data prefix
    timeout: 10, // in seconds
    onSave: function() {$.jnotify('Data form saved to Local Storage', 1000);},
    onRestore: function() {$.jnotify('Data form restore from Local Storage', 'warning', 1000);}
   });
  

 
});

(function() {
  var	contents = $('iframe').contents(),
		body = contents.find('body'),
		styleTag = $('<style></style>').appendTo(contents.find('head'));

	$('textarea').keyup(function() {
		var $this = $(this);
		if ( $this.attr('id') === 'html') {
			body.html( $this.val() );
		} else {
			// it had to be css
			styleTag.text( $this.val() );
		}
	});
      return false;



})();


(function() {
	var video = $('.video-click'),
		audio = $('.audio-click'),
		photo = $('.photo-click'),
                reload = $('.reload-click');

	video.click(function(){
        $('#story').html('<video width="100%" height="240" controls="controls">' +
  '<source src="https://dl.dropbox.com/u/23834858/videos/urquiola.mp4" type="video/mp4" />' +
    '<source src="movie.ogg" type="video/ogg" />'+
      'Only for crome sorry'+
'</video>'+
  '<!-- type something for run -->');
      $('#css').html(
        'video{\n\ background: ;\n\ border: ;\n\ border-radius: ;\n\ box-swadow: ; \n\}');
	});

	audio.click(function(){
      
		  $('#story').html(
'<audio controls="controls">\n\
  <source src="horse.ogg" type="audio/ogg" />\n\
  <source src="http://myinstants.com/media/sounds/psy-gangnam-style-1.mp3" type="audio/mp3" />\n\
  Only for crome sorry.\n\
</audio>\n\
 <!-- type something for run -->');
        $('#css').html(
          'audio{\n\ background: ;\n\ border: ;\n\ border-radius: ;\n\ box-swadow: ; \n\}');

	});

	photo.click(function(){
		 $('#story').html('<img src="https://dl.dropbox.com/u/23834858/fotos/1912.%20Plano%20Biblioteca%20Nacional.jpg" width="100%" height="300px"/>\n\ <!-- type something for run -->');
        $('#css').html(
          'img{\n\ background: ;\n\ border: ;\n\ border-radius: ;\n\ box-swadow: ; \n\}');
	}); 
       
       reload.click(function(){
          window.location.reload()
       });
})();