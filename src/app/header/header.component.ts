import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  switch: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  switchTheme() {
    this.switch = !this.switch;
    if (this.switch === true) {
      document.documentElement.classList.add('transition');
      window.setTimeout(() => {
          document.documentElement.classList.remove('transition');
      }, 1000);
      document.documentElement.setAttribute('data-theme', 'dark')
    } else if (this.switch === false) {
      document.documentElement.classList.add('transition');
      window.setTimeout(() => {
          document.documentElement.classList.remove('transition');
      }, 1000)
      document.documentElement.setAttribute('data-theme', 'light')
    }
  }

}
