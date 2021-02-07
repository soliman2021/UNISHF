import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    { path: '', redirectTo: '/all', pathMatch: 'full' },
    { path: 'all', loadChildren: "./all-heros/all-heros.module#AllHerosModule" },
    { path: ':id', loadChildren: "./hero-details/hero-details.module#HeroDetailsModule" },
    { path: '**', redirectTo: '/all' },
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }