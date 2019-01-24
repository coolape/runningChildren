
namespace game {

    /** New System */
    export class UIPanelManager {

        //static panelMap:{[key:string] : ut.Entity} = {};
        static init(world:ut.World) {
            let cfg = world.getConfigData(game.CfgUI);
            //let cfgPanels= world.getConfigData(game.CfgUIPanels);
            if (!cfg.inited) {
                ut.EntityGroup.instantiate(world, "game.UIPanelRoot");
                world.forEach([ut.Entity, game.CPUIPanelBase],
                (entity, panel)=>
                {
                    //cfgPanels.panels.push(entity);
                    if (!world.hasComponent(entity, ut.Disabled)) {
                        //world.addComponent(entity, ut.Disabled);
                    }
                });
                cfg.inited = true;
                world.setConfigData(cfg);
                //world.setConfigData(cfgPanels);
            }
        }

        /*
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
        */

        static showTopPanel(world:ut.World, panelName:string)
        {
            this.init(world);
            let cfg = world.getConfigData(game.CfgUI);
            if (cfg.topPanelName == panelName) {
                return;
            }
            world.forEach([ut.Entity, game.CPUIPanelBase],
            (entity, panel)=>
            {
                if (world.getEntityName(entity) == panelName) {
                    let sg = world.getOrAddComponentData(entity, ut.Core2D.LayerSorting);
                    sg.order = cfg.currOrder + 1;
                    cfg.topPanelName = panelName;
                    cfg.activePanels.push(panelName);
                    if (world.hasComponent(entity, game.CPShowHideEntity)) {
                        let cp = world.getComponentData(entity, game.CPShowHideEntity);
                        cp.hide = false;
                        world.setComponentData(entity, cp);
                    }
                    world.setConfigData(cfg);
                    return;
                }
            });
        }

        static hideTopPanel(world:ut.World)
        {
            this.init(world);
            let cfg = world.getConfigData(game.CfgUI);
            if(cfg.topPanelName== null || cfg.topPanelName == "")
            {
                return;
            }
            world.forEach([ut.Entity, game.CPUIPanelBase],
            (entity, panel)=>
            {
                if (world.getEntityName(entity) == cfg.topPanelName) {
                    let cp = world.getOrAddComponentData(entity, game.CPShowHideEntity);
                    cp.hide = true;
                    world.setComponentData(entity, cp);

                    cfg.activePanels.pop();
                    if (cfg.activePanels.length > 0) {
                        cfg.topPanelName = cfg.activePanels[cfg.activePanels.length - 1];
                    }
                    cfg.currOrder = cfg.currOrder - 1;
                    world.setConfigData(cfg);
                    return;
                }
            });
        }

        static showPanel(world:ut.World, panelName:string)
        {
            this.init(world);
            world.forEach([ut.Entity, game.CPUIPanelBase],
            (entity, panel)=>
            {
                if (world.getEntityName(entity) == panelName) {

                    if (world.hasComponent(entity, ut.Disabled)) {
                        world.removeComponent(entity, ut.Disabled);
                    }
                    return;
                }
            });
        }

        static hidePanel(world:ut.World, panelName:string)
        {
            this.init(world);
            world.forEach([ut.Entity, game.CPUIPanelBase],
            (entity, panel)=>
            {
                if (world.getEntityName(entity) == panelName) {
                    if (!world.hasComponent(entity, ut.Disabled)) {
                        world.addComponent(entity, ut.Disabled);
                    }
                    return;
                }
            });
        }
    }
}
