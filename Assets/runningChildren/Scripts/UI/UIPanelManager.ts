
namespace game {

    /** New System */
    export class UIPanelManager {
        static showTopPanel(world:ut.World, panelName:string)
        {
            let cfg = world.getConfigData(game.CfgUI);
            if (cfg.topPanelName == panelName) {
                return;
            }
            let entityes =  ut.EntityGroup.instantiate(world, panelName);
            for(let i=0; i < entities.length; i++) {
                if (world.hasComponent(entities[i], game.CPUIPanelBase)) {
                    let panel = world.getComponentData(entities[i], game.CPUIPanelBase);
                    let camera = world.getComponentData(panel.uicamera, ut.Core2D.Camera2D);
                    cfg.currOrder = cfg.currOrder + 1;
                    cfg.topPanelName = panelName;
                    cfg.activePanels.push(panelName);
                    world.setConfigData(cfg);

                    camera.depth = cfg.currOrder;
                    world.setComponentData(panel.uicamera, camera);
                    return;
                }
            }
        }

        static hideTopPanel(world:ut.World)
        {
            let cfg = world.getConfigData(game.CfgUI);
            if(cfg.topPanelName== null || cfg.topPanelName == "")
            {
                return;
            }
            console.log("hide=="+cfg.topPanelName);
            ut.EntityGroup.destroyAll(world, cfg.topPanelName);

            cfg.activePanels.pop();
            if (cfg.activePanels.length > 0) {
                cfg.topPanelName = cfg.activePanels[cfg.activePanels.length - 1];
            } else {
                cfg.topPanelName = "";
            }
            cfg.currOrder = cfg.currOrder - 1;
            world.setConfigData(cfg);
            return;
        }
    }
}
