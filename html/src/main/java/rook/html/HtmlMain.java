package rook.html;

import com.google.gwt.core.client.EntryPoint;
import playn.html.HtmlPlatform;
import rook.core.MainGame;

public class HtmlMain implements EntryPoint {

  @Override public void onModuleLoad () {
    HtmlPlatform.Config config = new HtmlPlatform.Config();
    // use config to customize the HTML platform, if needed
    HtmlPlatform plat = new HtmlPlatform(config);
    plat.assets().setPathPrefix("rook/");
    new MainGame(plat);
    plat.start();
  }
}
