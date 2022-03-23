function convertToBinary1(number) {
    if (number.match(/^[-\+]?\d+/)) {
        let num = Math.abs(Number(number));
        let binary = (num % 2).toString();
        for (; num > 1;) {
            num = parseInt(num / 2);
            binary = (num % 2) + (binary);
        }
        if (number > 0) {
            return (binary);
        } else {
            return (-binary);
        }
    } else {
        return ('Введен некорректный символ');
    }
}

function convertToEight(number) {
    if (number.match(/^[-\+]?\d+/)) {
        let num = Math.abs(Number(number));
        let binary = (num % 8).toString();
        for (; num > 7;) {
            num = parseInt(num / 8);
            binary = (num % 8) + (binary);
        }
        if (number > 0) {
            return (binary);
        } else {
            return (-binary);
        }
    } else {
        return ('Введен некорректный символ');
    }
}

function convertToSix(number) {
    if (number.match(/^[-\+]?\d+/)) {
        let numb = Math.abs(Number(number));
        let chislo = [];
        while (numb > 0) {
            let i = numb % 16;
            if (i == 10) {
                chislo.push('A');
            } else if (i == 11) {
                chislo.push('B');
            } else if (i == 12) {
                chislo.push('C');
            } else if (i == 13) {
                chislo.push('D');
            } else if (i == 14) {
                chislo.push('E');
            } else if (i == 15) {
                chislo.push('F');
            } else {
                chislo.push(String(i));
            }
            numb = Math.floor(numb / 16);
        }
        chislo2 = chislo.reverse();

        if (number > 0) {
            return (chislo2.join(''));
        } else {
            return ('-' + chislo2.join(''));
        }
    } else {
        return ('Введен некорректный символ');
    }
}

function convertTwoToTen(number) {
    if (number.match(/^[-\+]?\d+/g)) {
        let numb = Math.abs(number);
        let chislo = ("" + numb).split("").map(Number);
        let rezult = 0;

        for (let i = 0; i < chislo.length; i++) {
            if (chislo[i] == 0 || chislo[i] == 1) {
                rezult = rezult + chislo[i] * Math.pow(2, chislo.length - (i + 1));
            } else {
                return ('Введено некорректное число');
                debugger
            }

        }
        if (number > 0) {
            return (rezult);
        } else {
            return (-rezult);
        }
    } else {
        return ('Введен некорректный символ');
    }
}

function convertTwoToEight(number) {
    if (number.match(/^[-\+]?\d+/g)) {
        let numb = Math.abs(Number(number));
        let chislo = ("" + numb).split("").map(Number);
        let rezult = 0;

        for (let i = 0; i < chislo.length; i++) {
            if (chislo[i] == 0 || chislo[i] == 1) {
                rezult = rezult + chislo[i] * Math.pow(2, chislo.length - (i + 1));
            } else {
                return ('Введено некорректное число');
                debugger
            }
        }
        let num = rezult;
        let binary = (num % 8).toString();
        for (; num > 7;) {
            num = parseInt(num / 8);
            binary = (num % 8) + (binary);
        }
        if (number > 0) {
            return (binary);
        } else {
            return (-binary);
        }
    } else {
        return ('Введен некорректный символ');
    }
}

function convertTwoToSix(number) {
    if (number.match(/^[-\+]?\d+/g)) {
        let num = Math.abs(Number(number));
        let tenth = ("" + num).split("").map(Number);
        let rezult = 0;

        for (let i = 0; i < tenth.length; i++) {
            if (tenth[i] == 0 || tenth[i] == 1) {
                rezult = rezult + tenth[i] * Math.pow(2, tenth.length - (i + 1));
            } else {
                return ('Введено некорректное число');
                debugger
            }
        }
        let numb = rezult;
        let chislo = [];
        while (numb > 0) {
            let i = numb % 16;
            if (i == 10) {
                chislo.push('A');
            } else if (i == 11) {
                chislo.push('B');
            } else if (i == 12) {
                chislo.push('C');
            } else if (i == 13) {
                chislo.push('D');
            } else if (i == 14) {
                chislo.push('E');
            } else if (i == 15) {
                chislo.push('F');
            } else {
                chislo.push(String(i));
            }
            numb = Math.floor(numb / 16);
        }
        chislo2 = chislo.reverse();
        if (number > 0) {
            return (chislo2.join(''));
        } else {
            return ('-' + chislo2.join(''));
        }
    } else {
        return ('Введен некорректный символ');
    }
}


