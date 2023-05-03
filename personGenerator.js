const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    FemJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Мария",
            "id_3": "Иванка",
            "id_4": "Алина",
            "id_5": "Диана",
            "id_6": "Надежда",
            "id_7": "Милана",
            "id_8": "Даниила",
            "id_9": "Елена",
            "id_10": "Арина"
        }
    }`,

    profMale: `{
        "count": 10,
        "list": {     
            "id_1": "Сантехник",
            "id_2": "Строитель",
            "id_3": "Слесарь",
            "id_4": "Электрик",
            "id_5": "Программист",
            "id_6": "Врач",
            "id_7": "Ученый",
            "id_8": "Доктор наук",
            "id_9": "Полицейский",
            "id_10": "Военный"
        }
    }`,

    profFemale: `{
        "count": 10,
        "list": {     
            "id_1": "Врач",
            "id_2": "Программист",
            "id_3": "Уборщица",
            "id_4": "Учительница",
            "id_5": "Парикмахер",
            "id_6": "Психолог",
            "id_7": "Продавщица",
            "id_8": "Менеджер",
            "id_9": "Продажник",
            "id_10": "Упаковщица"
        }
    }`,

    secondMale: `{
        "count": 10,
        "list": {     
            "id_1": "Александрович",
            "id_2": "Максимович",
            "id_3": "Иванович",
            "id_4": "Артемович",
            "id_5": "Платонович",
            "id_6": "Никитич",
            "id_7": "Михайлович",
            "id_8": "Даниилович",
            "id_9": "Егорович",
            "id_10": "Андреевич"
        }
    }`,

    secondFemale: `{
        "count": 10,
        "list": {     
            "id_1": "Александровна",
            "id_2": "Максимовна",
            "id_3": "Ивановна",
            "id_4": "Артемовна",
            "id_5": "Дмитриевна",
            "id_6": "Никитишна",
            "id_7": "Михайловна",
            "id_8": "Данииловна",
            "id_9": "Егоровна",
            "id_10": "Андреевна"
        }
    }`,


    GENDER_MALE: 'Мужчина, ',
    GENDER_FEMALE: 'Женщина, ',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function() {

        return this.randomValue(this.firstNameMaleJson);

    },


    randomSurname: () => {

        return this.randomValue(this.surnameJson);

    },
    randomGender: function () {
        if (this.randomIntNumber()===0){
            return this.GENDER_FEMALE;
        } else return this.GENDER_MALE;
    },
    randomFemname: function() {

        return this.randomValue(this.FemJson);

    },
    year: function(){
        return this.randomIntNumber(1950,2010);
    },

    randomprofmale: function() {
        return this.randomValue(this.profMale);
    },
    
    randomproffemale: function() {
        return this.randomValue(this.profFemale);
    },

    randomsecondmale: function() {
        return this.randomValue(this.secondMale);
    },
    randomsecondfem: function() {
        return this.randomValue(this.secondFemale);
    },
    month: function() {
        let a = this.randomIntNumber(12,1);
        if (a===1){
            return "Января";
        } if (a===2){
            return "Февраля";
        } if (a===3){
            return "Марта";
        } if (a===4){
            return "Апреля";
        } if (a===5){
            return "Мая";
        } if (a===6){
            return "Июня";
        } if (a===7){
            return "Июля";
        } if (a===8){
            return "Августа";
        } if (a===9){
            return "Сентября";
        } if (a===10){
            return "Октября";
        } if (a===11){
            return "Ноября";
        } else return "Декабря"
    },
    day: function() {
        if (this.month === "Январь" || "Март" || "Май" || "Июль" || "Август" || "Октябрь" || "Декабрь") {
            return this.randomIntNumber(31,1)
        } if (this.month === "Февраль"){
            return this.randomIntNumber(28,1)
        } else {
            return this.randomIntNumber(30,1)
        }
    },

   getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.fem = this.randomFemname();
        this.person.surname = this.randomSurname();
        this.person.year = this.year();
        this.person.profMale = this.randomprofmale();
        this.person.profFemale = this.randomproffemale();
        this.person.secondmale = this.randomsecondmale();
        this.person.secondfem = this.randomsecondfem();
        this.person.month = this.month();
        this.person.day = this.day();
        return this.person;
    }
};