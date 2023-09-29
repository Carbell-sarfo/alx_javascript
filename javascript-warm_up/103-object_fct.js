// 8. Increment object
// Update the script by adding a new function incr that increments the integer value


const myObject = {
    type: 'object',
    value: 12,
    incr: function () {
      this.value++;
    }
  };
  
  console.log({ type: myObject.type, value: myObject.value });
  
  myObject.incr();
  console.log({ type: myObject.type, value: myObject.value, incr: myObject.incr });
  
  myObject.incr();
  console.log({ type: myObject.type, value: myObject.value, incr: myObject.incr });
  
  myObject.incr();
  console.log({ type: myObject.type, value: myObject.value, incr: myObject.incr });