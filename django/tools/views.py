from django.shortcuts import render
import re

# Create your views here.
def index(request):
    return render(request, 'tools/index.html', {})

def calculator(request):
    # number: This parameter will be showed in the result box.
    # result: This parameter will be evaluated by my_eval method.
    # message: Error message
    number = ''
    result = ''
    message = ''
    pattern = re.compile("[+\-*/]")

    if request.POST.__contains__("number"):
        result = request.POST["number"]

        # If the user press number button after pressing "=", renew the result
        result = re.split('=', result)[-1]

        # Only show the last operand in the result box.
        number = pattern.split(result)[-1]

        # Trim the leading 0.
        if number[0] == '0' and len(number) > 1:
            number = number[1:]

            operator = pattern.search(result)
            if operator:
                operator_position = [m.start() for m in pattern.finditer(result)][-1]
                result = result[:operator_position + 1] + number
            else:
                result = number

        # If the number is larger than 1,000,000, set it to 1,000,000
        if int(number) > 1000000:
            number = '1000000'

            operator = pattern.search(result)
            if operator:
                operator_position = [m.start() for m in pattern.finditer(result)][-1]
                result = result[:operator_position + 1] + number
            else:
                result = number


    if request.POST.__contains__("operator"):
        result = request.POST["operator"]

        # If the user presses continuous operator, only the last one works.
        if len(result) >= 2 and result[-2] in "+-*/=":
            result = result[:-2] + result[-1]

        number = my_eval(result[0:-1])

        # If divide by zero
        if number == 'XX':
            message = 'Divide By Zero Error!'
            number = ''
        # If integer overflow
        elif number == 'POF':
            message = 'Integer over flow!'
            number = '1000000'
        elif number == 'NOF':
            message = 'Integer over flow!'
            number = '-1000000'

        result = number + result[-1:]


    # number: This parameter will be showed in the result box.
    # result: This parameter will be evaluated by my_eval method.
    # message: Error message
    context = {
        'number': number,
        'result': result,
        'message': message,
    }
    return render(request, 'tools/calculator.html', context)


'''
    my_eval:
        Evaluate the expression and return the result.  If the result is larger
        than 1000000, return 'POF' code.  If the result is smaller than
        -1000000, return 'NOF' code.
    expression: The expression to be evaluated.
    return int: return the result if it is valid, else return the error code.

'''
def my_eval(expression):
    pattern = re.compile("[+\-*/]")

    operator = pattern.findall(expression)

    if operator:
        numbers = pattern.split(expression)

        operand_1 = 0
        operand_2 = 0

        # Case: "+1", "-25".
        if len(numbers) == 2 and expression[0] in "+-*/":
            if expression[0] == '-':
                return expression
            elif expression[0] == '+':
                return expression[1:]
            elif expression[0] == '*':
                return '0'
            elif expression[0] == '/':
                return '0'
        # Case: "-2*5", "-7+7"
        elif expression[0] == '-':
            operand_1 = -int(numbers[1])
            operand_2 = int(numbers[2])
        # Case: "+25*36", "+25+7"
        elif expression[0] == '+':
            operand_1 = int(numbers[1])
            operand_2 = int(numbers[2])
        # General Case: "1+1", "666*666"
        else:
            operand_1 = int(numbers[0])
            operand_2 = int(numbers[1])


        result = 0
        # Handle each operator.
        if operator[-1] == '+':
            result = operand_1 + operand_2
        elif operator[-1] == '-':
            result = operand_1 - operand_2
        elif operator[-1] == '*':
            result = operand_1 * operand_2
        elif operator[-1] == '/':
            # Handle divide by 0.
            if operand_2 == 0:
                result = 0
                return 'XX'
            else:
                result = operand_1 / operand_2
        elif operator[0] == '=':
            result = operand_1 + operand_2

        # If the number overflow, set it to the max/min value.
        if result > 1000000:
            result = 'POF' # Positive overflow
        elif result < -1000000:
            result = 'NOF' # Negative overflow

        return str(result)

    else:
        return expression
