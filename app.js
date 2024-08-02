import express from 'express';
const servidor = express();


servidor.get('/calculadora/somar/:n1/:n2', (req, resp) => {
    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2);

    let soma = n1 + n2;

    resp.send({
        soma: `${n1}+${n2}=${soma}` 
    });
})


servidor.get('/calculadora/subtrair', (req, resp) => {
    let n1 = Number(req.query.numero1);
    let n2 = Number(req.query.n2);

    let sub = n1 - n2;

    resp.send('A subtração é ' + sub);
})


servidor.listen(5050, () => console.log('API subiu na porta 5050!'));