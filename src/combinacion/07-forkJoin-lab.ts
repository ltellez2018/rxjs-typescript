import { forkJoin, of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { catchError } from "rxjs/operators";

const GITHUB_API_URL = 'https://api.github.com/users';

const  GITUB_USER    = 'Klerith';

forkJoin({
    usuario:  ajax.getJSON(`${GITHUB_API_URL}/${GITUB_USER}`),
    repos:  
        ajax.getJSON(`${GITHUB_API_URL}/${GITUB_USER}/repos11`)
            .pipe(catchError( err => of([]))),
    gists:  ajax.getJSON(`${GITHUB_API_URL}/${GITUB_USER}/gists`)

}).pipe(
    catchError( err => of(err.message))
).subscribe(console.log);