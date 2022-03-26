import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormularioComponent } from './formulario/formulario.component';
import { RegionesComponent } from './regiones/regiones.component';
import { RegionService } from './regiones/region.service';
import { ListarComponent } from './listar/listar.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {path:'', redirectTo: '/formulario', pathMatch: 'full'},
  {path:'formulario', component: FormularioComponent},
  {path:'listar', component: ListarComponent},
  {path: 'formulario/:id', component: FormularioComponent}

]

@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent,
    FooterComponent,
    FormularioComponent,
    RegionesComponent,
    ListarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    RegionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
