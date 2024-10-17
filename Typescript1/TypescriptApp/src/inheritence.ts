class Phone1{
    phoneFeature : string;
    constructor(feature:string){
        this.phoneFeature=feature;
    }

    displayDetails():void{
        console.log("phone feature is called and initialized");
        console.log("phone feature are :"+this.phoneFeature);
    }
}

class SmartPhone1 extends Phone{
    constructor(feature:string){
        super(feature);
        console.log("smartphone constructor called");

    }
    displayDetails(): void {
        console.log("smartphone feature is "+ this.phoneFeature);
    }
}

// object creation and calling a function
const phone2=new SmartPhone("superb camera phone");
phone1.displayDetails();
