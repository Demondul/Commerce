import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { DetailsComponent } from './details/details.component';
import { NewproductComponent } from './newproduct/newproduct.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { HttpClientModule } from '@angular/common/http';
import { ControlService } from './control.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    DetailsComponent,
    NewproductComponent,
    UpdateproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ControlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
