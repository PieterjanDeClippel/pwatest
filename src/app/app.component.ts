import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'wopen';
  openWindow() {
    const w = window.open("", "_blank", "width=600,height=400");
    if (w) {
      const host = window.location.origin;
      w.document.location.assign(host + "/Account/ExternalLogin/Microsoft");
    }
  }
}
