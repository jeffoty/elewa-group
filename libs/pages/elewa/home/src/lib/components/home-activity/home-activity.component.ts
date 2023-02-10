import { Component } from '@angular/core';

@Component({
  selector: 'elewa-group-home-activity',
  templateUrl: './home-activity.component.html',
  styleUrls: ['./home-activity.component.scss'],
})
export class HomeActivityComponent {
  cards = [
    {
      subtitle: "Education",
      imgsrc: "https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690300/elewa-group-website/Icons/PNG/Education_hstyzo.png",
      description: "A key player in the development and operations of new-age human-centered digital learning experiences",
      title: "Elewa"
    },
    {
      subtitle: 'Technology',
      imgsrc: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690300/elewa-group-website/Icons/PNG/technolagy_sgfgo6.png',
      description: 'Offshore tech services which accelerate your business and our talent.',
      title: 'Italanta'
    },
    {
      subtitle: 'Venture Labs',
      imgsrc: 'https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690296/elewa-group-website/Icons/SVG/venturelabs_icon_vfnmpj.svg',
      description: 'Sometimes to grow means to let go.Our bravest mpove into Veenture Labs, where our people they start and <br>accelerate their own startups.',
      title: 'Italanta'
    }
  ]

}
