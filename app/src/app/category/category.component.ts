import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryServiceService } from '../category-service.service';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  title:string = "Categorias";
  public listCategory:any =[];
  constructor(private CategoryService:CategoryServiceService){
  }
  ngOnInit():void{
    this.getCategories();
  }

  getCategories(){
    this.CategoryService.getAll('http://localhost:7000/api/categories').subscribe(response =>{
      console.log(response);
        this.listCategory = response;
    })
  }
}
