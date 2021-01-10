import { Component, OnInit } from '@angular/core';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-channels-section',
  templateUrl: './channels-section.component.html',
  styleUrls: ['./channels-section.component.scss']
})
export class ChannelsSectionComponent implements OnInit {

  faDesktop = faDesktop;
  faWhatsapp = faWhatsapp;
  faCommentDots = faCommentDots;
  faPhone = faPhone;
  pulseClass = 'animate__animated animate__faster animate__pulse';
  
  pulseIconNumber = 0;

  constructor() { }

  ngOnInit(): void {
  }

  pulseIcon(channel: number): void{
    this.pulseIconNumber = channel;
  }
}
