export class user{
    constructor( public id: number,
        public username: string,
        public password: string,
        public firstname: string,
        public lastname: string){};
}

export var usersAcc: user[] = [
    { id: 1, username: 'thuong', password: '1234567', firstname: 'Thuong', lastname: 'Le' },
    { id: 2, username: 'kiet', password: '1234567', firstname: 'Kiet', lastname: 'Alang' },
    { id: 3, username: 'tao', password: '1234567', firstname: 'Tao', lastname: 'Ho' }
  ];