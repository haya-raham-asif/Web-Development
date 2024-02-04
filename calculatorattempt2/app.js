const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator_keys')
const display = document.querySelector('.calculator_display')
const clear = document.getElementById

keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target


    Array.from(key.parentNode.children)
      .forEach(k => k.classList.remove('is-depressed'))

    const action = key.dataset.action
    const keyContent = key.textContent
    const displayNum = display.textContent
    const previousKeyType = calculator.dataset.previousKeyType
    
    if (!action) {
      if (displayNum === '0' || previousKeyType === 'operator') {
          display.textContent = keyContent
          calculator.dataset.previousKeyType = 'number'
      } else if (previousKeyType === 'number') {
          display.textContent = displayNum + keyContent

        }
        calculator.dataset.previousKeyType = 'number'
      }
  
    if (
      action === 'add' ||
      action === 'subtract' ||
      action === 'multiply' ||
      action === 'divide' 
  ) {
    if (displayNum === '0') {

    }
      key.classList.add('is-depressed')
      calculator.dataset.previousKeyType = 'operator'
      calculator.dataset.firstValue = displayNum
      calculator.dataset.operator = action
  }
  
  if (action === 'decimal') {
    if (!displayNum.includes('.')) {
      display.textContent = displayNum + '.'
    } else if (previousKeyType === 'operator') {
      display.textContent = '0.'
    }
  
    calculator.dataset.previousKeyType = 'decimal'
  }
  

  if (action === 'clear') {
    display.textContent = "0"
    calculator.dataset.previousKeyType = 'clear'
  }
  if (action === 'calculate') {
    const calculate  = (n1, operator, n2) => {
      let result = ''
      if (operator === 'add') {
        result = parseFloat(n1) + parseFloat(n2)
      } else if (operator === 'subtract') {
        result = parseFloat(n1) - parseFloat(n2)
      } else if (operator === 'multiply') {
        result = parseFloat(n1) * parseFloat(n2)
      } else if (operator === 'divide') {
        result = parseFloat(n1) / parseFloat(n2)
      }

      return result
    }
    calculator.dataset.previousKeyType = 'calculate'
      const firstValue = calculator.dataset.firstValue
      const operator = calculator.dataset.operator
      const secondValue = displayNum
      display.textContent = calculate(firstValue, operator, secondValue)
      console.log('calculate key!')
  }
  }



})


