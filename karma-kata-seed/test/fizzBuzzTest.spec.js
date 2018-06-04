describe("Fizz Buzzer", function(){
    describe("CreateFizzBuzz",function(){

        describe("Given natural numbers that are not divisible by 3 and 5",function(){
            [{n:1},{n:2},{n:4}]
            .forEach(element => {
            
            it("Should return ", function(){
                //Arrange
                let sut = new FizzBuzzer();
                let input = element.n;
                
                //Act
                let actual = sut.CreateFizzBuzz(input);

                //Assert
                expect(actual).toEqual(input);
            })
        })
    });
       
        describe("Given numbers divisible by 3", function(){
            [{n:3},{n:6},{n:9}]
            .forEach(element => {
            
            it("Should return fizz", function(){
                //Arrange
                let sut = new FizzBuzzer();
                let input = element.n;
                
                //Act
                let actual = sut.CreateFizzBuzz(input);

                //Assert
                expect(actual).toBe("Fizz");
            })
        })
    })

      describe("Given numbers divisible by 5",function(){
        [{num:5},{num:10},{num:25}]
        .forEach(element => {

          it("Should return Buzz",function(){
             //Arrange
             let sut = new FizzBuzzer();
             let input = element.num;
             
             //Act
             let actual = sut.CreateFizzBuzz(input);

             //Assert
             expect(actual).toBe("Buzz");
          })
      })
    })
    
    describe("Given numbers divisible by 5",function(){
        [{num:5},{num:10},{num:25}]
        .forEach(element => {

          it("Should return Buzz",function(){
             //Arrange
             let sut = new FizzBuzzer();
             let input = element.num;
             
             //Act
             let actual = sut.CreateFizzBuzz(input);

             //Assert
             expect(actual).toBe("Buzz");
          })
      })
    })
  })
})
