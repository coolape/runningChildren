
namespace game {

    @ut.requiredComponents(ut.Core2D.TransformLocalPosition, game.CPGravity, game.CPVelocity)
    /** New System */
    export class SysGravity extends ut.ComponentSystem {
        
        OnUpdate():void {
            let detalTime = this.scheduler.deltaTime();
            this.world.forEach([ut.Core2D.TransformLocalPosition, game.CPGravity, game.CPVelocity],(transform, gravity, velocity)=>
            {
                let pos = transform.position;
                let v = velocity.velocity;
                v.x += gravity.gravity.x * detalTime;
                v.y += gravity.gravity.y * detalTime;
                velocity.velocity = v;
            });
        }
    }
}
