import { Component } from '@angular/core';

@Component({
  // selector: 'app-servers',  // selects by a html tag
  // selector: '[app-servers]',  // selects by attribute of a html tag
  selector: '.app-servers',  // selects by a class of a html tag
  template: `
    <app-server/>
    <app-server/>
  `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

}
