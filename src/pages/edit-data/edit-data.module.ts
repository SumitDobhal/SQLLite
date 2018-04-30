import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditDataPage } from './edit-data';

@NgModule({
  declarations: [
    EditDataPage,
  ],
  imports: [
    IonicPageModule.forChild(EditDataPage),
  ],
  exports:[EditDataPage],
  entryComponents:[EditDataPage]
})
export class EditDataPageModule {}
