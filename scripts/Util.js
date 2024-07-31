/**
 * Check if a string has a valid data type and not null.
 *
 * @param string The string to be checked.
 * @returns {boolean} True if the string has a valid data type and not null. Otherwise, false.
 */
function isValidString(string)
{
    return (string !== null && typeof string === stringTypeString);
}

/**
 * Check if a string has a valid data type, not null, and not blank.
 *
 * @param string The string to be checked.
 * @returns {boolean} True if the string has a valid data type, not null, and not blank. Otherwise, false.
 */
function isNonBlankString(string)
{
    return (isValidString(string) && string.trim().length > emptyLengthOrCount);
}

/**
 * Check if a string has a valid data type, not null, and not blank.
 *
 * @param string The string to be checked.
 * @returns {boolean} True if the string has a valid data type, not null, and not blank. Otherwise, false.
 */
function isNonBlankEnglishString(string)
{
    return (isNonBlankString(string) && validEnglishStringRegExp.test(string.trim()));
}

/**
 * Check if the passed string is a valid image file name with a correct file extension.
 *
 * @param string The string to be checked.
 * @returns {boolean} True if the passed string has a correct file extension. Otherwise, false.
 */
function isValidImageFileName(string)
{
    if(!isNonBlankString(string))
    {
        return false;
    }

    for(const fileExtensionArray of arrayOfAllFileExtensionArray)
    {
        if(Array.isArray(fileExtensionArray))
        {
            for(const fileExtension of fileExtensionArray)
            {
                if(isNonBlankString(extensionSeparator) && isNonBlankString(fileExtension) &&
                   string.trim().endsWith(extensionSeparator.trim() + fileExtension.trim()))
                {
                    return true;
                }
            }
        }
    }
    return false;
}

/**
 * Check if a string prefixed with http: // or https://.
 *
 * @param string String to be checked.
 * @returns {boolean} True if the string is prefixed by either http: // or https://. Otherwise, false.
 */
function isValidHTTPLink(string)
{
    if(isNonBlankString(string) && Array.isArray(httpLinkPrefixArray))
    {
        if(isNonBlankString(httpLinkPrefix) &&
           (string.trim().toLowerCase().startsWith(httpLinkPrefix) || string.trim().toLowerCase().startsWith(httpsLinkPrefix)))
        {
            return true;
        }
    }
    return false;
}

/**
 * Check if a string prefixed with https: //.
 *
 * @param string String to be checked.
 * @returns {boolean} True if the string is prefixed by https://. Otherwise, false.
 */
function isValidHTTPSLink(string)
{
    if(isNonBlankString(string) && Array.isArray(httpLinkPrefixArray))
    {
        if(isNonBlankString(httpLinkPrefix) && (string.trim().toLowerCase().startsWith(httpsLinkPrefix)))
        {
            return true;
        }
    }
    return false;
}

/**
 * Check if the passed element is actually a valid HTMLElement with a correct data type.
 *
 * @param element The element / object to be checked.
 * @returns {boolean} True if the passed object is indeed a HTMLElement. Otherwise, false.
 */
function isValidHTMLElement(element)
{
    return element !== null && element instanceof HTMLElement;
}

/**
 * Check if the passed element is actually a specific HTMLElement with a specific tag name.
 *
 * @param element The element / object to be checked. If it is not an HTMLElement, false will be returned.
 * @param tagName The tag name in string.If it is a null or blank string, false will be returned.
 * @returns {boolean} True if the passed object is indeed a specific HTMLElement. Otherwise, false.
 */
function isSpecificHTMLElement(element, tagName)
{
    return (isValidHTMLElement(element) && isValidString(element.tagName) && isNonBlankString(tagName) &&
            element.tagName.trim().toLowerCase() === tagName.trim().toLowerCase());
}

/**
 * Check if an HTMLElement is using a specific tag name in an array.
 *
 * @param element An HTMLElement to be checked. False will be returned if it is not an HTMLElement.
 * @param array An array of string containing all allowed tags names. False will be returned if null or not an array.
 * @returns {boolean} True if the HTMLElement uses a specific tag name in the array.
 */
