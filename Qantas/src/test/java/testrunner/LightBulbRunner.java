package testrunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		monochrome=true,
		features="src/test/java/features/LightBulb.feature", 
		glue={"stepdefinition"},
		plugin = {"pretty", "html:target/html/"}
//		tags= {"@AC1A"}
		)

public class LightBulbRunner {

}
