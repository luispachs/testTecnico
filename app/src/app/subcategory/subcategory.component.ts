import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubcategoryService } from '../subcategory.service';

@Component({
  selector: 'app-subcategory',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subcategory.component.html',
  styleUrl: './subcategory.component.css'
})
export class SubcategoryComponent {
  public listSubcategory:any =[];
  public title:string = "Subcategorias";

  constructor(private subcategoryServices:SubcategoryService){

  }
  ngOnInit(){
    this.getAllSubcategories();
  }

  getAllSubcategories(){
    this.subcategoryServices.get('http://localhost:7000/api/subcategories').subscribe(response=>{
      this.listSubcategory=response
    });
  }
}
