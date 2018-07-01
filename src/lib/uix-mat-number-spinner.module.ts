import { NgModule } from "@angular/core";
import { MatNumberSpinnerComponent } from "./mat-number-spinner.component";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  imports: [BrowserModule],
  declarations: [MatNumberSpinnerComponent],
  exports: [MatNumberSpinnerComponent]
})
export class UixMatNumberSpinnerModule {}
