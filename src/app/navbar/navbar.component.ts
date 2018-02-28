import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { $ } from 'protractor';


// $('#myModal').on('shown.bs.modal', function () {
//     $('#myInput').trigger('focus')
//   })



@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

    constructor(private router :Router){}

    login(){
        this.router.navigate(['/login']);
    }

   
    
}
