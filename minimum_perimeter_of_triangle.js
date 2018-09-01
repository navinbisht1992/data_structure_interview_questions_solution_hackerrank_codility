/**
Write a function to find out the minimum perimeter of possible triangles from an input array of unsorted integers.
Return -1 if no triangle is possible.
Consdition for triangle if a, b, c are three sides is
a + b > c
a + c > b
b + c > a

Example:
Input 1:
A = [4, 5, 1, 3, -4, 6]

Return 12

Explanation
3 trainagles are possible
First [4, 5, 3]  P = 12
Second [4, 3, 6]  P = 13
Third [4, 5, 6]  P = 15

Thus minimum perimeter is 12

Input 2:
A = [ 5, 1, 17, 9, 3]
Return -1, as no possible triangle
*/

function minimumPerimeter (A) {

    let n = A.length;

    if (n < 3) return -1;

    // Sort an input array in ascending order
    // Using JavaScript Sort function here
    A.sort( (a, b) => { return a-b; } );

    for ( let i = 0; i < n-2; i++) {
        // The Array is sorted, no need to check other conditions.
        if (A[i] + A[i+1] > A[i+2]) {
            return A[i] + A[i+1] + A[i+2];
        }
    }

    return -1;
}

console.log(minimumPerimeter([4,5,1,3,-4,6]));
console.log(minimumPerimeter([4,1,3,-4,9]));