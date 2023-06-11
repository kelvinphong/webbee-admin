import { NgModule } from "@angular/core";
import { AdminComponent } from "./admin.component";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [
        AdminComponent
    ],
    imports: [
        HttpClientModule,
        RouterModule.forChild([
            {
                path: '',
                pathMatch: 'full',
                component: AdminComponent
            },
            {
                path: 'login',
                loadChildren: () => import('../login/login.module').then(m => m.LoginModule)
            }
        ])
    ]
})
export class AdminModule {}