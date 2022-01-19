import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})


export class ProfileServiceService {
  newuser: User;
  
  constructor() {this.newuser = new User("Grant Chirpus","grant@grandcircus.co","I am pretty cool. I am pretty ok at AngularJS");}
  
  getUserProfile() : User{    
    return this.newuser;
  }

  setUserProfile(name: string, contactInfo: string, bio: string){
    this.newuser.name = name;
    this.newuser.contactInfo = contactInfo;
    this.newuser.bio = bio;
  }
}
