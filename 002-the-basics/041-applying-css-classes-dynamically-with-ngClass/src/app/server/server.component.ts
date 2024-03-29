import {Component} from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  serverId = 10;
  serverStatus: string = Math.random() > 0.5 ? 'online' : 'offline';

  getServerStatus(): string {
    return this.serverStatus;
  }

  getColor(){
    return this.serverStatus === 'online' ?'limegreen':'red';
  }
}
