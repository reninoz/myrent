import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import {IMyDpOptions} from 'mydatepicker';

// import {CalendarModule} from 'primeng/primeng';

import { PersonService } from '../../services/person.service';
import { Person } from '../../model/person';
@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

//  private myForm: FormGroup;
  private myDatePickerOptions: IMyDpOptions = {
        // other options...
        dateFormat: 'dd/mm/yyyy',
    };

  personForm: FormGroup;
  person: Person;
  firstName: string;
  constructor(
    private personService: PersonService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder) { }

  ngOnInit() {

    // this.myForm = this.fb.group({
    //         // Empty string or null means no initial value. Can be also specific date for
    //         // example: {date: {year: 2018, month: 10, day: 9}} which sets this date to initial
    //         // value.

    //         myDate: [null, Validators.required]
    //         // other controls are here...
    //     });

    this.personForm = this.fb.group({
      firstName: ['',[Validators.required, Validators.minLength(2)]],
      lastName: ['',[Validators.required, Validators.minLength(2)]],
      // dob: {date: {year: 2017, month: 1, day:15} },
      dob:[null],
      gender: [null],
      email: [null],
      mobile: [null],
      id: [null]
    });

    this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.personService.getPerson(+params.get('id')))
      .subscribe(person => {
        this.person = person;
        this.personForm.setValue(this.person, { onlySelf: true});
      });
    console.log(this.person);
  }

  save(person: Person) {
    console.log('Before update: ' + person);
    this.personService.update(person);
    this.personService.getPerson(person.id)
    .then(retrievedPerson=>console.log('After update: '+ retrievedPerson.firstName ));
    
  }
//  setDate(date: Date): void {
//         // Set today date using the setValue function
//         // let date = new Date();
//         this.personForm.setValue({dob: {
//         date: {
//             year: date.getFullYear(),
//             month: date.getMonth() + 1,
//             day: date.getDate()}
//         }});
//     }

//     clearDate(): void {
//         // Clear the date using the setValue function
//         this.myForm.setValue({myDate: null});
//     }
}
