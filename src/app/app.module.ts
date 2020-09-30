import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoComponent } from './apps/todo-list/todo/todo.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { ContentAnimateDirective } from './shared/directives/content-animate.directive';
import { TodoListComponent } from './apps/todo-list/todo-list.component';
import { HeaderComponent } from './shared/header/header.component';
import { DocumentsComponent } from './pages/documents/documents.component';
import { FileUploadComponent } from './pages/file-upload/file-upload.component';
import { TextBlastComponent } from './pages/text-blast/text-blast.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PromotionComponent } from './pages/promotion/promotion.component';
import { SeminarComponent } from './pages/seminar/seminar.component';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { FaqComponent } from './pages/faq/faq.component';
import { MatSliderModule, MatNativeDateModule, MatDatepickerModule, MatFormFieldModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    TodoListComponent,
    TodoComponent,
    SpinnerComponent,
    ContentAnimateDirective,
    HeaderComponent,
    DocumentsComponent,
    FileUploadComponent,
    TextBlastComponent,
    HomePageComponent,
    PromotionComponent,
    SeminarComponent,
    WelcomeComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    HttpClientModule,
    HttpModule,
    MatSliderModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule
  ],
  providers: [MatDatepickerModule, MatFormFieldModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
