class Stack {
    constructor() {
        this.items = []
        this.count = 0
    }
    push(ele) {
        this.items[this.count] = ele
        this.count++;
        return `${ele} added to the ${this.count - 1} index of the stack`
    }
    pop() {
        if (this.count == 0) return null;
        let deleteItem = this.items[this.count - 1];
        this.count--;
        console.log(`${deleteItem} got removed from the stack`);
        return deleteItem;
    }
    peek() {
        return `${this.items[this.count - 1]} is the top item of the stack`;
    }
    isEmpty() {
        return this.count == 0 ? "the stack is empty" : "the stack is NOT empty";
    }
}

const stack = new Stack();
// stack.push(10);
// stack.push(20);
// console.log(stack.peek()); // Output: 20
// console.log(stack.pop());  // Output: 20
// console.log(stack.peek()); // Output: 10
// console.log(stack.isEmpty()); // Output: false


class Person {
    constructor(userName, userAge) {
        this.userName = userName
        this.userAge = userAge
    }
    greet() {
        return `Hi, my name is ${this.userName} and I am ${this.userAge} years old.`
    }
}

const person = new Person("Alice", 25);
// console.log(person.greet()); // Output: Hi, my name is Alice and I am 25 years old.


class Shape {
    constructor() { }
    getArea() { return 0 }
}
class Rectangle extends Shape {
    constructor(width, height) {
        super()
        this.width = Number(width);
        this.height = Number(height);
    }
    getArea() {
        return this.width * this.height;
    }
}
class Circle extends Shape {
    constructor(radius) {
        super()
        this.radius = Number(radius);
    }
    getArea() {
        return Math.PI * (this.radius ** 2);
    }

}

// const rect = new Rectangle(5, 10);
// console.log(rect.getArea()); // Output: 50

// const circ = new Circle(3);
// console.log(circ.getArea()); // Output: 28.27 (approximately)


class BankAccount {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = Number(balance);
    }
    deposit(amount) {
        this.balance += amount;
        //return this.balance;
    }
    withdraw(amount) {
        if (this.balance < amount) {
            console.log("No funds left");
        }
        else {
            this.balance -= amount;
        }

    }
    getBalance() {
        return this.balance;
    }
}

// const account = new BankAccount("12345", 1000);
// account.deposit(500);
// console.log(account.getBalance()); // Output: 1500
// account.withdraw(2000); // Throws error: Insufficient funds
// account.withdraw(200); 
// console.log(account.getBalance()); // Output: 1300



