import assert from 'assert';
import {LongestCommonPrefix} from "../LongestCommonPrefix.js";
import {LongestCommonSubsequence} from "../LongestCommonSubsequence.js";

//LCP
describe("LCP_Brute Force Approach:", function() {
    it ("run all test cases", function() {
        assert.equal(LongestCommonPrefix.bruteForceApproach(["bbwedhb","bbwkhghtghjkg","bbwoouytt","bbwhyygfdfhhj","bbwhtajsh","bbwkjuy","bbwwwet","bbwssa","bbwqqq","bbwooppoui","bbwggat","bbwjjhhtt","bbwwww","bbwbbbbb","bbwbwbwbwbw","bbwoiuyt","bbwfdsdg","bbww","bbwwt","bbwwo"]), "bbw");
        assert.equal(LongestCommonPrefix.bruteForceApproach(["abbaatt","abbassgty","abbapjirdgh","abbatyyurew","abbaaaaa","abbaaaabbaaa","abbaooiyt","abba","abbatyyrere","abbahhtrdgj","abbattyytre","abbannmn","abbababa","abbatytre","abbaaaaajjtt","abbawqe","abbayuutr","abbaoiur","abbammmnnn","abbayuytesv"]),"abba");
        assert.equal(LongestCommonPrefix.bruteForceApproach(["peacock","penguin","pet","pen","penny","pencil","per","peach","perk","peak","peek","peer","pest","pens","peon","pets","pear","pearl","peppy","petal"]),"pe");
        assert.equal(LongestCommonPrefix.bruteForceApproach(["zoozooooo","zooozoo","zooo","zoooooo","zoozozo","zoozo","zoozzz","zoozozozz","zooozzz","zoozzoo","zoozzzzoooo","zoozozozozoz","zoozooooozzzzz","zooooz","zoozzzzz","zoo","zoozzzoozz","zoooozzozozoz","zoozz","zooooz"]),"zoo");
        assert.equal(LongestCommonPrefix.bruteForceApproach(["bat","ball","banana","basket","bag","balloon","bad","bald","bar","band","bend","bash","bake","baby","back","brain","basic","bath","basis","balm"]),"b");
        assert.equal(LongestCommonPrefix.bruteForceApproach(["nanann","nanana","nanaaa","nanannn","nanaan","nanaann","nanannaa","nananan","nanaaaannnn","nananaannnaa","nanaaannaaaa","nananananana","nanannnnnnn","nana","nanan","nanaa","nanaaannaan","nanannnaaaa","nanaan","nanaaaannnnn"]),"nana");
        assert.equal(LongestCommonPrefix.bruteForceApproach(["xyzzz","xyzxx","xyzxyz","xyzyy","xyzxyzxyz","xyzxxyy","xyzxxyyzzy","xyzzzyyxx","xyzyyxxzzzz","xyzyyxxzzzz","xyzyyzzxxxxz","xyzyxzzxy","xyzxxyyxy","xyzzzyyzy","xyzxxzzxz","xyzxxyyzzxyz","xyzxxyyzzzz","xyzyyxxzzyxz","xyzyzxxyz","xyz"]),"xyz");
        assert.equal(LongestCommonPrefix.bruteForceApproach(["aaaa","aaaaaa","aaaaaaa","aaaaaaaaaa","aaaaa","aa","aaa","a","aaaaaaaaaa","aaaaaaaaaaaaaa","aaaaaaaaaaaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaaaa","aaaaaaaaa","aaaaaaaaaaa","aaaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaa","aaaaaaaaaaa","aaaaaaaaaaaaaaaaaaaa"]),"a");
        assert.equal(LongestCommonPrefix.bruteForceApproach(["lmno","lhhtri","llmmnn","ltuiriityh","lmntyuu","lmhutf","mno","lhtrech","lllll","llmmnn","llmmnnooo","lll","lmnopq","lmopiutc","l","lmngtdff","lwef","leak","loutfhh","lqdf"]),"");
        assert.equal(LongestCommonPrefix.bruteForceApproach(["apple","app","apply","appear","appoint","approve","apps","apparel","append","appeal","appose","approach","application","appointed","appraise","approved","appreciate","approval","appendix","applaud"]),"app");    
    });
});

