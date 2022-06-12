export class LongestCommonSubsequence {
    static bruteForceApproach(str1, str2) {
        let st = new Set();
        let str3 = "";
        
        // Function computes all the subsequence of an string
        function subsequence(s, binary, len) {
            let sub = "";
            for(let j = 0; j < len; j++) {
                // Check if jth bit in binary is 1
                if (binary & (1 << j)) {
                    // If jth bit is 1, include it
                    // in subsequence
                    sub += s[j];
                }
            }
            return sub;
        }

        function findAllSubsequence(str) {
            let len = str.length;
    
            let limit = Math.pow(2, len);
        
            for(let i = limit-1; i >=  1; i--) { 
                let sub = subsequence(str, i, len);     
                st.add(sub);
            }
        }
     
        findAllSubsequence(str2);

        let count = 0;
        for(let allsequence of st){
            let i = 0;
            let flag = true;
            for(let j = 0;j<allsequence.length;j++) {
                let position = str1.indexOf(allsequence.charAt(j),i);
                if (position==-1){
                    flag =false;
                    break;
                } else {
                    i = position+1;
                }
            }
            if (flag ==true) {
                if (allsequence.length>=count) {
                    count = allsequence.length;
                    str3 = allsequence;
                }
            }
        }
        return str3;
    }
}