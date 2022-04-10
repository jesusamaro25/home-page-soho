import { Component, OnInit } from '@angular/core';
import * as constants from './footer.constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public componentConstants = constants;

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Función para hacer la redirección a otro sitio wev
   * @param url 
   */
  goTo(url: string): void {
    window.open(url, '_blank');
  }

}
