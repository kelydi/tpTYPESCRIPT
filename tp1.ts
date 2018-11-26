class Date1 {
     private year: number;
     private month: number;
     private day: number;

     constructor (year: number,month:number,day: number){
         this.year = year;
         this.month = month;
         this.day = day;
     }

     getYear():number{
         return this.year;
     }
     getMonth():number{
         return this.month;
     }
     getDay():number{
         return this.day;
     }

     setYear(year: number){
         this.year = year;
     }
     setMonth(month: number){
        this.month = month;
    }
    setDay(day: number){
        this.day = day;
    }
    toString(year :number,month :number, day:number):string{
        let date:string = this.year + '-'+ this.month + '-' + this.day;
        return date;
    }
    create(year:number,month:number,day:number): string {
        this.year = year;
        this.month = month;
        this.day = day;
        let defaultDate = this.toString(this.year ,this.month , this.day);
        return defaultDate;
     }
     setDate (year: number, month:number,day:number):string{
         return this.create(year,month,day);
     }
     yesterday():string{
         if(this.day == 1){
         if(this.day == 1){
             return this.toString((this.year-1),12,31);
         }else if(this.month == 11 || this.month == 9 || this.month == 6){
             return this.toString(this.year,(this.month-1),31);
         }else if(this.month == 12 || this.month == 10 || this.month == 8){
            return this.toString(this.year,(this.month-1),30);
        }else if(this.month == 3){
            return this.toString(this.year,2,28);
        }
    }
        return this.setDate(this.year,this.month,(this.day-1));
    }
    tomorrow():string {
        return this.setDate(this.year,this.month,(this.day+1));
    }
    addDay(day : number = 1):string{
        return this.setDate(this.year,this.month,(this.day+day));
    } 
    addMonth(month : number = 1):string{
        return this.setDate(this.year,(this.month+month),this.day);
    } 
    addYear(year : number = 1):string{
        return this.setDate((this.year+year),this.month,this.day);
    } 
    subDay(day:number = 1){
        return this.create(this.year,this.month,(this.day-day));
    }
    subMonth(month:number = 1){
        return this.create(this.year,(this.month-month),this.day);
    }
    subYear(year:number = 1){
        return this.create((this.year-year),this.month,this.day);
    }

}