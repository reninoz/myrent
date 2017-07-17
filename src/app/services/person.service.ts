import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Person } from '../model/person';

// export const PERSONS: Person[] = [
//   {
//     firstName: 'chengtong', 
//     lastName: 'xu', 
//     dob: '01/01/1995',
//     email: 'chengtong@hotmail.com',
//     mobile: '0410000001',
//   },
//    {
//     firstName: 'muran', 
//     lastName: 'liu', 
//     dob: '01/01/1992',
//     email: 'muran@hotmail.com',
//     mobile: '0410000002',
//   },
//    {
//     firstName: 'jiuchao', 
//     lastName: 'li', 
//     dob: '01/01/1989',
//     email: 'jiuchao@hotmail.com',
//     mobile: '0410000003',
//   },
//    {
//     firstName: 'sam', 
//     lastName: 'whatever', 
//     dob: '01/01/1991',
//     email: 'sam@hotmail.com',
//     mobile: '0410000004',
//   },
//    {
//     firstName: 'lin', 
//     lastName: 'yuan', 
//     dob: '01/01/1995',
//     email: 'yuanlin@hotmail.com',
//     mobile: '0410000005',
//   }
// ];

@Injectable()
export class PersonService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private options = new RequestOptions({ headers: this.headers });
  private personsUrl = 'api/persons';

  constructor(private http: Http) { }

  // getPersons() : Person[] {
  //   return PERSONS.concat(PERSONS).concat(PERSONS).concat(PERSONS);
  // }

  getPersons() : Promise<Person[]> {
    return this.http.get(this.personsUrl)
    .toPromise()
    .then(response => response.json().data as Person[])
    .catch(this.handleError);
  }

  getPerson(id: number) : Promise<Person> {
    console.log('passed in id ................' + id);
    const url = 'api/persons/'+id;
    return this.http.get(url)
    .toPromise()
    .then(response => response.json().data as Person)
    .catch(this.handleError);
  }

  update(person: Person) :Promise<Person> {
    const url = 'api/persons/'+person.id;
    return this.http
    .put(url, JSON.stringify(person), {headers: this.headers})
    .toPromise()
    .then(()=> person)
    .catch(this.handleError);
    
  }

  handleError(error: any) : Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }
}
