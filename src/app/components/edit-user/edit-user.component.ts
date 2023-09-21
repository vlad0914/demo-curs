import { Component } from '@angular/core';
import { FormGroup, FormControl, NonNullableFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-edit-user',
    templateUrl: './edit-user.component.html',
    styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {

    user:any;

    editUserForm: FormGroup<{
        nume: FormControl<string>;
        prenume: FormControl<string>;
        varsta: FormControl<string>;
    }>;

    constructor(
        private fb: NonNullableFormBuilder,
        private router:Router,
        private activatedRoute:ActivatedRoute) {
        
        this.user = history.state;
        this.editUserForm = this.fb.group({
            nume: [this.user.nume, [Validators.required]],
            prenume: [this.user.prenume, [Validators.required]],
            varsta: [this.user.varsta, [Validators.required]]
        });

    }


    editeazaUtilizator() {
        console.log(this.editUserForm.value)
    }

    resetareFormular(e: MouseEvent): void {
        e.preventDefault();
        this.editUserForm.reset();
    }
}
