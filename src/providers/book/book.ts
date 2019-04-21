import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the BookProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BookProvider {

  private baseApiPath = 'https://openlibrary.org/api/';

  constructor(public http: Http) {
    console.log('Hello BookProvider Provider');
  }

  getSomeBooks() {
    return this.http.get(this.baseApiPath + 'books?bibkeys=ISBN:9780451523204,ISBN:9780020442202,ISBN:9780523420639,ISBN:9780340930489,ISBN:0312092717&format=json&details=true');
  }

  getBooksCodes(){
    return null
  }

}
