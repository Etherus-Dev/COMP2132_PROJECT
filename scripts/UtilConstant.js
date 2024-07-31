const stringTypeString               = Object.freeze("string");
const numberTypeString               = Object.freeze("number");
const undefinedTypeString            = Object.freeze("undefined");
const objectTypeString               = Object.freeze("object");
const emptyLengthOrCount             = Object.freeze(0);
const positiveIntegerLowerBoundValue = Object.freeze(0);
const singleElementCount             = Object.freeze(1);
const firstIndex                     = Object.freeze(0);
const secondIndex                    = Object.freeze(1);
const emptyString                    = Object.freeze("");
const spaceString                    = Object.freeze(" ");
const extensionSeparator             = Object.freeze(".");

const undefinedFaceValuePairErrMsg = Object.freeze(
    "The face value pair is not defined as an object type in Card.js, which works like a key-value pair.");
const undefinedSuitArrayErrMsg
    = Object.freeze("The suit array is not defined in Card.js, which provides all available suit options.");

const emptyDeckDealCardMsg = Object.freeze("No more cards");

const drawCardCount = Object.freeze(1);

const validFaceValuePairForBlackJack = Object.freeze({
  "2": 2,
  "3": 3,
  "4": 4,
  "5": 5,
  "6": 6,
  "7": 7,
  "8": 8,
  "9": 9,
  "10": 10,
  "Jack": 10,
  "Queen": 10,
  "King": 10,
  "Ace": 1
});

const validSuits
    = Object.freeze([Object.freeze("Diamond"), Object.freeze("Spade"), Object.freeze("Club"), Object.freeze("Heart")]);

const invalidFaceValueErrMsg     = Object.freeze("Invalid face setting");
const invalidFaceValuePairErrMsg = Object.freeze("Invalid face-value pair");
const invalidSuitErrMsg          = Object.freeze("Invalid suit setting");

const apngFileExtensionArray = Object.freeze([Object.freeze("apng")]);  // Supported by Chrome, Edge, Firefox, Opera,
                                                                        // Safari.
const avifFileExtensionArray = Object.freeze([Object.freeze("avif")]);  // Supported by Chrome, Edge, Firefox (only
                                                                        // supports
                                                                        // still
                                                                        // image),
                                                                        // Opera,
                                                                        // Safari
const gifFileExtensionArray = Object.freeze([Object.freeze("gif")]);    // Supported by Chrome, Edge, Firefox, Internet
                                                                        // Explorer,
                                                                        // Opera,
                                                                        // Safari
const jpegFileExtensionArray = Object.freeze([
  Object.freeze("jpg"),
  Object.freeze("jpeg"),
  Object.freeze("jfif"),
  Object.freeze("pjeg"),
  Object.freeze("pjp")
]);                                                                     // Supported by Chrome, Edge, Firefox, Internet
                                                                        // Explorer,
                                                                        // Opera,
                                                                        // Safari
const pngFileExtensionArray = Object.freeze([Object.freeze("png")]);    // Supported by Chrome, Edge, Firefox, Internet
                                                                        // Explorer,
                                                                        // Opera,
                                                                        // Safari
const svgFileExtensionArray = Object.freeze([Object.freeze("svg")]);    // Supported by Chrome, Edge, Firefox, Internet
                                                                        // Explorer,
                                                                        // Opera,
                                                                        // Safari
const webpFileExtensionArray = Object.freeze([Object.freeze("webp")]);  // Supported by Chrome, Edge, Firefox, Opera,
                                                                        // Safari

const arrayOfAllFileExtensionArray = Object.freeze([
  Object.freeze(apngFileExtensionArray),
  Object.freeze(avifFileExtensionArray),
  Object.freeze(gifFileExtensionArray),
  Object.freeze(jpegFileExtensionArray),
  Object.freeze(pngFileExtensionArray),
  Object.freeze(svgFileExtensionArray),
  Object.freeze(webpFileExtensionArray)
]);

// Fully qualified URL validate regex:
// ^((http(s)?\:\/\/)?([-A-Za-z0-9@:%_\+~#?&=]{1,}\.)+([A-Za-z]{2,}|((XN)|(xn)--[A-Za-z0-9]{4,}))(:[0-9]{1,5})?\/?)[-A-Za-z0-9._~:/?#\[\]@!$&'()*+,;=%]*$
// Path regex validation without domain:
// ^((http(s)?\:\/\/)?([-A-Za-z0-9@:%_\+~#?&=]{1,}\.)+([A-Za-z]{2,}|((XN)|(xn)--[A-Za-z0-9]{4,}))(:[0-9]{1,5})?\/?)?[-A-Za-z0-9._~:/?#\[\]@!$&'()*+,;=%]*$
// Reference 1:
// https://stackoverflow.com/questions/1856785/characters-allowed-in-a-url
// Reference 2: https://data.iana.org/TLD/tlds-alpha-by-domain.txt

