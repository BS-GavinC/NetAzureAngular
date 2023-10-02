export class Article
{
    public name : string
    public qty : number
    public dateAjout : Date

    constructor(name : string, qty : number, dateAjout : Date)
    {
        this.name = name
        this.qty = qty
        this.dateAjout = dateAjout
    }
}



export class ArticleV2
{
    private _name! : string
    private _qty! : number
    private _dateAjout! : Date

    public get name() : string{
        return this._name
    }

    public set name(value : string){
        this._name = value
    }

    public get qty() : number{
        return this._qty
    }

    public set qty(value : number){
        this._qty = value
    }

    public get dateAjout() : Date{
        return this._dateAjout
    }

    public set dateAjout(value : Date){
        this._dateAjout = value
    }
}