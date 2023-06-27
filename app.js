let input = document.getElementById('input');
let output = document.getElementById('output');
let submit = document.getElementById('submit');

function perfectNumber(n) {
	let sum = 0;

	for (let i = 1; i < n; i++) {
		if (n % i === 0) {
			sum += i;
		}
	}

	if (sum === n) {
		return true;
	} else {
		return false;
	}
}

function almostPerfect(n, toleransi) {
	let sum = 0;

	for (let i = 1; i < n; i++) {
		if (n % i === 0) {
			sum += i;
		}
	}

	if (Math.abs(sum - n) <= toleransi) {
		return true;
	} else {
		return false;
	}
}

let bilangan;
let toleransi = 1;

submit.onclick = (e) => {
	e.preventDefault();
	bilangan = parseInt(input.value);

	if (input.value === '') {
		return (output.innerHTML = 'input kosong');
	} else if (perfectNumber(bilangan)) {
		return (output.innerHTML = bilangan + ' adalah bilangan sempurna.');
	} else if (almostPerfect(bilangan, toleransi)) {
		return (output.innerHTML = bilangan + ' adalah bilangan hampir sempurna.');
	}

	return (output.innerHTML = bilangan + ' bukan bilangan sempurna.');
};

// bilangan = 28;
// if (perfectNumber(bilangan)) {
// 	console.log(bilangan + ' adalah bilangan sempurna.');
// 	console.log(perfectNumber(bilangan));
// } else {
// 	console.log(bilangan + ' bukan bilangan sempurna.');
// }
