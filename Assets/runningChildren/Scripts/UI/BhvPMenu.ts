
namespace game {

    export class BhvPMenuFilter extends ut.EntityFilter {
        node: ut.Core2D.TransformNode;
        position?: ut.Core2D.TransformLocalPosition;
        rotation?: ut.Core2D.TransformLocalRotation;
        scale?: ut.Core2D.TransformLocalScale;
        entity:ut.Entity;
        panel:game.CPUIPMenu;
    }

    export class BhvPMenu extends ut.ComponentBehaviour {
        data: BhvPMenuFilter;

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
                    UIPanelManager.hideTopPanel(this.world);
                    //game.Utl.setActive(this.world, this.data.panel.btnSound, false);
                }
            } 
            if (this.world.getComponentData(this.data.panel.btnShow, ut.UIControls.MouseInteraction).clicked) {
                console.log("OnEntityUpdate onclick button 222222");
                game.Utl.setActive(this.world, this.data.panel.btnSound, true);
                //UIPanelManager.showTopPanel(this.world, "PanelMenu");
            }
        }

        // this method is called for each entity matching the PMenuBehaviourFilter signature, once when disabled
        OnEntityDisable():void { 
            console.log("==========OnEntityDisable＝＝" + this.world.getEntityName(this.data.entity));
        }

    }
}