function convertEightToTen(number) {
    if (number.match(/^[-\+]?\d+/g)) {
        let numb = Math.abs(Number(number));
        let chislo = ("" + numb).split("").map(Number);
        let rezult = 0;

        for (let i = 0; i < chislo.length; i++) {
            if (chislo[i] != 9) {
                rezult = rezult + chislo[i] * Math.pow(8, chislo.length - (i + 1));
            } else {
                return ('Введено некорректное число');
                debugger
            }

        }
        if (number > 0) {
            return (rezult);
        } else {
            return (-rezult);
        }
    } else {
        return ('Введен некорректный символ');
    }
}

function convertEightToTWo(number) {
    if (number.match(/^[-\+]?\d+/g)) {
        let numb = Math.abs(Number(number));
        let chislo = ("" + numb).split("").map(Number);
        let rezult = 0;

        for (let i = 0; i < chislo.length; i++) {
            if (chislo[i] != 9) {
                rezult = rezult + chislo[i] * Math.pow(8, chislo.length - (i + 1));
            } else {
                return ('Введено некорректное число');
                debugger
            }
        }

        let num = rezult;
        let binary = (num % 2).toString();
        for (; num > 1;) {
            num = parseInt(num / 2);
            binary = (num % 2) + (binary);
        }
        if (number > 0) {
            return (binary);
        } else {
            return (-binary);
        }
    } else {
        return ('Введен некорректный символ');
    }
}


function convertEightYoSix(number) {
    if (number.match(/^[-\+]?\d+/g)) {
        let num = Math.abs(Number(number));
        let tenth = ("" + num).split("").map(Number);
        let rezult = 0;

        for (let i = 0; i < tenth.length; i++) {
            if (tenth[i] != 9) {
                rezult = rezult + tenth[i] * Math.pow(8, tenth.length - (i + 1));
            } else {
                return ('Введено некорректное число');
                debugger
            }

        }
        let numb = rezult;
        let chislo = [];
        while (numb > 0) {
            let i = numb % 16;
            if (i == 10) {
                chislo.push('A');
            } else if (i == 11) {
                chislo.push('B');
            } else if (i == 12) {
                chislo.push('C');
            } else if (i == 13) {
                chislo.push('D');
            } else if (i == 14) {
                chislo.push('E');
            } else if (i == 15) {
                chislo.push('F');
            } else {
                chislo.push(String(i));
            }
            numb = Math.floor(numb / 16);
        }
        chislo2 = chislo.reverse();

        if (number > 0) {
            return (chislo2.join(''));
        } else {
            return ('-' + chislo2.join(''));
        }
    } else {
        return ('Введен некорректный символ');
    }

}

function convertSixToTen(number) {
    if (number.match(/^[-\+]?[0-9A-F]*$/i)) {
        let tenth = ("" + number).split("").map(String);
        let rezult = 0;

        for (let i = 0; i < tenth.length; i++) {
            if (tenth[i] == 'A') {
                tenth[i] = 10;
            } else if (tenth[i] == 'B') {
                tenth[i] = 11;
            } else if (tenth[i] == 'C') {
                tenth[i] = 12;
            } else if (tenth[i] == 'D') {
                tenth[i] = 13;
            } else if (tenth[i] == 'E') {
                tenth[i] = 14;
            } else if (tenth[i] == 'F') {
                tenth[i] = 15;
            }
            rezult = rezult + tenth[i] * Math.pow(16, tenth.length - (i + 1));
        }
        return rezult;

    } else {
        return ('Введен некорректный символ');
    }
}

