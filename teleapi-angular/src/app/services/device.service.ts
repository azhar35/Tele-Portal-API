import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import UserPlan from '../models/UserPlan';
@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private http: HttpClient) { }

  public deleteDevice(did : number) {
    return this.http.delete("http://localhost:9001/devices/device/" + did);
  }
  public addDevice(name: String, phoneNumber: String, userPlan: UserPlan ) {

    return this.http.post("http://localhost:9001/devices/device/", {"device_name": name, "phone_number": phoneNumber, "userPlan":{"id":userPlan.id}});
  }
}
