
namespace game {

    /** show or hide sprite 2d */
    export class SysShowhideEntity extends ut.ComponentSystem {
        
        OnUpdate():void {
            this.world.forEach([ut.Entity, game.CPShowHideEntity],
                (entity, cpShowhide) =>
                {
                    this.setAlpha(entity, cpShowhide.hide);
                });
        }

        private setAlpha(entity: ut.Entity, hide: boolean) {
            /*
            let value = "visible";
            if (hide == true) {
                value = "hidden";
            }
            let elements = document.getElementsByName(this.world.getEntityName(entity));
            console.log("===="+elements.length);
            for (let i = 0; i < elements.length; i++) {
                elements[i].style.visibility = value;
            }
            */
            
            let alpha = 1;
            if (hide == true) {
                alpha = 0;
            }
            if(this.world.hasComponent(entity, ut.Core2D.Sprite2DRenderer)) {
                let cpSprite = this.world.getComponentData(entity, ut.Core2D.Sprite2DRenderer);
                if(cpSprite != null) {
                    let color = cpSprite.color;
                    color.a = alpha;
                    cpSprite.color = color;
                    this.world.setComponentData(entity, cpSprite);
                }
            }
            if (this.world.hasComponent(entity, ut.Text.Text2DStyle)) {
                let cpText = this.world.getComponentData(entity, ut.Text.Text2DStyle);
                if(cpText != null) {
                    let color = cpText.color;
                    color.a = alpha;
                    cpText.color = color;
                    this.world.setComponentData(entity, cpText);
                }
            }
            let childCount = ut.Core2D.TransformService.countChildren(this.world, entity);
            for (; childCount > 0; childCount--) {
                let child = ut.Core2D.TransformService.getChild(this.world, entity, childCount - 1);
                this.setAlpha(child, hide);
            }
        }
    }
}
