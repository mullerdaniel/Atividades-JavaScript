for (let i = 1; i <= 30; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("\nFizzBuzz");

    } else if (i % 3 === 0) {
        console.log("\nFizz");

    } else if (i % 5 === 0) {
        console.log("\nBuzz");

    } else {
        console.log("\n", i);
    }
}