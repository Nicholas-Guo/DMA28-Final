var X_AXIS = 1;
var Y_AXIS = 2;
var right_c1;
var right_c2;
var left_c1;
var left_c2;

var positions = [];

var choice = getUrlVars()['choice'];

var icons = [];
var x_pos;
var y_pos;
var icon_size;

var data = "This is a sentence!";
var data2 = "This is a second sentence";


var characters = {};

var level = [70, 40, 30, 80, 40, 70, 70, 40];
var multiplexer = 1;
var new_print = true;

var finish_printing = true;
var typewritter;
var last_print;

// var gameover_plot = new Node('game_over','Game over, thank you for playing our games!','Merchant Chen','t',true);

var t_plot1 = new Node('t_p1', 'My lord, some of our population is starving at the north side of our kingdom, what should we do?', 'Demon Steward', 't', true);
var t_plot1_left = new Node('Give them some food.', 'Give them some food, I don\'t want to use these small bones for my magic, I want strong bones!', 'Norrix Seros', 't',0,5,-5,10,-15,0,0,0,0);
var t_plot1_right = new Node('Let them die and make them soldiers', 'Let them die, I need some bones for my undead magic, don\'t give them anything, I will collect their bones soon.', 'Norrix Seros', 't',0,-10,10,-10,5,0,0,0);

var z_plot1 = new Node('z_p1', 'My dear Paladin, there is some priest outside the castle who want to build some churches in our country... ', 'Commandar Sehotos', 'z', true);
var z_plot1_left = new Node('Let the priests in', 'Welcome to my country, my honorable guests, here is the money for the church, I hope you can use the power of faith to strengthen the military.', 'Paladin Arthurius the Noble', 'z',0,0,0,0,-10,0,5,10);
var z_plot1_right = new Node('Send the priests out of the country', 'My soldiers are undefeatable, they don\'t need to believe in any stupid gods or goddesses, let those priests out, they come here for money.', 'Paladin Arthurius the Noble', 'z',0,0,0,0,0,5,-5,0,-5);

var t_plot2 = new Node('t_p2','We found a vampire in the kingdom, who wants to sell some blood to you so that you can use them for your undead magic, do you want to see him?','Demon Steward','t',true);
var t_plot2_left = new Node('Make him into my castle','I want your blood, sell me some vampire!','Norrix Seros','t',0,-5,5,5,-10,0,0,0,0,0);;
var t_plot2_right = new Node('Kill him!','Kill him! I don\'t want to see those monster who cannot live under the sun.','Norrix Seros','t',0,5,-5,-5,10,0,0,0,0);

var z_plot2 = new Node('z_plot2','Dear lord, I heard people in the city talking about your illegitimate child... What should I do?','Commandar Sehotos','z',true);
var z_plot2_left = new Node('Allow them','I don\'t mind people talking about this, I don\'t have any children at all, they can talk whatever they like, I don\'t care.','Paladin Arthurius the Noble','z',0,0,0,0,0,0,+5,0,-10);
var z_plot2_right = new Node('I don\'t want to hear these things anymore','Kill those who say things like this, I don\'t have any children at all, I will not allow these gossips pass around in the city, kill them, now.','Paladin Arthurius the Noble','z',0,0,0,0,0,-5,-5,-5,5);

var t_plot3 = new Node('t_p3','Dear Lich King, I am Dewey Ellis, brother of the bthe vampire who wanted to sell you blood one week ago, I require to stay in your country, and I can make more blood from people of the kingdom, what do you think, my lord?','Vampire Dewey Ellis','t',true);
var t_plot3_left = new Node('Let him stay.','Stay in my country, my friend, I can give you money if you give me blood like today, I can support your hunting!','Norrix Seros','t',0,-5,5,5,-10,0,0,0,0);
var t_plot3_right = new Node('Get out of my country','Your are done now, I don\'t need your stupid blood anymore, get out of my country or I will kill you, now.','Norrix Seros','t',0,10,0,-5,0,0,0,0,0);

var z_plot3 = new Node('z_p3','Dear lord! Here is some money, thank you for taking care of the business industry of the country for such a long time.','Merchant Chen','z',true);
var z_plot3_left = new Node('Accept the money','Oh, that\'s what I should do, I will let the country become more prosperous.','Paladin Arthurius the Noble','z',0,0,0,0,0,10,0,0,0);
var z_plot3_right = new Node('Accept the money','Oh, that\'s what I should do, I will let the country become more prosperous.','Paladin Arthurius the Noble','z',0,0,0,0,0,10,0,0,0);

