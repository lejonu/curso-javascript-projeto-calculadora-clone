class CalcController
{
    constructor()
    {
        this._locale = "pt-BR";
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;

        // inicializa automaticamente através do construtor
        this.initialize();
        this.initButtonsEvents();
    }

    addEventListenerAll(element, events, fn)
    {
        // transforma a string em array e aplica o forEach em cada elemento
        events.split(' ').forEach( event => 
        {
            element.addEventListener( event, fn, false);
        });
    }

    initButtonsEvents()
    {
       let buttons = document.querySelectorAll("#buttons > g, #parts >  g");

       // adiciona o evento para cada item da lista
       buttons.forEach( ( btn, index ) => 
       {
            this.addEventListenerAll( btn, "click drag", e => 
            {
                console.log(btn.className.baseVal.replace("btn-", ""));
            });

            this.addEventListenerAll( btn, "mouseover mouseup mousedown", e => 
            {
                btn.style.cursor = "pointer";
            });
       });
    }
    
    initialize()
    {
        this.setDisplayDateTime();

        setInterval(()=>
        {
            this.setDisplayDateTime();
        }, 1000);

        // Intervalo com timeout
        // let interval = setInterval(()=>
        // {
        //     this.setDisplayDateTime();
        // }, 1000);

        // setTimeout(() => {
        //     clearInterval(interval);
        // }, 5000);
    }

    setDisplayDateTime()
    {
        this.displayTime = new Date().toLocaleTimeString(this._locale);
        
        this.displayDate = new Date().toLocaleDateString(this._locale, {
            day: "2-digit",
            month: "long",
            year: "numeric"

        });
    }

    get displayCalc()
    {
        // retorna o valor presente no documento
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value)
    {
        this._displayCalcEl.innerHTML = value;
    }

    get currentDate()
    {
        return new Date();
    }

    set currentDate(value)
    {
        this._currentDate = value;
    }

    get displayTime()
    {
        return this._timeEl.innerHTML;
    }

    set displayTime(value)
    {
        this._timeEl.innerHTML = value;
    }


    get displayDate()
    {
        return this._dateEl.innerHTML;
    }

    set displayDate(value)
    {
        this._dateEl.innerHTML = value;
    }




}