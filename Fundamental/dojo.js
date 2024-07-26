// Parent class
class Card{
    constructor(name,cost){
        this.name = name
        this.cost = cost
    }
}
// ===============================================
// First child class
class Unit extends Card{
    // Class constructor
    constructor(name,cost,power,res){
        super(name,cost)
        this.power = power;
        this.res = res;
    }  
    // Function to print the current values of  
    toString() {
        return "Name: "+ this.name + "Cost: "+ this.cost + "Power: "+ this.power + "Resilience: "+ this.res
    }
    // Function to attack another Unit card and reduce its res by the attacker power
    attack(target){
        if( target instanceof Unit ) {
            target.res -= this.power
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}
// ===============================================
// Second child class
class Effect extends Card{
    // Class constructor
    constructor(name,cost,text,stat,magnitude){
        super(name,cost)
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    // Function to get the magnitude as a signed number
    getMagnitude(){
        let sign = this.magnitude.charAt(0)
        let number = parseInt(this.magnitude.slice(1).trim())
        return sign == "+" ? number:-number
    }
    // Function to apply effect on unit card (on its power or res)
    play(target){
        if( target instanceof Unit ) {
            this.stat == "power" ? target.power += this.getMagnitude() : target.res += this.getMagnitude()
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}
// ===============================================
// Testing
const red= new Unit("Red Belt Ninja",3,3,4)
const hard= new Effect("Hard Algorithm",2,"increase target's resilience by 3","resilience", "+3")
hard.play(red)
const black= new Unit("Black Belt Ninja", 4,5,4)
const promise= new Effect("Unhandled Promise Rejection",1,"reduce target's resilience by 2","resilience", "-2")
promise.play(red)
const pair= new Effect("Pair Programming",3,"increase target's power by 2","power", "+2")
pair.play(red)
red.attack(black)