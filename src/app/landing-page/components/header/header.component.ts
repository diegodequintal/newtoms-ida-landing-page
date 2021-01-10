import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private translate: TranslateService) { }

  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;
  currentLangSelected: string = environment.defaultLanguage;
  
  translateApp(lang: any): void {
    this.currentLangSelected = lang;
    this.translate.use(lang);
  }

  ngOnInit() {
      this.myStyle = {
          'position': 'absolute',
          'width': '100%',
          'height': '90vh',
          'z-index': 1,
          'top': 0,
          'left': 0,
          'right': 0,
          'bottom': 0,
      };

  this.myParams = {
          particles: {
              number: {
                  value: 120,
                  density: {
                    enable: true,
                    value_area: 800
                  }
              },
              color: {
                  value: '#ffffff'
              },
              shape: {
                  type: 'circle',
              },
              size: {
                value: 5
              },
              opacity: {
                value: 0.1
              },
              line_linked: {
                distance: 1
              },
          },
          interactivity: {
            onhover: {
              enable: true,
              mode: 'repulse'
            },
            modes: {
              grab: {
                distance: 80
              }
            }
          }
  };
  }

  toChannels(): void {
    document.getElementById("channels").scrollIntoView({behavior: "smooth"});
  }
}
