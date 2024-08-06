import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-new-recipe-component',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './new-recipe.component.html',
  styleUrl: './new-recipe.component.css',
})
export class NewRecipeComponent implements OnInit {
  private apiUrl = environment.apiUrl + '/v1';
  recipeForm: FormGroup;
  authorId: number = -1;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private authService: AuthService
  ) {
    this.recipeForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      instructions: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.authService.getUserID().subscribe((response) => {
      this.authorId = response;
    });
  }

  onSubmit() {
    if (this.recipeForm.valid) {
      const body = {
        name: this.recipeForm.value.name,
        description: this.recipeForm.value.description,
        instructions: this.recipeForm.value.instructions,
        authorId: this.authorId,
      };
      this.http.post<any>(this.apiUrl, body).subscribe(
        (response) => {
          console.log('Recipe submitted successfully', response);
        },
        (error) => {
          console.error('Error submitting recipe', error);
        }
      );
    }
  }
}
