// task 1
console.log('task1'+'\n'+'Калькулятор. Возможные методы: вкл/выкл калькулятора, получение выражения для расчета или, а и б числа с операцией, вычисление выражения, показ результата расчета.');

let Calc = function() {
    this.workCalc = function(){
       this.work = prompt('Введите "Вкл" или "Выкл" для работы с калькулятором');
        if (this.work === 'Вкл'){
            this.get();
        }
        else {
            alert('калькулятор выключен'); 
        }
    };            
    this.get = function() {
        this.a = +prompt('Введите число а');
        this.b = +prompt('Введите число b');
        this.oper = prompt('Введите операцию: (+,-,*,/)');

        this.operation();
    };
    this.operation = function() {
        switch(this.oper) {
            case '+':
                this.result = this.a + this.b;
            break;
            case '-':
                this.result = this.a - this.b;
            break;
            case '*':
                this.result = this.a * this.b;
            break;
            case '/':
                this.result = this.a / this.b;
            break;
            default: this.result = 0;
        }
        this.show();
    };
    this.show = function(){
        if (this.work === 'Вкл'){
            alert(this.a + ' ' + this.oper + ' ' + this.b + ' = ' + this.result);
        }
    };
};
let calc = new Calc();
calc.workCalc();

// task 2
console.log('task2'+'\n'+'Лампочка. Возможные методы: ввод информации о лампочке (мощность, стоимость электроэнергии), вкл./выкл. лампочки, получение расхода за горение лампочки, счетчик горения лампочки.');


let LightBulb = function() {
    this.get = function(){
        this.power = +prompt('Введите мощность лампочки в Вт: ');
        this.costPower = +prompt('Введите стоимость электроэнергии в рублях: ');

        this.bulbWork();
    };
    this.bulbWork = function(){
        this.bulbStart();
        this.bulbEnd();
        this.resultTime = this.timeEnd - this.timeStart;
        this.resultCoast = (this.resultTime / 1000) * this.costPower * this.power;
        console.log('Время работы лампочки в мс: ' + this.resultTime + '\n'+'Расход за горение лампочки в рублях: '+ this.resultCoast);
    };
    this.bulbStart = function(){
        this.bulbEnable = confirm('Чтобы включить лампочку нажмите "ок"');
        if (this.bulbEnable){
            this.timeStart = new Date();
        }
    };
    this.bulbEnd = function(){
        this.bulbDisable = confirm('Чтобы выключить лампочку нажмите "ok"');
        if(this.bulbDisable){
            this.timeEnd = new Date();
        }
    };
    
};
let lightBulb = new LightBulb ();
lightBulb.get();

// task 3 
console.log('task3'+'\n'+'Чайник. Возможные методы: ввод инф. о чайнике (мощность, объем, кол-во воды), вкл./выкл., расчет времени закипания воды.');

let Kettle = function() {
    this.get = function() {
        this.power = +prompt('Введите мощность чайника в Вт: ');
        this.volume = +prompt('Введите объем чайника в литрах: ');
        this.volumeWater = +prompt('Введите объем воды необходимый для кипячения в литрах: ');
        // if (this.volumeWater < 0 && this.volumeWater > this.volume ){
        //     console.log('Ошибка ввода данных!');
        // }
        this.waterTempStart = +prompt('Введите начальную температуру воды в градусах С от 0 до 100: ');
        // if (this.waterTempStart < 0 && this.waterTempStart > 100){
        //     return 'Ошибка ввода данных!';
        // }
        this.calcTime();
    };

    this.calcTime = function(){
        this.enableKettle = confirm('Чтобы включить чайник нажмите "Ок"');
        if (this.enableKettle) {
            let time = 4200 * 1 * this.volumeWater * (100-this.waterTempStart) / this.power;
            this.timeMinutes = Math.floor(time/60);
            this.timeSeconds = Math.floor(time - this.timeMinutes*60);
            console.log('Время закипания воды: ' + this.timeMinutes + 'минут' +  this.timeSeconds + 'секунд');
        } else {
            console.log('чайник выключен');
        }
    };
};
let kettle = new Kettle();
kettle.get();

// task 4
console.log('task4'+'\n'+'Автомобиль. Возможные методы: ввод информации об авто (марка, номер), вкл./выкл. двигателя, вкл./выкл. передачи (вперед, назад, нейтральная), движение вперед и назад (ввод информации о скорости движения), расчет пройденных километров.');

