import { Component, OnInit } from '@angular/core';
import { PersonnelInfo } from '../personnelInfo.model';
import { DataService } from '../data.service';
import { MatTableDataSource } from '@angular/material/table';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';
import { ModalController } from '@ionic/angular';
import { PersonnelmodalPage } from '../personnelmodal/personnelmodal.page';
import { OverlayEventDetail } from '@ionic/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  isMobile: Boolean = false;

  renderedColumns: string[] = ['name', 'email', 'phone', 'delete', 'details'];

  data = new MatTableDataSource<PersonnelInfo>;

  filterQuery: string = '';

  constructor(
    private dataService: DataService,
    private bpO: BreakpointObserver,
    private modal: ModalController
  ) {}

  ngOnInit(): void {

    this.viewportChecker();

    this.dataService.data.subscribe(data => {
      this.data.data = data;
    });

    this.data.filterPredicate = (row: PersonnelInfo, filterString: string) => {
      return row.email.toLowerCase().includes(filterString.toLowerCase());
    }

  }

  viewportChecker() {

    this.bpO.observe([Breakpoints.Small, Breakpoints.HandsetPortrait]).subscribe((state: BreakpointState) => {

      if (state.matches) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }

    });

  }

  openModal(isReadonly: Boolean, personnelInfo?: PersonnelInfo) {
    
    this.modal.create({
      component: PersonnelmodalPage,
      backdropDismiss: false,
      cssClass: 'personnel-modal',
      componentProps: {
        isMobile: this.isMobile,
        isReadOnly: isReadonly,
        personnelInfo: personnelInfo
      }
    }).then(modal => {
      modal.present();
      return modal.onDidDismiss();
    }).then(result => {
      this.handleModalResult(result);
    });

  }

  handleModalResult(result: OverlayEventDetail) {

    switch (result.role) {
      case 'create':
        this.createRow(result.data);
        break;
    }

  }

  deleteRow(row: PersonnelInfo) {
    this.dataService.deleteRow(row);
  }

  createRow(row: PersonnelInfo) {
    this.dataService.addRow(row);
  }

  filterRows(ev: any) {
    let filterString = ev.target.value;
    this.data.filter = filterString
  }

}
