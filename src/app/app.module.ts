import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CallbackComponent } from './pages/callback/callback.component';
import { MyRsvpsComponent } from './pages/my-rsvps/my-rsvps.component';

// import { EventModule } from './pages/event/event.module';
// import { AdminModule } from './pages/admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CallbackComponent,
    MyRsvpsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AuthModule.forRoot(),
    CoreModule.forRoot()
    // EventModule,
    // AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
