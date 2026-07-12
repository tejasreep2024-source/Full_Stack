// inheritance: one class inherit the properties of another class is known as  inheritance...
                // parent class and child class

// class Animal {
//    eat() {
//       console.log("Eating Habit");
//     }
//     sleep(){
//     console.log("Sleep Habit");
//     }
// }
// class dog extends Animal {
//     barks(){
//         console.log("Dog is Barking");
//     }
// }
// let simba = new dog();
// simba.eat();
// simba.sleep();
// simba.barks();
// =====================================================================================================
// class person{
//     constructor(name){
//         this.name=name;
//     }
// }
// class student extends person{
//     constructor(name,course){
//         super(name);
//         this.course=course;
//     }
//     brief(){
//         console.log(`My name is ${this.name} and my course is ${this.course}`)
//     }
// }
// let stu1 = new student("Mohit","Mern-Stack");
// stu1.brief();

// -----------------------------------------MULTILEVEL INHERITANCE-------------------------------------

// class person{
//     constructor(name){
//         this.name=name;
//     }
// }
// class student extends person{
//     constructor(name,course){
//         super(name);
//         this.course=course;
//     }
//     brief(){
//         console.log(`My name is ${this.name} and my course is ${this.course}`)
//     }
// }
// class branch extends student{
//     constructor(name,course,branch){
//         super(name,course);
//         this.branch=branch;
//     }
//     brief(){
//         console.log(`My name is ${this.name} and my course is ${this.course} and  ${this.branch}` )
//     }
// }
// let stu1 = new branch("Mohit","Mern-Stack","cs");
// stu1.brief();
// ------------------------------------------------------------------------------------------------------
// ==================================MULTILEVEL INHERITANCE=============================================
// class Animal{
//     eat(){
//         console.log("Eating...");
//     }
// }
// class Mammals extends Animal{
//     sleep(){
//         console.log("Sleeping...");  
//     }
// }
// class Dog extends Mammals{
//     bark(){
//         console.log("Barking...");
//     }
// }
// let d1 = new Dog();
// d1.eat();
// d1.sleep();
// d1.bark();
// ==================================HEIRARCHIAL INHERITANCE====================================================
// class College{
//     Greeting(){
//         console.log("Hey Student");
//     }
// }
// class Department extends College{
//     depart(){
//         console.log("Department:Computer Science");  
//     }
// }
// class Branch extends College{
//     course(){
//         console.log("Course:B.tech");
//     }
// }
// let d1 = new Department();
// let d2 = new Branch();
// d1.Greeting();
// d1.depart();
// d2.course();
// =====================================================================================================
class Employee{
    name(){
       console.log("Name:vinoth"); 
    }
    age(){
        console.log("Age:25"); 
    }
    salary(){
        console.log("Salary:8LPA"); 
    }
}
class Team extends Employee{
    Department(){
        console.log("Belongs to cs Department");
    }
    Technical(){
        console.log("Belongs to Techincal Team");
    }
    ManagingTeam(){
        console.log("Belongs to Managing Team");
    }
    HRTeam(){
        console.log("Belongs to HR Team");
    }
}
let d1= new Team();
d1.name();
d1.age();
d1.salary();
d1.Technical();
// =========================================================================================================

