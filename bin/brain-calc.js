#!/usr/bin/env node
import readlineSync from 'readline-sync';

const getRandomNumber = (min = 1, max = 50) => 
    Math.floor(Math.random() * (max - min + 1)) + min;


  const getRandomOperator = () => {
    const operators = ['+', '-', '*'];
    const index = Math.floor(Math.random() * operators.length);
    return operators[index];
  };
  
  const calculate = (num1, num2, operator) => {
    switch (operator) {
      case '+': return num1 + num2;
      case '-': return num1 - num2;
      case '*': return num1 * num2;
      default: throw new Error('Unknown operator');
    }
  };
  
  const calc = (name) => {
    console.log('What is the result of the expression?');
  
    for (let i = 0; i < 3; i += 1) {
      const num1 = getRandomNumber();
      const num2 = getRandomNumber();
      const operator = getRandomOperator();
      const question = `${num1} ${operator} ${num2}`;
      const correctAnswer = calculate(num1, num2, operator);
  
      console.log(`Question: ${question}`);
      const userAnswer = readlineSync.question('Your answer: ');
  
      if (Number(userAnswer) === correctAnswer) {
        console.log('Correct!');
      } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        console.log(`Let's try again, ${name}!`);
        return; 
      }
    }
  
    console.log(`Congratulations, ${name}!`);
  };

export default calc;