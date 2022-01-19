const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equal]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const prevOpearandTextElement = document.querySelector('[data-prev-operand] ');
const currentOpearandTextElement = document.querySelector('[data-current-operand ]');


class Calculator {
    constructor(prevOpearandTextElement, currentOpearandTextElement) {
        this.prevOpearandTextElement = prevOpearandTextElement;
        this.currentOpearandTextElement = currentOpearandTextElement;
        this.clear()
    }

    clear() {
        this.prevOperand = '';
        this.currentOperand = '';
        this.operation = undefined;

    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand + number
    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return
        if (this.prevOperand !== '') {
            this.compute()
        }
        this.operation = operation;
        this.prevOperand = this.currentOperand;
        this.currentOperand = ''
    }

    compute() {
        let computation;
        const prev = parseFloat(this.prevOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
            case '+':
                computation = prev + current;
                break
            case '-':
                computation = prev - current;
                break
            case '*':
                computation = prev * current;
                break
            case '/':
                computation = prev / current;
                break
            default:
                return
        }
        this.currentOperand = computation;
        this.operation = undefined;
        this.prevOperand = ''
    }

    updateDisplay() {
        this.currentOpearandTextElement.innerText = this.currentOperand;
        this.prevOpearandTextElement.innerText = this.prevOperand;
        if (this.operation != null) {
            this.prevOpearandTextElement.innerText = `${this.prevOperand} ${this.operation} `
        }
    }

}
const calculator = new Calculator(prevOpearandTextElement, currentOpearandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        // console.log(button);
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
});

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
});


equalsButton.addEventListener('click', () => {
    calculator.compute();
    calculator.updateDisplay();

})

allClearButton.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
})

deleteButton.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();

})


console.log(calculator);