function convertSixToTwo(number) {
    if (number.match(/^[-\+]?[0-9A-F]*$/i)) {
        let tenth = ("" + number).split("").map(String);
        let rezult = 0;

        for (let i = 0; i < tenth.length; i++) {
            if (tenth[i] == 'A') {
                tenth[i] = 10;
            } else if (tenth[i] == 'B') {
                tenth[i] = 11;
            } else if (tenth[i] == 'C') {
                tenth[i] = 12;
            } else if (tenth[i] == 'D') {
                tenth[i] = 13;
            } else if (tenth[i] == 'E') {
                tenth[i] = 14;
            } else if (tenth[i] == 'F') {
                tenth[i] = 15;
            }
            rezult = rezult + tenth[i] * Math.pow(16, tenth.length - (i + 1));
        }
        let num = rezult;
        let binary = (num % 2).toString();
        for (; num > 1;) {
            num = parseInt(num / 2);
            binary = (num % 2) + (binary);
        }
        return (binary);

    } else {
        return ('Введен некорректный символ');
    }
}

function convertSixToEight(number) {
    if (number.match(/^[-\+]?[0-9A-F]*$/i)) {
        let tenth = ("" + number).split("").map(String);
        let rezult = 0;

        for (let i = 0; i < tenth.length; i++) {
            if (tenth[i] == 'A') {
                tenth[i] = 10;
            } else if (tenth[i] == 'B') {
                tenth[i] = 11;
            } else if (tenth[i] == 'C') {
                tenth[i] = 12;
            } else if (tenth[i] == 'D') {
                tenth[i] = 13;
            } else if (tenth[i] == 'E') {
                tenth[i] = 14;
            } else if (tenth[i] == 'F') {
                tenth[i] = 15;
            }
            rezult = rezult + tenth[i] * Math.pow(16, tenth.length - (i + 1));
        }
        let num = rezult;
        let binary = (num % 8).toString();
        for (; num > 7;) {
            num = parseInt(num / 8);
            binary = (num % 8) + (binary);
        }
        return (binary);

    } else {
        return ('Введен некорректный символ');
    }
}





function testConvertToBinary1() {
    let number = String(12);
    console.log(convertToBinary1(number));

    number = String(-12);
    console.log(convertToBinary1(number));

    number = 'f45';
    console.log(convertToBinary1(number));
}

function testConvertToEight() {
    let number = String(12);
    console.log(convertToEight(number));

    number = String(-12);
    console.log(convertToEight(number));

    number = 'f45';
    console.log(convertToEight(number));
}

function testConvertToSix() {
    let number = String(12);
    console.log(convertToSix(number));

    number = String(-12);
    console.log(convertToSix(number));

    number = 'f45';
    console.log(convertToSix(number));
}



function testConvertTwoToTen() {
    let number = String(101101);
    console.log(convertTwoToTen(number));

    number = String(-10110);
    console.log(convertTwoToTen(number));

    number = 'f45';
    console.log(convertTwoToTen(number));

    number = String(458);
    console.log(convertTwoToTen(number));
}

function testConvertTwoToEight() {
    let number = String(101101);
    console.log(convertTwoToEight(number));

    number = String(-10110);
    console.log(convertTwoToEight(number));

    number = 'f45';
    console.log(convertTwoToEight(number));

    number = String(458);
    console.log(convertTwoToEight(number));
}

function testConvertTwoToSix() {
    let number = String(101101);
    console.log(convertTwoToSix(number));

    number = String(-101101);
    console.log(convertTwoToSix(number));

    number = 'f45';
    console.log(convertTwoToSix(number));

    number = String(458);
    console.log(convertTwoToSix(number));
}

function testConvertEightToTWo() {
    let number = String(56);
    console.log(convertEightToTWo(number));

    number = String(-58);
    console.log(convertEightToTWo(number));

    number = 'f45';
    console.log(convertEightToTWo(number));

    number = String(79);
    console.log(convertEightToTWo(number));
}

function testConvertEightToTen() {
    let number = String(56);
    console.log(convertEightToTen(number));

    number = String(-58);
    console.log(convertEightToTen(number));

    number = 'f45';
    console.log(convertEightToTen(number));

    number = String(79);
    console.log(convertEightToTen(number));
}

