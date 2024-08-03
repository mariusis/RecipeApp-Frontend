import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRecipeComponentComponent } from './new-recipe.component';

describe('NewRecipeComponentComponent', () => {
  let component: NewRecipeComponentComponent;
  let fixture: ComponentFixture<NewRecipeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewRecipeComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewRecipeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
