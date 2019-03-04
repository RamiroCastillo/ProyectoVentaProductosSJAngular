import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-navbar-superior',
  templateUrl: './navbar-superior.component.html',
  styleUrls: ['./navbar-superior.component.css']
})
export class NavbarSuperiorComponent implements OnInit {
  public ready1: boolean;
  public ready2: boolean;
  public ready3: boolean;
  public ready4: boolean;
  public ready5: boolean;
  public ready6: boolean;
  public ready7: boolean;

  constructor() {}

  ngOnInit() {
    this.ready1 = true;
    this.ready2 = true;
    this.ready3 = true;
    this.ready4 = true;
    this.ready5 = true;
    this.ready6 = true;
    this.ready7 = true;

  }
  public onOff(id: any) {
    switch (id) {
      case 1:
        this.ready1 = true;
        this.ready2 = true;
        this.ready3 = true;
        this.ready4 = true;
        this.ready5 = true;
        this.ready6 = true;
        this.ready7 = true;
        break;
      case 2:
        this.ready1 = false;
        this.ready2 = false;
        this.ready3 = true;
        this.ready4 = true;
        this.ready5 = true;
        this.ready6 = true;
        this.ready7 = true;
        break;
      case 3:
        this.ready1 = false;
        this.ready2 = true;
        this.ready3 = false;
        this.ready4 = true;
        this.ready5 = true;
        this.ready6 = true;
        this.ready7 = true;
        break;
      case 4:
        this.ready1 = false;
        this.ready2 = true;
        this.ready3 = true;
        this.ready4 = false;
        this.ready5 = true;
        this.ready6 = true;
        this.ready7 = true;
        break;
      case 5:
        this.ready1 = false;
        this.ready2 = true;
        this.ready3 = true;
        this.ready4 = true;
        this.ready5 = false;
        this.ready6 = true;
        this.ready7 = true;
        break;
      case 6:
        this.ready1 = false;
        this.ready2 = true;
        this.ready3 = true;
        this.ready4 = true;
        this.ready5 = true;
        this.ready6 = false;
        this.ready7 = true;
        break;
      case 7:
        this.ready1 = false;
        this.ready2 = true;
        this.ready3 = true;
        this.ready4 = true;
        this.ready5 = true;
        this.ready6 = true;
        this.ready7 = false;
        break;

      default:
        break;
    }
  }

}
