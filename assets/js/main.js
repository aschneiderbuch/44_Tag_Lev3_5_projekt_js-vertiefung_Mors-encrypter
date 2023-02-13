console.log("test");


/* 
Texte in Morsecode umwandeln

*/

const input = document.querySelector("#input");
console.log(input);
const btn = document.querySelector("#btn");
console.log(btn);
const output = document.querySelector("#output")
console.log(output);


/* ******************* Ende Var ***************** */


let morseAlphabet = [
  { letter: "1", morseCode: ".----" },
  { letter: "2", morseCode: "..---" },
  { letter: "3", morseCode: "...--" },
  { letter: "4", morseCode: "....-" },
  { letter: "5", morseCode: "....." },
  { letter: "6", morseCode: "-...." },
  { letter: "7", morseCode: "--..." },
  { letter: "8", morseCode: "---.." },
  { letter: "9", morseCode: "----." },
  { letter: "0", morseCode: "-----" },
  { letter: " ", morseCode: "    " },
  { letter: "A", morseCode: ".-" },
  { letter: "B", morseCode: "-..." },
  { letter: "C", morseCode: "-.-." },
  { letter: "D", morseCode: "-.." },
  { letter: "E", morseCode: "." },
  { letter: "F", morseCode: "..-." },
  { letter: "G", morseCode: "--." },
  { letter: "H", morseCode: "...." },
  { letter: "I", morseCode: ".." },
  { letter: "J", morseCode: ".---" },
  { letter: "K", morseCode: "-.-" },
  { letter: "L", morseCode: ".-.." },
  { letter: "M", morseCode: "--" },
  { letter: "N", morseCode: "-." },
  { letter: "O", morseCode: "---" },
  { letter: "P", morseCode: ".--." },
  { letter: "Q", morseCode: "--.-" },
  { letter: "R", morseCode: ".-." },
  { letter: "S", morseCode: "..." },
  { letter: "T", morseCode: "-" },
  { letter: "U", morseCode: "..-" },
  { letter: "V", morseCode: "...-" },
  { letter: "W", morseCode: ".--" },
  { letter: "X", morseCode: "-..-" },
  { letter: "Y", morseCode: "-.--" },
  { letter: "Z", morseCode: "--.." }
];

console.log(morseAlphabet);
console.table(morseAlphabet);
console.log(typeof morseAlphabet); // object
console.log(Array.isArray(morseAlphabet));  // true   --> ist Array  0-37 =0-y



// click function ausführen
btn.addEventListener("click", (e) => {
  umwandlen(e);
})


// function
function umwandlen(e) {
  //e.preventDefault();   // Fehler mit not a function weg

  console.log(e);
  // input feld text holen
  const textKl = String(document.querySelector("#input").value);
  console.log(textKl); // ddd
  const text = textKl.toUpperCase(); // alles in Großbuchstaben umwandeln, da Morsecode in Großbuchstaben 

  // text zu array umwandeln
  const textArray = text.split("");
  console.log(textArray); // [d] [d] [d]

  let suchBuchstabe = "";   // auserhalb, damit beide Schleifen darauf zugreifen können
  // Schleife nächsten Buchstaben im input suchen
  for (let j = 0; j < textArray.length; j++) {
    console.log(j);
    suchBuchstabe = textArray[j];
    console.log(suchBuchstabe);

    console.log(suchBuchstabe);

    // Schleife passenden Buchstaben im Morsecode finden
    // Array Object durchsuchen
    for (let i = 0; i < morseAlphabet.length; i++) {
      console.log(i)

      // Vergleich 
      const buchstaben = morseAlphabet[i].letter
      console.log(buchstaben)

      // Output 
      const morseCode = morseAlphabet[i].morseCode
      console.log(morseCode)


      console.log(suchBuchstabe)
      console.log(buchstaben)
      // Input mit Morsecode vergleichen  - finden
      if (suchBuchstabe === buchstaben) {

        console.log(morseCode)

        output.innerHTML += ` ${morseCode} // `;
      }

    }
  }
}