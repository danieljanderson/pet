  //ToDO figure out how to darken the buttons after pet died since i changed the format.  and then figure
// out layout.
$(function(){
  var pet
  var start = function ()
  {
    var name = prompt("what is your pets name")
    pet = new tom.Pet(name)
    displayStats()
    $('.action_btn').css("cursor","pointer")
    $('.action_btn').prop("disabled",false)
    }
  var createFields = function (){
      var Name_html = $("<div id= 'pets_Name'></div>")
      $('#stats_container').append(Name_html)
      $('#pets_Name').before("<div id= 'Name_title'> Name </div>")
     
    // for some reason i can not add another div inside of pets_Foodbar
    // I have tried putting lines 29-32 after line 28 and  outside the create Fields function
    // and none of that works
    // the code below is code i found on the internet but still doesnt work.
    // $('#stats_container').append(
      //  $('<div/>')
     //       .attr("id","pets_Foodbar")
     //       .addClass("bar")
     //        .append("<span/>")
      //      .html("Food"))
      //this doesnt work either
    //var Food_html = $("<div id='pets_Foodbar' class ='bar'><div id ='better work'></div></div>");

      var Food_html = $("<div id='pets_Foodbar' class ='bar'></div>");
      //var bar = $("<div class='actual' id='bar'></div>");
      $('#stats_container').append(Food_html);
      //$('#pets_Food').prepend(bar);
      $('#pets_Foodbar').before("<div id='Food_title'>Food</div>");
      //$('#pets_Foodbar').add("div").addClass("actual")
      //var Food_html = $("<div id='pets_Food' class='goal'></div>");
      //var bar=$("<div class ='actual'></div>");
      //$('#stats_container').append(Food_html)
      //$('#pets_Food').append(bar)
      //$('#pets_Food').before("<div id= 'Food_title'> Food </div>")
     // $('#pets_Foodbar').append("<div id='actual'></div>")
      
    
    var Energy_html = $("<div id= 'pets_Energy'></div>")
      $('#stats_container').append(Energy_html)
      $('#pets_Energy').before("<div id= 'Energy_title'> Energy </div>")
      
      var Happiness_html = $("<div id= 'pets_Happiness'></div>")
      $('#stats_container').append(Happiness_html)
      $('#pets_Happiness').before("<div id= 'Happiness_title'> Happiness </div>")
      
      var Attribute_html = $("<div id = 'pets_Attribute'></div>")
      $('#stats_container').append(Attribute_html)
      $('#pets_Attribute').before("<div id='Attribute_title'>Power Level</div>")
    }
    var statbar = $("<div id = 'actual_Foodbar'></div")
      $('#pets_Foodbar').append(statbar)
  
  
  var displayStats = function (){
    $('#pets_Name').html(pet.name)
    $('#pets_Foodbar').html(pet.food)
    $('#pets_Energy').html(pet.energy)
    $('#pets_Happiness').html(pet.happiness)
    $('#pets_Attribute').html(pet.level)
  }
  var buttonsActions = function (){
      
      //feed button
      $('#feed_button').click(function(e){
        // $('#feed_button').click($.proxy(pet,"feed")) 
          living()
          checkAttribute()
          pet.feed()
          living()
          checkAttribute()
          displayStats()
   })
   
      //sleep button
      $('#sleep_button').click(function(e){
         living()
         checkAttribute()
         pet.sleep()
         checkAttribute()
         living()
         displayStats()
     
   })
    
      //play button    
      $('#play_button').click(function(e){
         living()
         checkAttribute()
         pet.play()
         checkAttribute()
         living()
         displayStats()
     
   })
     
     //walk button
     $('#walk_button').click(function(e){
        living()
        checkAttribute()
        pet.goWalk()
        checkAttribute()
        living()
        displayStats()
     
   })
    
      //train_button
     $('#train_button').click(function(e){
         living()
         checkAttribute()
         pet.train()
         checkAttribute()
         living()
         displayStats()
     
   })
     
       //come home button
      $('#come_home_button').click(function(e){
          living()
          checkAttribute()
          pet.comeHome()
          checkAttribute()
          living()
          displayStats()
     
   })
     
       // leave button
      $('#leave_button').click(function(e){
          living()
          checkAttribute()
          pet.leave()
          checkAttribute()
          living()
          displayStats()
     
   })
     
       //battle button    
     $('#battle_button').click(function(e){
        living()
        checkAttribute()
       alert(pet.battle())
        checkAttribute()
        living(pet)
        displayStats()
     
   })
     
    //help button
    $('#help_button').click(function(e){
     alert(pet.getHelpMessage())
    $('#help_display').show(400)
   
    })
     
      //start over  button
      $('#start_over_button').click(function(e) {    
      start()
       // location.reload()
  })
   //quit button  
   $('#quit_button').click(function(e){
    
  })
  }
  var living = function (){
    if (!pet.alive){
      alert(pet.name+" just died")
      $('.action_btn').css("cursor","not-allowed")
     
      $('.action_btn').prop("disabled",true)
      //document.getElementById("feed_button").disabled = true;
    }
  } 
  var checkAttribute = function (){
    pet.levelUp()
    var evoState = pet.level
    switch (evoState){
      case 1:
        $("#pet_picture").attr('src','http://www.placecage.com/c/200/300')
        break;
      case 2:
        $("pet_picture").attr('src','http://www.fillmurray.com/500/600.jpg')
        break;
      case 3:
        $('#pet_picture').attr('src','http://www.fillmurray.com/200/700.jpg')
        break
      case 4:
        $('#pet_picture').attr('src','http://www.fillmurray.com/400/300.jpg')
        break
      case 5:
        $('#pet_picture').attr('src','http://www.fillmurray.com/100/700.jpg')
        break
      default:
      break
    } 
    
  }
  
  createFields()
  start()
  buttonsActions()
  
  // end of program ()
  })