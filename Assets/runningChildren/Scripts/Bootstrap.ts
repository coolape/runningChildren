
namespace game {

  @ut.executeAfter(ut.Shared.UserCodeStart)
  @ut.executeBefore(ut.Shared.UserCodeEnd)
      export class Bootstrap extends ut.ComponentSystem {

        OnUpdate():void {
            let cfg = this.world.getConfigData(game.CfgGame);
            switch(cfg.gameState)
            {
                case game.EnumGameState.init:
                    game.GameManager.chgState(this.world, game.EnumGameState.menu);
                    break;
            }
        }
    }
}
