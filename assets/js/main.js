console.log("test");

/* 
Frage

HTMl 
    2x Input Eingabefelde    Text + CodeSchlüssel
        Button ?

        alles groß geschrieben
    1x Output Ausgabefeld    Verschlüsselter Code 

js
    let abcArray = [A,B,C, ... Z]
    let codeSchlüssel = Number(kommt vom Input CodeSchlüssel);

    wertigkeite von codeSchlüssel schneidet 
        vorne bei abcArray aus 
        und hängt es hinten dran bei abcArray

    Array muss sich weite nach rechts verschieben, z.B. CodeSchlüssel= 1 -> dann A = B  Z = A 

    
*/


// Variablen
const iText = document.querySelector("#inputText");
console.log(iText);

const iCode = document.querySelector("#inputCodeSchlüssel");
let = 0;
const btn = document.querySelector("#button");

const output = document.querySelector("#output");

const abcArray = [];

// Eventlistener
btn.addEventListener("click", verschlüsseln);


// a b c d e f g h i j k l m n o p q r s t u v w x y z

let abc = "";
abc = "a b c d e f g h i j k l m n o p q r s t u v w x y z"

// abcArray erzeugen
//abcArray = abc.split(" ");
abcArray.push(...abc.split(" "));

let abcArrayUr = [...abcArray];




function verschlüsseln(){



    console.log(abc); // String a b c ... z
console.log(abcArray); // [a, b, c, ... z]  // wird später zu [ d, e, f, ... c ]
console.log(abcArrayUr); // [a, b, c,... z]

// 
console.log(Number(iCode.value)); // 3 blau als Zahl
let abcArrayAusschnitt = abcArray.splice(0, Number(iCode.value));
console.log(abcArrayAusschnitt); // a b c 

for (let i=0 ; i<abcArrayAusschnitt.length ; i++) {
abcArray.push(abcArrayAusschnitt[i]);
}

console.log(abcArray.length); // 26
console.log(abcArray); // d e f .. c  

// text lenght ist runden 
// code value ist verschieben + vergleichen und neu zuordnen
// ausgabe in großbuchstaben

console.log(iText)
let iTextVal = iText.value
console.log(iTextVal);
iTextVal = iTextVal.toLowerCase();  // holt sich Value macht alles in kleinbuchstaben zum Vergleichen
console.log(iTextVal);

/* if (typeof iText === 'string') {
    iText = iText.toLowerCase();
    console.log("iText: " + iText +" = string");
    
  } */

for ( let i = 0 ; i < iTextVal.length ; i++ ) {
    // iText = String 
    // abcArrayUr = Array
    // abcArray = Array
    
    // i   0 1 2  
   console.log(iTextVal[i] ) // a b c 
   abcArray.indexOf(iTextVal[i]);   // String und Array vergleich
   

   let abcUrIndex = abcArrayUr.indexOf(iTextVal[i]);    
   console.log(abcUrIndex); // 0 1 2    die IndexZahl des Inputs 

  /*  let abc_Vor_VerschlüsselIndex = abcArrayUr.indexOf(iTextVal[i]);
   console.log(abc_Vor_VerschlüsselIndex); // 0 1 2

   let abc_Nach_VerschlüsselIndex = abcArray.indexOf(iTextVal[i]);
   console.log(abc_Nach_VerschlüsselIndex); // 23 24 25

   let buchstabeVersch = abcArray[abc_Vor_VerschlüsselIndex];
   console.log(buchstabeVersch); // d e f g h i j k

   //
   console.log(abcArray)
   console.log(iTextVal[i])                
   // die IndexZahl des Inputs im Output suchen
 */
console.log(abcUrIndex)
console.log(abcArray)
console.log(abcArray[abcUrIndex])
output.innerHTML += abcArray[abcUrIndex];
   ergebnis = abcArray.indexOf(abcUrIndex);
   console.log(ergebnis); 


// was wenn 0 dann sag 24 und gib 24 aus
console.log(iTextVal)
   if( iTextVal > 0 ) {
console.log("in if")
output.innerHTML += buchstabeVersch + " ";
document.write(buchstabeVersch + " ");




}
   let iTextArray = []
   iTextArray.push(iTextVal[i]);
   console.log(iTextArray);

}

}

