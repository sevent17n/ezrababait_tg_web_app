export interface IPost {
  age: number;
  image_url: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  sex: 'male' | 'female';
  address: string;
  username: string;
  coordinates: { lat: number; lng: number };
}
