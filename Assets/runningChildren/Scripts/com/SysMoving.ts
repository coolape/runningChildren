
namespace game {

  @ut.executeAfter(ut.Shared.UserCodeStart)
  @ut.executeBefore(ut.Shared.UserCodeEnd)
    /** New System */
    export class SysMoving extends ut.ComponentSystem {
        
        OnUpdate():void {
            let deltaTime:number = this.scheduler.deltaTime();
            this.world.forEach([ut.Core2D.TransformLocalPosition, game.CPMoving], (transform, moving)=>
            {
                let pos = transform.position;
                pos.x += moving.speed.x * deltaTime;
                pos.y += moving.speed.y * deltaTime;
                transform.position = pos;
            });
        }
    }
}
