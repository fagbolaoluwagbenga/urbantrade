import { ProfilePage } from '../profile/profile';
import { MorePage } from '../more/more';
import { stagger } from '@angular/core/src/animation/dsl';
import { CommunityPage } from '../community/community';
import { HubPage } from '../hub/hub';
import { ChannelsPage } from '../channels/channels';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1: string = "HubPage";
  tab2: string = "ChannelsPage";
  tab3: string = "CommunityPage";
  tab4: string = "MorePage";
  tab5: string = "ProfilePage";

  constructor() {
  }

}
