import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { NewRecipeComponent } from './components/new-recipe/new-recipe.component';

export const routes: Routes = [
{'path':'',component:HomeComponent},
{'path':'about',component:AboutComponent},
{'path':'login',component:LoginComponent},
{'path':'register',component:RegisterComponent},
{'path':'favorites',component:FavoritesComponent},
{'path':'new-recipe',component:NewRecipeComponent}
];
