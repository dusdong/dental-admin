import { all, call } from 'redux-saga/effects';
// Watchers
import { watchServices } from '../Services/ServicesSagaWatchers';
import { watchStaff } from '../TeamStaff/TeamStaffSagaWatchers';
import { watchCustomers } from '../Customers/CustomersSagaWatchers';
import { watchAgenda } from '../Agenda/AgendaSagaWatchers';

export function* rootSaga() {
  try {
    yield all([call(watchServices), call(watchStaff), call(watchCustomers), call(watchAgenda)]);
  } catch (error) {
    console.error('→ error caught', error);
  }
}
