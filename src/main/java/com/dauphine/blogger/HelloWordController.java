package com.dauphine.blogger;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Tag(
		name="Hello World API",
		description="my first hello world endpoints"
		)
public class HelloWordController {

    @GetMapping("hello-world")
    public String helloWorld() {
        return "Hello, world!";
    }
    @GetMapping("hello")
    public String hellobyName(@RequestParam String name) {
    	return "Hello" + name;
    
    }
    @GetMapping("hello/{name}")
    public String hello(@PathVariable String name) {
    	return "Hello " + name;
    }
}

