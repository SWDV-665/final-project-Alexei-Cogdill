import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { CalendarPage } from '../calendar/calendar';
import { HomePage } from '../home/home';
import { LocatorPage } from '../locator/locator';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CalendarPage;
  tab3Root = LocatorPage;
  tab4Root = AboutPage;

  constructor() {

  }
}
