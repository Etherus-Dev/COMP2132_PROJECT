const $wordText           = $("#section-game-output-word-text");
const $hintText           = $("#section-game-output-hint-text");
const $inputButtons       = $(".input-button");
const $hangmanImg         = $("#hangman-img");
const $loseRetryDiv       = $("#lose-retry-div");
const $loseRetryButtons   = $(".loss-retry-button");
const $loseRetryYesButton = $("#lose-retry-yes");
const $winRetryDiv        = $("#win-retry-div");
const $winRetryButtons    = $(".win-retry-button");
const $winRetryYesButton  = $("#win-retry-yes");
const $correctGuessText   = $("#correct-guess-text");
const $totalGuessText     = $("#total-guess-text");
const $perfectWinDiv      = $("#perfect-win-div");
const $perfectWinButtons  = $(".perfect-win-button");

const initialCharacterReplace = new RegExp("[A-Za-z]", "g");

let errorCount = 0;
let randomWord = null;

let totalGuess   = 0;
let correctGuess = 0;

function replaceAt(index, replacement)
{
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

String.prototype.replaceAt = replaceAt;

function setUpRandomWord()
{
    getRandomWord();
    if($wordText.hasClass("extra-letter-space-and-boldness") === false)
    {
        $wordText.addClass("extra-letter-space-and-boldness");
    }
    $wordText.text(randomWord.word.replace(initialCharacterReplace, "_"));
    $hintText.text(randomWord.hint);
}

function getRandomWord()
{
    randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
}

function updateHangmanImage()
{
    if(errorCount == 6)
    {
        showRetryPrompt(false);
    }

    $hangmanImg.attr("src", `../images/Hangman/Hangman-${errorCount}.svg`);
    $hangmanImg.attr("alt", `Hangman image (Wrong count: ${errorCount} put of 6)`);
}

function setUpButtons()
{
    $inputButtons.each((index, element) => {
        $(element).on("click", processClick);
        $(element).removeClass("disable-guess-button correct-guess-button wrong-guess-button");
    });
}

function disableAllButtons()
{
    $inputButtons.each((index, element) => {
        $(element).off("click", processClick);
        $(element).addClass("disable-guess-button");
    });
}

function setUpRetryButton()
{
    $loseRetryButtons.each((index, element) => {
        $(element).on("click", (event) => {
            $loseRetryDiv.fadeOut();
        });
    });
    $loseRetryYesButton.on("click", restartGame);

    $winRetryButtons.each((index, element) => {
        $(element).on("click", (event) => {
            $winRetryDiv.fadeOut();
        });
    });
    $winRetryYesButton.on("click", restartGame);

    $perfectWinButtons.each((index, element) => {
        $(element).on("click", (event) => {
            $perfectWinDiv.fadeOut();
        });
    });
}

function showRetryPrompt(winBoolean)
{
    disableAllButtons();
    totalGuess++;
    if(winBoolean === true)
    {
        correctGuess++;
        if(wordsArray.length > 1)
        {
            removeArrayElement(randomWord, wordsArray);
            $winRetryDiv.fadeIn();
        }
        else
        {
            $perfectWinDiv.fadeIn();
        }
    }
    else
    {
        $loseRetryDiv.fadeIn();
    }
    updateScore();
}

function updateScore()
{
    $totalGuessText.text(totalGuess);
    $correctGuessText.text(correctGuess);
}

function restartGame(event)
{
    setUpRandomWord();
    errorCount = 0;
    updateHangmanImage();
    setUpButtons();
}

function processClick(event)
{
    const result = checkAnyMatchingCharacter($(event.target).attr("id").slice(-1).toUpperCase());

    if(result === true)
    {
        $(event.target).addClass("correct-guess-button");
        if($wordText.text().indexOf("_") == -1)
        {
            showRetryPrompt(true);
        }
    }
    else
    {
        $(event.target).addClass("wrong-guess-button");
        if(errorCount < 6)
        {
            errorCount++;
        }
        updateHangmanImage();
    }

    $(event.target).off("click", processClick);
}

function checkAnyMatchingCharacter(character)
{
    const upperCaseCharacter = character.trim().toUpperCase();
    let foundResult          = false;
    let lastFoundIndex       = randomWord.word.indexOf(upperCaseCharacter);
    while(lastFoundIndex != -1)
    {
        const newText = $wordText.text().replaceAt(lastFoundIndex, upperCaseCharacter);
        $wordText.text(newText);
        foundResult    = true;
        lastFoundIndex = randomWord.word.indexOf(upperCaseCharacter, lastFoundIndex + 1);
    }
    return foundResult;
}

setUpRandomWord();
setUpButtons();
setUpRetryButton();