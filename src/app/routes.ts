import { Routes } from '@angular/router';
 
export const ADMIN_ROUTES: Routes = [
    {
        path: '',
        loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)
    },
    {
        path: 'login',
        loadChildren: () => import('./layout/login/login.module').then(m => m.LoginModule)
    }
];