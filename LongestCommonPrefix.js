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
        return "divideAndConquerApproach";
    }
}