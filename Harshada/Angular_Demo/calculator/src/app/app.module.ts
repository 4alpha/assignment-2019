import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { CaclService } from './calculator/cacl.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // FormsModule
  ],
  providers: [CaclService],
  bootstrap: [AppComponent]
})
export class AppModule { }
