import { environment as env } from '../../../environments/environment';

export interface Employee {
  firstName: string;
	id: number;
	imgUrl: string;
	jobTitle: string;
	lastName: string;
	location: string;
	roomId:  number;
	office: string;
}

export const employees: Employee[] = [
  {
    firstName: 'Alexander',
    id: 1,
    imgUrl: 'https://ca.slack-edge.com/T1H4XT8DV-U8CEJQYNT-603ad36a6898-512',
    jobTitle: 'Delivery Director',
    lastName: 'Ryzhkov',
    location: 'Saint-Petersburg',
    roomId:  4,
    office: 'Senator',
  },
  {
    firstName: 'Sergei',
    id: 2,
    imgUrl: 'https://ca.slack-edge.com/T1H4XT8DV-U7QLKE2TG-54e3afbc39dd-512',
    jobTitle: 'Software Engineer',
    lastName: 'Sergienko',
    location: 'Saint-Petersburg',
    roomId:  2,
    office: 'Senator'
  }
];

export interface Room {
  id: number;
  name: string;
  coordinates: any[];
}

export const rooms: Room[] = [
  {id: 1, name: 'Senator, 509', coordinates: []},
  {id: 2, name: 'Senator, 517', coordinates: [ 900, 460 ]},
  {id: 3, name: 'Senator, 515', coordinates: []},
  {id: 4, name: 'Senator, 504', coordinates: [ 680, 445 ]},
  {id: 5, name: 'Senator, 514', coordinates: []},
  {id: 6, name: 'Senator, 525', coordinates: []},
  {id: 7, name: 'Senator, 14', coordinates: []},
  {id: 8, name: 'Senator, 18', coordinates: []},
  {id: 9, name: 'Senator, 17', coordinates: []},
  {id: 10, name: 'Senator, 412', coordinates: []},
  {id: 11, name: 'Senator, 411', coordinates: []},
  {id: 12, name: 'Senator, 414', coordinates: []},
  {id: 13, name: 'Senator, 415', coordinates: []},
  {id: 14, name: 'Senator, 413', coordinates: []},
  {id: 15, name: 'Senator, 402-2', coordinates: []},
  {id: 16, name: 'Senator, 402-3', coordinates: []},
  {id: 17, name: 'Senator, 406-4', coordinates: []},
  {id: 18, name: 'Senator, 406-6', coordinates: []},
  {id: 19, name: 'Senator, 406-8', coordinates: []},
  {id: 20, name: 'Senator, 406-9', coordinates: []},
  {id: 21, name: 'Senator, 406-10', coordinates: []}
];