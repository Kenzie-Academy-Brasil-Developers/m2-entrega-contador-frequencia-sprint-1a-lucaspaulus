
const letterCounts = {}
const wordsCounts = {}
const button = document.getElementById("countButton");

button.addEventListener("click", function () {
    let typedText = document.getElementById("textInput").value;

    typedText = typedText.toLowerCase();
    // Isto muda todas as letras para minúsculas

    typedText = typedText.replace(/[^a-z'\s]+/g, "");
    // Isso se livra de todos os caracteres exceto letras comuns, espaços e apóstrofos. 
    // Iremos aprender mais sobre como usar a função replace numa lição mais à frente.

    words = typedText.split(/\s/);

    //realiza a contagem de cada uma das letras
    for (let i = 0; i < typedText.length; i++) {
        let currentLetter = typedText[i];
        // condição para colocar o numero 1 caso apareça uma vez ou adiciona mais 1 a contagem
        if (letterCounts[currentLetter] === undefined) {
            letterCounts[currentLetter] = 1;
        } else {
            letterCounts[currentLetter]++;
        }
    }

    // loop que verifica as letras que repetem
    for (let letter in letterCounts) {
        const span = document.createElement("span");
        const textContent = `"${letter}": ${letterCounts[letter]}, `;
        span.innerText = textContent;
        const letters = document.getElementById("lettersDiv");
        letters.appendChild(span);
    }

    //realiza a contagem de cada uma das palavras 
    for (let i = 0; i < words.length; i++) {
        let currentWord = words[i]
        // condição para colocar o numero 1 caso apareça uma vez ou adiciona mais 1 a contagem 
        if (wordsCounts[currentWord] === undefined) {
            wordsCounts[currentWord] = 1;
        } else {
            wordsCounts[currentWord]++;
        }
    }

    // loop que verifica as palavras que repetem
    for (let word in wordsCounts) {
        const span = document.createElement("span");
        const textContent = `"${word}": ${wordsCounts[word]}, `;
        span.innerText = textContent;
        const words = document.getElementById("wordsDiv");
        words.appendChild(span);
    }
})
