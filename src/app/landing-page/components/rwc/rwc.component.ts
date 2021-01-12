import { Component, OnInit } from '@angular/core';
import { Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common'


@Component({
  selector: 'app-rwc',
  templateUrl: './rwc.component.html',
  styleUrls: ['./rwc.component.scss']
})
export class RwcComponent implements OnInit {

  constructor(
    private renderer2: Renderer2,
    @Inject(DOCUMENT) private _document
    ) { }

    ngOnInit(): void {
        const s = this.renderer2.createElement('script');
        s.onload = this.loadNextScript.bind(this);
        s.type = 'text/javascript';
        s.src = 'https://rwc.staging.onereach.ai/dist/1.0/rwc.min.js';
        s.id = 'ORRWC_MAIN';
        s.text = ``;
        this.renderer2.appendChild(this._document.body, s);
    }
 
    loadNextScript() {
        const s = this.renderer2.createElement('script');
        s.text = `  
            var s = setTimeout(()=>{
            ORRWC.Initialize({"Theme":"default",
                "StartOpen":true,
                "SaveState":0,
                "BotIcon":"https://rwc.staging.onereach.ai/dist/1.0/styles/steps/assets/or-icon.svg",
                "Type":"Default",
                "AccountId":"c2a7d1a4-54a7-4ac0-b340-1b205d1f3585",
                "WebHook":{"url":"https://sdkapi.staging.api.onereach.ai/http/873c0f61-4dfc-4f8a-860e-f574616703c8/chat?ChatId=0mPM26c"},
                "Logo":"https://staging-filesanddata-asset-manager-wxbqfoysp.s3-us-west-2.amazonaws.com/c2a7d1a4-54a7-4ac0-b340-1b205d1f3585/Exis.png",
                "Events":{"Request":"function(Event){Event.EventData.Location = window.location; Event.Done();}"},
                "Styles":["#orrwc-Widget .orrwc-ContentItems .Message.Bot .orrwc-Avatar { display:none; }"]});
            }, 1000)
         `
        this.renderer2.appendChild(this._document.body, s);
     }
}
