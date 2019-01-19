
namespace game {

    /** New System */
    export class GameManager  {
        /** 游戏状态改变 */
        static chgState(world: ut.World, state:game.EnumGameState) {
            let cfg = world.getConfigData(game.CfgGame);
            let oldState = cfg.gameState;
            this.relaseState(world, oldState);
            switch(state)
            {
                case game.EnumGameState.menu:
                    this.loadSceneMenu(world);
                    break;
            }
            cfg.gameState = state;
            world.setConfigData(cfg);
        }

        static relaseState(world:ut.World, state:game.EnumGameState)
        {
            switch (state) {
                case game.EnumGameState.init: 
                {
                    return;
                }
            }
        }

        static loadSceneMenu(world:ut.World)
        {

        }
    }
}
