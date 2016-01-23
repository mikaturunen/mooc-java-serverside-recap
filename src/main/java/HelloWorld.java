import static spark.Spark.*;
import java.util.HashMap;
import spark.ModelAndView;
import spark.template.thymeleaf.ThymeleafTemplateEngine;


public class HelloWorld {
	public static void main(String[] args) throws Exception {
		get("/", (req, res) -> {
			HashMap<String, Object> map = new HashMap<String, Object>();
			map.put("hello", "Hello, World!");

			return new ModelAndView(map, "page");
		}, new ThymeleafTemplateEngine());
	}
}