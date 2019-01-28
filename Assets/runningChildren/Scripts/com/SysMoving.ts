
namespace game {

  @ut.executeAfter(ut.Shared.UserCodeStart)
  @ut.executeBefore(ut.Shared.UserCodeEnd)
    /** New System */
    export class SysMoving extends ut.ComponentSystem {
        
        OnUpdate():void {
            this.world.forEach([ut.Core2D.TransformLocalPosition, game.CPMoving], (transform, moving)=>
            {
                let pos = transform.position;
                pos.x += moving.speed.x*0.01;
                pos.y += moving.speed.y*0.01;
                pos.z += moving.speed.z*0.01;
                transform.position = pos;
            });
        }
    }
}
