namespace game {

    /** 处理http请球 */
    export class HttpEx {
    /**
     * 发送表单
     * @param jsonData 
     */
    public PostFormData(url:string,jsonData:any,callback:ComCallback,async:boolean=true){
        //数据格式化
        var data = new FormData();
        for(var attr in jsonData) {
            data.append(attr,jsonData[attr]);
        }
 
        this.Send(url,"Post",data,false,callback,async);
    }
 
    /**
     * 发送Json
     * @param url 
     * @param jsonData 
     * @param onSuccessCallback 
     * @param onFailCallback 
     * @param async 
     */
    public PostJson(url:string,jsonData:any,callback:ComCallback,async:boolean=true){
        this.Send(url,"Post",JSON.stringify(jsonData),true,callback,async);
    }
 
    public Get(url:string,jsonData:any,callback:ComCallback,async:boolean=true){
        for(var attr in jsonData) {
            url = this.urlParam(url,attr,jsonData[attr]);
        }
        this.Send(url,"Get",null,false,callback,async);
    }
 
    private Send(url:string,method:string,data:any,isJsonData:boolean,callback:ComCallback,async:boolean){
        //创建请求
        var xhr = new XMLHttpRequest();
 
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
                var response = xhr.responseText;
                if (callback){
                    //是否为Json数据
                    if (isJsonData){
                        response = JSON.parse(response);
                    }
                    callback.Call(1,response);
                }
            }
        };
 
        //出错
        xhr.onerror = function(error){
            if (callback){
                callback.Call(0,error);
            }
        }
 
        //超时
        xhr.ontimeout = function(){
            if (callback){
                callback.Call(0,"Timeout");
            }
        }
 
        //建立连接并发送数据
        xhr.open(method,url, async);
 
        //Json数据添加头
        if (isJsonData){
            xhr.setRequestHeader("Content-Type", "application/json;charset=utf-8");
        }
        
        xhr.send(data);
    }
 
    /**
     * 添加get参数
     * @param url 
     * @param name 参数名
     * @param value 参数值
     */
    private urlParam(url, name, value) {
        url += (url.indexOf('?') == -1 ) ? '?' : '&' ; 
        url += encodeURIComponent(name) + "=" + encodeURIComponent(value);
        return url;
    }

        /*
    test(){
        let jsonData={
            playerId :"10",
            playerName :"10",
            passWord :"10",
        }
 
        let callback = new ComCallback(function(state,response){
            console.log(state,response);
        });
 
        this.PostJson("myPerson",jsonData,callback,false);
 
        let lcTestRequestAction = new LCTestRequestAction("2193","dog","654321");
        let jsonStr = JSON.stringify(lcTestRequestAction.encode());
        console.log(jsonStr);
 
        let lcTestResponseAction = new LCTestResponseAction(JSON.parse(jsonStr));
        console.log(lcTestResponseAction);
    }
    */

}
}
