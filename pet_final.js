// make a display stats function in the app js file.
var tom = (function(){	
	var Pet = function (name){
		this.name = name,
		this.food = 5,
		this.energy = 5,
		this.happiness = 5,
		this.level = 0,	
		this.alive = true,
		this.win = true,
		this.min_level = 1,
		this.max_level =10,
 		
	
		this.sleep = function (){
		// is a function that gets a random number 
		//then modifies the food energy property of pet in a positive and a negitive way
			this.checkAlive()
  		this.food= this.food - this.getRandomNumber(2,4)
  		this.energy= this.energy + this.getRandomNumber(3,5)
			this.checkAlive()
		},
		this.getRandomNumber = function (min,max){
		//generates random number and then returns random number	
  		var num = Math.floor((Math.random()*max)+min)
  		return num
		},
			
		this.play = function (){
		// is a function that gets a random number 
		//then modifies the food energy and happiness property of pet in a positive and a negitive way
  		this.checkAlive()
			this.food = this.food - this.getRandomNumber(1,3)
  		this.happiness= this.happiness + this.getRandomNumber(3,6)
  		this.energy = this.energy - this.getRandomNumber(1,3)
			this.checkAlive()
	
		},
		this.checkAlive = function (){
		// checks the food energy and happiness level of pet.  if below 0 returns false.
		// else returns true
			if (this.food<0||this.energy<0||this.happiness<0){
					this.alive=false
					
				}
			else{
				this.alive=true
				}
		},
		this.comeHome = function(){
		// is a function that gets a random number 
		//then modifies the food energy and happiness property of pet in a positive and a negitive way
			this.checkAlive()
			this.happiness= this.happiness + this.getRandomNumber(1,10)
			this.food = this.food - this.getRandomNumber(1,3)
			this.energy = this.energy - this.getRandomNumber(1,5)
			this.checkAlive()

		},
		this.train = function(){
		// is a function that gets a random number 
		//then modifies the food energy and happiness property of pet in a positive and a negitive way
			this.checkAlive()
			this.happiness = this.happiness + this.getRandomNumber(1,8)
			this.energy = this.energy - this.getRandomNumber(1,3)
			this.food  = this.food + this.getRandomNumber(1,4)
			this.checkAlive()
	
		},
		this.feed = function (){
		// is a function that gets a random number 
		//then modifies the food energy and happiness property of pet in a positive and a negitive way
			this.checkAlive()
  		this.food= this.food + this.getRandomNumber(2,5)
  		this.happiness= this.happiness + this.getRandomNumber(1,4)
  		this.energy = this.energy - this.getRandomNumber(2,4)
			this.checkAlive()
	
		},	
		this.goWalk = function (){
		// is a function that gets a random number 
		//then modifies the food energy and happiness property of pet in a positive and a negitive way
			this.checkAlive()
			this.happiness = this.happiness + this.getRandomNumber(1,4)
			this.energy = this.energy - this.getRandomNumber(1,4)
			this.food  = this.food - this.getRandomNumber(1,3)
			this.checkAlive()
	
		},	
		this.leave = function (){
		// is a function that gets a random number 
		//then modifies the food energy and happiness property of pet in a positive and a negitive way
			this.checkAlive()
			this.happiness = this.happiness - this.getRandomNumber(1,4)
			this.energy = this.energy+ this.getRandomNumber(1,3)
			this.food = this.food + this.getRandomNumber(1,4)
			this.checkAlive()
	
		},
		this.levelUp = function (){
			// checks the stats of food energy and happiness
			// if the stats are greater than 10 modifies  level and the min and max level
			// the min and max level is then used in the getRandomNumber function to increase the range 
			// in order for the pet to loss and not win all the time
			// users cant go from level 0 to level 3 they have to go in order ie 1, then 2 etc.
  		if (this.food>=10&&this.energy>=10&&this.happiness>=10&&this.level==0){
  				this.level++
					this.min_level=10
					this.max_level=20
  				}
  		else if (this.food>=20&&this.energy>=20&&this.happiness>=20&&this.level==1){
  			this.level++
				this.min_level=20
				this.max_level=40
  				}
  		else if (this.food>=40&&this.energy>=40&&this.happiness>=40&&this.level==2){
  			this.level++
  			this.min_level=40
				this.max_level=60
				}
  		else if (this.food>=60&&this.energy>=60&&this.happiness>=60&&this.level==3){
  			this.level++
				this.min_level=60
				this.max_level=100
  			}
  		else if (this.food>=100&&this.energy>=100&&this.happiness>=100&&this.level==4){
  			this.min_level=100
				this.max_level=500
				this.level++
 				}
		},	
	this.battle = function (){
		//creates a new computer pet
		//generates states randomly from 1, the current pets stats 
		//compares the stats from the computer to the stats of this pet
		//changes pets.win to false if computer pets stats sum is greater than original pet
		//otherwise returns false
		var Computer = new Pet("Computer")

		Computer.food = Computer.getRandomNumber(this.min_level,this.max_level) 
		Computer.energy = Computer.getRandomNumber(this.min_level,this.max_level) 
		Computer.happiness = Computer.getRandomNumber(this.min_level,this.max_level)
		this.sum = function (a,b,c){
				return a+b+c
				}
		var player_sum =this.sum(this.food,this.energy,this.happiness)
		var computer_sum = this.sum(Computer.food,Computer.energy,Computer.happiness)
		if (player_sum<computer_sum){
				this.win=false
					return this.name+" just lost to the computer"		
			}
		else{
			this.win=true
			return this.name+" you just beat the computer"
			}
	},	
	
		this.getHelpMessage= function(){
			//this is to help the user decide what functions to do next
			if (this.food<=3){
				return "you should feed "+this.name
			}
			else if (this.energy<=3){
				return"you should let " +this.name +" sleep"
			}
			else if (this.happiness>=4&&this.energy<=2&&this.food<=2){
				return "you should leave ", this.name + "alone"
			}
			else if (this.happiness<=2&&this.energy>=4&&this.food>=3){
				return"you should take" ,this.name +"for a walk","or you can come home"
			}
			else if (this.happiness<=3&&this.energy>3&&this.food>3){
				return"you should play with "+ this.name		
			}
			else{
				return "you can do anything that you want with "+ this.name
			}
		},
		this.printStats = function(){
			// ability to print stats
			var specs = "food ="+this.food + "\n" + "happiness ="+this.happiness + "\n" + "energy=" +this.energy+ "\n"+ "level=" +this.level+"\n"
			return specs
	
		}

	
	}
var module ={
	"Pet":Pet
}
return module
})()
module.exports=tom
