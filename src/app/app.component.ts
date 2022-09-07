import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  images!: any[];

  constructor(private primengConfig: PrimeNGConfig) { }

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

  ngOnInit() {
    this.primengConfig.ripple = true;

    this.images = [
      {
        "previewImageSrc": "../assets/demo/galleria1.jpg",
        "thumbnailImageSrc": "../assets/demo/galleria1s.jpg",
        "alt": "Description for Image 1",
        "title": "Title 1"
      },
      {
        "previewImageSrc": "../assets/demo/galleria2.jpg",
        "thumbnailImageSrc": "../assets/demo/galleria2s.jpg",
        "alt": "Description for Image 2",
        "title": "Title 2"
      },
      {
        "previewImageSrc": "../assets/demo/galleria3.jpg",
        "thumbnailImageSrc": "../assets/demo/galleria3s.jpg",
        "alt": "Description for Image 3",
        "title": "Title 3"
      },
      {
        "previewImageSrc": "../assets/demo/galleria4.jpg",
        "thumbnailImageSrc": "../assets/demo/galleria4s.jpg",
        "alt": "Description for Image 4",
        "title": "Title 4"
      },
      {
        "previewImageSrc": "../assets/demo/galleria5.jpg",
        "thumbnailImageSrc": "../assets/demo/galleria5s.jpg",
        "alt": "Description for Image 5",
        "title": "Title 5"
      },
      {
        "previewImageSrc": "../assets/demo/galleria6.jpg",
        "thumbnailImageSrc": "../assets/demo/galleria6s.jpg",
        "alt": "Description for Image 6",
        "title": "Title 6"
      },
      {
        "previewImageSrc": "../assets/demo/galleria7.jpg",
        "thumbnailImageSrc": "../assets/demo/galleria7s.jpg",
        "alt": "Description for Image 7",
        "title": "Title 7"
      },
      {
        "previewImageSrc": "../assets/demo/galleria8.jpg",
        "thumbnailImageSrc": "../assets/demo/galleria8s.jpg",
        "alt": "Description for Image 8",
        "title": "Title 8"
      },
      {
        "previewImageSrc": "../assets/demo/galleria9.jpg",
        "thumbnailImageSrc": "../assets/demo/galleria9s.jpg",
        "alt": "Description for Image 9",
        "title": "Title 9"
      },
      {
        "previewImageSrc": "../assets/demo/galleria10.jpg",
        "thumbnailImageSrc": "../assets/demo/galleria10s.jpg",
        "alt": "Description for Image 10",
        "title": "Title 10"
      },
      {
        "previewImageSrc": "../assets/demo/galleria11.jpg",
        "thumbnailImageSrc": "../assets/demo/galleria11s.jpg",
        "alt": "Description for Image 11",
        "title": "Title 11"
      },
      {
        "previewImageSrc": "../assets/demo/galleria12.jpg",
        "thumbnailImageSrc": "../assets/demo/galleria12s.jpg",
        "alt": "Description for Image 12",
        "title": "Title 12"
      }
    ]
  }

  myUploader(event: any) {
    //event.files == files to upload
    console.log(event);
  }
}
