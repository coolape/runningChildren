
namespace game {

    /** New System */
    export class UIPanelManager {

        //static panelMap:{[key:string] : ut.Entity} = {};
        static init(world:ut.World) {
            let cfg = world.getConfigData(game.CfgUI);
            let cfgPanels= world.getConfigData(game.CfgUIPanels);
            if (!cfg.inited) {
                ut.EntityGroup.instantiate(world, "game.UIPanelRoot");
                world.forEach([ut.Entity, game.CPUIPanelBase],
                (entity, panel)=>
                {
                    cfgPanels.panels.push(entity);
                    if (!world.hasComponent(entity, ut.Disabled)) {
                        //world.addComponent(entity, ut.Disabled);
                    }
                });
                cfg.inited = true;
                world.setConfigData(cfgPanels);
            }
        }
        static getPanel(world:ut.World, panelName:string):ut.Entity {
            this.init(world);
            let cfgPanels= world.getConfigData(game.CfgUIPanels);
            cfgPanels.panels.forEach((v,i)=>
            {
                console.log("getpnael====" + i);
                console.log(v);
                if (!v.isNone() && world.getEntityName(v) == panelName) {
                    return v;
                }
            });
            return null;
        }

        static showPanel(world:ut.World, panelName:string)
        {
                console.log("0000000==" + panelName);
            //let panel = this.getPanel(world, panelName);
            let panel = world.getEntityByName(panelName);
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
