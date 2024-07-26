class Ninja {
    // Class counstructor
    constructor (name ,speed =3, health=90 , strength=3){
        this.name=name;
        this.health=health;
        this.speed=speed;
        this.strength=strength;
    }
    sayName(){
        console.log(this.name);
    }
    showStats(){
        console.log("name : "+ this.name, " and health is: "+this.health+" the speed is : "+this.speed, "and health is: "+this.health)
    }
    drinkSake(){
        this.health+=10;
        console.log(this.health);
    }
}

class Sensei extends Ninja{
    // Class counstructor
    constructor(name,wisdom=10){
        super(name, 200, 10, 10);
        this.wisdom=wisdom;
    }
    speakWisdom(){
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
}
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"