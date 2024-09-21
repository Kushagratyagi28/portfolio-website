import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  showEducation:boolean=true
  showProjects:boolean=true

   
  projects = [
    { name: 'Modal Development for Prediction of Various Oceanic Parameters', description: 'This is a group project of 4 memebers in which we make a modal that help us to predicit the oceanic parameters by which we can say that in which are the chances of natural disasters are higher.' },
    { name: 'Java Chat Application', description: 'This project is like a communication application in which we can see how the message is transferred between client and server and how they communicate with each other.' },
    { name: 'Word Counter Website', description: 'This is a simple word counter website which is made using HTML,CSS and JavaScript in this project we provide an essay as input and the number of characters will be shown on our display as output.' },
  ];
}
