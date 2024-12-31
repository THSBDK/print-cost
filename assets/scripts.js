document.getElementById('printForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const materialCost = parseFloat(document.getElementById('materialCost').value);
    const printTime = parseFloat(document.getElementById('printTime').value);
    const markup = parseFloat(document.getElementById('markup').value);

    const electricityCost = 0.12; // Example fixed cost per hour
    const totalCost = materialCost + (printTime * electricityCost);
    const markupPrice = totalCost + (totalCost * (markup / 100));

    document.getElementById('totalCost').innerText = `Total Cost: $${totalCost.toFixed(2)}`;
    document.getElementById('markupPrice').innerText = `Markup Price: $${markupPrice.toFixed(2)}`;
});

document.getElementById('fetchElectricityCost').addEventListener('click', function() {
    fetch('https://api.example.com/electricity-cost')
        .then(response => response.json())
        .then(data => {
            const electricityCost = data.cost;
            document.getElementById('electricityCost').innerText = `Electricity Cost: $${electricityCost.toFixed(2)}`;
        })
        .catch(error => console.error('Error fetching electricity cost:', error));
});