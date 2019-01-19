
namespace game {
   /**
 * 网络请求回调类
 */
export class ComCallback{
    private parmas:any;
    private func:any;
 
    /**
     * 网络请求回调类
     * @param func 类
     * @param object  对象（若为空则认定为匿名函数）
     */
    constructor(func:any,object:any=null){
        this.func = func;
        this.parmas = object;
    }
 
    /**
     * 调用
     * @param state 状态
     * @param response 数据 
     */
    Call(state:number,response:any){
        if (this.parmas){
            this.func.call(state,response, this.parmas);
        }else{
            this.func(state,response);
        }
    }
}

}
