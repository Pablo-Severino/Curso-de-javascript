var agora = new Date()
var diaSen = agora.getDay()
/*
    Domingo
    Segunda
    Terça
    Quarta
    Quinta
    Sexta
    Sábado
*/

//console.log(diaSen)

switch(diaSen) {
  case 0:
    console.log('Domingo')
    break
  case 1:
    console.log('Segunda')
    break
  case 2:
     console.log('Quarta')
    break
  case 3:
    console.log('Quinta')
    break
  case 4:
    console.log('Sexta')
    break
  case 5:
    console.log('Sábado')
    break
  case 6:
    console.log('Terça')
    break
  default:
    console.log('[ERRO] Dia Inválido!')
    break

}