async function analyze() {
  const input = document.getElementById("input").value;

  const res = await fetch("https://your-backend-url.onrender.com/analyze", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ message: input })
  });

  const data = await res.json();

  document.getElementById("output").innerHTML = `
    <h3>Result</h3>
    <p><b>Issue:</b> ${data.issue}</p>
    <p><b>Treatment:</b> ${data.treatment}</p>
    <p><b>Estimated Cost:</b> ${data.price}</p>
    <p style="color:red;">This is not a diagnosis. Visit a dentist.</p>

    <a href="${data.whatsapp}" target="_blank">
      <button>Book via WhatsApp</button>
    </a>
  `;
}
