package rook.core;

import playn.core.Font;
import playn.core.Graphics;
import playn.core.Platform;
import tripleplay.ui.*;
import tripleplay.ui.layout.AxisLayout;

public final class UiUtils {

  private UiUtils() {}

  public static Group createDialogGroup(Platform plat) {
    /** Use the colors from {@link SimpleStyles} */
    int bgColor = 0xFFCCCCCC, ulColor = 0xFFEEEEEE, brColor = 0xFFAAAAAA;
    return new Group(AxisLayout.vertical()).setStyles(Style.BACKGROUND.is(Background.roundRect(plat.graphics(), bgColor, 5, ulColor, 2).inset(20f)));
  }

  public static Stylesheet.Builder newSheetBuilder(Graphics gfx) {
    return SimpleStyles.newSheetBuilder(gfx).add(Element.class, Style.FONT.is(new Font("Helvetica", 24)));
  }

  public static Stylesheet newSheet(Graphics gfx) { return newSheetBuilder(gfx).create(); }
}
