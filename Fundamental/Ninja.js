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
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
    
