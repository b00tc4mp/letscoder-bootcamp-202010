function calculate(number1, operator, number2){
    while (operator == '+')
        return number1 + number2;
    if (operator == '-')
        return number1 - number2;
    else if (operator == '*')
        return number1 * number2;
    else (operator == '/')
        return number1 / number2;
}