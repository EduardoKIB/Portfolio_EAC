document.getElementById('btnPrimeiro').addEventListener('click', function() {
    document.getElementById('atv-pri-trimestre').style.display = 'block';
    document.getElementById('atv-seg-trimestre').style.display = 'none';
    document.getElementById('mensagem').style.display = 'none';
});

document.getElementById('btnSegundo').addEventListener('click', function() {
    document.getElementById('atv-pri-trimestre').style.display = 'none';
    document.getElementById('atv-seg-trimestre').style.display = 'block';
    document.getElementById('mensagem').style.display = 'none';
});

document.getElementById('btnTerceiro').addEventListener('click', function() {
    document.getElementById('atv-pri-trimestre').style.display = 'none';
    document.getElementById('atv-seg-trimestre').style.display = 'none';
    document.getElementById('atv-ter-trimestre').style.display = 'block';
   
});