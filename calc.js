
const numbers = document.querySelectorAll('.btnDes');
const operand = document.querySelectorAll('.operand');
const current = document.querySelector('.current');
const previous = document.querySelector('.previous');
const equals = document.querySelector('.equals');
const prevOperand = document.querySelector('.prevOperand');
const clear = document.querySelector('.allClear');
const btnHide = document.querySelector('.invisibol');
const btnAll = document.querySelectorAll('button');

var numHolder = 0;
numbers.forEach(function(num){
	num.addEventListener('click',function(x){
		if(numHolder === 0){
			current.innerHTML = '';
			numHolder=1;
		}
		if(num.innerHTML == '.' && current.innerHTML.includes('.')){
			return;
		}
		if(numHolder === 1){
			previous.innerHTML = '';
			prevOperand.innerHTML = '';
		}
		numHolder = 2;
		current.innerHTML += num.innerText;
	})
})

operand.forEach(function(oper){
	oper.addEventListener('click', function(){
		if(current.innerHTML == '' && previous.innerHTML == ''){
			return;
		}
		if(numHolder === 0){
			return;
		}
		if(previous.innerHTML != ''){
			prevOperand.innerHTML = oper.innerHTML;
			return;
		}
		previous.innerHTML = current.innerHTML;
		prevOperand.innerHTML = oper.innerHTML;
		current.innerHTML = ""; // <=== figure this out later
	})
})

clear.addEventListener('click', function(){
	current.innerHTML = '0'; // <=== figure this out later
	numHolder = 0;
	previous.innerHTML = '';
	prevOperand.innerHTML = '';	
})

equals.addEventListener('click', function(){
	const a = parseFloat(previous.innerHTML);
	const b = parseFloat(current.innerHTML);
	if(current.innerHTML === ''){
		return;
	}
	numHolder = 0;
	switch(prevOperand.innerHTML)
	{
		case "+":
			current.innerHTML = a + b;
			break;
		case "-":
			current.innerHTML = a - b;
			break;
		case "*":
			current.innerHTML = a * b;
			break;
		case "/":
			current.innerHTML = a / b;
	}
})

document.querySelector('.delete').addEventListener('click', function(){
	current.innerHTML  = current.innerHTML.substring(0, current.innerHTML.length-1)
	if(current.innerHTML === ''){
		current.innerHTML = '0';
		numHolder = 0;
	}
})

btnHide.addEventListener('click', function(){
	numbers.forEach(function(a){
		if(a.style.backgroundColor == 'black'){
			a.style.backgroundColor = '#87CEFA';
			a.style.transition = '1s ease'
		}
		else{
			a.style.backgroundColor = 'black';
			a.style.color = 'white';
			a.style.transition = '1s ease';
		}
		
	})
})