
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
                console.log("OnEntityUpdate onclick button");
                UIPanelManager.hideTopPanel(this.world);
            }
        }

        // this method is called for each entity matching the PMenuBehaviourFilter signature, once when disabled
        OnEntityDisable():void { 
            console.log("==========OnEntityDisable＝＝" + this.world.getEntityName(this.data.entity));
        }

    }
}
