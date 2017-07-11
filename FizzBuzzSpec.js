describe("FizzBuzz", function() {
  var arr;
  
  
  
  
  beforeEach(function() {
    arr = FizzBuzz();

  });

  it("Length ok", function() {
    a = arr.length
    expect(a).toBe(100);
  });

  it("FizzBuzz ok", function() {
    var countFizzBuzz = 0
    for (i=0; i<arr.length; i++) {
      if (arr[i] === 'FizzBuzz') {
        countFizzBuzz++
      }
    }
    expect(countFizzBuzz).toBe(Math.floor(100/15));
  });

  it("Fizz ok", function() {
    var countFizz = 0
    var countMult3 = 0
    for (i=0; i<arr.length; i++) {
      if (arr[i] === 'Fizz') {
        countFizz++
      }
      if ((i+1)%3 === 0 && (i+1)%5 !== 0) {
        countMult3++
      }
    }

    expect(countFizz).toBe(countMult3);
  });

  it("Buzz ok", function() {
    var countBuzz = 0
    var countMult5 = 0
    for (i=0; i<arr.length; i++) {
      if (arr[i] === 'Buzz') {
        countBuzz++
      }
      if ((i+1)%5 === 0 && (i+1)%3 !== 0) {
        countMult5++
      }
    }
    expect(countBuzz).toBe(countMult5);
  });

  it("Numbers ok", function() {
    var countNumbers = 0
    var countNotMult = 0
    for (i=0; i<arr.length; i++) {
      if (typeof arr[i] === 'number') {
        countNumbers++
      }
      if ((i+1)%3 !== 0 && (i+1)%5 !== 0) {
        countNotMult++
      }
    }
    expect(countNumbers).toBe(countNotMult);
  });


  
});
