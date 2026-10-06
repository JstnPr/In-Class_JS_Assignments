{
  let age = 20;
  let isStudent = true;
  //
  function checkStudentDiscount(age,isStudent) {
    age < 18 || isStudent == true ? console.log('Discounted ticket granted ✅'):console.log('Regular ticket only ❌');
  }
  
  checkStudentDiscount(age, isStudent);
}