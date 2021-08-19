import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import UserPlan from '../models/UserPlan';
import Device from '../models/Device';
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
  public editDevice(did: number, ddn : String, dpn: String, upid : number) {
    return this.http.put("http://localhost:9001/devices/device/" + did, {"id": did, "device_name": ddn, "phone_number": dpn, "userPlan": {"id": upid}})
  }
}
