/**
 * app.js for lab w2d3
 * 
 */


//---------------------Question-1 ---------------------------
"use-strict";

let person = {
    name: "",
    dateOfBirth: "",
    getName: function(){
        return this.name;
    },
    setName(newName){
        this.name = newName;
    }
};
let p1 = Object.create(person);
p1.setName("John");
p1.dateOfBirth = "1998-12-10";
console.log("The person's name is " + p1.getName());
console.log(p1.getName() + " was born on " + p1.dateOfBirth);


    //---------------------Question-2 ---------------------------
let employee = Object.create(person, 
    {
        salary: {value: 0}, 
        hireDate: {value: new Date()} , 
        doJob: {value: function(jobTitle){
            console.log(this.name + " is a " + jobTitle + " who earns $" + this.salary);
        }}
});
let employeeAnna = Object.create(employee,{salary:{value: 249995.50}});
employeeAnna.setName("Anna");
employeeAnna.doJob("Programmer");

    //---------------------Question-3 ---------------------------

    function Person(name, dateOfBirth) {
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.toString = function() {
            return "{Name: " + this.name + ", DateOfBirth : " + this.dateOfBirth + "}";
        }
    }
    let peter = new Person("Peter", "November 10, 1985");
    console.log(peter.toString());


    //---------------------Question-4 ---------------------------
// https://abanoubkaiser.github.io/lab04/login/Index   
// https://abanoubkaiser.github.io/lab04/Index  
    $(function(){
        $('form').submit(function(e){
            e.preventDefault();  
            const formId = $(this).attr("id");
            let newElement=null;
            if(formId==="productForm"){
                newElement = $("<div>", { "id": "newDiv", "class": "special" });
            }
            jQuery.each($( this ).serializeArray(), function(index, item) {
                console.log(item.name+ ": " + item.value);  
                if(formId==="productForm"){
                    let p = $("<p>",{"text":item.name+ ": " + item.value});
                    newElement.append(p);
                }
            });
            if(newElement!=null) $('#result').append(newElement);
        });
    });
    ;