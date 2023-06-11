import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ADMIN_ROUTES } from './routes';

@NgModule({
  imports: [RouterModule.forRoot(ADMIN_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
