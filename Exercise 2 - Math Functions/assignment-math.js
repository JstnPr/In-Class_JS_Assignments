{ // Area of a Circle
  function getCircleArea(r) {
    let result = Math.PI * (r * r);
    console.log(`Given a radius of ${r}, the area of the circle is ${result.toFixed(2)}`);
    return result;
  }
  getCircleArea(25);
}

{ // Random Password Generator
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*?';
  function generatePassword(length) {
    let password = '';
    for (let l = 0; l < length; l++) {
      let i = Math.floor(Math.random() * chars.length);
      password += chars[i];
    }
    // An improvement I would add to this function would be to have the 
    // special characters and numbers be in their own strings
    // and be able to select a minimum number of each
    console.log(`The generated password is: ${password}`);
    return password;
  }
  generatePassword(15);
}

{ // Sales Tax Calculator
  function getTotal(subtotal,taxrate) {
    let exactTotal = subtotal + (subtotal * (taxrate / 100));
    let total = Math.floor(exactTotal * 100) / 100;
    console.log(`Given a Tax Rate of ${taxrate}%, the total is $${total}`);
    return total;
  }
  getTotal(10, 7.45);
}