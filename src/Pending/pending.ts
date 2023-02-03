/* eslint-disable no-new */
/* eslint-disable no-unused-vars */
import { Component } from '../components/mainComponent';
import { InsertPosition } from '../components/mainComponent';
import { showsStructure } from '../models/shows';
import './pending.scss';

export class PendingShows extends Component {
  constructor(public selector: string, public list: showsStructure[]) {
    super();
    this.template = this.createTemplate();
    this.render('afterend');
  }

  private createTemplate(): string {
    const items = this.list.map(
      (item) => `
    <section id="series-pending">
          <ul class="series-list">
            <li class="serie">
              <img class="serie__poster"
              src="${item.poster}"
                alt="The Sopranos poster" />
              <h4 class="serie__title">${item.name}}</h4>
              <p class="serie__info">${item.creator} + ${item.year}</p>
              <ul class="score">
                <li class="score__star">
                  <i class="icon--score fas fa-star" title="1/5"></i>
                </li>
                <li class="score__star">
                  <i class="icon--score fas fa-star" title="2/5"></i>
                </li>
                <li class="score__star">
                  <i class="icon--score fas fa-star" title="3/5"></i>
                </li>
                <li class="score__star">
                  <i class="icon--score fas fa-star" title="4/5"></i>
                </li>
                <li class="score__star">
                  <i class="icon--score fas fa-star" title="5/5"></i>
                </li>
              </ul>
              <i class="fas fa-times-circle icon--delete"></i>
            </li>
      </section>
    `
    );
    return items.join('');
  }

  render(place: InsertPosition) {
    super.render(place);
  }
}
