var tom = require('./pet_final.js')
var readline = require ('readline')
var r1 = readline.createInterface({
  input: process.stdin,
  output:process.stdout
})
var choices = function(answer){
	if (answer=="sleep"){
					pet.sleep()
					checkLiving()
          pet.levelUp()
    	 		console.log(pet.printStats())
					getDailyActivities()		
  		 		}
    
   			 else if (answer=="play"){
     			pet.play()
					checkLiving()
          pet.levelUp()
    	 		console.log(pet.printStats())
					getDailyActivities()		
    			}
    
    			else if (answer=="come home"){
      		pet.comeHome()
					checkLiving()
          pet.levelUp()
    	 		console.log(pet.printStats())
					getDailyActivities()	
    			}
				else if (answer=="train"){
					pet.train()
					checkLiving()
          pet.levelUp()
    	 		console.log(pet.printStats())
					getDailyActivities()	
				}
     		else if (answer=="feed"){
					pet.feed()
					checkLiving()
          pet.levelUp()
    	 		console.log(pet.printStats())
					getDailyActivities()	
				}
				else if (answer=="go for a walk"){
					pet.goWalk()
					checkLiving()
          pet.levelUp()
    	 		console.log(pet.printStats())
					getDailyActivities()	
					
				}
				else if (answer=="leave"){
				  pet.leave()
					checkLiving()
          pet.levelUp()
    	 		console.log(pet.printStats())
					getDailyActivities()	
					
				}
				else if (answer=="battle"){
    	 		console.log(pet.battle())
					getDailyActivities()	
					
				}
          else if (answer=="get help"){
            console.log(pet.getHelpMessage())
            getDailyActivities()
          }
    			else if (answer=="start over"){
 						start()    
    			}    
    			else{
					r1.close()	
      		process.exit()
   				 }
}



	var pets_Name = function (answer){
  pet=new tom.Pet(answer)
	getDailyActivities()
 

	
}
var checkLiving = function (){
  pet.checkAlive()
    if (pet.alive==false){
      console.log(pet.name+" was just killed")
      r1.close()	
      process.exit()
    }
}  
 
 var start = function(){
  r1.question("what is your pets name ",pets_Name)
}

  var dailyActivitiesAnswer = function(answer){
 	if (answer=="sleep"||answer=="play"||answer=="come home"||answer=="train"||answer=="feed"||answer=="go for a walk"||answer=="leave"||answer=="battle"||answer=="get help"||answer=="start over"||answer=="quit"){
		 choices(answer)
	
	}
	else{	
		console.log("you typoed please try again")
		getDailyActivities()
	}


   }
  var getDailyActivities = function(){
	 
  r1.question("what do you want to do with " + pet.name + "\n" + "sleep\nplay\ncome home\ntrain\nfeed\ngo for a walk\nleave\nbattle\nget help\nor start over\nquit\n",daily_Activities_Answer)
    


   }

var pet  
start()