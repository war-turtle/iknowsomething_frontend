import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './guards/auth-guard.service';

const routes: Routes = [
  { path: '', loadChildren: './pages/pages.module#PagesModule' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
  { path: 'app', canLoad: [AuthGuardService] , loadChildren: './mainapp/mainapp.module#MainappModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
