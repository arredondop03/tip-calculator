var x = document.getElementById("tipForm");

const calculateTip = () => {
    
    const billAmount = Number(document.getElementById("tipForm")[0].value) || 0;
    const service = Number(document.getElementById("tipForm")[1].value) || 0;
    const numberOfPeople = Number(document.getElementById("tipForm")[2].value) || 1;
    const totalAmount = ((service * billAmount) / 100 ) / numberOfPeople || 0;

    document.getElementById("totalAmount").innerHTML = totalAmount;
};