var t_plot4 = new Node('t_p4','My Lord, we have just come out with some new magic to control people, but it needs a lot of money and oblation.','Devil Wizard Committe','t',true);
var t_plot4_left = new Node('Pay for the magic and learn it','Let me learn it, I want my people to act like slaves and only listen to me, including you and your committee.','Norrix Seros','t',0,5,10,-5,-5,0,0,0,0);
var t_plot4_right = new Node('Refuse the magic','Get out of here before I kill you, how tired is it to control everybody, I just kill those who don\'t obey me.','Norrix Seros','t',0,-5,-5,-5,0,0,0,0,0);


var z_plot4 = new Node('z_p4','A disease is found on a boat and it is possible to be a plague, should we isolate the whole port?','Commandar Sehotos','z',true);
var z_plot4_right = new Node('Isolate the whole port','Isolate them, don\'t let the plague ruin our country.','Paladin Arthurius the Noble','z',0,0,0,0,0,-5,-10,-5,0);
var z_plot4_left = new Node('It can not be a plague, let it go','Let it go, it cannot be a plague, just a little disease, it will not do any harm to our country.','z',0,0,0,0,0,-10,-10,0,0);

var t_plot5 = new Node('t_p5','My lord, I want to build a wizard school for those talented youth.','Devil Wizard Committe','t',true);
var t_plot5_left = new Node('Build the school','Build it, I want thouse talented people, when they graduate, they can help me to control the army.','Norrix Seros','t',0,5,10,5,-20,0,0,0,0);
var t_plot5_right = new Node('Do not waste my money','No school for those who will die one day, their only mission is to fight for me as a bone!','Norrix Seros','t',0,-5,-5,-5,0,0,0,0,0);

var z_plot5 = new Node('z_p5','My Noble Paladin. A bounch of military betrayed us, what should we do?','Commandar Sehotos','z',true);
var z_plot5_left = new Node('Attack them and ask them back','Ask them back, I don\'t mind what method you make, I don\'t allow people betray me, get them to me, now!','Paladin Arthurius the Noble','z',0,0,0,0,0,-5,-10,-10,0);
var z_plot5_right = new Node('Let them go','They are my people, just let they do whatever they want, maybe I should self-question myself what I have done wrong.','Paladin Arthurius the Noble','z',0,0,0,0,0,5,-10,-10,5);

var t_plot6 = new Node('t_p6','King, there\'s a bunch of soldiers from Zoash who wants to join us, do you want do hire them?','Demon Steward','t',true);
var t_plot6_left = new Node('Hire them!','Hire them, I love people. If they obey to me, I can make them military, if they don\'t, I can make them bone military.','Norrix Seros','t',0,5,10,10,0,0,0,0,0);
var t_plot6_right = new Node('Kill them and make them bones','I don\'t like people who betray their king, but I can make them never betray me! Kill them, now!','Norrix Seros','t',0,-5,10,0,0,0,0,0,0);

var z_plot6 = new Node('z_p6','My Noble Lord, the army which betrayed us a month ago go to Tririlia, another planet, we fail to force them back, so what you gonna do?','Commandar Sehotos','z',true);
var z_plot6_left = new Node('Let them go and train new armies','I don\'t want to listen to this army anymore, just train another bunch of army','Paladin Arthurius the Noble','z',0,0,0,0,0,-10,0,10,-5);
var z_plot6_right= new Node('Punish the Commandar','How did you fail??? Our military cannot defeat such a small bunch of traitor? You must be kiddingme, it must be your fault. What are you doing, supid Commandar??','Paladin Arthurius the Noble','z',0,0,0,0,0,0,-5,-5,-10);

var t_plot7 = new Node('t_p7','My lord, as you kill so many people, I look from the star and see your kingdom will be under disaster tonight, do you want me to help you get rid of it?','Stargazer Frank Mitchell','t',true);
var t_plot7_left = new Node('Yes, get rid of it for me','Get rid of it, my dear friend, I don\'t wanna die so early','Norrix Seros','t',0,5,0,0,-10,0,0,0,0);
var t_plot7_right = new Node('You lier','Is there anything a magician cannot foresee, you are lying to me, you just want money, I know it well, you greedy people!','Norrix Seros','t',0,-10,0,-5,0,0,0,0,0);

