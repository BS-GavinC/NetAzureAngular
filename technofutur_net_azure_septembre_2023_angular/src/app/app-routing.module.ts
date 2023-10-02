import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingsComponent } from './demos/bindings/bindings.component';
import { DirectiveCustomComponent } from './demos/directive-custom/directive-custom.component';
import { DirectivesNgComponent } from './demos/directives-ng/directives-ng.component';
import { HomeComponent } from './demos/home/home.component';
import { InputoutputComponent } from './demos/inputoutput/inputoutput.component';
import { PipesComponent } from './demos/pipes/pipes.component';
import { DemosComponent } from './demos/demos.component';
import { ExosComponent } from './exos/exos.component';
import { Exos1_1Component } from './exos/exos1_1/exos1_1.component';
import { Exos1_2Component } from './exos/exos1_2/exos1_2.component';
import { Exos2Component } from './exos/exos2/exos2.component';
import { Exos3Component } from './exos/exos3/exos3.component';
import { Exos4Component } from './exos/exos4/exos4.component';
import { Exos5Component } from './exos/exos5/exos5.component';
import { PrivateCompoComponent } from './demos/guards/private-compo/private-compo.component';
import { PublicCompoComponent } from './demos/guards/public-compo/public-compo.component';
import { mamyGuard } from './demos/guards/mamy.guard';
import { TypagesComponent } from './demos/typages/typages.component';
import { SignalsComponent } from './demos/signals/signals.component';
import { FormsComponent } from './demos/forms/forms.component';




const routes: Routes = [
  { path : "", component: HomeComponent },//Charge le composant

  { path : "demos", component : DemosComponent, children : [
    { path : "bindings", component: BindingsComponent },
    { path : "pipes", component : PipesComponent},
    { path : "inputoutput", component : InputoutputComponent},
    { path : "directivesng", component: DirectivesNgComponent},
    { path : "directivecustom", component: DirectiveCustomComponent},
    { path : "publiccompo", component : PublicCompoComponent},
    { path : "privatecompo", canActivate : [mamyGuard], component : PrivateCompoComponent},
    { path : "typages", component : TypagesComponent},
    { path : "signals", component : SignalsComponent},
    { path : "forms", component : FormsComponent}
  ]},


  { path : "exos", component : ExosComponent, children : [
    { path : "exos1_1", component: Exos1_1Component },
    { path : "exos1_2", component : Exos1_2Component},
    { path : "exos_2", component : Exos2Component},
    { path : "exos_3", component: Exos3Component},
    { path : "exos_4", component: Exos4Component},
    { path : "exos_5", component: Exos5Component},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
