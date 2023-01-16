import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { ContentModule } from "./components/content/content.module"
import { ContentNonAdminComponent } from "./components/content/non-admin/content-non-admin.component"
import { ContentSuperAdminComponent } from "./components/content/super-admin/content-super-admin.component"
import { AdminGuard } from "./guard/admin.guard"
import { CanActiveAuth } from "./guard/can-active-auth.guard"
import { NonAdminGuard } from "./guard/non-admin.guard"
import { NotFoundComponent } from "./not-found/not-found.component"
import { LoginComponent } from "./pages/login/login.component"

const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent,
        // canActivate: [CanActiveAuth]
    },
    {
        path: 'dashboard',
        loadChildren: () => import('./pages/dashboard/dashboard.module').then(s => s.DashboardModule)
    },
    {
        path: 'assets',
        component: ContentSuperAdminComponent,
        loadChildren: () => import('./pages/asset/asset.module').then(s => s.AssetModule),
        canLoad: [AdminGuard]
    },
    {
        path: 'providers',
        component: ContentSuperAdminComponent,
        loadChildren: () => import('./pages/provider/provider.module').then(s => s.ProviderModule),
        canLoad: [AdminGuard]
    },
    {
        path: 'companies',
        component: ContentSuperAdminComponent,
        loadChildren: () => import('./pages/company/company.module').then(s => s.CompanyModule),
        canLoad: [AdminGuard]
    },
    {
        path: 'employees',
        component: ContentSuperAdminComponent,
        loadChildren: () => import('./pages/employee/employee.module').then(s => s.EmployeeModule),
        canLoad: [AdminGuard]
    },
    {
        path: 'stores',
        component: ContentSuperAdminComponent,
        loadChildren: () => import('./pages/store/store.module').then(s => s.StoreModule),
        canLoad: [AdminGuard]
    },
    {
        path: 'users',
        component: ContentSuperAdminComponent,
        loadChildren: () => import('./pages/user/user.module').then(s => s.UserModule),
        canLoad: [AdminGuard]
    },
    {
        path: 'profile',
        loadChildren: () => import('./pages/profile/profile.module').then(s => s.ProfileModule)
    },
    {
        path: 'check-outs',
        component: ContentNonAdminComponent,
        loadChildren: () => import('./pages/check-out/checkout.module').then(s => s.CheckOutModule),
        canLoad: [NonAdminGuard]
    },
    {
        path: 'check-ins',
        component: ContentNonAdminComponent,
        loadChildren: () => import('./pages/check-in/check-in.module').then(s => s.CheckInModule),
        canLoad: [NonAdminGuard]
    },
    {
        path: '**',
        component: NotFoundComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes), ContentModule
    ],
    exports: [
        RouterModule
    ]
})
export class AppRouting { }