


$(document).ready(function(){
    $("button").click(function(){
        var left_position = $("#test").offset().left - $(document).scrollTop();
		console.log('Left: '+left_position);

		var top_position = $("#test").offset().top - $(document).scrollTop();
		console.log('Right: '+top_position);

		var wid = $('#test').width();
		console.log('width: '+wid);
    });
});