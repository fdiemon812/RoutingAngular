import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { ServersModule } from './servers/servers.module';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app.routing';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { ServersService } from './servers/servers.service';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolver } from './servers/server/server-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    UsersModule,
    ServersModule,
    AppRoutingModule
  ],
  providers: [ServersService, AuthGuard, AuthService, CanDeactivateGuard, ServerResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
