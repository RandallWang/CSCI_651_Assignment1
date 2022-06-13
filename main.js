import {LongestCommonPrefix} from "./LongestCommonPrefix.js";
import {LongestCommonSubsequence} from "./LongestCommonSubsequence.js";
import { performance } from "perf_hooks";

//you can run and test the code here. 
//Or use 'npm test' in the terminal to run all the test cases.

// LongestCommonPrefix.bruteForceApproach(["bat","ball","banana","basket","bag","balloon","bad","bald","bar","band","bend","bash","bake","baby","back","brain","basic","bath","basis","balm"]);
// LongestCommonPrefix.divideAndConquerApproach(["bat","ball","banana","basket","bag","balloon","bad","bald","bar","band","bend","bash","bake","baby","back","brain","basic","bath","basis","balm"]);

ExperimentalAnalysisForLCP();
/* 
    7.Experimental Analysis:
    For the experimental analysis, you will plot running times as a function of input size. 
    Every programming language should provide access to a clock. Run algorithms constructed in 3 and 4 on input 
    arrays of size 10 ... 100 in increments of 10 (you should have 10 data points for each algorithm). 
    To do this, generate random sequences using a random string generator with some fixed prefix. 
    For each data point, you should take the average of a small number (say, 10) that runs to smooth out any noise. 
    For example, for the first data point, you will do something like:
        for i = 1:10
        A = random array with 10*i entries start clock longestCommonPrefix(A)
        pause clock return
        elapsed time
    Note that you should not include the time taken to generate the random sequences. 
    Plot the running times as a function of input size for each algorithm in a single plot. 
    Provide screenshots of your algorithm generating the results. 
    Include the code that runs the experiments and screenshots in your submission.
    **/
function ExperimentalAnalysisForLCP() {
    var durations1 = [];
    var durations2 = [];
    //run the experiment for 10 times
    for (let time = 0; time < 10; time++) {
        //experiment the performance for different input size
        for (let i = 1; i < 11; i++) {
            let testCases = generateRandomTestCases(i * 10);
    
            var startTime1 = performance.now();
            LongestCommonPrefix.bruteForceApproach(testCases);
            var endTime1 = performance.now();
            var duration1 = endTime1 - startTime1;
            console.log(`LongestCommonPrefix bruteForceApproach: input size ${testCases.length}, duration: ${duration1}`);
            durations1.push(duration1);

            var startTime2 = performance.now();
            LongestCommonPrefix.divideAndConquerApproach(testCases);
            var endTime2 = performance.now();
            var duration2 = endTime2 - startTime2;
            console.log(`LongestCommonPrefix divideAndConquerApproach: input size ${testCases.length}, duration: ${duration2}`);
            durations2.push(duration2);
        }
    }
    console.log(durations1);// all the running time for bruteForceApproach
    console.log(durations2);// all the running time for divideAndConquerApproach
}

function generateRandomTestCases(numberOfCases) {
    let prefix = "FixedPrefix";
    let result = [];
    for (let i = 0; i < numberOfCases; i++) {
        let randomString = prefix + makeid(10);
        result.push(randomString);
    }
    return result;
}

function makeid(length) {
    var result = '';
    var characters = 'abcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
