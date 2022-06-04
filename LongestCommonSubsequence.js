export class LongestCommonSubsequence {
    static  bruteForceApproach(str1, str2) {
        let str3 ='';
        let i = 0;
        for(let j = 0;j<str2.length;j++){
       
            let position = str1.indexOf(str2.charAt(j),i);
            if (position==-1){
                continue;
            }
            else{
                i = position;
                str3 += str1.charAt(i);
            }
        }
        return str3;
    }
}