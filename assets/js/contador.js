/* Total */

function getID(id) {
    return document.getElementById(id).value;
}

function innerHTML(id, result) {
    return document.getElementById(id).innerHTML = result;
}

function counter_ch() {
    setInterval(function () {
        let characters = getID("text");
        if (characters.length > 5000) {
            innerHTML("total_ch", ">5000");
        } else {
            characters = characters.trim().replace(/\s+/gi, '');
            innerHTML("total_ch", characters.length);
        }
    }, 0000);
}

// function counter_w(){
//     setInterval(function(){
//         let words = getID("text");
//         if (words.length > 5000){
//             innerHTML("total_w",">5000");
//         } else {
//             let text_split = text.split(" ");
//             let numberOfWords = text_split.lenght;
//             innerHTML("total_w",numberOfWords);
//         }
//     },0000);
// }

// function contar_palabras(){
// 	//Obtenemos el texto del campo
// 	var texto = document.getElementById("contar_palabras").value;
// 	//Reemplazamos los saltos de linea por espacios
// 	texto = texto.replace (/\r?\n/g," ");
// 	//Reemplazamos los espacios seguidos por uno solo
// 	texto = texto.replace (/[ ]+/g," ");
// 	//Quitarmos los espacios del principio y del final
// 	texto = texto.replace (/^ /,"");
// 	texto = texto.replace (/ $/,"");
// 	//Troceamos el texto por los espacios
// 	var textoTroceado = texto.split (" ");
// 	//Contamos todos los trozos de cadenas que existen
// 	var numeroPalabras = textoTroceado.length;
// 	//Mostramos el número de palabras
// 	alert(numeroPalabras);
// }


function counter_w() {
    setInterval(function () {
        let words = getID("text");
        if (words.length > 5000) {
            innerHTML("total_w", ">5000");
        } else {
            words = words.replace(/[\^\«\#\$\%\&\/\.\(\)\=\*\,\+\-\<\>\"\?\¿\¨\Ç\_\{\;\:\ª}]/gi, "");
            let numberOfWords = words.trim().replace(/\s+/gi, ' ').split(' ').length;
            innerHTML("total_w", numberOfWords);
        }
    }, 0000);
}

counter_w();
counter_ch();

function myFunction() {

    let numberOfTimesKeyword = 0;

    // Prep the text ////////////////////////////////////
    // Remove all characters but a-z AND 0-9 AND spaces
    let pageText = getID("text");
    pageText = pageText.replace(/[^\w\s]/gi, '');

    // Remove double spaces
    pageText = pageText.replace(/\s\s+/g, ' ');

    // Trim beginning and ending spaces
    pageText = pageText.trim();
    // End: Prep the text ////////////////////////////////////

    // Make textarea values into array
    let pageTextArray = pageText.split(/\s+/);

    // Go through array and find out how many times the keyword appears
    for (var i in pageTextArray) {

        if (pageTextArray[i] == text.value) {
            numberOfTimesKeyword++;
        }

    }

    if (numberOfTimesKeyword > 0) { // The keyword appears at least once
        list.innerHTML = "The keyword appears <strong>" + numberOfTimesKeyword + "</strong> time(s).";
    } else {
        list.innerHTML = "<strong>Does not contain keyword.</strong>";
    }
}

myFunction();