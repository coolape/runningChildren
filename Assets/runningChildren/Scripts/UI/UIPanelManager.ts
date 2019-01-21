
namespace game {

    /** New System */
    export class UIPanelManager {

        static panelMap:{[key:string] : ut.Entity} = {};
        static init(world:ut.World) {
            let cfg = world.getConfigData(game.CfgUI);
            if (!cfg.inited) {
                console.log("0000000000000000000000");
                ut.EntityGroup.instantiate(world, "game.UIPanelRoot");
                world.forEach([ut.Entity, game.CPUIPanelBase],
                (entity, panel)=>
                {
                    console.log("=======");
                    this.panelMap[world.getEntityName(entity)] = entity;
                    let _entity = this.panelMap[world.getEntityName(entity)]
                    console.log("111111 init==" + world.getEntityName(_entity));
                    if (!world.hasComponent(entity, ut.Disabled)) {
                        //world.addComponent(entity, ut.Disabled);
                    }
                });
                cfg.inited = true;
            }
        }
        static getPanel(world:ut.World, panelName:string):ut.Entity {
            this.init(world);
                console.log("1111111111111111==" + panelName);
            let panel = this.panelMap[panelName];
            if (panel == null) {
                console.log("22222222222222==" + panelName);
                panel = world.getEntityByName(panelName);
                this.panelMap[panelName] = panel;
            }
            console.log("3333333==" + world.getEntityName(panel));
            return panel;
        }

        static showPanel(world:ut.World, panelName:string)
        {
                console.log("0000000==" + panelName);
            let panel = this.getPanel(world, panelName);
                console.log("555555==" + panelName);
            if (panel != null) {
                console.log("666666=-----=" + world.getEntityName(panel));
                if (world.hasComponent(panel, ut.Disabled)) {
                    console.log("77777==" + panelName);
                    world.removeComponent(panel, ut.Disabled);
                    console.log("888888==" + panelName);
                }
            }
        }

        static hidePanel(world:ut.World, panelName:string)
        {
            this.init(world);
            let panel = this.getPanel(world,panelName);
            if (panel != null) {
                if (!world.hasComponent(panel, ut.Disabled)) {
                    world.addComponent(panel, ut.Disabled);
                }
            }
        }
    }
}
