import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './demos/home/home.component';
import { BindingsComponent } from './demos/bindings/bindings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PipesComponent } from './demos/pipes/pipes.component';
import { EurtobtcPipe } from './shared/pipes/eurtobtc.pipe';
import { TotimePipe } from './shared/pipes/totime.pipe';
import { InputoutputComponent } from './demos/inputoutput/inputoutput.component';
import { ChildrenComponent } from './demos/inputoutput/children/children.component';
import { Exos1_1Component } from './exos/exos1_1/exos1_1.component';
import { Exos1_2Component } from './exos/exos1_2/exos1_2.component';
import { Exos3Component } from './exos/exos3/exos3.component';
import { Exos2Component } from './exos/exos2/exos2.component';
import { DirectivesNgComponent } from './demos/directives-ng/directives-ng.component';
import { DirectiveCustomComponent } from './demos/directive-custom/directive-custom.component';
import { ZoomitDirective } from './shared/directives/zoomit.directive';
import { ZoomiteventDirective } from './shared/directives/zoomitevent.directive';
import { ZoomitParamsDirective } from './shared/directives/zoomit-params.directive';
import { TrimerDirective } from './shared/directives/trimer.directive';
import { Exos4Component } from './exos/exos4/exos4.component';
import { Exos5Component } from './exos/exos5/exos5.component';
import { MamyPipe } from './exos/exos5/mamy.pipe';
import { DemosComponent } from './demos/demos.component';
import { ExosComponent } from './exos/exos.component';
import { PrivateCompoComponent } from './demos/guards/private-compo/private-compo.component';
import { PublicCompoComponent } from './demos/guards/public-compo/public-compo.component';
import { TypagesComponent } from './demos/typages/typages.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SignalsComponent } from './demos/signals/signals.component';
import { FormsComponent } from './demos/forms/forms.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BindingsComponent,
    Exos1_1Component,
    Exos1_2Component,
    PipesComponent,
    EurtobtcPipe,
    TotimePipe,
    InputoutputComponent,
    ChildrenComponent,
    Exos3Component,
    Exos2Component,
    DirectivesNgComponent,
    DirectiveCustomComponent,
    ZoomitDirective,
    ZoomiteventDirective,
    ZoomitParamsDirective,
    TrimerDirective,
    Exos4Component,
    Exos5Component,
    MamyPipe,
    DemosComponent,
    ExosComponent,
    PublicCompoComponent,
    PrivateCompoComponent,
    PublicCompoComponent,
    TypagesComponent,
    FooterComponent,
    SignalsComponent,
    FormsComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
