class CalcController
{
    constructor()
    {
        this._operation = [];
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

    clearAll()
    {
        this._operation = [];
    }

    clearEntry()
    {
        this._operation.pop();
    }

    getLastOperation()
    {
        return this._operation[this._operation.length - 1];
    }

    isOperator( value )
    {
        return (['+', '-', '*', '%', '/'].indexOf( value ) > -1);
    }

    setLastOperation( value )
    {
        this._operation[this._operation.length - 1] = value;
    }

    addOperation( value )
    {
        if( isNaN( this.getLastOperation() ) )
        {
            //String
            if( this.isOperator( value ))
            {
                //Trocar o operador
                this.setLastOperation( value );
            }
            else if( isNaN( value ) )
            {
                //Outra coisa
                console.log( value );
            }
            else
            {
                this._operation.push( value );
            }
        }
        else
        {
            //Number
            let newValue = this.getLastOperation().toString() + value.toString();

            this.setLastOperation( parseInt(newValue) );
        }

        console.log(this._operation);
    }

    setError()
    {
        this.displayCalc = "Error";
    }

    execBtn( value )
    {
        switch( value )
        {
            case 'ac':
                this.clearAll();
                break;
            case 'ce':
                this.clearEntry();
                break;
            case 'soma':
                this.addOperation( '+' );
                break;
            case 'subtracao':
                this.addOperation( '-' );
                break;
            case 'divisao':
                this.addOperation( '/' );
                break;
            case 'multiplicacao':
                this.addOperation( '*' );
                break;
            case 'porcento':
                this.addOperation( '%' );
                break;
            case 'ponto':
                this.addOperation( '.' );
                break;

            case 'igual':

                break;

            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addOperation(parseInt( value ));
                break;
            
            default: 
                this.setError();
                break;
        }
    }

    initButtonsEvents()
    {
       let buttons = document.querySelectorAll("#buttons > g, #parts >  g");

       // adiciona o evento para cada item da lista
       buttons.forEach( ( btn, index ) => 
       {
            this.addEventListenerAll( btn, "click drag", e => 
            {
                let textBtn = btn.className.baseVal.replace("btn-", "");

                this.execBtn(textBtn);
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