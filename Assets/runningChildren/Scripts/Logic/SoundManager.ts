
namespace game {

    /** New System */
    export class SoundManager {
        // Play an AudioClip
        static  playClip(world:ut.World, audioSourceEntityName: string): void {
            let audioSourceEntity = world.getEntityByName(audioSourceEntityName);
            if (!world.hasComponent(audioSourceEntity, ut.Audio.AudioSourceStart)) {
                world.addComponent(audioSourceEntity, ut.Audio.AudioSourceStart);
            }
        }

        // Stop an AudioClip
        static stopClip(world:ut.World, audioSourceEntityName: string): void {
        let audioSourceEntity = world.getEntityByName(audioSourceEntityName);
            if (!world.hasComponent(audioSourceEntity, ut.Audio.AudioSourceStop)) {
                world.addComponent(audioSourceEntity, ut.Audio.AudioSourceStop);
            }
        }
    }
}
