import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http/';
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private http: HttpClient,) {
  	this.sendNotification();
  }
  sendNotification() 
{  
let body = {
    "notification":{
      "title":"New Notification has arrived",
      "body":"Notification Body",
      "sound":"default",
      "click_action":"FCM_PLUGIN_ACTIVITY",
      "icon":"fcm_push_icon"
    },
    "data":{
      "param1":"value1",
      "param2":"value2"
    },
      "to":"/topics/all",
      "priority":"high",
      "restricted_package_name":""
  }
  let options = new HttpHeaders().set('Content-Type','application/json');
  this.http.post("https://fcm.googleapis.com/fcm/send",body,{
    headers: options.set('Authorization', 'key=AAAAeKKOKTg:APA91bHa9BgAUJKKI_72iAsyzy8iVXRceq2JWg_u6QOcxSgSpB9gm32lx7qcdX2c2WNPXcxYQceAh-iDnvJwHoNu0vOtCgKoqV6rG72hBTdfpNRTbcVbOEAePHPGsmzoc8ZRLhYSQFvF'),
  })
    .subscribe();
}
}
