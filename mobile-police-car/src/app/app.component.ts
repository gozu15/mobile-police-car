
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonRouterOutlet, IonSplitPane, IonApp} from '@ionic/angular/standalone';
import { LoadingComponent } from './shared/components/loading/loading.component';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [CommonModule, FormsModule, IonRouterOutlet, LoadingComponent, IonSplitPane, IonApp],
})
export class AppComponent {
 
}
