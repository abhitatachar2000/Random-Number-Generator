const genButton = document.getElementById('genButton');

const generateRandomNumber = (minNumber, maxNumber) => {
    return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
};


genButton.onclick = () =>{
    const minNumber = Number(document.getElementById('minNumber').value);
    const maxNumber = Number(document.getElementById('maxNumber').value);
    if (Boolean(minNumber) && Boolean(maxNumber) && minNumber != NaN && maxNumber != NaN) {
        const randomNumber = generateRandomNumber(minNumber, maxNumber);
        document.getElementById("result").textContent = randomNumber;
        console.log(randomNumber);
    } else {
        document.getElementById("result").textContent = "Error!!!";
        console.error("Error with the input values provided")
    }
    
}