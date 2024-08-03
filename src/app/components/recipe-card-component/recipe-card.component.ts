import { Component } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.css',
})
export class RecipeCardComponent {
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipeService.getRecipes().subscribe(
      (data) => {
        console.log(data);
        this.recipes = data;
      },
      (error) => {
        console.error(error);
        this.recipes = [];
      }
    );
  }
}
