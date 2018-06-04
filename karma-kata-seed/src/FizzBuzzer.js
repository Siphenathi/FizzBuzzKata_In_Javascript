function FizzBuzzer() {
    return {
        CreateFizzBuzz: function (num) {
            if (num > 0) {
                if (num % 3 == 0 && num % 5 == 0) {
                    return "FizzBuzz";
                }
                if (num % 3 == 0) {
                    return "Fizz";
                }
                if (num % 5 == 0) {
                    return "Buzz";
                }

                return num;
            }
        },
        CreateFizzBuzzWhiz: function (num) {
            if (num > 0) {

                if (num % 3 == 0 && isPrime(num)) {

                    return "FizzWhiz";
                }

                if (num % 5 == 0 && isPrime(num)) {

                    return "BuzzWhiz";
                }

                if (isPrime(num)) {
                    
                    return 'Whiz';
                }
                return num;
            }
        }
    }
    function isPrime(num) {
        for (var i = 2; i < num; i++)
            if (num % i === 0) return false;
        return num !== 1;
    }
}