var json_data = {
    my_Name: "Kavitha",
    Email: "kavitha4097@gmail.com",
    Date_of_birth: "18.07.1997",
    Gender: "Female",
    Languages_known: ["English", "Tamil", "Malayalam", "Hindi"],
  };
  const count = Object.keys(json_data);
  
  // for loop
  for (let i = 0; i < count.length; i++) {
    console.log(json_data[count[i]]);
  }
  
  // for in
  for (let keys in json_data) {
    console.log(json_data[keys]);
  }
  
  // for Of
  for (let i of count) {
    console.log(json_data[i]);
  }
  
  // for each
  count.forEach(values);
  function values(item) {
    console.log(json_data[item]);
  }