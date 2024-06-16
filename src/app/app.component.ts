import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'wopen';
  constructor(private swUpdate: SwUpdate) {}

  ngAfterViewInit() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.versionUpdates.subscribe({
        next: upd => {
          if (upd.type === 'VERSION_READY') {
            this.swUpdate.activateUpdate()
              .then(() => {
                alert('Update was installed. Reloading...');
                window.location.reload();
              });
          }
        },
        error: error => console.error(error)
      });
      this.swUpdate.checkForUpdate();
    }
  }

  openWindow() {
    const w = window.open(`${window.location.origin}/Account/ExternalLogin/Microsoft`, '_blank', 'width=600,height=400');
  }

  openWindowSetLocation() {
    const w = window.open('', '_blank', 'width=600,height=400');
    if (w) {
      w.location = `${window.location.origin}/Account/ExternalLogin/Microsoft`;
    }
  }

  openWindowUsingAssign() {
    const w = window.open('', '_blank', 'width=600,height=400');
    if (w) {
      w.document.location.assign(`${window.location.origin}/Account/ExternalLogin/Microsoft`);
    }
  }
}