var z_plot7 = new Node('z_p7','PDear lord, I am Pirate Jack Spiro, we are tired of the life on the sea, we want to join you to be your soldier.','Pirate Jack Spiro','z',true);
var z_plot7_left = new Node('Accept them','I want you to be my friends, however, you have killed many of my people and now you want to join us, do you think you should sacrifice something?','Paladin Arthurius the Noble','z',0,0,0,0,0,)


var currentNode = t_plot1;
if (choice == 'z') {
  currentNode = z_plot1;
  $(document).ready(function() {
  $('div#audio').html('<audio src="assets/firewatch.mov" autoplay=1></audio>');
  });
}
else if (choice == 't') {
  $(document).ready(function() {
  $('div#audio').html('<audio src="assets/journey.mov" autoplay=1></audio>');
  });
}






linkNode(t_plot1, t_plot1_left, t_plot1_right);
linkNode(t_plot1_left, z_plot1);
linkNode(t_plot1_right, z_plot1);

linkNode(z_plot1, z_plot1_left, z_plot1_right);
linkNode(z_plot1_left, t_plot2);
linkNode(z_plot1_right, t_plot2);

linkNode(t_plot2, t_plot2_left, t_plot2_right);
linkNode(t_plot2_right, z_plot2);
linkNode(t_plot2_left, z_plot2);

linkNode(z_plot2, z_plot2_left, z_plot2_right);
linkNode(z_plot2_left, t_plot3);
linkNode(z_plot2_right, t_plot3);

linkNode(t_plot3, t_plot3_left, t_plot3_right);
linkNode(t_plot3_left, z_plot3);
linkNode(t_plot3_right, z_plot3);

linkNode(z_plot3, z_plot3_left,z_plot3_right);
linkNode(z_plot3_left, t_plot4);
linkNode(z_plot3_right, t_plot4);

linkNode(t_plot4, t_plot4_left, t_plot4_right);
linkNode(t_plot4_left, z_plot4);
linkNode(t_plot4_right, z_plot4);

linkNode(z_plot4, z_plot4_left, z_plot4_right);
linkNode(z_plot4_left, t_plot5);
linkNode(z_plot4_right, t_plot5);

linkNode(t_plot5, t_plot5_left, t_plot5_right);
linkNode(t_plot5_left, z_plot5);
linkNode(t_plot5_right, z_plot5);

linkNode(z_plot5, z_plot5_left, z_plot5_right);
linkNode(z_plot5_left, t_plot6);
linkNode(z_plot5_right, t_plot6);

linkNode(t_plot6, t_plot6_left, t_plot6_right);
linkNode(t_plot6_left, z_plot6);
linkNode(t_plot6_right, z_plot6);

linkNode(z_plot6, z_plot6_left, z_plot6_right);
linkNode(z_plot6_left, t_plot7);
linkNode(z_plot6_right, t_plot7);

linkNode(t_plot7, t_plot7_left, t_plot7_right);
linkNode(t_plot7_left, z_plot7);
linkNode(t_plot7_right, z_plot7);




function preload() {
  snd = loadSound('assets/Button_Push-Mike_Koenig-1659525069.mp3');

  faith = loadImage('assets/faith.png');
  military = loadImage('assets/military.png');
  population = loadImage('assets/population.png');
  wealth = loadImage('assets/wealth.png');
  // castle1 = loadImage('assets/castle1.png');
  // castle2 = loadImage('assets/castle2.png');
  castle1 = loadImage('assets/城堡1.png');
  sun1 = loadImage('assets/城堡1太阳.png');
  castle2 = loadImage('assets/城堡2.png');
  sun2 = loadImage('assets/城堡2太阳云.png');
  Lich_King = loadImage('assets/Lich_King.png');
  Paladin = loadImage('assets/Paladin.png');
  Demon_Steward = loadImage('assets/Demon_Steward.png');
  Commandar = loadImage('assets/Commandar.jpeg');
  Bone_Dragon = loadImage('assets/Bone_Dragon.png');
  Goblin = loadImage('assets/Goblin.jpg');
  Vampire = loadImage('assets/Vampire.png');
  Star_Gazer = loadImage('assets/Star_Gazer.png');
  Pirate = loadImage('assets/Pirate.jpg');
  Devil_Commiitee = loadImage('assets/Evil_Wizard.png')

  characters={
    'Norrix Seros': Lich_King,
    'Demon Steward': Demon_Steward,
    'Commandar Sehotos': Commandar,
    'Paladin Arthurius the Noble': Paladin,
    'Vampire Dewey Ellis': Vampire,
    'Devil Wizard Committe': Devil_Commiitee,
    'Stargazer Frank Mitchell': Star_Gazer,
    'Pirate Jack Spiro': Pirate
  };

}




