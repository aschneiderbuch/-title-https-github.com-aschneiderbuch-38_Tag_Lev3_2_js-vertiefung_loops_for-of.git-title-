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
let = iText = document.querySelector("#inputText");
console.log(iText);

let = iCode = document.querySelector("#inputCodeSchlüssel");
let = 0;
let = btn = document.querySelector("#button");

let = output = document.querySelector("#output");

let = abcArray = [];

// Eventlistener
btn = addEventListener("click", () => {});


// a b c d e f g h i j k l m n o p q r s t u v w x y z

let abc = "";
abc = "a b c d e f g h i j k l m n o p q r s t u v w x y z"

// abcArray erzeugen
abcArray = abc.split(" ");;
let abcArrayUr = [...abcArray];
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

function verschlüsseln(){
// text lenght ist runden 
// code value ist verschieben + vergleichen und neu zuordnen
// ausgabe in großbuchstaben

iText = iText.value.toLowerCase();  // holt sich Value macht alles in kleinbuchstaben zum Vergleichen
console.log(iText);

for ( let i = 0 ; i < iText.length ; i++ ) {
    // iText = String 
    // abcArrayUr = Array
    // abcArray = Array
    
    // i   0 1 2  
   console.log(iText[i] ) // a b c 
   abcArray.indexOf(iText[i]);   // Array und String vergleichen geht nicht
   console.log(abcArrayUr.indexOf(iText[i])); // 0 1 2 
   console.log(abcArray.indexOf(iText[i])); // 24 25 26 


   if( abcArrayUr.indexOf(iText[i]) != -1 ) {

    let abcUrIndex = abcArrayUr.indexOf(iText[i]);
    console.log(abcUrIndex); // 0 1 2 
    let abcNachVerschlüsselIndex = abcArray.indexOf(iText[i]);
    console.log(abcNachVerschlüsselIndex); // 23 24 25


}
   let iTextArray = []
   iTextArray.push(iText[i]);
   console.log(iTextArray);

}

}

verschlüsseln();