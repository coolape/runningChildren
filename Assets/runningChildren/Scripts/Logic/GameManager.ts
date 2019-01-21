
namespace game {

    /** New System */
    export class GameManager  {
        /** 游戏状态改变 */
        static chgState(world: ut.World, state:game.EnumGameState) {
            let cfg = world.getConfigData(game.CfgGame);
            let oldState = cfg.gameState;
            //先释放之前状态的相关数据
            this.relaseState(world, oldState);
            //再加载新状态的相关数据
            switch(state)
            {
                case game.EnumGameState.menu:
                    this.loadSceneMenu(world);
                    break;
            }
            //设置状态
            cfg.gameState = state;
            world.setConfigData(cfg);
        }

        /*释放之前状态的相关数据*/
        static relaseState(world:ut.World, state:game.EnumGameState)
        {
            switch (state) {
                case game.EnumGameState.init: 
                {
                    return;
                }
                case game.EnumGameState.menu:
                    break;
            }
        }

        static loadSceneMenu(world:ut.World)
        {
            game.UIPanelManager.showPanel(world, "PanelMenu");
            let url = "http://localhost:8080/icon.png"
            let cb = function(code, respons, orgs) {
                console.log("code=====" + code);
                console.log(respons);
            }
            let callback = new ComCallback(cb, null);
            game.HttpEx.Get(url, {}, callback);
        }
    }
}
