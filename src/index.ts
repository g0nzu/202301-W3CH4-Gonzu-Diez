/* eslint-disable no-new */
import { Header } from './header/header';
import { PendingShows } from './Pending/pending';
import { SHOWSLIST } from './mocks/showsList';

new Header('#header');

new PendingShows('.series-pending', SHOWSLIST);
