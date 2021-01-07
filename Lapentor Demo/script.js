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
      // save to storage
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
			styleTag.text( $this.val() );
		}
	});
      return false;



})();