function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  x_pos = windowWidth/26;
  y_pos = 5/6 * windowHeight;
  icon_size = 2/26 * windowWidth;

  // test level effect

  // change this random to the actual level
  // level = map(random(0, 100), 0, 100, 0, icon_size);

  for (var i = 0; i < 8; i++) {
    level[i] = map(level[i], 0, 100, 0, icon_size);
  }




  for (var i = 0; i < 8; i++) {
   if (i==4){
    x_pos = x_pos + windowWidth/26;
   };
    if (i == 0 || i == 7)
      a = faith;
    else if (i == 1 || i == 6)
      a = military;
    else if (i == 2 || i == 5)
      a = population;
    else if (i == 3 || i == 4)
      a = wealth; 
  var icon = {
      img: a,
   x: x_pos,
   y: y_pos,
   size: icon_size
  };
  x_pos = x_pos + 3/26 * windowWidth;
  icons.push(icon);


  right_c1 = color('#75d5e3');
  right_c2 = color('#cdf9ff');
  left_c1 = color('#bc177d');
  left_c2 = color('#ce7233');
 };


// *********************************************************** 
  // play with html els
  left = select('#left');
  left.position(windowWidth/12, windowHeight/10);
  right = select('#right');
  right.position(windowWidth*7/12, windowHeight/10);
  
  left = select('#left');
  left.style('width', 1/3 * windowWidth + 'px');
  left.style('height', 2/3 * windowHeight + 'px');
  right = select('#right');
  right.style('width', 1/3 * windowWidth + 'px');
  right.style('height', 2/3 * windowHeight + 'px');


  left_btn1 = select('.left-btn1');
  left_btn2 = select('.left-btn2');
  right_btn1 = select('.right-btn1');
  right_btn2 = select('.right-btn2');

  npc_left = select('.npc', '#left');
  user_left=  select('.user', '#left');
  left_npc_text = select('#left-npc-text');
  left_user_text = select('#left-user-text');

  npc_right = select('.npc', '#right');
  user_right=  select('.user', '#right');
  right_npc_text = select('#right-npc-text');
  right_user_text = select('#right-user-text');


  left_div = select('#left');
  right_div = select('#right');


  left_choice = select('.left_choice');
  right_choice = select('.right_choice');
// *********************************************************** 
  // console.log(stories);
  // console.log(user_text);
  // stories.push(t_plot1);
  // stories.push(z_plot1);

  setGradient(0, 0, width/2, height, left_c1, left_c2, Y_AXIS);
  setGradient(width/2, 0, width/2, height, right_c1, right_c2, X_AXIS);

  image(castle1, 0, 0, width/2, height);
  c = castle1.get();
  image(castle2, width/2, 0, width/2, height);
  image(sun1, width/4, 0, width/6, width/6);
  image(sun2, width/2, 0, width/4, width/4);



  getPosition('#left_npc_icon');
  getPosition('#left_user_icon');
  getPosition('#right_npc_icon');
  getPosition('#right_user_icon');
}





