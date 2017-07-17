import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import * as _ from 'underscore';

import { Person } from '../../model/person';
import { PersonService } from '../../services/person.service';
import { PagerService } from '../../services/pager.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  persons: Person[];

  pager: any = {};

  pagedPersons: Person[];

  constructor(private personService: PersonService,
  private pagerService: PagerService,
  private http: Http) { }

  ngOnInit() {
    // this.persons = this.personService.getPersons();
    //get dummy data
    // this.http.get('assets/dummy-person-data.json')
    // .map((response: Response) => response.json() )
    // .subscribe( data => {
    //   this.persons = data;

    //   this.setPage(1);
    // })

    this.personService.getPersons()
    .then(persons => {
      this.persons = persons;
      this.setPage(1);
    })
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }
    //get pager object from service
    this.pager = this.pagerService.getPager(this.persons.length, page, 5);
    //get current page of items
    this.pagedPersons = this.persons.slice(this.pager.startIndex, this.pager.endIndex + 1);

  }

}
