import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public alertController: AlertController) {}

  async Alert1() {
    const alert = await this.alertController.create({
      header: 'About Us',
      // subHeader: 'Confirm',
      message: 'The institute is located in 47 acres of green campus at Andheri (W), the fastest growing suburb of Mumbai. The campus also houses four Bhavan’s Institutions of great repute namely Bhavan’s College (the arts, commerce and science college), Sardar Patel College of Engineering – Government aided Engineering college, S.P. Jain Institute of Management and Research, a management institute and A.H. Wadia, higher secondary school. In 1957, the Bharatiya Vidya Bhavan conceived the idea of establishing an engineering college in Mumbai. Sardar Patel College of Engineering was inaugurated on 19th August 1962.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async Alert2() {
    const alert = await this.alertController.create({
      header: 'Institutional Values',
      // subHeader: 'Confirm',
      message: '1. Integrity – Integrity is defined as the quality of being honest and having strong moral principles.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async Alert3() {
    const alert = await this.alertController.create({
      header: 'Vision',
      // subHeader: 'Confirm',
      message: 'To build a renowned institute which will produce graduate engineers with global competency and social sensitivity.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async Alert4() {
    const alert = await this.alertController.create({
      header: 'Founders Message',
      // subHeader: 'Confirm',
      
      message: '“Education would fail ignominiously in its objective if it manufactures only a robot and called him an economic man stressing the adjective economic and forgetting the substantive man. A university cannot afford to ignore the cultural aspects of education whatever studies it specilizes in. Science is a means, not an end. Even though you may ultimately become a scientist, a doctor, or an engineer, you must while in college, absorb fundamental values which will make you a man of culture. An engineer has not merely to build bridges; he has to be a devoted husband, a kind father, a friendly neighbour, a dutiful citizen, and a man true to himself."',
      buttons: ['OK']
    });


    
    await alert.present();
  }
}
