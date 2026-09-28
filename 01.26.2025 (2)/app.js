// let cars = [
//     { brand: "Toyota", year: 2010 },
//     { brand: "Honda", year: 2015 },
//     { brand: "Ford", year: 2005 },
//     { brand: "Tesla", year: 2020 },
//     { brand: "Hyundai", year: 2012 }
//   ];
  
  
//   let Cars = cars.filter(function (car) {
//     return car.year > 2013;
//   });
  
//   console.log("manqanebi", Cars);


/////////////////////////////////////////////////////////////////



let users = [
    { username: "nini", password: "nini123" },
    { username: "lizi", password: "lizi123" },
    { username: "mari", password: "mari123" },
    { username: "nika", password: "nika123"},
    { username: "maka", password: "maka123"}
  ];
  
  let inputUsername = prompt("sheiyvane username");
  let inputPassword = prompt("sheiyvane paroli");
  
  let foundUser = users.find(function (user) {
    return user.username === inputUsername && user.password === inputPassword;
  });
  
  if (foundUser) {
    alert(`avtorizacia warmatebulia`);
  } else {
    alert("avtorizacia warumatebelia");
  }
  
