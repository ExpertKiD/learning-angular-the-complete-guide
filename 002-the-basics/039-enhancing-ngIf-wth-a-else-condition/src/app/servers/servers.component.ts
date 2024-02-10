import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',  // selects by a html tag
  // selector: '[app-servers]',  // selects by attribute of a html tag
  // selector: '.app-servers',  // selects by a class of a html tag
  templateUrl:'./servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = "No server was created.";
  serverName='';
  serverCreated = false;
  constructor() {
    setTimeout(()=> {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer(){
    this.serverCreated = true;
    this.serverCreationStatus = `Server was crea.ted. Server name is ${this.serverName}`;
  }

  onUpdateServerName(event: any){
    console.log(event.target.value);

    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