function testConvertEightYoSix() {
    let number = String(56);
    console.log(convertEightYoSix(number));

    number = String(-58);
    console.log(convertEightYoSix(number));

    number = 'f45';
    console.log(convertEightYoSix(number));

    number = String(79);
    console.log(convertEightYoSix(number));
}



function testConvertSixToTwo() {
    let number = 'A56';
    console.log(convertSixToTwo(number));

    number = String(75);
    console.log(convertSixToTwo(number));

    number = '89P';
    console.log(convertSixToTwo(number));

}

function testConvertSixToEight() {
    let number = 'A56';
    console.log(convertSixToEight(number));

    number = String(75);
    console.log(convertSixToEight(number));

    number = '89P';
    console.log(convertSixToEight(number));

}

function testConvertSixToTen() {
    let number = 'A56';
    console.log(convertSixToTen(number));

    number = String(75);
    console.log(convertSixToTen(number));

    number = '89P';
    console.log(convertSixToTen(number));

}


















let otv=document.querySelector('.place');
let p=document.querySelector('p');

let btn1 = document.getElementById('b1');
btn1.addEventListener('click', () => {
    let number = document.querySelector('input').value;
    p.innerHTML= '= ' + convertToBinary1(number);
    otv.classList.add('open');
    testConvertToBinary1();
})
let btn2 = document.getElementById('b2');
btn2.addEventListener('click', () => {
    let number = document.querySelector('input').value;
    p.innerHTML= '= ' + convertToEight(number);
    otv.classList.add('open');
    testConvertToEight();
})

let btn3 = document.getElementById('b3');
btn3.addEventListener('click', () => {
    let number = document.querySelector('input').value;
    p.innerHTML= '= ' + convertToSix(number);
    otv.classList.add('open');
    testConvertToSix();
})

let btn4 = document.getElementById('b4');
btn4.addEventListener('click', () => {
    let number = document.querySelector('input').value;
    p.innerHTML= '= ' + convertTwoToTen(number);
    otv.classList.add('open');
    testConvertTwoToTen();
})

let btn5 = document.getElementById('b5');
btn5.addEventListener('click', () => {
    let number = document.querySelector('input').value;
    p.innerHTML= '= ' + convertTwoToEight(number);
    otv.classList.add('open');
    testConvertTwoToEight();
})

let btn6 = document.getElementById('b6');
btn6.addEventListener('click', () => {
    let number = document.querySelector('input').value;
    p.innerHTML= '= ' + convertTwoToSix(number);
    otv.classList.add('open');
    testConvertTwoToSix();
})

let btn7 = document.getElementById('b7');
btn7.addEventListener('click', () => {
    let number = document.querySelector('input').value;
    p.innerHTML= '= ' + convertEightToTWo(number);
    otv.classList.add('open');
    testConvertEightToTWo();
})

let btn8 = document.getElementById('b8');
btn8.addEventListener('click', () => {
    let number = document.querySelector('input').value;
    p.innerHTML= '= ' + convertEightToTen(number);
    otv.classList.add('open');
    testConvertEightToTen();
})

let btn9 = document.getElementById('b9');
btn9.addEventListener('click', () => {
    let number = document.querySelector('input').value;
    p.innerHTML= '= ' + convertEightYoSix(number);
    otv.classList.add('open');
    testConvertEightYoSix();
})

let btn10 = document.getElementById('b10');
btn10.addEventListener('click', () => {
    let number = document.querySelector('input').value;
    p.innerHTML= '= ' + convertSixToTwo(number);
    otv.classList.add('open');
    testConvertSixToTwo();
})

let btn11 = document.getElementById('b11');
btn11.addEventListener('click', () => {
    let number = document.querySelector('input').value;
    p.innerHTML= '= ' + convertSixToEight(number);
    otv.classList.add('open');
    testConvertSixToEight();
})

let btn12 = document.getElementById('b12');
btn12.addEventListener('click', () => {
    let number = document.querySelector('input').value;
    p.innerHTML= '= ' + convertSixToTen(number);
    otv.classList.add('open');
    testConvertSixToTen();
})