export class LongestCommonPrefix {
    static bruteForceApproach(strings) {
        if (strings.length > 0 ) {
            let firstString = strings[0];
            let result = "";
            for (let i = 0; i < firstString.length; i++) {
                let nextValueToTest = firstString.substring(0, i + 1);

                for (let j = 1; j < strings.length; j++) {
                    let str = strings[j];
                    if (str.indexOf(nextValueToTest) != 0) {
                        return result;
                    }
                }
                result = nextValueToTest;
            }
            return result;
        }

        return "";
    }

    static divideAndConquerApproach(strings) {
        if (strings.length == 2) {
            return LongestCommonPrefixForTwoStrings(strings[0], strings[1]);
        }
        if (strings.length == 1) {
            return strings[0];
        }
        if (strings.length == 0) {
            return "";
        }

        let midIndex = Math.floor(strings.length / 2);
        let firstPart = this.divideAndConquerApproach(strings.slice(0, midIndex));
        let secondPart = this.divideAndConquerApproach(strings.slice(midIndex));
        let result = LongestCommonPrefixForTwoStrings(firstPart, secondPart);

        function LongestCommonPrefixForTwoStrings(str1, str2) {
            let result = "";
            for (let i = 0; i < str1.length; i++) {
                let firstSubString = str1.substring(0, i + 1);
                let secondSubString = str2.substring(0, i + 1);
                if (firstSubString == secondSubString) {
                    result = firstSubString;
                } else {
                    break;
                }
            }
            return result
        }
        return result;
    }
}