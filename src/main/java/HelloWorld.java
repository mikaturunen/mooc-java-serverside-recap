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

		get("/add", (req, res) -> {
			int first = Integer.parseInt(req.queryParams("first"));
			int second = Integer.parseInt(req.queryParams("second"));

			return first + second;
		});

		get("/multiply", (req, res) -> {
			int first = Integer.parseInt(req.queryParams("first"));
			int second = Integer.parseInt(req.queryParams("second"));

			return first * second;
		});

		get("/sum", (req, res) -> req.queryParams().stream()
				.mapToInt(s -> Integer.parseInt(req.queryParams(s)))
				.sum());
	}
}