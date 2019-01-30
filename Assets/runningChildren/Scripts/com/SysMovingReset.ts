
namespace game {

  @ut.executeAfter(ut.Shared.UserCodeStart)
  @ut.executeBefore(ut.Shared.UserCodeEnd)
    /** New System */
    export class SysMovingReset extends ut.ComponentSystem {
        
        OnUpdate():void {
            this.world.forEach([ut.Core2D.TransformLocalPosition, game.CPMovingReset], (transform, movingReset)=>
            {
                let pos = transform.position;
                if (movingReset.axis == game.EnumAxis.x) {
                    if (pos.x <= movingReset.threshold) {
                        pos.x += movingReset.distance;
                    }
                } else if (movingReset.axis  == game.EnumAxis.y) {
                    if (pos.y <= movingReset.threshold) {
                        pos.y += movingReset.distance;
                    }
                } else {
                    if (pos.z >= movingReset.threshold) {
                        pos.z += movingReset.distance;
                    }
                }
                transform.position = pos;
            });
        }
    }
}
