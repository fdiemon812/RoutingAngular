// app.routing.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers/servers.component';
import { AuthGuard } from './services/auth-guard.service';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users/users.component';




const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    { path: 'servers',canActivate:[AuthGuard], component: ServersComponent, children: [
        { path: ':id/edit', component: EditServerComponent },
        { path: ':id', component: ServerComponent }
      ] 
      },{ path: 'users', component: UsersComponent, children: [
        { path: ':id/:name', component: UserComponent },
      ] 
      },
    { path: 'not-found',
     component: PageNotFoundComponent},
{
     path: '**', 
     redirectTo: '/not-found'}
];




@NgModule({
    imports: [
        RouterModule.forRoot( routes )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
