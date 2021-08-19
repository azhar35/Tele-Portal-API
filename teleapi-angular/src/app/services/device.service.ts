import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private http: HttpClient) { }

  public deleteDevice(did : number) {
    return this.http.delete("http://localhost:9001/devices/device/" + did);
  }
}
