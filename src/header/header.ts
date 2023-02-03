/* eslint-disable no-new */
/* eslint-disable no-unused-vars */
import { Component } from '../components/mainComponent';
import { InsertPosition } from '../components/mainComponent';
import './header.scss';

export class Header extends Component {
  constructor(public selector: string, public title: string = 'My series') {
    super();
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  private createTemplate() {
    return `
    <div class="container">
      <header id="header">
        <h1>${this.title}</h1>
        <h2 class="section-title">Series list</h2>
      </header>
      </div>
    `;
  }

  render(place: InsertPosition) {
    super.render(place);
  }
}
