  var cnt = -1;
  var bgs = ['<h2>In a far galaxy, there are two kindoms, Triralia and Zoash, that rule the galaxy. Triralia and Zoash are on two different planets and are the two most powerful kindoms in the galaxy. Once one of them falls down, the other one will rule the galaxy with absolute power and brings misery and burden to people all over the galaxy.</h2>', '<h2>Triralia is a religion country full of wizards and witches, the king of the country is the Lich Norrix Seros, people from all over the planet pay heavy taxes to Triralia to pray for safety and fortune, Triraila has a strong faith and a abundant national treasury.</h2>', '<h2>Zoash is a military country, just a few people here believe in god or devil, the king of the country is the Paladin Arthurius the Noble. Zoash has a strong military but they are always running out of money since they always spread out there money to help the poor around the planet.</h2>', '<h2>In this game, it is your job to deal with different incidents happen in both countries which will change the proportion of the four characteristics of the country depending on your choice. If one of the characteristics of each country reach 0 or 100, the game is over and people will suffer.</h2>', '<h1>Remember, every move you made matters.</h1>', '<h1>Choose the kingdom you want to start with</h1>'];

  $(document).ready(function(){
      $("a.select").click(function(){
          $("div.select").addClass("animated fadeOut");
          setTimeout(function() {
            $("div.select").removeClass("animated fadeOut");
            $('div.select').addClass('animated fadeIn');
            console.log('bgs' + bgs[cnt]);
            if (cnt == 5) {
              $('div.select').html("<a href='select.html'>" + bgs[cnt] + "</a>");
            }
            else {
              $('div.select').html(bgs[cnt]);
            }
            
            console.log(cnt);
          }, 1200);
          cnt++;
      });
      
  });




