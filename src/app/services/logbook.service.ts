import { Injectable } from '@angular/core';
import Axios from 'axios';
import { APIWebConfigService } from './apiweb-config.service';

@Injectable({
  providedIn: 'root'
})
export class LogbookService {

  constructor(private api:APIWebConfigService) { }
  BaseUrl = this.api.getBaseURL()

  async gatewayDataFetch(nodename){
    const result = await Axios.get(this.BaseUrl+'/logbook/'+nodename)
    return result.data
  }

  async gatewayDataAdd(payload){
    const result = await Axios.post(this.BaseUrl+'/logbook/add', payload)
    return result.data
}
}
