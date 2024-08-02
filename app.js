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


servidor.get('/calculadora/subtrair/:n1/:n2/:n3', (req, resp) => {
    let p = 13.50
    let m = 15.00
    let g = 17.50

    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2);
    let n3 = Number(req.params.n3);
    let sub  = n1*p
    let sub2 = n2*m
    let sub3 = n3*g
    

    resp.send(
        `A compra foi R$${sub} açai pequeno,R$${sub2} açai medio e R$${sub3} açai grande`);
})


servidor.listen(5050, () => console.log('API subiu na porta 5050!'));
