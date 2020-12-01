// Types
import { CalendarDataItem } from './CalendarTypes';
import { StatusNames } from '../Agenda/AgendaTypes';

export const ordersModelFields = {
  id: 'id',
  title: 'Title',
  description: 'Description',
  start: 'FilterStart',
  end: 'FilterEnd',
  isAllDay: 'fAllDayEvent',
  Title: 'Title',
  CellPhone: 'CellPhone',
  email: 'Email',
  notes: 'Description',
};

const now = Date.now();
const hour = 3.6e6;

export const orders: CalendarDataItem[] = [
  {
    staff: 'Amelia Giround',
    start: now - hour * 2,
    end: now - hour,
    orderID: 1,
    refID: 'C.A.Female-0640',
    status: StatusNames.Consultation,
    dentalStatus: StatusNames.Tooth,
    mobilePhone: '+111897654324570',
    email: 'stevenp@metrobpm.com',
    notes: '06-Ladies Blow Dry S1_021',
    description: '06-Ladies Blow Dry S1_021',
    employeeID: 1,
    teamID: 1,
    customer: 'Stephen Pye',
    customerGender: 'Male' as const,
    firstName: 'Stephen',
    lastName: 'Pye',
    isAllDay: false,
    repeat: 'Never',
  },
  {
    staff: 'Grace Robinson',
    start: now,
    end: now + hour,
    orderID: 2,
    refID: 'S.Pye-0503',
    status: StatusNames.Pending,
    dentalStatus: StatusNames.Tooth,
    mobilePhone: '+111897654324570',
    email: 'stevenp@metrobpm.com',
    notes: '02-Mens Wash+Cut+Dry S4_007',
    employeeID: 2,
    teamID: 4,
    description: '02-Mens Wash+Cut+Dry S4_007',
    customer: 'Stephen Pye',
    customerGender: 'Male' as const,
    firstName: 'Stephen',
    lastName: 'Pye',
    isAllDay: false,
    repeat: 'Never',
  },
  {
    staff: 'Christina Romanov',
    start: now - hour * 4,
    end: now - hour * 1,
    orderID: 3,
    refID: 'A.Cea-0505',
    status: StatusNames.Reserved,
    dentalStatus: StatusNames.Tooth,
    mobilePhone: '+111897654324570',
    email: 'stevenp@metrobpm.com',
    notes: '05-Highlights 1/1 S4_013',
    employeeID: 3,
    teamID: 3,
    description: '05-Highlights 1/1 S4_013',
    customer: 'Stephen Pye',
    customerGender: 'Male' as const,
    firstName: 'Stephen',
    lastName: 'Pye',
    isAllDay: false,
    repeat: 'Never',
  },
  {
    staff: 'David Wenger',
    start: now - hour * 3,
    end: now - hour * 1,
    orderID: 4,
    refID: 'A.Switzer-0506',
    status: StatusNames.Booked,
    dentalStatus: StatusNames.Tooth,
    mobilePhone: '+111897654324570',
    email: 'stevenp@metrobpm.com',
    notes: '01-Ladies Wash+Cut+Dry S2_002',
    employeeID: 4,
    teamID: 2,
    description: '01-Ladies Wash+Cut+Dry S2_002',
    customer: 'Stephen Pye',
    customerGender: 'Male' as const,
    firstName: 'Stephen',
    lastName: 'Pye',
    isAllDay: false,
    repeat: 'Never',
  },
  {
    staff: 'Christina Romanov',
    start: now + hour * 2,
    end: now + hour * 3,
    orderID: 5,
    refID: 'A.Cea-0505',
    status: StatusNames.Paid,
    dentalStatus: StatusNames.Tooth,
    mobilePhone: '+111897654324570',
    email: 'stevenp@metrobpm.com',
    notes: '05-Highlights 1/1 S4_013',
    employeeID: 3,
    teamID: 3,
    description: '05-Highlights 1/1 S4_013',
    customer: 'Stephen Pye',
    customerGender: 'Male' as const,
    firstName: 'Stephen',
    lastName: 'Pye',
    isAllDay: false,
    repeat: 'Never',
  },
  {
    staff: 'David Wenger',
    start: now + hour * 2,
    end: now + hour * 4,
    orderID: 6,
    refID: 'A.Switzer-0506',
    status: StatusNames.Checking,
    dentalStatus: StatusNames.Tooth,
    mobilePhone: '+111897654324570',
    email: 'stevenp@metrobpm.com',
    notes: '01-Ladies Wash+Cut+Dry S2_002',
    employeeID: 4,
    teamID: 2,
    description: '01-Ladies Wash+Cut+Dry S2_002',
    customer: 'Stephen Pye',
    customerGender: 'Male' as const,
    firstName: 'Stephen',
    lastName: 'Pye',
    isAllDay: false,
    repeat: 'Never',
  },
  {
    staff: 'Alex Locatelli',
    start: now + hour,
    end: now + hour * 2,
    orderID: 7,
    refID: 'C.Smith-0507',
    status: StatusNames.Cancelled,
    dentalStatus: StatusNames.Tooth,
    mobilePhone: '+111897654324570',
    email: 'stevenp@metrobpm.com',
    notes: '06-Ladies Blow Dry S1_021',
    employeeID: 5,
    teamID: 5,
    description: '06-Ladies Blow Dry S1_021',
    customer: 'Stephen Pye',
    customerGender: 'Male' as const,
    firstName: 'Stephen',
    lastName: 'Pye',
    isAllDay: false,
    repeat: 'Never',
  },
  {
    staff: 'Sara Khan',
    start: now - hour * 2,
    end: now,
    orderID: 8,
    refID: 'C.Smith-0507',
    status: StatusNames.Closed,
    dentalStatus: StatusNames.Tooth,
    mobilePhone: '+111897654324570',
    email: 'stevenp@metrobpm.com',
    notes: '08-Balayage Natural S4_027',
    employeeID: 6,
    teamID: 6,
    description: '08-Balayage Natural S4_027',
    customer: 'Stephen Pye',
    customerGender: 'Male' as const,
    firstName: 'Stephen',
    lastName: 'Pye',
    isAllDay: false,
    repeat: 'Never',
  },
  {
    staff: 'Sara Khan',
    start: now + hour * 2,
    end: now + hour * 3,
    orderID: 9,
    refID: 'C.Smith-0507',
    status: StatusNames.Unavailable,
    dentalStatus: StatusNames.Tooth,
    mobilePhone: '+111897654324570',
    email: 'stevenp@metrobpm.com',
    notes: '08-Balayage Natural S4_027',
    employeeID: 6,
    teamID: 6,
    description: '08-Balayage Natural S4_027',
    customer: 'Stephen Pye',
    customerGender: 'Male' as const,
    firstName: 'Stephen',
    lastName: 'Pye',
    isAllDay: false,
    repeat: 'Never',
  },
  {
    staff: 'Sara Khan',
    start: now - hour * 2,
    end: now - hour * 3.5,
    orderID: 10,
    refID: 'C.Smith-0507',
    status: StatusNames.Other,
    dentalStatus: StatusNames.Tooth,
    mobilePhone: '+111897654324570',
    email: 'stevenp@metrobpm.com',
    notes: '08-Balayage Natural S4_027',
    employeeID: 6,
    teamID: 6,
    description: '08-Balayage Natural S4_027',
    customer: 'Stephen Pye',
    customerGender: 'Male' as const,
    firstName: 'Stephen',
    lastName: 'Pye',
    isAllDay: false,
    repeat: 'Never',
  },
].map((order) => ({
  ...order,
  start: new Date(order.start),
  end: new Date(order.end),
}));
