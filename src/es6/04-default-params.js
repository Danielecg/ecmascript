function newUser(name,age,country) {
    var name = name || "Oscar";
    var age = age || 34;
    var country = country || "MX";
    console.log(name,age,country);
}

newUser();
newUser("Daniel",26,"Chile");

function newAdmin(name = "Oscar", age=32, country= "Chile") {
    console.log(name,age,country);
}

newAdmin()
newAdmin("Ana",26,"Peru");

