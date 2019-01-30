
namespace game {

    @ut.requiredComponents(game.CPPlayer, game.CPGravity, game.CPVelocity)
    /** New System */
    export class SysInput extends ut.ComponentSystem {
        
        OnUpdate():void {
            // check for user input outside of iteration
            if (!ut.Runtime.Input.getMouseButtonDown(0)) {
                return;
            }

            // play flap wing sound
            game.SoundManager.playClip(this.world, 'Tap');
            this.world.forEach([game.CPPlayer, game.CPVelocity, game.CPGravity], (player, velocity, gravity)=>
            {
                let v = velocity.velocity;
                v.y = player.jumpVelocity.y;
                velocity.velocity = v;
                let g = gravity.gravity;
                g.y = -0.09
                gravity.gravity = g;
            });
        }
    }
}
