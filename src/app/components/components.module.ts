import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { VoteButtonComponent } from './vote-button/vote-button.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { TimePassed } from '../helper/pipe/time-passed.pipe';
import { ModalComponent } from './modal/modal.component';
import { TimeagoModule } from 'ngx-timeago';



@NgModule({
  declarations: [
    CardComponent,
    VoteButtonComponent,
    FormComponent,
    TimePassed,
    ModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TimeagoModule
  ],
  exports: [
    CardComponent,
    VoteButtonComponent,
    FormComponent,
    ModalComponent,
  ]
})
export class ComponentsModule { }
