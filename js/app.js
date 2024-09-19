class Calculator {
    constructor(num1, num2, operation) {
        this.num1 = num1;
        this.num2 = num2;
        this.operation = operation;
    }

    calculate() {
        switch (this.operation) {
            case 'add':
                return this.num1 + this.num2;
            case 'subtract':
                return this.num1 - this.num2;
            case 'multiply':
                return this.num1 * this.num2;
            case 'divide':
                return this.num2 !== 0 ? this.num1 / this.num2 : 'Error: Division by zero';
            default:
                return 'Error: Invalid operation';
        }
    }
}

document.getElementById('calculateBtn').addEventListener('click', () => {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;

    const calculator = new Calculator(num1, num2, operation);
    
    
    const result = calculator.calculate();
    document.getElementById('result').innerText = result;
    
});