describe("LCP_Divide And Conquer Approach:", function() {
    it ("run all test cases", function() {
        assert.equal(LongestCommonPrefix.divideAndConquerApproach(["bbwedhb","bbwkhghtghjkg","bbwoouytt","bbwhyygfdfhhj","bbwhtajsh","bbwkjuy","bbwwwet","bbwssa","bbwqqq","bbwooppoui","bbwggat","bbwjjhhtt","bbwwww","bbwbbbbb","bbwbwbwbwbw","bbwoiuyt","bbwfdsdg","bbww","bbwwt","bbwwo"]), "bbw");
        assert.equal(LongestCommonPrefix.divideAndConquerApproach(["abbaatt","abbassgty","abbapjirdgh","abbatyyurew","abbaaaaa","abbaaaabbaaa","abbaooiyt","abba","abbatyyrere","abbahhtrdgj","abbattyytre","abbannmn","abbababa","abbatytre","abbaaaaajjtt","abbawqe","abbayuutr","abbaoiur","abbammmnnn","abbayuytesv"]),"abba");
        assert.equal(LongestCommonPrefix.divideAndConquerApproach(["peacock","penguin","pet","pen","penny","pencil","per","peach","perk","peak","peek","peer","pest","pens","peon","pets","pear","pearl","peppy","petal"]),"pe");
        assert.equal(LongestCommonPrefix.divideAndConquerApproach(["zoozooooo","zooozoo","zooo","zoooooo","zoozozo","zoozo","zoozzz","zoozozozz","zooozzz","zoozzoo","zoozzzzoooo","zoozozozozoz","zoozooooozzzzz","zooooz","zoozzzzz","zoo","zoozzzoozz","zoooozzozozoz","zoozz","zooooz"]),"zoo");
        assert.equal(LongestCommonPrefix.divideAndConquerApproach(["bat","ball","banana","basket","bag","balloon","bad","bald","bar","band","bend","bash","bake","baby","back","brain","basic","bath","basis","balm"]),"b");
        assert.equal(LongestCommonPrefix.divideAndConquerApproach(["nanann","nanana","nanaaa","nanannn","nanaan","nanaann","nanannaa","nananan","nanaaaannnn","nananaannnaa","nanaaannaaaa","nananananana","nanannnnnnn","nana","nanan","nanaa","nanaaannaan","nanannnaaaa","nanaan","nanaaaannnnn"]),"nana");
        assert.equal(LongestCommonPrefix.divideAndConquerApproach(["xyzzz","xyzxx","xyzxyz","xyzyy","xyzxyzxyz","xyzxxyy","xyzxxyyzzy","xyzzzyyxx","xyzyyxxzzzz","xyzyyxxzzzz","xyzyyzzxxxxz","xyzyxzzxy","xyzxxyyxy","xyzzzyyzy","xyzxxzzxz","xyzxxyyzzxyz","xyzxxyyzzzz","xyzyyxxzzyxz","xyzyzxxyz","xyz"]),"xyz");
        assert.equal(LongestCommonPrefix.divideAndConquerApproach(["aaaa","aaaaaa","aaaaaaa","aaaaaaaaaa","aaaaa","aa","aaa","a","aaaaaaaaaa","aaaaaaaaaaaaaa","aaaaaaaaaaaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaaaa","aaaaaaaaa","aaaaaaaaaaa","aaaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaa","aaaaaaaaaaa","aaaaaaaaaaaaaaaaaaaa"]),"a");
        assert.equal(LongestCommonPrefix.divideAndConquerApproach(["lmno","lhhtri","llmmnn","ltuiriityh","lmntyuu","lmhutf","mno","lhtrech","lllll","llmmnn","llmmnnooo","lll","lmnopq","lmopiutc","l","lmngtdff","lwef","leak","loutfhh","lqdf"]),"");
        assert.equal(LongestCommonPrefix.divideAndConquerApproach(["apple","app","apply","appear","appoint","approve","apps","apparel","append","appeal","appose","approach","application","appointed","appraise","approved","appreciate","approval","appendix","applaud"]),"app");
    });
});

// //LCS
describe("LCS_Brute Force Approach:", function() {
    it ("run all test cases", function() {
        assert.equal(LongestCommonSubsequence.bruteForceApproach(["abcde","ace"]),"ace");
        assert.equal(LongestCommonSubsequence.bruteForceApproach(["lmnopq","xyz"]),"");
        assert.equal(LongestCommonSubsequence.bruteForceApproach(["peacock","penguin"]),"pe");
        assert.equal(LongestCommonSubsequence.bruteForceApproach(["ttybace","bclknm"]),"bc");
        assert.equal(LongestCommonSubsequence.bruteForceApproach(["canada","vancouver"]),"an");
        assert.equal(LongestCommonSubsequence.bruteForceApproach(["book","table"]),"b");
        assert.equal(LongestCommonSubsequence.bruteForceApproach(["spptap","pxtxsap"]),"ptap");
        assert.equal(LongestCommonSubsequence.bruteForceApproach(["common","communicate"]),"commn");
        assert.equal(LongestCommonSubsequence.bruteForceApproach(["xyzxyz","axbyyzz"]),"xyyz");
        assert.equal(LongestCommonSubsequence.bruteForceApproach(["yellow","melon"]),"elo");
        assert.equal(LongestCommonSubsequence.bruteForceApproach(["csstxbst","astsbksty"]),"stbst");
        assert.equal(LongestCommonSubsequence.bruteForceApproach(["example","analyze"]),"ale");
    });
});
