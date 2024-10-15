const notaPrimeiroBi = 10;
const notaSegundoBi  = 7.3;
const notaTerceiroBi = 8;

const media = (notaPrimeiroBi + notaSegundoBi + notaTerceiroBi) / 3;

if(media <= 7){
    media += media * 0.1;
}

console.log(`A média é ${media} `);