addEventListener('message', () => {
    conectaApi();
    setInterval(() => conectaApi(), 5000);
});

async function conectaApi() {
    const conecta = await fetch("https://economia.awesomeapi.com.br/last/JPY-BRL")
    const conectaTraduzido = await conecta.json();
    postMessage(conectaTraduzido.JPYBRL);
}
