class Word
{
    #word;
    #hint;

    constructor(word, hint)
    {
        if(!isNonBlankEnglishString(word))
        {
            throw new Error("The word for hangman guessing game cannot be blank or null!");
        }

        if(!isNonBlankString(hint))
        {
            throw new Error("The hint for hangman guessing game cannot be blank or null!");
        }

        this.#word = word.trim().toUpperCase();
        this.#hint = hint.trim();
    }

    get
    word()
    {
        return this.#word;
    }

    get
    hint()
    {
        return this.#hint;
    }
}