let Car = function(){
    this.carInfo = function() {
        this.brand = prompt('Введите марку авто: ');
        this.body = prompt('Введите тип кузова авто:');
        this.numberCar = +prompt('Введи номер авто');

        this.startEngine ();
    };
    this.startEngine = function(){
        let enableEngine = confirm('Чтобы запустить двигатель нажмите "ок"');
        if (enableEngine) {
            this.engine = 'switched on';
            this.timeStart = new Date().getTime();
        } else {
            this.engine = 'switched off';
        }

        this.transmission();
    };
    this.transmission = function(){
        let enableTransmission = prompt('Какую передачу вы хотели бы включить (вперед, назад, нейтраль)?');
        if (enableTransmission === 'вперед' || enableTransmission === 'назад' || enableTransmission === 'нейтраль'){
            this.transmissionCar = enableTransmission;
            if(enableTransmission === 'вперед' || enableTransmission === 'назад'){                
                var speedCar = +prompt('Введите скорость авто в км/ч: ');
                if (speedCar > 0) {
                    this.speed = speedCar;
                } else {
                    alert('не корректные данные!');
                    this.transmission();
                }
            } else {
                this.speed = 0;
            }
        } else {
            alert('не корректные данные!');
            this.transmission();
        }

        this.endEngine();
    };
    this.endEngine = function(){
        var disableEngine = confirm('Чтобы заглушить двигатель нажмите "ок"');
        if (disableEngine) {
            this.engine = 'switched off';
            this.timeEnd = new Date().getTime();
        } else {
            this.engine = 'switched on';
        }

        this.result();
    };
    this.result = function() {
        this.travelTime = Math.floor((this.timeEnd - this.timeStart) / 1000);        
        this.distanceTraveled = this.travelTime * ((this.speed*1000)/3600);
        console.log('время в пути в секундах: ' + this.travelTime);
        console.log('пройденное расстояние в метрах: ' + this.distanceTraveled);
    };
};
let car =new Car();
car.carInfo();

// task 5
console.log('task5'+'\n'+'Контакты. Возм. методы: добавление нового контакта (ввод ФИО, возраст, телефон, эл.почта), проверка введенной информации, например: проверить возраст – должен быть целым неотрицательным  ислом больше 18, вывод информации о конкретном контакте, вывод всех контактов.');

let kontactBook = [];
let Kontacts = function(){
    this.initKontakt = function(){
        var firstName = prompt('Введите Имя: ');
        if (firstName !== undefined || firstName !== null){
            this.firstName = firstName;
        } else {
            alert('не корректные данные!');
            this.initKontakt();
        }
        var lastName = prompt('Введите фамилию: ');
        if (lastName !== undefined || lastName !== null){
            this.lastName = lastName;
        } else {
            alert('не корректные данные!');
            this.initKontakt();
        }
        var midleName = prompt('Введите отчество: ');
        if (midleName !== undefined || midleName !== null){
            this.midleName = midleName;
        } else {
            alert('не корректные данные!');
            this.initKontakt();
        }
        this.initAge();
    };
    this.initAge = function(){
        var age = +prompt('Введите свой возраст: ');
        if (age > 4 && age <100){
            this.age = age;
        } else {
            alert('не корректные данные!');
            this.initAge();
        }
        this.initPhone();
    };

    this.initPhone = function(){
        var regExp = /^\+?[0-9]{2,3}[\-]?[\(]?[0-9]{2}[\)]?[\-]?[\(]?[0-9]{3}[\)]?[\-]?[\(]?[0-9]{2}[\)]?[-]?[\(]?[0-9]{2}[\)]?$/;
        var phoneNumber = prompt('Ведите номер телефона: ');
        if (regExp.test(phoneNumber) == true){
            this.phoneNumber = phoneNumber;
        } else{
            alert('не корректные данные!');
            this.initPhone();
        }
        this.initEmail();
    };

    this.initEmail = function(){
        var regExp = /[a-z0-9]{2}\-?\_?[a-z0-9]?\@[a-z]{2,11}\.[a-z]{2,11}/;
        var email = prompt('Введите Email: ');
        if (regExp.test(email) == true){
            this.email = email;
        }else {
            alert('не корректные данные!');
            this.initEmail();
        }
    };
};

let kontakts = new Kontacts();
kontakts.initKontakt();
kontactBook.push(kontakts);

let initNewKontaks = function(){
    const newKontakts = confirm('Хотите ли вы создать новый контакт?');
    if(newKontakts){
        kontakts.initKontakt(); 
    }
};
initKontakt();

for (let i=0; i<length.kontactBook; i++){
    console.log(kontactBook[i]);
}
