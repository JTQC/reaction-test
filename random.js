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

    document.getElementById('generate').onclick = () => {
        let colorNum = rng();
        document.getElementById('canvas').innerHTML = `<div id="target" class="${colorChange(colorNum)} br${rng(0, 4)} pa${rng(4, 7)} ma${rng(1, 7)} h${rng(3, 3)} w${rng(3, 3)}"></div>`;
    }
