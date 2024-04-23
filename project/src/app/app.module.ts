import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { TableComponent } from './table/table.component';
import { SearchtableComponent } from './searchtable/searchtable.component';
import { TableModule } from 'primeng/table';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MessagesModule } from 'primeng/messages';
import { MessageComponent } from './message/message.component';
import { RouterModule } from '@angular/router';
import { ProductModule } from './product/product.module';
import { MenuComponent } from './menu/menu.component';
import { DockModule } from 'primeng/dock';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { AppRoutingModule } from './app-routing.module';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    TableComponent,
    SearchtableComponent,
    MessageComponent,
    MenuComponent,
    LoginComponent,
    RegisterComponent,
    
    
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    CheckboxModule,
    DialogModule,
    TableModule,
    InputTextareaModule,
    MessagesModule,
    RouterModule,
    ProductModule,
    DockModule,
    ToastModule,
    CardModule,
    InputTextModule

  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
