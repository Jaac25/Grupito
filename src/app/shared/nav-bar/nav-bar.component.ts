import { Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public mostrarLogin = false;

  constructor(private renderer: Renderer2) {
    
  }

  ngOnInit(): void {
  }
}
