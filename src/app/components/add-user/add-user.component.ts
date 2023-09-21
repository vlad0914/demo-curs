import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, NonNullableFormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  addUserForm: FormGroup<{
    nume: FormControl<string>;
    prenume: FormControl<string>;
    varsta: FormControl<string>;
  }>;

  constructor(private fb: NonNullableFormBuilder) {

    this.addUserForm = this.fb.group({
      nume: ['', [Validators.required]],
      prenume: ['', [Validators.required]],
      varsta: ['', [Validators.required]]
    });
  }

  adaugaUtilizator() {
    console.log(this.addUserForm.value)
  }

  resetareFormular(e: MouseEvent): void {
    e.preventDefault();
    this.addUserForm.reset();
  }
  
}