function draw() {
  // setGradient(0, 0, width/2, height, left_c1, left_c2, Y_AXIS);
  // setGradient(width/2, 0, width/2, height, right_c1, right_c2, X_AXIS);
  // image(c, 0, 0, width/2, height);


  line(width/2, 0, width/2, height);

  noStroke();
  for (var i = 0; i < icons.length; i++) {
   var x = icons[i].x;
   var y = icons[i].y;
    // blur_cnv.rect(x+5, y+5, icon_size, icon_size, 20);
    var fill_color = 100;
    for (var j = 0; j < 5; j++) {
      fill(fill_color);
      rect(x+5-j, y+5-j ,icon_size, icon_size, );
      fill_color -= 20;
    };
    fill(255);
    rect(x, y, icon_size, icon_size, );
    fillRect('#6375CE', level[i], x, y, icon_size);

    image(icons[i].img, x, y, icon_size, icon_size);

    var cnt = 0;
       // console.log(icons[i].x);

  };
  // if (currentNode.flag == 't' ) {
  //   right_div.style('display', 'none');
  //   left_div.style('display', 'block');
  // }
  // else if (currentNode.flag == 'z') {
  //   left_div.style('display', 'none');
  //   right_div.style('display', 'block');
  // }

  if (currentNode.flag == 't' ) {
    right_choice.style('display', 'none');
    
  }
  else if (currentNode.flag == 'z') {
    left_choice.style('display', 'none');
  }


  if (finish_printing == true && (new_print == true || currentNode.npc == false)) {
    // finish_printing = false;
    new_print = false;
    if (currentNode.npc == true) {
      setTimeout(printNpcStory, 3000);
      setTimeout(displayButton, 4000);
    }
    else {
      printStory(currentNode);
      // 
      // statChange(currentNode);
    }
    detectOver()
    if (currentNode.over==false){
      updateNode();
    }
    else{
      var target;
      for (var i = 0; i < level.length; i++) {
        if (level[i] <= 0 || level[i] >= 100) {
          if (i == 0 || i == 7){
            target = '?target=faith';
          }
          else if (i == 1 || i == 6){
            target = '?target=military';
          }
          else if (i == 2 || i == 5){
            target = '?target=population';
          }
          else if (i == 3 || i == 4){
            target = '?target=population';
          }
          if (i <= 0)
              target += '&level=0';
          else
              target += '&level=100'
        }
      };

      window.location = 'ending.html' + target;
    }
  }
}


  function updateNode() {
    if (currentNode.npc == true) {
        // console.log('this is an npc text');
        if (currentNode.flag == 't') {
          left_btn1.html(currentNode.choice1.atitle);
          left_btn2.html(currentNode.choice2.atitle);


          left_btn1.mouseClicked(function() {
            currentNode = currentNode.choice1;
            snd.play();
          });

          left_btn2.mouseClicked(function() {
            currentNode = currentNode.choice2;
            snd.play();
          });
        }
        else if (currentNode.flag == 'z') {
          right_btn1.html(currentNode.choice1.atitle);
          right_btn2.html(currentNode.choice2.atitle);

          right_btn1.mouseClicked(function() {
            currentNode = currentNode.choice1;
            snd.play();
          });

          right_btn2.mouseClicked(function() {
            currentNode = currentNode.choice2;
            snd.play();
          });
        }

        

    }


    
    else {
      new_print = true;

      // console.log('this is a user text, automatically update');
      if (currentNode.choice2 != null) {
        // console.log(currentNode);
        currentNode = currentNode.choice2;
        // console.log(currentNode);

      }
      else if (currentNode.choice1 != null) {
        // console.log(currentNode);

        currentNode = currentNode.choice1;
        // console.log(currentNode);
      }
    }
    
    return currentNode;
  }

function printNpcStory() {
  printStory(currentNode);
}


function displayButton() {
  if (currentNode.flag == 't') {
    left_choice.style('display', 'table');
  } 
  else {
    right_choice.style('display', 'table');
  }
}


function printStory (node) {
  var plot, target, character;
  plot = node.story;
  character = node.character;
  // **********************
  // location to print story
  multiplexer += 0.05;
  if (node.flag == 't') {
    statChange(currentNode);
    if (node.npc === true) {
      // target = left_npc_text;
      target = '#left-npc-text';
    }
    else {
      // target = left_user_text;
      target = '#left-user-text';
    }
  }
  else if (node.flag = 'z') {
    statChange(currentNode);
    if (node.npc === true) {
      // target = right_npc_text;
      target = '#right-npc-text';
    }
    else {
      // target = right_user_text;
      target = '#right-user-text';
    }
  }
  // ***************************
  // target.html(plot);

  // test typewritter funtion
  //  ******************************
  type(target, character + ': ' + plot);

  if (currentNode.npc == true && currentNode.flag =='t'){
  placeImg(characters[currentNode.character], '#left_npc_icon');
}
else if (currentNode.npc == false && currentNode.flag == 't'){
  placeImg(characters[currentNode.character], '#left_user_icon');
}
else if (currentNode.npc == true && currentNode.flag == 'z'){
  placeImg(characters[currentNode.character],'#right_npc_icon');
}
else if (currentNode.npc == false && currentNode.flag == 'z'){
  placeImg(characters[currentNode.character],'#right_user_icon');
}

}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}




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


