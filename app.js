window.onload = () => {


//===Timer Section

     let tens = 0;
     let seconds = 0;
     let interval;
     let isStarted = false;

     let start = () => {
         clearInterval(interval);
         interval = setInterval(timer, 10);
     }

     let stop = () => {
         clearInterval(interval);
     }

     let timer = () => {
         tens++;

         if (tens <= 9) {
             document.getElementById('tens').innerHTML = "0" + tens;
         } else if (tens > 9 && tens < 99) {
             document.getElementById('tens').innerHTML = tens;
         } else if (tens >= 99) {
             tens = 0;
             document.getElementById('tens').innerHTML = "0" + tens;
             seconds++;
             document.getElementById('seconds').innerHTML = "0" + seconds;
         }

         if (seconds > 9) {
             document.getElementById('seconds').innerHTML = seconds;
         }

     }

//===Randomizer Section;
    //==Random between x - y
    const rng = (x = 1, y = 7) => {
        let num = Math.floor((Math.random() * y ) + x);
        return num;
    }

    //==Color Vars ==
    const colorChange = (num) => {
        let color = "";
        switch(num) {
            case 1:
                color = "bg-hot-pink";
                break;
            case 2:
                color = "bg-light-purple";
                break;
            case 3:
                color = "bg-light-green";
                break;
            case 4:
                color = "bg-navy";
                break;
            case 5:
                color = "bg-orange";
                break;
            case 6:
                color = "bg-red";
                break;
            case 7:
                color = "bg-dark-green";
                break;
            default:
                color = "bg-light-blue";
        }
        return color;
    }


    const generate = () => {
        let colorNum = rng();
        document.getElementById('target').innerHTML = `<div class="${colorChange(colorNum)} br${rng(0, 4)} pa${rng(4, 7)} ma${rng(1, 7)} h${rng(3, 3)} w${rng(3, 3)}"></div>`;
    }

    document.getElementById('generate').onclick = () => {
        if(isStarted === false){
            start();
            generate();
            isStarted = true;
            document.getElementById('generate').innerHTML = "Stop";
        }
        else if(isStarted === true){
            stop();
            isStarted = false;
            document.getElementById('generate').innerHTML = "Start";
            document.getElementById('canvas').innerHTML = "";
        }
    }

    document.getElementById('target').onclick = () => {
        stop();
        document.getElementById('tens').innerHTML = 00;
        document.getElementById('seconds').innerHTML = 00;
        let x = tens;
        let y = seconds;
        tens = 0;
        seconds = 0;
        document.getElementById('y').innerHTML = x;
        document.getElementById('x').innerHTML = y;
        start();
        generate();
    }

//End
}
