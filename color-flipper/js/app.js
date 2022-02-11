const fondo = document.getElementById('color');
const nameColor = document.getElementById('name-color');
const btnPrimary = document.getElementById('btn-primary');
const btnSecondary = document.getElementById('btn-secondary');
const btnHexadecimal = document.getElementById('btn-hexadecimal');
const primary = ['red', 'green', 'blue'];
const secondary = ['cyan', 'blue', 'yellow','#FF00FF'];
const hexadecimal = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
btnPrimary.onclick = () =>{
    let color = random(primary);
    fondo.setAttribute('style', `background-color:${primary[color]};`);
    nameColor.innerHTML = primary[color];
}

btnSecondary.onclick = () =>{
    let color = random(secondary);
    fondo.setAttribute('style', `background-color:${secondary[color]};`);
    nameColor.innerHTML = secondary[color];
}

btnHexadecimal.onclick = () =>{
    let color = '#';
    color = randomHex(color);
    fondo.setAttribute('style', `background-color:${color};`);
    nameColor.innerHTML = color;
}

function random(array){
    return Math.floor(Math.random()*array.length); 
}

function randomHex(color){
    for(let i=0;i<6;i++){
        color += hexadecimal[random(hexadecimal)]; 
    }
    return color;
}
