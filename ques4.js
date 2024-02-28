class uberPrice{
    constructor(name,distance){
        this.name=name;
      this.distance=distance;
    }
    calculate(){
        let rate=this.distance*15;
          console.log(`Hi ${this.name}, Fare is ${rate} Rs for ${this.distance}km`)
       
    }
}
//valid 
const valid=new uberPrice("Mathan",10);
console.log(valid);
valid.calculate();
