import { NgModule } from "@angular/core";
import { LoginComponent } from "./login.component";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from "../../shared/shared.module";

@NgModule({
    declarations: [LoginComponent],
    imports: [
        SharedModule,
        RouterModule.forChild([
            {
                path: '',
                pathMatch: 'full',
                component: LoginComponent,
                data: {
                    title: 'Sign in'
                }
            }
        ])
    ]
})

export class LoginModule {}