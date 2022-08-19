class Employee {
    constructor(name, id, email, role){
        this.name= name;
        this.id=id;
        this.email = email;
        this.role = role;
    }
    getName(){
        console.log(`Employee name ${this.name}`)
    };
    getId(){
        console.log(`Employee ID: ${this.id}`)
    };
    getEmail(){
        console.log(`Employee Email ${this.email}`)
    };
    getRole(){
        console.log(`Employee Role: ${this.role}`)
    };
};

class Manager extends Employee{
    constructor(officeNumber){
        this.officeNumber = officeNumber;
        this.role = Manager;
    }
};

class Engineer extends Employee{
    constructor (gitHub){
        this.gitHub = gitHub
        this.role = Engineer
    }
    getGitHub(){
        console.log ( `gitHub Username: ${this.gitHub}`)
    };
};

class Intern extends Employee {
    constructor(school){
        this.school = school;
        this.role = Intern;
    }
    getSchool(){
        console.log(`Intern's School: ${this.school}`)
    };
};

module.exports = {
    Employee,
    Manager,
    Engineer,
    Intern
};