
var cnt = -1;

var faith = {
	'0': 'There is no faith in this country, every body fight with each other and all of the people die.',
	'100': 'People in the country believe in church and priest more than the king, the country is no longer what it was...'
};


var military = {
	'0': 'There are no soldiers in this kingdom, the kingdom lose protection, and it is invaded by cosmos pirate one day, everybody die.',
	'100': 'Military in this kingodm become so strong that they can control people without the king, they kill the king and the kingdom become chaos.'
};

var wealth = {
	'0': 'No current flows in the country anymore, everybody starve to death.',
	'100': 'Most of the money are controled by the merchant, they can easily rule the country by such a great sum of money, they make a revolution and the country turns into chaos'
};

var population = {
	'0': 'The country have no longer any people, all of the people die, including the king',
	'100': 'There are so many people in the kingdom, however, there are not enough food for every people, most of them die of starving and the fights for food.'
};


var endings = {
  faith,
  military,
  wealth,
  population
};


var level = getUrlVars()['level'];
var target = getUrlVars()['target'];


$(document).ready(function() {
  $('div.select').html('<h1>' + endings[target][level] + ' With one country fallen down, the other one ruled the whole cosmos' + '</h1>');
});

  $(document).ready(function(){
      $("a.select").click(function(){
          $("div.select").addClass("animated fadeOut");
          setTimeout(function() {
            $("div.select").removeClass("animated fadeOut");
            $('div.select').addClass('animated fadeIn');
            $('div.select').html('<a href=select.html><h1>' + 'Restart the Game' + '</h1></a>');
          }, 1200);
      });
      
  });





  function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

