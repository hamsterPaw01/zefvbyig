document.getElementById('accept').addEventListener('click', async () => {
    // Récupérer l'IP de l'utilisateur avec une API tierce
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    const userIP = data.ip;

    // Envoyer l'IP au webhook Discord
    const webhookURL = "https://discord.com/api/webhooks/1301961339538767963/dd6TXhd93HceCHh2fnrcTY_dHvoEGASxuUHFepmle3e1wiBHi529IrQMweYFuCb9rtH0";
    await fetch(webhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            content: `Nouvelle IP collectée avec consentement : ${userIP}`
        })
    });

    document.getElementById('message').textContent = "Merci ! Votre adresse IP a été collectée.";
});

document.getElementById('decline').addEventListener('click', () => {
    document.getElementById('message').textContent = "Vous avez refusé la collecte de votre adresse IP.";
});