const validDomainWithOptionalPathRegExp = Object.freeze(new RegExp(Object.freeze(
    "^((http(s)?\\:\\\/\\\/)?([-A-Za-z0-9@:%_\\+~#?&=]{1,}\\.)+([A-Za-z]{2,}|((XN)|(xn)--[A-Za-z0-9]{4,}))(:[0-9]{1,5})?\\\/?)[-A-Za-z0-9._~:\/?#\\[\\]@!$&'()*+,;=%]*$")));
const validPathUrlRegExp                = Object.freeze(new RegExp(Object.freeze(
    "^((http(s)?\\:\\\/\\\/)?([-A-Za-z0-9@:%_\\+~#?&=]{1,}\\.)+([A-Za-z]{2,}|((XN)|(xn)--[A-Za-z0-9]{4,}))(:[0-9]{1,5})?\\\/?)?[-A-Za-z0-9._~:\/?#\\[\\]@!$&'()*+,;=%]*$")));

const validEnglishNameRegExp = Object.freeze(new RegExp(Object.freeze("^([A-Za-z0-9]+[-.' ]?)+$")));

const validEnglishStringRegExp = Object.freeze(new RegExp(Object.freeze("^([A-Za-z0-9]+[- ]?)+$")));

const defaultListTag     = Object.freeze("ul");
const listItemElementTag = Object.freeze("li");
const imageElementTag    = Object.freeze("img");
const anchorElementTag   = Object.freeze("a");
const validListTagArray  = Object.freeze([Object.freeze("ol"), Object.freeze("ul")]);

const httpLinkPrefix  = Object.freeze("http\:\/\/");
const httpsLinkPrefix = Object.freeze("https\:\/\/");

const defaultAnchorTargetString      = Object.freeze("_blank");
const defaultCrossOriginPolicyString = Object.freeze("anonymous");
const defaultRefererPolicyString     = Object.freeze("no-referrer");

const createImageListErrorMsgPrefix       = Object.freeze("Cannot create a new image list! ");
const invalidImageFileArrayErrorMsgPrefix = Object.freeze(
    Object.freeze(createImageListErrorMsgPrefix) + Object.freeze("The passed image file array is not an array: "));
const invalidImagePathPrefixErrorMsgPrefix
    = Object.freeze(Object.freeze(createImageListErrorMsgPrefix)
                    + Object.freeze("The path prefix is invalid or contains illegal characters: "));
const invalidImageMaximumHeightErrorMsgPrefix
    = Object.freeze(Object.freeze(createImageListErrorMsgPrefix)
                    + Object.freeze("The passed maximum height is not a positive non-zero integer: "));
const invalidImageMaximumWidthErrorMsgPrefix
    = Object.freeze(Object.freeze(createImageListErrorMsgPrefix)
                    + Object.freeze("The passed maximum width is not a positive non-zero integer: "));
const invalidImageListTagErrorMsgPrefix = Object.freeze(Object.freeze(createImageListErrorMsgPrefix)
                                                        + Object.freeze("The passed list style tag is invalid: "));

const invalidListTagErrorMsgPostfix
    = Object.freeze(Object.freeze(". Only followings are allowed: ") + Object.freeze(validListTagArray));

const resizeImageFailureErrorMsgPrefix = Object.freeze("Error when resizing the image: ");
const invalidImageFileNameErrorMsgPrefix
    = Object.freeze("Error occurs when adding a new image, the filename is invalid: ");
const failToAddNewImageToListErrorMsgPrefix = Object.freeze("Error when adding a new image to the list: ");

const createUrlListErrorMsgPrefix     = Object.freeze("Cannot create a new URL list! ");
const invalidUrlArrayErrorMsgPrefix   = Object.freeze(Object.freeze(createUrlListErrorMsgPrefix)
                                                    + Object.freeze("The passed url array is not an array: "));
const invalidUrlListTagErrorMsgPrefix = Object.freeze(Object.freeze(createUrlListErrorMsgPrefix)
                                                      + Object.freeze("The passed list style tag is invalid: "));

const invalidUrlErrorMsgPrefix      = Object.freeze("Error occurs when adding a new URL, the URL is invalid: ");
const failToAddNewUrlErrorMsgPrefix = Object.freeze("Error when adding a new anchor tag to the URL list: ");

const createNameListErrorMsgPrefix     = Object.freeze("Cannot create a new name list! ");
const invalidNameArrayErrorMsgPrefix   = Object.freeze(Object.freeze(createNameListErrorMsgPrefix)
                                                     + Object.freeze("The passed name array is not an array: "));
const invalidNameListTagErrorMsgPrefix = Object.freeze(Object.freeze(createNameListErrorMsgPrefix)
                                                       + Object.freeze("The passed list style tag is invalid: "));

const invalidNameErrorMsgPrefix = Object.freeze("Error occurs when adding a new name, the name is invalid: ");
const failToAddNewNameToListErrorMsgPrefix = Object.freeze("Error when adding a name to the list: ");

const nameArraySizeSpecialMinimumRequirement = Object.freeze(2);
const invalidNameArraySizeErrorMsgPrefix     = Object.freeze(Object.freeze(createNameListErrorMsgPrefix)
                                                         + Object.freeze("The passed array is invalid or too small: "));

const invalidHTMLElementErrorMsg = Object.freeze("At least one of the following(s) is not an valid HTMLElement:");