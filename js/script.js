'use strict';
(function (){

    class Human {
        name = null
        surname = null
        yearOfBirth = 0

        constructor(name, surname, yearOfBirth) {
            this.name = name;
            this.surname = surname;
            this.yearOfBirth = yearOfBirth
        }

        #likeCats(){
           console.log(`${this.name} likes cats`)
        }

        get likeCats(){
            this.#likeCats();
        }
        getAge () {
            const currentYear = 2022;
            let age = 0;
            age = currentYear - this.yearOfBirth
            return age;
        }
    }

    let human1 = new Human('Daria','Che',1993)


    class Student extends Human{

        _presentData = new Array(10);
        _presentIndex = 0;
        _marksData = new Array(10);
        _marksDataIndex = 0;
        averageMark = 0;

        present() {
            if (this._presentData.length > this._presentIndex ) {
                this._presentData[this._presentIndex] = true;
                this._presentIndex += 1
            } else {
                throw new Error('too much data about visiting classes')
            }
        }

        absent(){
            if (this._presentData.length > this._presentIndex){
                this._presentData[this._presentIndex] = false;
                this._presentIndex+=1
            } else {
                throw new Error('too much data about visiting classes')
            }
        }

        addMark (mark) {
            if (mark >= 0 && mark <= 12) {
                if (this._marksData.length > this._marksDataIndex ) {
                    this._marksData[this._marksDataIndex] = Number(mark);
                    this._marksDataIndex += 1

                } else {
                    throw new Error('too much data')
                }
            } else {
                throw new Error('Please enter mark in range from 0 to 12')
            }
        }

        getAverageMark() {

            this.averageMark= this._marksData.reduce((sum,item)=> sum+=item)/ this._marksDataIndex
            return this.averageMark;
        }

        summary () {

            this.getAverageMark()

            let averagePresent = 0;
            averagePresent = this._presentData.reduce((sum=0,item)=>sum+=item)/ this._presentIndex

            if (this.averageMark > 9 && averagePresent >= 0.9 ) return console.log('Ути какой молодчинка!');
            if (this.averageMark > 9 || averagePresent >= 0.9 ) return console.log('Норм, но можно лучше');
            if (this.averageMark < 9 && averagePresent < 0.9 ) return console.log('Редиска!');

        }
    }




    let student1 = new Student('Daria', 'Chernomorets',1993)
    student1.present()
    student1.present()
    student1.present()
    student1.present()
    student1.present()
    student1.present()
    student1.present()
    student1.present()
    student1.present()
    student1.absent()

    student1.addMark('12')
    student1.addMark('8')
    student1.addMark('12')
    student1.addMark('5')
    student1.addMark('10')
    student1.addMark('12')
    student1.addMark('5')
    student1.addMark('10')
    student1.getAge()
    student1.getAverageMark()
    console.log(student1)
})()

