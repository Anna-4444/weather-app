//const temp = document.querySelectorAll(".temp");


export function convertTempUnit () {
    const tempUnit = Array.from(document.querySelectorAll(".temp-unit"));
    //console.log(tempUnit);
    tempUnit.forEach((element) => {
        if (element.innerText === "°F") {
            element.innerText = "°C";
        } else if (element.innerText === "°C") {
            element.innerText = "°F"
        } 
     })
}


export function convertTemp () {
    const unitConvBtn = document.querySelector('.unit-conv')
    const temps = Array.from(document.querySelectorAll(".temp"));
    //console.log(temps)
    if (unitConvBtn.innerText === "°F") {
        temps.forEach(element => {
            element.innerText = ((Number(element.innerText) - 32) / 1.8).toFixed(1);
        })
    } else if (unitConvBtn.innerText === "°C") {
        temps.forEach(element => {
            element.innerText = ((Number(element.innerText) * 1.8) + 32).toFixed(1);
        })
    }
    
}