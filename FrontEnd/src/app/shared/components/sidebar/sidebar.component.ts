import { Component,OnInit } from '@angular/core';
import { AuthService } from './../../../provider/auth.service';
@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
    isActive = false;
    showMenu = '';
    type;
     constructor( ) {
       var data=localStorage.getItem('currentUser')
       console.log(JSON.parse(data));
       var dataParse=JSON.parse(data)
       this.type=dataParse.type
       console.log(this.type)
    }
    eventCalled() {
        this.isActive = !this.isActive;
    }
    addExpandClass(element: any) {

        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }

}
