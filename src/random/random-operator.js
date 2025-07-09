const getRandomOperator = () => {
  const operators = ['+', '-', '*']
  const index = Math.floor(Math.random() * operators.length)
  return operators[index]
}

export default getRandomOperator
