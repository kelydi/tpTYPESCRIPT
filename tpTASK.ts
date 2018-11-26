//importations de la classe priority et date

import Date1 from './tp1';
import {priority} from './tpenum'; 

// Classe task

export default class Task{

    public _content : string;
    public _date : Date1;  
    public _priority : priority;
    public _checked : boolean = false; 

//constructeurs 

    constructor( content:string, date:Date1, priority:priority, checked:boolean){
        this._content = content;
        this._date = date;
        this._priority = priority;
        this._checked = checked;
    }

//getters

    get content (): string{
        return this._content;
    }

    get date (): Date1{
        return this._date;
    }

    get priority (): priority{
        return this._priority;
    }

    get checked (): boolean{
        return this._checked;
    }

//setters

    set content (content:string){
            this._content=content;
    }

    set date (date:Date1){
        this._date=date;
    }

    set priority (priority:priority){
        this._priority=priority;
    }

    set checked (checked:boolean){
        this._checked=checked;
    }

//les méthodes 

public add ( content:string, date:Date1, priority:priority ) : number{
    let id : number = Math.random()*58;
    return id; 
} 

public update ( content?:string, date?:Date1, priority?:priority,checked?:boolean ){
        this._content = content;
        this._date = date;
        this._priority = priority;
        this._checked = checked;
}

public close (checked:boolean) : boolean{
    return true;
}

public toString ( content:string, date:Date1, priority:priority,checked:boolean ) : string {
        content = this._content;
        date = this._date;
        priority = this._priority;
        checked = this._checked;

        let tach : string = " CONTENU : " +content+ "\n DATE : " +date+ "\n PRIORITE : " +priority+ "\n ETAT : " +checked ;
        return tach; 

}

}
