import { ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameinput') nameInputRef: ElementRef;
  @ViewChild('amountinput') amountInputRef: ElementRef;
  @Output()  IngredientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit(): void {
  }
  onAddItem(){
   const ingName = this.nameInputRef.nativeElement.value;
   console.log(ingName);
  const ingAmount = this.amountInputRef.nativeElement.value;
   const newIngredient = new Ingredient(ingName,ingAmount);
   this.IngredientAdded.emit(newIngredient);
  }
}
