import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hideParagraph = true;

  buttonClickLogs:string[] = [];

  onDisplayDetailsPressed(){
    this.hideParagraph = !this.hideParagraph;


    const log = `${Date()} - Paragraph ${this.hideParagraph?'hidden':'shown'}!`;

    this.buttonClickLogs.push(log);
  }
}


