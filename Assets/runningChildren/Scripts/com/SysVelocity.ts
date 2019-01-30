
namespace game {

    @ut.requiredComponents(ut.Core2D.TransformLocalPosition, game.CPVelocity, game.CPVelocity)
    /** New System */
    export class SysVelocity extends ut.ComponentSystem {
        
        OnUpdate():void {
            let detalTime = this.scheduler.deltaTime();
            this.world.forEach([ut.Core2D.TransformLocalPosition, game.CPVelocity, game.CPGravity],(transform, velocity, gravity)=>
            {
                let pos = transform.position;
                let v = velocity.velocity;
                pos.x += v.x;
                pos.y += v.y;
                if (pos.y <= -2.72) {
                    pos.y = -2.72;
                    gravity.gravity = new ut.Math.Vector2();
                    velocity.velocity= new ut.Math.Vector2();
                }
                transform.position = pos;
            });
        }
    }
}
