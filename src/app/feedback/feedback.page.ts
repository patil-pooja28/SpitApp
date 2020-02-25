import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {

  constructor(public toastController: ToastController) { }

  async presentToast(){
    const toast = await this.toastController.create({
      message: 'Details have been saved.',
      duration: 2000
    });
    toast.present();
  }


  ngOnInit() {
  }

}
