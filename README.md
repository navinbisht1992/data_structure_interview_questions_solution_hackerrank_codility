# data_structure_competitive_interview_questions_hackerrank_codility

### MovieTitle.js
  Get movie Title from an API `https://jsonmock.hackerrank.com/api/movies/search/?Title=movieTitle`
  This API will result an array of movie titles containg our search
  Request: `https://jsonmock.hackerrank.com/api/movies/search/?Title=Spiderman`
  Response:
```
  { 
        page: '1',
        per_page: 10,
        total: 13,
        total_pages: 2,
        data: [
            { 
                Poster: 'N/A',
                Title: 'They Call Me Spiderman',
                Type: 'movie',
                Year: 2016,
                imdbID: 'tt5861236'
            },
            {
                Poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg',
                Title: 'Italian Spiderman',
                Type: 'movie',
                Year: 2007,
                imdbID: 'tt2705436'
            },
            { 
                Poster: 'N/A',
                Title: 'The Death of Spiderman',
                Type: 'movie',
                Year: 2015,
                imdbID: 'tt5921428'
            },
            { 
                Poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BZDlmMGQwYmItNTNmOS00OTNkLTkxNTYtNDM3ZWVlMWUyZDIzXkEyXkFqcGdeQXVyMTA5Mzk5Mw@@._V1_SX300.jpg',
                Title: 'Spiderman in Cannes',
                Type: 'movie',
                Year: 2016,
                imdbID: 'tt5978586'
            },
            { 
                Poster: 'N/A',
                Title: 'Fighting, Flying and Driving: The Stunts of Spiderman 3',
                Type: 'movie',
                Year: 2007,
                imdbID: 'tt1132238'
            }
        ]
    }
```
  Each request result info about current page and total number of page. Along with list of movies.
  To fetch next page movie titles request will be `https://jsonmock.hackerrank.com/api/movies/search/?Title=Spiderman&page=2`
  `data` is array of JSON, each JSON object contains `Title` of movie consisting our search Title
  
  Write a function to fetch all the `Title` from response, and return name in sorted format.
  Example: 
```
    [ 
        'Amazing Spiderman Syndrome',
        'Fighting, Flying and Driving: The Stunts of Spiderman 3',
        'Hollywood\'s Master Storytellers: Spiderman Live',
        'Italian Spiderman',
        'Spiderman',
        'Spiderman',
        'Spiderman 5',
        'Spiderman and Grandma',
        'Spiderman in Cannes',
        'Superman, Spiderman or Batman',
        'The Amazing Spiderman T4 Premiere Special',
        'The Death of Spiderman',
        'They Call Me Spiderman'
    ]
 ```



### collectApple.js

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





### minimum_perimeter_of_triangle.js

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

