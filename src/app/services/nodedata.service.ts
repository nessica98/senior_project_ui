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

  async GetOneNodeData(nodename){
    const result_nodedata = await Axios.get(this.BaseUrl+'/gps/allnode')
    const result_all = await Axios.get(this.BaseUrl+'/gps/alldata/'+nodename)
    let result_nodedata_filt = result_nodedata.data.filter((val,idx)=>{
      return val.nodename === nodename
    })
   
    return {result_nodedata_filt,result_all}
  }

  async GetFilterGPSval(nodename){
    const result_nodedata = await Axios.get(this.BaseUrl+'/gps/alldata')
    
   
    return result_nodedata.data
  }

  async GetNodeDataLatest() {
    const result = await Axios.get(this.BaseUrl+'/allnode/latest')
    return result
  }

}
