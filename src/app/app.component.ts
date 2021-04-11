import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'practice1';

  public isClicked: boolean = false;
  closeResult:string;
  
 

  constructor(private modalSerice: NgbModal) { }

  clickBtn() {
    this.isClicked = true;
  }
  
  public javaEmps: Array<any> = [
    {
        name:"Tejas",
        eid:1,
        club:"Barca"
    },
    {
      name:"neymar",
      eid:1,
      club:"Barca"
  },
  {
    name:"ronaldo",
    eid:1,
    club:"Barca"
}
  ];

  open(content) {
    this.modalSerice.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
