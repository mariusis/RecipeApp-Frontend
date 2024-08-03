import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { RecipeCardComponent } from "./components/recipe-card-component/recipe-card.component";
import { SearchbarComponent } from './components/searchbar/searchbar.component';




@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavbarComponent,SearchbarComponent, RecipeCardComponent]
})
export class AppComponent {
  title = 'recipeApp';
}
