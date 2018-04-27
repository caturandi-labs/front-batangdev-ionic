import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailPetaPage } from './detail-peta';

@NgModule({
  declarations: [
    DetailPetaPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailPetaPage),
  ],
})
export class DetailPetaPageModule {}
