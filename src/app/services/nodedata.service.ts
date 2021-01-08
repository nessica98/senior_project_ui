import { Injectable } from '@angular/core';
import { APIWebConfigService } from './apiweb-config.service'
import Axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class NodedataService {
  constructor(private api:APIWebConfigService) { }
  BaseUrl = this.api.getBaseURL()

  async GetNodeData() {
    console.log(this.BaseUrl+'/gps/allnode')
    const result = await Axios.get(this.BaseUrl+'/gps/allnode')
    return result.data
  }

  async GetNodeDataLatest() {
    const result = await Axios.get(this.BaseUrl+'/allnode/latest')
    return result
  }

}
