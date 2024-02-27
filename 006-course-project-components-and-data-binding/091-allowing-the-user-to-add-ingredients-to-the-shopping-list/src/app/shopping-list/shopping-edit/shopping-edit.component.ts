import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {

  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  onAddItem() {
    const ingredientName = (this.nameInput.nativeElement as HTMLInputElement).value;
    const ingredientAmount = Number.parseInt((<HTMLInputElement>this.amountInput.nativeElement).value);
    const newIngredient = new Ingredient(
      ingredientName,
      ingredientAmount
    );

    this.ingredientAdded.emit(newIngredient);
  }
}
