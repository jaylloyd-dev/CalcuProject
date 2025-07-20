const result = document.getElementById("result");

function append(value) {
    const operators = ['*','/','+','-'];
    const lastChar = result.textContent.slice(-1);

    if (result.textContent === '0'){
        result.textContent = '';
    }

    if (operators.includes(value) && operators.includes(lastChar)){
        result.textContent = result.textContent.slice(0,-1) + value;
    } else {
        result.textContent += value;
    }

    const firstChar = result.textContent.slice(0);
    if (operators.includes(firstChar)){
        result.textContent = '0';
    }

}

function clearResult() {
    result.textContent = '0';
}

function compute() {
    result.textContent = eval(result.textContent);
} 

function del() {
    
    if (result.textContent.length > 1){
        result.textContent = result.textContent.slice(0,-1);
    } else {
        result.textContent = '0';
    }
}