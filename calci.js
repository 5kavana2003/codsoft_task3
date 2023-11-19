document.addEventListener('DOMContentLoaded',function(){
    const display=document.getElementById('result');
    let currentInput='0';
    let currentoperator='';
    let firstOperand=0;
    let waitingForSecondOperand=false;

    const updateDisplay=()=>{
        display.value=currentInput;
    };
    const inputDigit=(digit)=>{
        if(currentInput==='0'|| waitingForSecondOperand){
            currentInput=digit;
            waitingForSecondOperand=false;
        }
        else{
            currentInput += digit;

        }
        updateDisplay();
        };

        const inputDecimal=()=>{
            if(!currentInput.includes('.')){
                currentInput += '.';
            }updateDisplay();
            };
            
            const handleOperator=(operator)=>{
                if(currentoperator && !waitingForSecondOperand){
                    calculate();

                }
                firstOperand=parseFloat(currentInput);
                currentoperator=operator;
                waitingForSecondOperand=true;
            };

            const calculate=()=>{
                const secondOperand=parseFloat(currentInput);
                switch(currentoperator){
                    case '+':
                        currentInput=(firstOperand + secondOperand).toString();
                        break;
                        case '-':
                        currentInput=(firstOperand - secondOperand).toString();
                        break;
                        case '*':
                        currentInput=(firstOperand * secondOperand).toString();
                        break;
                        case '/':
                            if(secondOperand !== 0){
                        currentInput=(firstOperand / secondOperand).toString();
                            }
                            else{
                                currentInput='Error';
                            }
                        break;
                }
                currentoperator = '';
                updateDisplay();
            };
            const clear= ()=>{
                currentInput='0';
                currentoperator='';
                firstOperand=0;
                waitingForSecondOperand=false;
                updateDisplay();
            };
            document.getElementById('clear').addEventListener('click',clear);
            document.getElementById('zero').addEventListener('click',() => inputDigit('0'));
            document.getElementById('one').addEventListener('click',() => inputDigit('1'));
            document.getElementById('two').addEventListener('click',() => inputDigit('2'));
            document.getElementById('three').addEventListener('click',() => inputDigit('3'));
            document.getElementById('four').addEventListener('click',() => inputDigit('4'));
            document.getElementById('five').addEventListener('click',() => inputDigit('5'));
            document.getElementById('six').addEventListener('click',() => inputDigit('6'));
            document.getElementById('seven').addEventListener('click',() => inputDigit('7'));
            document.getElementById('eight').addEventListener('click',() => inputDigit('8'));
            document.getElementById('nine').addEventListener('click',() => inputDigit('9'));
            document.getElementById('decimal').addEventListener('click',  inputDecimal);
            document.getElementById('add').addEventListener('click',() => handleOperator('+'));
            document.getElementById('subtract').addEventListener('click',() => handleOperator('-'));
            document.getElementById('multiply').addEventListener('click',() => handleOperator('*'));
            document.getElementById('divide').addEventListener('click',() => handleOperator('/'));
            document.getElementById('equal').addEventListener('click',calculate);

            updateDisplay();


        });
   