describe("Fizz Buzzer", function(){
    describe("CreateFizzBuzzWhiz",function(){

        describe("Given natural number",function(){
            [{num:1},{num:4}]
            .forEach(element => {
    
              it("Should return Whiz",function(){
                 //Arrange
                 let sut = new FizzBuzzer();
                 let input = element.num;
                 
                 //Act
                 let actual = sut.CreateFizzBuzzWhiz(input);
    
                 //Assert
                 expect(actual).toBe(input);
              })
          })
        })
 
    describe("Given prime number of 2",function(){
        [{num:2}]
        .forEach(element => {

          it("Should return Whiz",function(){
             //Arrange
             let sut = new FizzBuzzer();
             let input = element.num;
             
             //Act
             let actual = sut.CreateFizzBuzzWhiz(input);

             //Assert
             expect(actual).toBe("Whiz");
          })
      })
    })

    describe("Given number prime number divisible by 3",function(){
        [{num:3}]
        .forEach(element => {

          it("Should return Buzz",function(){
             //Arrange
             let sut = new FizzBuzzer();
             let input = element.num;
             
             //Act
             let actual = sut.CreateFizzBuzzWhiz(input);

             //Assert
             expect(actual).toBe("FizzWhiz");
          })
      })
    })

    describe("Given number prime number divisible by 5",function(){
        [{num:5}]
        .forEach(element => {

          it("Should return Buzz",function(){
             //Arrange
             let sut = new FizzBuzzer();
             let input = element.num;
             
             //Act
             let actual = sut.CreateFizzBuzzWhiz(input);

             //Assert
             expect(actual).toBe("BuzzWhiz");
          })
      })
    })





  })
})
