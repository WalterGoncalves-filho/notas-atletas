let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

atletas.forEach(atleta=>{
    let notasOrdenadas  = [...atleta.notas].sort((a,b)=>a-b)
    notasOrdenadas.pop()
    notasOrdenadas.shift()
    let soma = 0   
    notasOrdenadas.forEach(nota=>{
        soma += nota
    })
    atleta.media = soma / notasOrdenadas.length   
})
for (let i = 0; i < atletas.length; i++) {
    console.log(`\nAtleta: ${atletas[i].nome}`)
    console.log(`Notas Obtidas: ${atletas[i].notas}`)
    console.log(`Média Válida: ${atletas[i].media.toFixed(6).replace('.', ',')}\n`);
    console.log()
}

