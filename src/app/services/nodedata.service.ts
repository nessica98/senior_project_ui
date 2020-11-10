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
    console.log(this.BaseUrl+'/allnode')
    const result = await Axios.get(this.BaseUrl+'/allnode')
    return result
  }

  async GetNodeDataLatest() {
    const result = await Axios.get(this.BaseUrl+'/allnode/latest')
    return result
  }

}
