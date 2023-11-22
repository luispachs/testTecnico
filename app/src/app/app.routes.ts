import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { ThemeComponent } from './theme/theme.component';

export const routes: Routes = [
    {path:'category',component: CategoryComponent},
    {path:'subcategory',component: SubcategoryComponent},
    {path:'theme',component:ThemeComponent}

];
