// class car {
//     brandname;
//     start(){
//     console.log("Car is ready to Start");
//     }
//     stop(){
//     console.log("Car is ready to stop");    
//     }
//     setBrand(brand){
//          this.brandname = brand;
//     }
//     getBrand(){
//          console.log(this.brandname );
//     }

// }
// let car1 = new car();
// car1.setBrand("Fortuner");
// car1.getBrand();
// car1.start();
// car1.stop();
// ==============================================================================================
class student  {
    constructor(name,age,course){
        this.name=name;
        this.age=age;
        this.course=course;
    }
    introduce(){
        console.log(`My name is ${this.name} and my age is ${this.age},enrolled in course ${this.course}`);

    }
    setcourse(newcourse){
        this.course=newcourse;
    }
    getcourse(){
        return this.course;
    }
    setname(newname){
        this.name=newname;
    }
    getname(){
        return this.name;
    }
}
let stu1 = new student("Rishabh","20","Python");
stu1.introduce();
console.log("Current Course : " , stu1.getcourse());
stu1.setcourse("java full stack");
stu1.introduce();
console.log("NewNAme:",stu1.getname());
stu1.setname("Tejasree");
stu1.introduce();
// --------------------------------------------------------------------------------------------------------
