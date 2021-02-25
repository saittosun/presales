import { Customer } from "./customer";


export class Api {
  get customers() {
    return [...this._customers];
  }

  private _customers: Customer[] = [
    {
      id: 1,
      name: 'Antwerpen',
      projects: [
        {
          id: 11,
          name: 'Nova',
          status: 'Won',
          date: '26/02/2021'
        }
      ]
    },
    {
      id: 2,
      name: 'Studio Hyperdrive',
      projects: [
        {
          id: 21,
          name: 'Presales',
          status: 'Offer',
          date: 'End of September'
        },
        {
          id: 22,
          name: 'Lead-followup',
          status: 'Pitch',
          date: '20/05/2021'
        }
      ]
    },
    {
      id: 3,
      name: 'Renson',
      projects: [
        {
          id: 31,
          name: 'Presales',
          status: 'Offer',
          date: 'End of September'
        },
        {
          id: 32,
          name: 'Lead-followup',
          status: 'Pitch',
          date: '20/05/2021'
        },
        {
          id: 33,
          name: 'Digipolis',
          status: 'pitch',
          date: '20/05/2021'
        }
      ]
    }
  ];
}
