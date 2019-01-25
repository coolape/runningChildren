
namespace game {

    /** show or hide sprite 2d */
    export class SysShowhideEntities extends ut.ComponentSystem {
        
        OnUpdate():void {
            this.world.forEach([ut.Entity, game.CPShowHideEntities],
                (entity, cpShowhide) =>
                {
                    for (let i = 0; i < cpShowhide.entities.length; i++) {
                        let _entity = cpShowhide.entities[i];
                        if (cpShowhide.hide) {
                            if (!this.world.hasComponent(_entity, ut.Disabled)) {
                                this.world.addComponent(_entity, ut.Disabled);
                            }
                        } else {
                            if (this.world.hasComponent(_entity, ut.Disabled)) {
                                this.world.removeComponent(_entity, ut.Disabled);
                            }
                        }
                    }
                });
        }
    }
}
