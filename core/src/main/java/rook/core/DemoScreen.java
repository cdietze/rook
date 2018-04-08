package rook.core;

import de.cdietze.playn_util.Screen;
import react.Function;
import react.IntValue;
import react.UnitSlot;
import tripleplay.ui.*;
import tripleplay.ui.layout.AxisLayout;

public class DemoScreen extends Screen {

  public DemoScreen(MainGame game) {
    super(game);
  }

  @Override
  public void wasAdded() {
    super.wasAdded();
    Root root = iface.createRoot(AxisLayout.vertical(), SimpleStyles.newSheet(plat.graphics()), layer);
    root.setSize(plat.graphics().viewSize);

    // Put some stuff on the screen
    root.add(new ToggleButton("Toggle"));
    final IntValue counter = new IntValue(0);
    root.add(new Button("Temporarily Increment Counter").onClick(new UnitSlot() {
      @Override
      public void onEmit() {
        updateAnim.increment(counter, 1).then().delay(1000f).then().increment(counter, -1);
      }
    }));
    root.add(new Label(counter.map(new Function<Integer, String>() {
      @Override
      public String apply(Integer input) {
        return "Counter: " + input;
      }
    })));
  }
}
