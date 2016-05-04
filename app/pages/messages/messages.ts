import {Page, NavController, NavParams} from 'ionic-angular';
import {MessagesService} from '../../providers/messages-service/messages-service'
import {Message} from '../../models/message'
import {DateChatPipe} from '../../pipes/messages/date'
import * as moment from 'moment'
import {Autosize} from '../../directives/autosize';
import {ViewChild} from 'angular2/core';
import {Content} from 'ionic-angular';
import {Events} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/messages/messages.html',
  providers: [MessagesService],
  pipes: [DateChatPipe],
  directives: [Autosize]
})
export class MessagesPage {
  messages: Message[];
  clientName: string;
  @ViewChild(Content) content: Content;

  constructor(private nav: NavController, navParams: NavParams, private messagesService: MessagesService, public events: Events) {
    this.messages = navParams.get('messages');
    this.messages = this.messages.reverse();
    this.clientName = navParams.get('clientName');

    events.subscribe('native.keyboardshow', () => {
      this.scrollBottom();
    });

  }

  scrollBottom() {
    //auto scroll page to bottom
    let dimensions = this.content.getContentDimensions();
    this.content.scrollTo(0, dimensions.scrollBottom, 0);
  }

  sendMessage(value: string) {
    let newMessage = new Message();
    newMessage.content = value;
    newMessage.from_id = 1; //TODO: change this
    newMessage.to_id = 5;
    newMessage.date = moment().toISOString();
    this.messages.push(newMessage);
    //TODO: change this to post to API and to the above code on the sucess function.
    /*
    this.messagesService.sendMessage(value).subscribe(
      //data => {console.log("Received data: " + data)},
      err => {
        console.log(err);
      },
      () => {console.log("Finished sending message");}
    );
    */
  }

}