function getPosition(el) {
  $(document).ready(function(){

    var left_position = $(el).offset().left - $(document).scrollTop();

    var top_position = $(el).offset().top - $(document).scrollTop();


    var wid = $(el).outerWidth();
    var heig = $(el).outerHeight();
    var pos = {
      left: left_position,
      top: top_position,
      w: wid,
      h: heig
    };

    positions[el] = pos;
    

  });
};



// function getOffset( el ) {
//     var _x = 0;
//     var _y = 0;
//     while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
//         _x += el.offsetLeft - el.scrollLeft;
//         _y += el.offsetTop - el.scrollTop;
//         el = el.offsetParent;
//     }
//     return { top: _y, left: _x };
// }
// $(document).ready(function() {
//   var x = getOffset(document.getElementById('left')); 
//   console.log(x);
// });


function type (target, string) {
  last_print = typewritter;
  typewriter = new Typewriter($(target)[0], {

      loop: false,
      typingSpeed: 15
  });


  typewriter.typeString(string)
      .start();


}


function fillRect(color, level, x, y, width) {
  fill(color);
  rect(x, y+width-level, width, level);
}


function Node(atitle=null, val=null, character=null, flag='z', npc=false, faith1 = 0, military1 = 0, population1 = 0, wealth1 = 0, wealth2 = 0, population2 = 0, military2 = 0, faith2 = 0, over = false){
  this.atitle = atitle;
  this.character = character;
  this.story = val;
  this.choice1 = null;
  this.choice2 = null;
  this.flag = flag;
  this.npc = npc;
  this.faith1 = faith1;
  this.military1 = military1;
  this.population1 = population1;
  this.wealth1 = wealth1;
  this.wealth2 = wealth2;
  this.population2 = population2;
  this.military2 = military2;
  this.faith2 = faith2;
  this.over = over;
  // this.faith = faith;
  // this.military = military;
  // this.population = population;
  // this.wealth = wealth;
}

function linkNode(parent, left_child=null, right_child=null) {
  parent.choice1 = left_child;
  parent.choice2 = right_child;
}


function statChange(currentNode){
  currentNode.faith1 = map(currentNode.faith1,0,100,0,icon_size);
  currentNode.military1 = map(currentNode.military1,0,100,0,icon_size);
  currentNode.population1 = map(currentNode.population1,0,100,0,icon_size);
  currentNode.wealth1 = map(currentNode.wealth1,0,100,0,icon_size);
  currentNode.wealth2 = map(currentNode.wealth2,0,100,0,icon_size);
  currentNode.population2 = map(currentNode.population2,0,100,0,icon_size);
  currentNode.military2 = map(currentNode.military2,0,100,0,icon_size);
  currentNode.faith2 = map(currentNode.faith2,0,100,0,icon_size);
  level[0] += currentNode.faith1*multiplexer;
  level[1] += currentNode.military1*multiplexer;
  level[2] += currentNode.population1*multiplexer;
  level[3] += currentNode.wealth1*multiplexer;
  level[4] += currentNode.wealth2*multiplexer;
  level[5] += currentNode.population2*multiplexer;
  level[6] += currentNode.military2*multiplexer;
  level[7] += currentNode.faith2*multiplexer;
}

function detectOver(){
  var x = 0;
  for (x=0;x<8;x++){
    if (level[x]<0 || level[x]>100){
      currentNode.over = true;
    }
  }
}

function placeImg (img, target) {
  $(document).ready(function() {
    if (positions && positions[target] != undefined) {
    console.log(positions[target]);
    image(img, positions[target].left, positions[target].top, positions[target].w, positions[target].h);
  }
  else {
    console.log('error');
  }
});
  
}



function setGradient(x, y, w, h, c1, c2, axis) {

  noFill();

  if (axis == Y_AXIS) {  // Top to bottom gradient
    for (var i = y; i <= y+h; i++) {
      var inter = map(i, y, y+h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x+w, i);
    }
  }  
  else if (axis == X_AXIS) {  // Left to right gradient
    for (var i = x; i <= x+w; i++) {
      var inter = map(i, x, x+w, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y+h);
    }
  }
}

$(document).ready(function() {

});