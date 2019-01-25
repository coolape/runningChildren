
namespace game {

    export class PMenuBehaviourFilter extends ut.EntityFilter {
        node: ut.Core2D.TransformNode;
        position?: ut.Core2D.TransformLocalPosition;
        rotation?: ut.Core2D.TransformLocalRotation;
        scale?: ut.Core2D.TransformLocalScale;
        entity:ut.Entity;
        panel:game.CPUIPMenu;
    }

    export class PMenuBehaviour extends ut.ComponentBehaviour {
        data: PMenuBehaviourFilter;

        // ComponentBehaviour lifecycle events
        // uncomment any method you need
        
        // this method is called for each entity matching the PMenuBehaviourFilter signature, once when enabled
        OnEntityEnable():void { 
            console.log("==========OnEntityEnable==" + this.world.getEntityName(this.data.entity));
        }
        
        // this method is called for each entity matching the PMenuBehaviourFilter signature, every frame it's enabled
        OnEntityUpdate():void { 
            if (this.world.getComponentData(this.data.panel.btnSound, ut.UIControls.MouseInteraction).clicked) {
                if(!this.world.hasComponent(this.data.panel.btnSound, ut.Disabled)) {
                    console.log("OnEntityUpdate onclick button");
                //UIPanelManager.hideTopPanel(this.world);
                    this.setActive(this.data.panel.btnSound, true);
                }
            } 
            if (this.world.getComponentData(this.data.panel.btnShow, ut.UIControls.MouseInteraction).clicked) {
                console.log("OnEntityUpdate onclick button 222222");
                this.setActive(this.data.panel.btnSound, false);
                //UIPanelManager.showTopPanel(this.world, "PanelMenu");
            }
        }

        // this method is called for each entity matching the PMenuBehaviourFilter signature, once when disabled
        OnEntityDisable():void { 
            console.log("==========OnEntityDisable＝＝" + this.world.getEntityName(this.data.entity));
        }

        private setActive(entity: ut.Entity, hide: boolean) {
            if (!hide) {
                if (this.world.hasComponent(entity, ut.Disabled)) {
                    this.world.removeComponent(entity, ut.Disabled);
                }
            }

            /*
            let childCount = ut.Core2D.TransformService.countChildren(this.world, entity);
            for (; childCount > 0; childCount--) {
                let child = ut.Core2D.TransformService.getChild(this.world, entity, childCount - 1);
                this.setActive(child, hide);
            }
            */
            if (hide) {
                if (!this.world.hasComponent(entity, ut.Disabled)) {
                    this.world.addComponent(entity, ut.Disabled);
                }
            }
        }

    }
}
