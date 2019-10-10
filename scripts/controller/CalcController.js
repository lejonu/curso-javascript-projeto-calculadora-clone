class CalcController
{
    constructor()
    {
        this._displayCalc = 0;
        this._currentDate;
        // inicializa automaticamente através do construtor
        this.initialize();
    }

    initialize()
    {
        let displayCalcEl = document.querySelector("#display");
        let dateEl = document.querySelector("#data");
        let timeEl = document.querySelector("#hora");

        displayCalcEl.innerHTML = 1234;
        dateEl.innerHTML = 1234;
        timeEl.innerHTML = 1234;
    }

    get displayCalc()
    {
        return this._displayCalc;
    }

    set displayCalc(value)
    {
        this._displayCalc = value;
    }

    get currentDate()
    {
        return this._currentDate;
    }

    set currentDate(value)
    {
        this._currentDate = value;
    }

}