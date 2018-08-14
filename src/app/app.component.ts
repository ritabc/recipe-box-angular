import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recipe Box';

  recipes: Recipe[] = [
    new Recipe("Buttercream Frosting", ["2 cups shortening", "8 cups confectioners' sugar", "1/2 teaspoon salt", "2 teaspoons vanilla", "1 cup heavy whipping cream"], ["In a mixing bowl, cream shortening until fluffy. Add sugar, and continue creaming until well blended.", "Add salt, vanilla, and 6 ounces whipping cream. Blend on low speed until moistened. Add additional 2 ounces whipping cream if necessary. Beat at high speed until frosting is fluffy."]),
    new Recipe("Doggie Birthday Cake", ["1 egg", "1/4 cup peanut butter", "1/4 cup cooking oil", "1 teaspoon vanilla", "1/3 cup honey (optional)", "1 cup shredded carrots", "1 cup whole wheat flour", "1 teaspoon baking soda"], ["Preheat oven to 350 degrees F (175 degrees C). Grease a 6 cup ring mold.", "Bake in preheated oven for 40 minutes. Let cake cool in pan for 10 minutes; then turn out onto a wire rack to cool completely."])
  ];

  selectedRecipe = null;

  showRecipe(currentRecipe) {
    this.selectedRecipe = currentRecipe;
  }

  finishViewing() {
    this.selectedRecipe = null;
}

}
