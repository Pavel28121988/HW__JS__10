"use strict";

let choice = document.querySelector('.car__button');
let conteiner = document.querySelector('.conteiner');

// Переменки для ИФОВ в будущем.

let BMW
let buttonBMW = document.querySelector('.car__buttonChoiceBMW')
buttonBMW.addEventListener('click', function () {
    BMW = true;
})

let MER
let buttonMER = document.querySelector('.car__buttonChoiceMER')
buttonMER.addEventListener('click', function () {
    MER = true;
})

let VW
let buttonVW = document.querySelector('.car__buttonChoiceVW')
buttonVW.addEventListener('click', function () {
    VW = true;
})

// Всплывающее окно с вопросами:

choice.addEventListener('click', function () {

    let priceN =  0;
    let litr = 0;
    let priceVW = 0.8;
    let litrVW = 6;
    let priceBMW =1.5;
    let litrBMW = 8;
    let priceMER =1.8;
    let litrMER = 10;

    let question = document.createElement("div");
    conteiner.appendChild(question);
    question.classList.add("question");

    let question__header = document.createElement("div");
    question.appendChild(question__header);
    question__header.classList.add("question__header");
    question__header.innerHTML = "Вы выбрали:";

    let question__headerImg = document.createElement('div');
    question__header.appendChild(question__headerImg);
    if (VW === true) {
        question__headerImg.classList.add("question__headerImgVW");
        priceN = priceVW;
        litr = litrVW;
    }
    if (BMW === true) {
        question__headerImg.classList.add("question__headerImgBMW");
        priceN = priceBMW;
        litr = litrBMW;
    }
    if (MER === true) {
        question__headerImg.classList.add("question__headerImgMER");
        priceN = priceMER;
        litr = litrMER;
    }

// console.log()

    let question__question = document.createElement("span");
    question.appendChild(question__question);
    question__question.classList.add("question__question");
    question__question.innerHTML = 'С какой скоростью поедите?';

    let question__questionInput = document.createElement('input');
    question__question.appendChild(question__questionInput);
    question__questionInput.classList.add('question__questionInput');
    question__questionInput.setAttribute("type", "number");
    question__questionInput.setAttribute("min", "0");
    question__questionInput.setAttribute("max", "200");

    let question__question2 = document.createElement("span");
    question.appendChild(question__question2);
    question__question2.classList.add("question__question2");
    question__question2.innerHTML = 'Ваше растояние в км?';

    let question__questionInput2 = document.createElement('input');
    question__question2.appendChild(question__questionInput2);
    question__questionInput2.classList.add('question__questionInput2');
    question__questionInput2.setAttribute("type", "number");
    question__questionInput2.setAttribute("min", "0");


    let question__question3 = document.createElement("span");
    question.appendChild(question__question3);
    question__question3.classList.add("question__question3");
    question__question3.innerHTML = 'Поехали?';

    let question__questionStart = document.createElement('button');
    question__question3.appendChild(question__questionStart);
    question__questionStart.classList.add('question__questionStart');


    // Всплывающее окно с результатами:

    question__questionStart.addEventListener('click', function () {
        question.classList.replace('question', 'question2');
        let result = document.createElement("div");
        conteiner.appendChild(result);
        result.classList.add("result");


        let auto = new Auto()        
              
        
        
        const time = auto.time(question__questionInput.value,question__questionInput2.value);
        const price = auto.price (question__questionInput2.value, priceN);
        const faer = auto.faer (question__questionInput2.value, litr);


        let result__result = document.createElement("span");
        result.appendChild(result__result);
        result__result.classList.add("result__result");
        result__result.innerHTML = 'Вы проехали: ';

        let result__resultNum = document.createElement('span');
        result__result.appendChild(result__resultNum);
        result__resultNum.classList.add('result__resultNum');
        result__resultNum.innerHTML = question__questionInput2.value + " км.";

        let result__result2 = document.createElement("span");
        result.appendChild(result__result2);
        result__result2.classList.add("result__result2");
        result__result2.innerHTML = 'Со скоростью: ';

        let result__resultNum2 = document.createElement('span');
        result__result2.appendChild(result__resultNum2);
        result__resultNum2.classList.add('result__resultNum');
        result__resultNum2.innerHTML = question__questionInput.value + " км/ч.";

        // 
        let result__result3 = document.createElement("span");
        result.appendChild(result__result3);
        result__result3.classList.add("result__result3");
        result__result3.innerHTML = 'Вы добрались за: ';

        let result__resultNum3 = document.createElement('span');
        result__result3.appendChild(result__resultNum3);
        result__resultNum3.classList.add('result__resultNum');
        result__resultNum3.innerHTML = time.toFixed(1) + " часa(ов)";
        
        // 
        let result__result4 = document.createElement("span");
        result.appendChild(result__result4);
        result__result4.classList.add("result__result4");
        result__result4.innerHTML = 'Цена поездки: ' +  price.toFixed(1) + " рубля";

        let result__result5 = document.createElement("span");
        result.appendChild(result__result5);
        result__result5.classList.add("result__result5");
        result__result5.innerHTML = 'Потрачено литров: '+ faer.toFixed(1);

    })


    let question__question4 = document.createElement("span");
    question.appendChild(question__question4);
    question__question4.classList.add("question__question4");
    question__question4.innerHTML = 'Сменить Авто';

    let question__questionStop = document.createElement('button');
    question__question4.appendChild(question__questionStop);
    question__questionStop.classList.add('question__questionStop');

    question__questionStop.addEventListener('click', function () {
        question.classList.replace('question', 'question2');
    })

    
    let Auto = function () {
        this.time = function (result__resultNum,  result__resultNum2) {
            return  result__resultNum2 /  result__resultNum
        }
        this.price = function(result__resultNum , priceN) {
            return  result__resultNum*priceN
        }
        this.faer = function(result__resultNum, litr) {
            return  litr/100*result__resultNum
        }
    }

});







