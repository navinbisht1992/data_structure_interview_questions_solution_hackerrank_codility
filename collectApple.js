/**
    Noah and Edie own a field. They cultivate Apple every year. They always plant trees are in a straight line.

    They want to collect maximum amount of apples together. To do so they decided to collect apples from consecutive trees. They both decided how many trees they individually want to collect apples from.

    Example:
    If there's 10 trees, Noah decided to collect apple from 4 consecutive trees and Edie decided to collect from only 2 consecutive trees, as they are expecting a baby she will taking more rest.
    If 10 trees have following apple:
      T1 - 50,
      T2 - 15,
      T3 - 24,
      T4 - 5,
      T5 - 32,
      T6 - 22,
      T7 - 7,
      T8 - 41,
      T9 - 10,
      T10 - 16

    If Noah pick T5, T6, T7, T8 , he will be able to collect 102 Apples
    If Edie pick T1, T2, she will manage to collect 65 Apples
    Thus together she will be able to collect 167 Apples. 

    Write a function to help them pick maximum Apples. Function should return maximum number of apples they can pick.
    You are provided with
    A - Array of Apples in every tree.
    K - Number of trees Noah wants to collect from.
    L - Number of trees Edie wants to collect from.

    If no such way is possible return -1.

*/

function secondSum (A, K, n) {
    let max = 0;

    // Sum of first K+L element
    for (let i = 0; i<K; i++) {
        max += A[i];
    }

    let maxT = max,
        pre = 0;

    for (let i = K; i<n; i++) {
        // Add next value and delete value from first place
        // if max = A[0]+A[1]+A[2]. now it's A[1]+A[2]+A[3] 
        maxT -= A[pre];
        maxT += A[i];

        if(maxT > max) {
            max = maxT;
        }

        pre++;
    }

    return max;
}

function sum (A,K,L,n) {
    let max1 = 0, maxA = 0,
        max2 = 0, maxB = 0;

    let  i = 0,
        j = 0;

        // Sum of first K elements for Noah   
        for(i = 0; i<K; i++){
            max1 += A[i];
        }

        maxA = max1;

        let k = K;
        let pre = 0;

        let mi = 0, mj = K-1;

        // Find other possible pairs for Noah
        for(k = K; k<n; k++){
            maxA -= A[pre];
            maxA += A[k];

            // If new sum is greater then last one
            if(maxA > max1) {
                max1 = maxA;
                mj = k;
                mi = k - (K - 1);
            }
            pre++;
        }

        // Selecting trees for Edie, to start from trees Noah left.
        if(mi < L){
            j = mj+1;
            i = mj+1;

            let ni = i, nj = i + (L-1);

            // Condition if no continues tree left for Edie
            if (nj >= n) {
                // They both are selecting same continues trees
                return secondSum(A, K+L, n);
            }
            // Sum of first L elements     
            for(j = 0; j<L; j++){
                max2 += A[i];
                i++;
            }

            maxB = max2;

            pre = ni;

            for (j = nj+1; j<n; j++){
                maxB -= A[pre];
                maxB += A[j];
                if(max2 < maxB) {
                    max2 = maxB;
                }
                pre++;
            }
        } else {
            i = 0;
            // Sum of L elements
            for(i; i<L; i++){
                max2 += A[i];
            }

            maxB = max2;
            pre = 0;

            for(j = L; j<mi; j++){
                maxB -= A[pre];
                maxB += A[j];

                if(maxB > max2) {
                    max2 = maxB;
                }
                pre++;
            }

            if(L <= (n - 1 - mj)){
                maxB = 0;
                j = mj+1;
                i = mj+1;

                let ni = i, nj = i + (L-1);
                // Sum of first L elements     
                for(j = 0; j<L; j++){
                    maxB += A[i];
                    i++;
                }

                if(max2<maxB){
                    max2 = maxB;
                }

                pre = ni;

                for (j = nj+1; j<n; j++){
                    maxB -= A[pre];
                    maxB += A[j];
                    if(max2 < maxB) {
                        max2 = maxB;
                    }
                    pre++;
                }
            }

        }

    return max1 + max2;
}

function solution(A, K, L) {
    // write your code in JavaScript (Node.js 8.9.4)
    let n = A.length;
    
    let max = 0;

    // Not posible
    if(n < K+L) return -1;
    if(K <1 && L < 1) return -1;

    // All Trees
    if(n === K+L){
        for(let i = 0, j = n-1; i<=j; i++){
            if(i===j) {
                max += A[i];   
            } else {
                max += A[i] + A[j];
            }
            j--;
        }
        return max;
    }

    if (K>L || K===L) {
        max = sum (A,K,L,n);
    } else {
        max = sum(A,L,K,n);
    }
    return max;   
}

console.log(solution([6, 4, 6, 8, 6, 5, 2,9], 4, 3));
