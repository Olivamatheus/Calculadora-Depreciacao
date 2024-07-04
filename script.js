
const calcular = document.getElementById('calcular');

function deprec () {
    const ca = document.getElementById('custatv').value;
    const vr = document.getElementById('vlresd').value;
    const anos = document.getElementById('anos').value;
    const meses = document.getElementById('meses').value;
    const tx = document.getElementById('txdep').value;
    const res = document.getElementById('res');
    let stg = '';
    let deprecanual = 0;

    if (ca !== '' && vr !== '' && anos !== '') {
        if (tx !== ''){
            deprecanual = (((ca - vr)*tx/100)/anos).toFixed(2);
        } else
        deprecanual = ((ca - vr)/anos).toFixed(2);
        stg += `O valor da depreciação acumulada anual é de: R$${deprecanual}.</br>`

        let vlrcon = (ca - deprecanual);
        if (meses !== '') {
            const deprecmen = (deprecanual / 12).toFixed(2);
            vlrcon = (ca - (deprecmen * meses)).toFixed(2);
            stg += `O valor da depreciação acumulada mensal é de: R$${deprecmen}.</br>`
        }
        stg += `O valor contábil líquido é de: R$${vlrcon}.`
        res.innerHTML = stg;
    }
}
