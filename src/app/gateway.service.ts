import { Injectable } from '@angular/core';
import Axios from 'axios';
import { APIWebConfigService } from './services/apiweb-config.service';

@Injectable({
  providedIn: 'root'
})
export class GatewayService {

  constructor(private api:APIWebConfigService) {
    
   }

   async getGatewayAll(){
      const result = await Axios.get(this.api.BaseUrl+'/gateway')
      return result.data
  }

  async getGatewayNode(gatewayId) {
    var result = (await Axios.get(this.api.BaseUrl+'/gateway')).data
    result = result.filter(val=>val.gatewayId===gatewayId)
    return result
  }
}
