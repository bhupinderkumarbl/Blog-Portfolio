import { Component } from '@angular/core';
import {PopUpService} from './app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {
  dataa;
  constructor(private closeDialoge: PopUpService){
    closeDialoge.getPosts().subscribe((bhupi) => this.dataa = bhupi);
    this.closeDialoge.closePopUp.subscribe((canClose) => {
      if(canClose) {
        this.showPopUp = !canClose;
      }
    });
  }
  showPopUp:boolean;
  showMenu(){
    document.getElementById("navigation").classList.toggle('mobileMenu');
  }
  showForm(){
    this.showPopUp = true;
  }
}
window.onscroll = function() {
  // console.log(window.pageYOffset);
  var nav = document.getElementById('navigation');
  if ( window.pageYOffset > 40 ) {
    nav.classList.add("navbar1");
  } else {
    nav.classList.remove("navbar1");
  }
}