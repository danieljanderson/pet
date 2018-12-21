  //ToDO figure out how to darken the buttons after pet died since i changed the format.  and then figure
// out layout.
$(function(){
  var pet
 
  var start = function()
  { var name = ""
    do{
    var name = prompt("what is your pets name")
    }
    while(name ===null)
    pet = new tom.Pet(name)
    displayStats()
    $('.action_btn').css("cursor","pointer")
    $('.action_btn').prop("disabled",false)
    }
  var createFields = function (){
      var Name_html = $("<div id= 'pets_Name'></div>")
      $('#stats_container').append(Name_html)
      $('#pets_Name').before("<div id= 'Name_title'> Name </div>")

      var Food_html = $("<div id='pets_Foodbar' class ='bar'></div>");
      $('#stats_container').append(Food_html);
      $('#pets_Foodbar').before("<div id='Food_title'>Food</div>")
      
    
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
      $('#picture_actions').show(0)
      $("#picture_actions").attr('src','images/feed.jpg')
      $('#picture_actions').css("display","float")
          living()
          checkAttribute()
          pet.feed()
          living()
          checkAttribute()
          displayStats()
   })
   
      //sleep button
      $('#sleep_button').click(function(e){
      $('#picture_actions').show(0)
      $("#picture_actions").attr('src','images/sleep.jpg')
      $('#picture_actions').css("display","float") 
        living()
         checkAttribute()
         pet.sleep()
         checkAttribute()
         living()
         displayStats()
     
   })
    
      //play button    
      $('#play_button').click(function(e){
      $('#picture_actions').show(0)
      $("#picture_actions").attr('src','images/play.jpg')
      $('#picture_actions').css("display","float") 
        living()
         checkAttribute()
         pet.play()
         checkAttribute()
         living()
         displayStats()
     
   })
     
     //walk button
     $('#walk_button').click(function(e){
      $('#picture_actions').show(0)
      $("#picture_actions").attr('src','images/walk.jpg')
      $('#picture_actions').css("display","float") 
       living()
        checkAttribute()
        pet.goWalk()
        checkAttribute()
        living()
        displayStats()
     
   })
    
      //train_button
     $('#train_button').click(function(e){
      $('#picture_actions').show(0)
      $("#picture_actions").attr('src','images/train.jpg')
      $('#picture_actions').css("display","float") 
        living()
         checkAttribute()
         pet.train()
         checkAttribute()
         living()
         displayStats()
     
   })
     
       //come home button
      $('#come_home_button').click(function(e){
           $('#picture_actions').show(0)
      $("#picture_actions").attr('src','images/come_home.jpg')
      $('#picture_actions').css("display","float")
          living()
          checkAttribute()
          pet.comeHome()
          checkAttribute()
          living()
          displayStats()
     
   })
     
       // leave button
      $('#leave_button').click(function(e){
         $('#picture_actions').show(0)
      $("#picture_actions").attr('src','images/leave.jpg')
      $('#picture_actions').css("display","float")  
        living()
          checkAttribute()
          pet.leave()
          checkAttribute()
          living()
          displayStats()
     
   })
     
       //battle button    
     $('#battle_button').click(function(e){
      $('#picture_actions').show(0)
      $("#picture_actions").attr('src','images/battle.jpg')
      $('#picture_actions').css("display","float")
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
    $('#help_display').show(0)
   
    })
     
      //start over  button
      $('#start_over_button').click(function(e) {  
        $('#picture_actions').hide(0)
      start()
       // location.reload()
  })
   //quit button  
   $('#quit_button').click(function(e){
       window.location.href = "https://danieljanderson.github.io/"
    
  })
  }
  var living = function (){
    if (!pet.alive){
      $('#picture_actions').show(0)
      $("#picture_actions").attr('src','images/dead.jpg')
      $('#picture_actions').css("display","float")
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
        $("#pet_picture").attr('src','images/level_1.jpg')
        break;
      case 2:
        $("#pet_picture").attr('src','images/level_2.jpg')
        break;
      case 3:
        $('#pet_picture').attr('src','images/level_3.jpg')
        break
      case 4:
        $('#pet_picture').attr('src','images/level_4.jpg')
        break
      case 5:
        $('#pet_picture').attr('src','images/level_5.jpg')
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
