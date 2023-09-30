document.getElementById('criar').addEventListener('click',(evento)=>{
    evento.preventDefault();

    const nome = document.getElementById('nome').value;
    const classe = document.getElementById('classe').value;
    const forca = document.getElementById('forca').value;
    const destreza = document.getElementById('destreza').value;
    const inteligencia = document.getElementById('inteligencia').value;
    const carisma = document.getElementById('carisma').value;
    const velocidade = document.getElementById('velocidade').value;
    const pericias = document.getElementById('pericias').value;
    const talentos = document.getElementById('talentos').value;
    const habilidades = document.getElementById('habilidades').value;
    const armas = document.getElementById('armas').value;
    const equipamentos = document.getElementById('equipamentos').value;
})

fetch('/criaFicha',{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ nome, classe, forca, destreza, inteligencia, carisma, velocidade, pericias, talentos, habilidades, armas, equipamentos})
})
    .then(response => response.json())
    .then(data => {
        
    }) 