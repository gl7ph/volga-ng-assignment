import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PersonnelInfo } from '../personnelInfo.model';

@Component({
  selector: 'app-personnelmodal',
  templateUrl: './personnelmodal.page.html',
  styleUrls: ['./personnelmodal.page.scss'],
})
export class PersonnelmodalPage implements OnInit {

  @Input() isMobile!: Boolean;
  @Input() isReadOnly!: Boolean;
  @Input() personnelInfo: PersonnelInfo = {name: '', phone: '', email:'', address:''};

  personnel: PersonnelInfo = {name: '', phone: '', email:'', address:''}

  constructor(
    private modal: ModalController,
  ) { }

  ngOnInit() {

    if (this.personnelInfo != undefined) {
      this.personnel = this.personnelInfo;
    }

  }

  close() {

    this.modal.dismiss(null,'close');

  }

  cancel() {

    this.modal.dismiss(null,'cancel');

  }

  create() {

    this.modal.dismiss(this.personnel,'create');

  }

}
