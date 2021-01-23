export default interface User {
  name: string;
  
  address: Address;
}

interface Address {
  street: string;

  suite: string;

  geo: Geo;
}

interface Geo {
  lat: number;
  lng: number;
}