import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { PersonService } from '../../services/person.service';
import { Person } from '../../model/person';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {
  personForm: FormGroup;
  submitted: boolean;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.personForm = this.fb.group( {
      firstName: ['',[Validators.required, Validators.minLength(2)]]
      // lastName: ['',[Validators.required, Validators.minLength(2)]],
    })
  }

  save(model: Person) {
    this.submitted = true;
    console.log('save person ..........' + (<Person>model).firstName);

  }

}
