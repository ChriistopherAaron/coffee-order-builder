document.getElementById('buildBtn').addEventListener('click', () => {
    const coffee = document.getElementById('coffeeType').value;
    const milk = document.getElementById('milkType').value;
    const flavor = document.getElementById('flavor').value;

    const summaryText = `You ordered a ${coffee} with ${milk} and ${flavor === 'None' ? 'no added syrup' : flavor + ' syrup'}.`;

    document.getElementById('summaryText').textContent = summaryText;
});