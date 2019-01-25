
namespace game {

    /** New System */
    export class Utl  {
        static setActive(world:ut.World, entity: ut.Entity, active: boolean) {
            if (active) {
                if(world.hasComponent(entity, game.CPShowHideEntities)) {
                    let cpShowHide = world.getComponentData(entity, game.CPShowHideEntities);
                    if(cpShowHide.hide) {
                        cpShowHide.hide = false;
                        world.setComponentData(entity, cpShowHide);
                        this.doSetActive(world, cpShowHide.entities, cpShowHide.hide);
                    }
                }
            } else {
                if(world.hasComponent(entity, game.CPShowHideEntities)) {
                    let cpShowHide = world.getComponentData(entity, game.CPShowHideEntities);
                    if(!cpShowHide.hide) {
                        cpShowHide.hide = true;
                        world.setComponentData(entity, cpShowHide);
                        this.doSetActive(world, cpShowHide.entities, cpShowHide.hide);
                    }
                } else {
                    let cpShowHide = world.getOrAddComponentData(entity, game.CPShowHideEntities)
                    let count = ut.Core2D.TransformService.countChildren(world, entity);
                    cpShowHide.entities.push(entity);
                    for (let i = 0; i < count; i++) {
                        let child = ut.Core2D.TransformService.getChild(world, entity, i);
                        cpShowHide.entities.push(child);
                    }
                    cpShowHide.hide = true;
                    world.setComponentData(entity, cpShowHide);
                    this.doSetActive(world, cpShowHide.entities, cpShowHide.hide);
                }
            }
        }

        private static doSetActive(world:ut.World, entities:ut.Entity[], hide:boolean) {
            let count = entities.length;
            for (let i = 0; i < count; i++) {
                let _entity = entities[i];
                if(!hide) {
                    if (world.hasComponent(_entity, ut.Disabled)) {
                        world.removeComponent(_entity, ut.Disabled);
                    }
                } else {
                    if (!world.hasComponent(_entity, ut.Disabled)) {
                        world.addComponent(_entity, ut.Disabled);
                    }
                }
            }
        }
    }
}
