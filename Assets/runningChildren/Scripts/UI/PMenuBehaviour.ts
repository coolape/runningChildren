
namespace game {

    export class PMenuBehaviourFilter extends ut.EntityFilter {
        node: ut.Core2D.TransformNode;
        position?: ut.Core2D.TransformLocalPosition;
        rotation?: ut.Core2D.TransformLocalRotation;
        scale?: ut.Core2D.TransformLocalScale;
        panel:game.CPUIPanelBase;
    }

    export class PMenuBehaviour extends ut.ComponentBehaviour {
        data: PMenuBehaviourFilter;

        // ComponentBehaviour lifecycle events
        // uncomment any method you need
        
        // this method is called for each entity matching the PMenuBehaviourFilter signature, once when enabled
        OnEntityEnable():void { 
            console.log("==========OnEntityEnable" + this.world.getEntityName(this.data.panel.entity));
        }
        
        // this method is called for each entity matching the PMenuBehaviourFilter signature, every frame it's enabled
        //OnEntityUpdate():void { }

        // this method is called for each entity matching the PMenuBehaviourFilter signature, once when disabled
        //OnEntityDisable():void { }

    }
}
