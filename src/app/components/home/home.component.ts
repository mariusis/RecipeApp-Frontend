import { Component } from '@angular/core';
import { SearchbarComponent } from "../searchbar/searchbar.component";
import { RecipeCardComponent } from "../recipe-card-component/recipe-card.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [SearchbarComponent, RecipeCardComponent]
})
export class HomeComponent {

}
