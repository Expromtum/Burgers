 var obj = {
     name: "",
     lastName: "",
     age: 0
 };

 obj.name = "Марина";
 obj.lastName = "Сокуренко";
 obj.age = 35;

 console.log(obj.name);
 console.log(obj.lastName);
 console.log(obj.age);

 obj.profession = "programmer";

 console.log(obj.profession);


 Hello(obj);

 function Hello(human) {
     console.log("Привет, меня зовут " + human.name + " " +
         human.lastName + " и мне " + human.age + " лет!");
 }