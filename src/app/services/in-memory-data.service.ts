import { InMemoryDbService } from 'angular2-in-memory-web-api';
// import { Date } from '../model/Date';
// @Injectable()
export class InMemoryDataService  implements InMemoryDbService {

  createDb() {
    const persons = [
          {
      id: 11,
      firstName: 'lin',
      lastName: 'yuan',
      dob: '1995-01-16',
      email: 'yuanlin@hotmail.com',
      mobile: '0410000005',
      gender: 'F'
    },
      {
      id: 1,
      firstName: 'chengtong',
      lastName: 'xu',
      dob: '1995-01-16',
      
      email: 'chengtong@hotmail.com',
      mobile: '0410000001',
      gender: 'F'
    },
    {
      id: 2,
      firstName: 'muran',
      lastName: 'liu',
      dob: '1992-02-15',
      
      email: 'muran@hotmail.com',
      mobile: '0410000002',
      gender: 'M'
    },
    {
      id: 3,
      firstName: 'jiuchao',
      lastName: 'li',
      dob: '1992-02-15',
      
      email: 'jiuchao@hotmail.com',
      mobile: '0410000003',
      gender: 'F'
    },
    {
      id: 4,
      firstName: 'sam',
      lastName: 'whatever',
      dob: '1992-02-15',
      
      email: 'sam@hotmail.com',
      mobile: '0410000004',
      gender: 'M'
    },
              {
      id: 6,
      firstName: 'lin1',
      lastName: 'yuan',
      dob: '1995-01-16',
      
      email: 'yuanlin@hotmail.com',
      mobile: '0410000005',
      gender: 'F'
    },
      {
      id: 7,
      firstName: 'chengtong1',
      lastName: 'xu',
      dob: '1995-01-16',
      
      email: 'chengtong@hotmail.com',
      mobile: '0410000001',
      gender: 'F'
    },
    {
      id: 8,
      firstName: 'muran1',
      lastName: 'liu',
      dob: '1992-02-15',
      
      email: 'muran@hotmail.com',
      mobile: '0410000002',
      gender: 'F'
    },
    {
      id: 9,
      firstName: 'jiuchao1',
      lastName: 'li',
      dob: '1992-02-15',
      
      email: 'jiuchao@hotmail.com',
      mobile: '0410000003',
      gender: 'F'
    },
    {
      id: 10,
      firstName: 'sam1',
      lastName: 'whatever',
      dob: '1992-02-15',
      
      email: 'sam@hotmail.com',
      mobile: '0410000004',
      gender: 'M'
    }

    ];
    return { persons};
  }

}
