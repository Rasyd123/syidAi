const API_KEY = "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";

async function sendMessage() {
    let inputField = document.getElementById("userInput");
    let message = inputField.value.trim();
    if (message === "") return;

    let messagesDiv = document.getElementById("messages");
    messagesDiv.innerHTML += `<p><b>Anda:</b> ${message}</p>`;
    inputField.value = "";

    let response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: message }]
        })
    });

    let data = await response.json();
    messagesDiv.innerHTML += `<p><b>AI:</b> ${data.choices[0].message.content}</p>`;
}
