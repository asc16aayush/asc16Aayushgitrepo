class Phone1 {
    constructor(feature) {
        this.phoneFeature = feature;
    }
    displayDetails() {
        console.log("phone feature is called and initialized");
        console.log("phone feature are :" + this.phoneFeature);
    }
}
class SmartPhone1 extends Phone {
    constructor(feature) {
        super(feature);
        console.log("smartphone constructor called");
    }
    displayDetails() {
        console.log("smartphone feature is " + this.phoneFeature);
    }
}
// object creation and calling a function
const phone2 = new SmartPhone("superb camera phone");
phone1.displayDetails();
