/**
 * Get movie Title from an API https://jsonmock.hackerrank.com/api/movies/search/?Title=movieTitle
 * This API will result an array of movie titles containg our search
 * Request: https://jsonmock.hackerrank.com/api/movies/search/?Title=Spiderman
 * Response: 
 * { 
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
 * Each request result info about current page and total number of page. Along with list of movies.
 * To fetch next page movie titles request will be https://jsonmock.hackerrank.com/api/movies/search/?Title=movieTitle&page=pageNumber
 * `data` is array of JSON, each JSON object contains `Title` of movie consisting our search Title
 * 
 * Write a function to fetch all the `Title` from response, and return name in sorted format.
 * Example: [ 
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
 */
const https = require('https');
/*
 * Complete the function below.
 * Use console.log to print the result, you should not return from the function.
 */
function makeCall(reqUrl, titles, substr) {

    let result = '';
    
    return new Promise( (resolve, reject) => { 
        https.get(reqUrl, (res) => {
            res.on('data', (d) => {
                result += d;
            });
                
            // The whole response has been received. Print out the result.
            res.on('end', () => {
                try {
                    if (typeof result === 'string') result = JSON.parse(result);
                }
                catch(err) {
                    return reject([]);
                }

                let page            = result.page,
                    total_pages     = result.total_pages;

                let title           = result.data;

                for(let i = 0; i<title.length; i++){
                    titles.push(title[i].Title);
                }

                if (page == total_pages) {
                    return resolve(titles);
                } else {
                    let url = "https://jsonmock.hackerrank.com/api/movies/search/?Title=" + substr + "&page=" + Number(Number(page) + 1);
                    return resolve(makeCall(url, titles, substr));
                }
            });

        }).on('error', (e) => {
        console.error(e);
        reject(e);
        });
    });
    
}
function getMovieTitles(substr) {

    let reqUrl = "https://jsonmock.hackerrank.com/api/movies/search/?Title=" + substr;
    
    let titles = [];
    
    return new Promise( (resolve, reject) => {
        makeCall(reqUrl, titles, substr)
        .then( result => {
            titles = result.sort();
            resolve(titles);
        });
    });
}

getMovieTitles("Spiderman")
.then(result => {
    console.log(result);
});