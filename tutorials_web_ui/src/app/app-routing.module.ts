import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { DevelopmentComponent } from './components/development/development.component';
import { QaComponent } from './components/qa/qa.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: 'mainPage',
    component: MainPageComponent,
  },
  {
    path: 'development',
    component: DevelopmentComponent,
  },
  {
    path: 'qa',
    component: QaComponent,
  }, {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
