import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DocumentsComponent } from './pages/documents/documents.component';
import { FileUploadComponent } from './pages/file-upload/file-upload.component';
import { TextBlastComponent } from './pages/text-blast/text-blast.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PromotionComponent } from './pages/promotion/promotion.component';
import { SeminarComponent } from './pages/seminar/seminar.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { FaqComponent } from './pages/faq/faq.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'seminar', component: SeminarComponent },
  { path: 'promotion', component: PromotionComponent },
  { path: 'text-blast', component: TextBlastComponent },
  { path: 'file-upload', component: FileUploadComponent },
  { path: 'documents', component: DocumentsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'basic-ui', loadChildren: () => import('./basic-ui/basic-ui.module').then(m => m.BasicUiModule) },
  { path: 'charts', loadChildren: () => import('./charts/charts.module').then(m => m.ChartsDemoModule) },
  { path: 'forms', loadChildren: () => import('./forms/form.module').then(m => m.FormModule) },
  { path: 'tables', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule) },
  { path: 'icons', loadChildren: () => import('./icons/icons.module').then(m => m.IconsModule) },
  { path: 'general-pages', loadChildren: () => import('./general-pages/general-pages.module').then(m => m.GeneralPagesModule) },
  { path: 'apps', loadChildren: () => import('./apps/apps.module').then(m => m.AppsModule) },
  { path: 'user-pages', loadChildren: () => import('./user-pages/user-pages.module').then(m => m.UserPagesModule) },
  { path: 'error-pages', loadChildren: () => import('./error-pages/error-pages.module').then(m => m.ErrorPagesModule) },
  { path: '**', redirectTo: '/welcome', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