function isHTMLElementUsingSpecificTagNameInAnArray(element, array)
{
    if(isValidHTMLElement(element) && isValidString(element.tagName) && Array.isArray(array))
    {
        for(const tag of array)
        {
            if(isNonBlankString(tag) && element.tagName.trim().toLowerCase() === tag.trim().toLowerCase())
            {
                return true;
            }
        }
    }
    return false;
}

/**
 * Check if an element is contained in a specific array.
 *
 * @param element An element to be checked.
 * @param array An array to be checked.
 * @returns {boolean} True if an element is found within the specific array.
 * Otherwise, false.
 */
function isArrayContainsElement(element, array)
{
    if(Array.isArray(array))  // If everything is defined and array is an actual array.
    {
        for(const arrayElement of array)
        {
            if(arrayElement === element)
            {
                return true;
            }
        }
    }
    return false;
}

/**
 * Remove an element from an array.
 *
 * @param element An element to be removed from an array.
 * @param array An array for the specific element to be removed.
 * @returns {boolean} True if the specific element is found. Otherwise, false.
 */
function removeArrayElement(element, array)
{
    const foundIndex = array.indexOf(element);

    if(foundIndex > -1)
    {
        array.splice(foundIndex, 1);
        return true;
    }
    else
    {
        return false;
    }

    /**
     * Append an HTML element to another HTML element as a child. Validation is done to confirm their data type.
     *
     * @param parentElement Parent HTML Element. If null or having incorrect data types, no operations will be made.
     * @param childElement  Child HTML Element. If null or having incorrect data types, no operations will be made.
     */
    function appendHTMLElementToHTMLElement(parentElement, childElement)
    {
        if(isValidHTMLElement(parentElement) && isValidHTMLElement(childElement))
        {
            parentElement.append(childElement);
        }
        else
        {
            console.error(invalidHTMLElementErrorMsg);
            console.dir(parentElement);
            console.dir(childElement);
        }
    }

    /**
     * Append texts to a list as a list item.
     *
     * @param listElement An existing HTMLListElement, must be using valid list tags.
     * @param textString A non-blank text string to be appended to the list.
     * @returns {HTMLElement|null} A valid HTMLElement with the new HTMLListItemElement. Null if any error occurred.
     */
    function appendTextToListAsListItem(listElement, textString)
    {
        if(isHTMLElementUsingSpecificTagNameInAnArray(listElement, validListTagArray) && isNonBlankString(textString))
        {
            const newListItem = document.createElement(listItemElementTag.trim().toLowerCase());

            if(isValidHTMLElement(newListItem))
            {
                newListItem.innerText = textString.trim();
                listElement.append(newListItem);
                return newListItem;
            }
        }
        return null;
    }

    /**
     * Append an element to a list as a list item.
     *
     * @param listElement An existing HTMLListElement, must be using valid list tags.
     * @param childElement An HTMLElement to be appended to the list.
     * @returns {HTMLElement|null} A valid HTMLElement with the new
     * HTMLListItemElement. Null if any error occurred.
     */
    function appendElementToListAsListItem(listElement, childElement)
    {
        if(isHTMLElementUsingSpecificTagNameInAnArray(listElement, validListTagArray) && isValidHTMLElement(childElement))
        {
            const newListItem = document.createElement(listItemElementTag.trim().toLowerCase());
            if(isValidHTMLElement(newListItem))
            {
                newListItem.append(childElement);
                listElement.append(newListItem);
                return newListItem;
            }
        }
        return null;
    }

    /**
     * Append a specific child element with a specific tag name to a list.
     *
     * @param listElement An existing HTMLListElement, must be using valid list tags.
     * @param childElement An HTMLElement to be appended to the list.
     * @param specificTagName The specific tag name that the childElement has to use.
     * @returns {HTMLElement|null} A valid HTMLElement with the new HTMLListItemElement. Null if any error occurred.
     */
    function appendSpecificElementToListAsListItem(listElement, childElement, specificTagName)
    {
        if(isHTMLElementUsingSpecificTagNameInAnArray(listElement, validListTagArray) && isSpecificHTMLElement(childElement, specificTagName))
        {
            const newListItem = document.createElement(listItemElementTag.trim().toLowerCase());

            if(isValidHTMLElement(newListItem))
            {
                newListItem.append(childElement);
                listElement.append(newListItem);
                return newListItem;
            }
        }
        return null;
    }

    /**
     * Check if the passed string is a valid list tag.
     *
     * @param string A string to be checked.
     * @returns {boolean} True if the passed string is a valid list tag. Otherwise, false.
     */
    function isValidListTag(string)
    {
        if(isNonBlankString(string) && Array.isArray(validListTagArray))  // If it is not null and type is
                                                                          // stringTypeString
        {
            for(const tagName of validListTagArray)
            {
                if(isNonBlankString(tagName) && string.trim().toLowerCase() === tagName.trim().toLowerCase())
                {
                    return true;
                }
            }
        }
        return false;
    }

    /**
     * Check if a string is a valid path that contains no illegal characters.
     *
     * @param string String to be tested.
     * @returns {boolean} True if the string can be used as a path. Otherwise, false.
     */
    function isValidPath(string)
    {
        return isValidString(string) && validPathUrlRegExp.test(string.trim());
    }

    /**
     * Check if a string is a valid path with a domain name.
     *
     * @param string String to be tested.
     * @returns {boolean} True if the string can be used as a path with a domain name. Otherwise, false.
     */
    function isValidPathWithDomain(string)
    {
        return isValidString(string) && validDomainWithOptionalPathRegExp.test(string.trim());
    }

    /**
     * Check if the passed parameter is a positive non-zero integer.
     *
     * @param number Number to be checked.
     * @returns {boolean} True if the passed parameter is a positive non-zero integer. Otherwise, false.
     */
    function isPositiveNonZeroInteger(number)
    {
        return (Number.isInteger(number) && number > positiveIntegerLowerBoundValue);
    }

    /**
     * Check if the passed parameter is a valid English name.
     *
     * @param string String to be tested.
     * @returns {*|boolean} True if the passed parameter is a valid English name. Otherwise, false.
     */
    function isValidEnglishName(string)
    {
        return isNonBlankString(string) && validEnglishNameRegExp.test(string.trim());
    }

    /**
     * Create a list of image with path prefix, while keeping aspect ratio when resizing.
     *
     * @param imageFileNameArray An array of image file name.
     * @param pathPrefix         A prefix to a path in stringTypeString.
     * @param maxHeight          The maximum height of each image. Image will be resized if over limit.
     * @param maxWidth           The maximum width of each image. Image will be resized if over limit,
     * @param listTag            A list style tag in stringTypeString. Must be one of the elements in
     *     validListTagArray.
     * @return {string|HTMLUListElement|HTMLOListElement} A string will be returned for any error. Otherwise, an HTML
     *                                                    element in either unordered list or ordered list will be
     *     returned.
     */
    function createImageListWithPathPrefix(imageFileNameArray, pathPrefix, maxHeight, maxWidth, listTag = defaultListTag)
    {
        if(imageFileNameArray === null || !Array.isArray(imageFileNameArray))
        {
            const errorMsg = invalidImageFileArrayErrorMsgPrefix + imageFileNameArray;
            console.error(errorMsg);
            return errorMsg;
        }

        if(!isValidPath(pathPrefix))
        {
            const errorMsg = invalidImagePathPrefixErrorMsgPrefix + pathPrefix;
            console.error(errorMsg);
            return errorMsg;
        }

        if(!isPositiveNonZeroInteger(maxHeight))
        {
            const errorMsg = invalidImageMaximumHeightErrorMsgPrefix + maxHeight;
            console.error(errorMsg);
            return errorMsg;
        }

        if(!isPositiveNonZeroInteger(maxWidth))
        {
            const errorMsg = invalidImageMaximumWidthErrorMsgPrefix + maxHeight;
            console.error(errorMsg);
            return errorMsg;
        }

        if(!isValidListTag(listTag))
        {
            const errorMsg = invalidImageListTagErrorMsgPrefix + listTag + invalidListTagErrorMsgPostfix;
            console.error(errorMsg);
            return errorMsg;
        }

        const newListElement = document.createElement(listTag.trim().toLowerCase());
        // Using filter will be easier but no error message will be shown.

        // const filteredArray = imageFileNameArray.filter(isValidImageFileName);

        for(const imageFileName of imageFileNameArray)
        {
            if(isValidImageFileName(imageFileName))
            {
                const correctPath = Object.freeze(concatStringsWithTrim(pathPrefix, imageFileName).trim());

                if(correctPath !== null && typeof correctPath === stringTypeString)
                {
                    const newImageElement = document.createElement(imageElementTag.trim().toLowerCase());

                    newImageElement.src = correctPath;
                    newImageElement.alt = imageFileName.trim();

                    newImageElement.onload = function() {
                        newImageElement.height = newImageElement.naturalHeight;
                        newImageElement.width  = newImageElement.naturalWidth;
                        if(restrictImageSize(newImageElement, maxHeight, maxWidth) === null)
                        {
                            console.error(resizeImageFailureErrorMsgPrefix + newImageElement);
                        }
                    };

                    if(appendElementToListAsListItem(newListElement, newImageElement) === null)
                    {
                        console.error(failToAddNewImageToListErrorMsgPrefix + newImageElement);
                    }
                }
                else
                {
                    console.error(invalidImagePathPrefixErrorMsgPrefix + pathPrefix);
                }
            }
            else
            {
                console.error(invalidImageFileNameErrorMsgPrefix + imageFileName);
            }
        }

        return newListElement;
    }

    /**
     * Create a new HTML Image Element with optional Path Prefix and alternate description.
     *
     * @param imageFileName Image file name. Cannot be blank and must have a correct image extension.
     * @param maxHeight Maximum height in pixels. Must be a positive non-zero integer.
     * @param maxWidth Maximum width in pixels. Must be a positive non-zero integer.
     * @param pathPrefix Path prefix to an image file in String (optional).
     * @param altDescription Alternate description in String (optional).
     * @returns {HTMLElement|null} A valid HTMLImageElement or null if any invalid arguments are given.
     */
    function createHTMLImageElement(imageFileName, maxHeight, maxWidth, pathPrefix = emptyString, altDescription = null)
    {
        if(!isValidImageFileName(imageFileName))
        {
            console.error(invalidImageFileNameErrorMsgPrefix + imageFileName);
            return null;
        }

        if(!isValidPath(pathPrefix))
        {
            console.error(invalidImagePathPrefixErrorMsgPrefix + pathPrefix);
            return null;
        }

        if(!isPositiveNonZeroInteger(maxHeight))
        {
            console.error(invalidImageMaximumHeightErrorMsgPrefix + maxHeight);
            return null;
        }

        if(!isPositiveNonZeroInteger(maxWidth))
        {
            console.error(invalidImageMaximumWidthErrorMsgPrefix + maxHeight);
            return null;
        }

        const correctPath = Object.freeze(concatStringsWithTrim(pathPrefix, imageFileName));

        if(correctPath !== null && typeof correctPath === stringTypeString)
        {
            const newImageElement = document.createElement(imageElementTag.trim().toLowerCase());

            if(isValidHTMLElement(newImageElement))
            {
                newImageElement.src = correctPath;
                newImageElement.alt = Object.freeze((isNonBlankString(altDescription)) ? altDescription.trim() : imageFileName.trim());

                newImageElement.onload = function() {
                    newImageElement.height = newImageElement.naturalHeight;
                    newImageElement.width  = newImageElement.naturalWidth;
                    if(restrictImageSize(newImageElement, maxHeight, maxWidth) === null)
                    {
                        console.error(resizeImageFailureErrorMsgPrefix + newImageElement);
                    }
                };

                return newImageElement;
            }
        }

        return null;
    }

    /**
     * Resize an image based on maximum height and width while maintaining the aspect ratio.
     *
     * @param imageElement Must be a valid HTMLElement with imageElementTag as the tagName.
     * @param maxHeight Must be a positive non-zero integer. @param maxWidth Must be a positive non-zero integer.
     * @returns {HTMLImageElement|null} Null if any invalid argument passed. Otherwise, a valid HTMLImageElement.
     */
    function restrictImageSize(imageElement, maxHeight, maxWidth)
    {
        if(isSpecificHTMLElement(imageElement, imageElementTag) && isPositiveNonZeroInteger(maxHeight) && isPositiveNonZeroInteger(maxWidth))
        {
            if(imageHeightLimiter(imageElement, maxHeight) !== null && imageWidthLimiter(imageElement, maxWidth) !== null)
            {
                return imageElement;  // If the resize is successful
            }
        }
        return null;
    }

    /**
     * Limit the image height while keeping the aspect ratio.
     *
     * @param imageElement Must be a valid HTMLElement with imageElementTag as the tagName.
     * @param maxHeight Must be a positive non-zero integer.
     * @returns {HTMLImageElement|null} Null if any invalid argument passed. Otherwise, a valid HTMLImageElement.
     */
    function imageHeightLimiter(imageElement, maxHeight)
    {
        if(isSpecificHTMLElement(imageElement, imageElementTag) && isPositiveNonZeroInteger(maxHeight))
        {
            if(imageElement.height > maxHeight)
            {
                const widthToHeightRatio = imageElement.width / imageElement.height;

                imageElement.width = Math.round(maxHeight * widthToHeightRatio);

                imageElement.height = maxHeight;
            }
            return imageElement;
        }
        return null;
    }

    /**
     * Limit the image width while keeping aspect ratio.
     *
     * @param imageElement Must be a valid HTMLElement with imageElementTag as the tagName.
     * @param maxWidth Must be a positive non-zero integer.
     * @returns {HTMLImageElement|null} Null if any invalid argument passed. Otherwise, a valid HTMLImageElement.
     */
    function imageWidthLimiter(imageElement, maxWidth)
    {
        if(isSpecificHTMLElement(imageElement, imageElementTag) && isPositiveNonZeroInteger(maxWidth))
        {
            if(imageElement.width > maxWidth)
            {
                const heightToWidthRatio = imageElement.height / imageElement.width;

                imageElement.height = Math.round(maxWidth * heightToWidthRatio);

                imageElement.width = maxWidth;
            }
            return imageElement;
        }
        return null;
    }

    /**
     * Concatenate 2 strings together with trim() operations on them.
     *
     * @param prependString A string at the front position. Cannot be null or other data types.
     * @param string A string at the back position. Cannot be null or other data types.
     * @returns {null|Readonly<string>} A readonly string if both arguments are valid string. Otherwise, null.
     */
    function concatStringsWithTrim(prependString, string)
    {
        if(isValidString(prependString) && isValidString(string))
        {
            return Object.freeze(prependString.trim() + string.trim());
        }
        else
        {
            return null;
        }
    }

    /**
     * Concatenate 2 strings together with trim() operations on them, and space
     * in between.
     * @param prependString A string at the front position. Cannot be null or other data types.
     * @param string A string at the back position. Cannot be null or other data types.
     * @returns {null|Readonly<string>} A readonly string if both arguments are valid string. Otherwise, null.
     */
    function concatStringsWithTrimAndSpaceInBetween(prependString, string)
    {
        if(isValidString(prependString) && isValidString(string))
        {
            return Object.freeze(prependString.trim() + spaceString + string.trim());
        }
        else
        {
            return null;
        }
    }

    /**
     * Create a list of URLs
     *
     * @param urlArray An array of image file name.
     * @param listTag A list style tag in stringTypeString. Must be one of the elements in validListTagArray.
     * @returns {string|HTMLUListElement|HTMLOListElement} A string of error message if any error occurs. Otherwise, a
     *                                                     valid HTML Element which is either ordered list or unordered list.
     */
    function createUrlList(urlArray, listTag = defaultListTag)
    {
        if(urlArray === null || !Array.isArray(urlArray))
        {
            const errorMsg = invalidUrlArrayErrorMsgPrefix + urlArray;
            console.error(errorMsg);
            return errorMsg;
        }

        if(!isValidListTag(listTag))
        {
            const errorMsg = invalidUrlListTagErrorMsgPrefix + listTag + invalidListTagErrorMsgPostfix;
            console.error(errorMsg);
            return errorMsg;
        }

        const newListElement = document.createElement(listTag.trim().toLowerCase());
        // Using filter will be easier but no error message will be shown.

        // const filteredArray = imageFileNameArray.filter(isValidImageFileName);

        for(const url of urlArray)
        {
            if(isValidPathWithDomain(url))
            {
                const newAnchorElement = document.createElement(anchorElementTag.trim().toLowerCase());

                newAnchorElement.href      = url.trim();
                newAnchorElement.target    = defaultAnchorTargetString.trim().toLowerCase();
                newAnchorElement.referrer  = defaultRefererPolicyString.trim().toLowerCase();
                newAnchorElement.innerText = url.trim();

                if(appendElementToListAsListItem(newListElement, newAnchorElement) === null)
                {
                    console.error(failToAddNewUrlErrorMsgPrefix + newAnchorElement);
                }
            }
            else
            {
                console.error(invalidUrlErrorMsgPrefix + url);
            }
        }

        return newListElement;
    }

    /**
     * Create a list of URLs
     *
     * @param nameArray An array of name in String.
     * @param listTag A list style tag in stringTypeString. Must be one of the
     *                elements in validListTagArray.
     * @returns {string|HTMLUListElement|HTMLOListElement} A string of error message if any error occurs. Otherwise, a
     *                                                     valid HTML Element which is either ordered list or unordered list.
     */
    function createNameList(nameArray, listTag = defaultListTag)
    {
        if(nameArray === null || !Array.isArray(nameArray))
        {
            const errorMsg = invalidNameArrayErrorMsgPrefix + nameArray;
            console.error(errorMsg);
            return errorMsg;
        }

        if(!isValidListTag(listTag))
        {
            const errorMsg = invalidNameListTagErrorMsgPrefix + listTag + invalidListTagErrorMsgPostfix;
            console.error(errorMsg);
            return errorMsg;
        }

        const newListElement = document.createElement(listTag.trim().toLowerCase());
        // Using filter will be easier but no error message will be shown.

        // const filteredArray = imageFileNameArray.filter(isValidImageFileName);

        for(const name of nameArray)
        {
            if(isValidEnglishName(name))
            {
                if(appendTextToListAsListItem(newListElement, toTitleString(name)) === null)
                {
                    console.error(failToAddNewNameToListErrorMsgPrefix + toTitleString(name));
                }
            }
            else
            {
                console.error(invalidNameErrorMsgPrefix + name);
            }
        }

        return newListElement;
    }

    /**
     * Create a list of URLs
     *
     * @param nameArray An array of name in String.
     * @param listTag A list style tag in stringTypeString. Must be one of the elements in validListTagArray.
     * @returns {string|HTMLUListElement|HTMLOListElement} A string of error message if any error occurs. Otherwise, a
     *                                                     valid HTML Element which is either ordered list or unordered list.
     */
    function createNameListWithMinimumTwoElements(nameArray, listTag = defaultListTag)
    {
        if(nameArray === null || !Array.isArray(nameArray) || nameArray.length < nameArraySizeSpecialMinimumRequirement)
        {
            const errorMsg = invalidNameArraySizeErrorMsgPrefix + nameArray;
            console.error(errorMsg);
            return errorMsg;
        }

        return createNameList(nameArray, listTag);
    }

    /**
     * Convert a word into a title-case word.
     *
     * @param word The word to be converted.
     * @returns {Readonly<string>} The converted title case word.
     */
    function toTitleWord(word)
    {
        const actualWord = Object.freeze(word.toString().trim());

        if(actualWord.length > emptyLengthOrCount)
        {
            if(actualWord.length > singleElementCount)
            {
                return Object.freeze(Object.freeze(actualWord.toUpperCase().charAt(firstIndex)) +
                                     Object.freeze(actualWord.substring(secondIndex).toLowerCase()));
            }
            else
            {
                return Object.freeze(actualWord.toUpperCase().charAt(firstIndex));
            }
        }
        else
        {
            return emptyString;
        }
    }

    /**
     * Convert a string into a title-case string.
     *
     * @param string The string to be converted.
     * @returns {Readonly<string>} The converted title case string.
     */
    function toTitleString(string)
    {
        if(string)
        {
            const words = Object.freeze(string.trim().split(spaceString));

            let result = Object.freeze(emptyString);

            for(const word of words)
            {
                if(word.trim().length > emptyLengthOrCount)
                {
                    result += Object.freeze(toTitleWord(word)) + Object.freeze(spaceString);
                }
            }

            return Object.freeze(result.trim());  // Remove the last space
        }
        else
        {
            return emptyString;
        }
    }
}