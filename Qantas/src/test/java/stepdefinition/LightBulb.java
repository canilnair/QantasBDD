package stepdefinition;

import static org.junit.Assert.assertEquals;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LightBulb {
	
	WebDriver driver;
	String baseURL = "https://qa-challenges-lightbulb.atlassian.io";
	WebElement button;
	WebElement light;
	String buttonStatus;
	String lightColor;
	String offColor = "black";
	String onColor = "radia";
	
	@Before
	public void Init() {
		System.setProperty("webdriver.chrome.driver","chromedriver");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
	}
	
	@After
	public void End() {
		driver.quit();
	}
	
	protected void getStatus() {
		button = driver.findElement(By.id("switch"));
		buttonStatus=button.getAttribute("class");		
		light = driver.findElement(By.id("lightrays"));
		lightColor=light.getAttribute("style").substring(12, 17);
	}
	
	
	@Given("^I navigate to https://qa-challenges-lightbulb\\.atlassian\\.io webpage$")
	public void i_navigate_to_https_qa_challenges_lightbulb_atlassian_io_webpage() {
		driver.get(baseURL);
	}

	@Given("^the bulb is on$")
	public void the_bulb_is_on() throws InterruptedException {		
		this.getStatus();
		if(buttonStatus.equalsIgnoreCase("off")) {
			button.click();
			Thread.sleep(2000);
		}
	}

	@When("^I click on the on/off switch$")
	public void i_click_on_the_on_off_switch() throws InterruptedException  {		
		this.getStatus();
		button.click();
		Thread.sleep(2000);
	}

	@Then("^Light bulb is turned off$")
	public void light_bulb_is_turned_off(){
		this.getStatus();
		assertEquals(offColor, lightColor);
	}

	@Given("^the bulb is off$")
	public void the_bulb_is_off() throws InterruptedException {		
		this.getStatus();
		if(buttonStatus.equalsIgnoreCase("on")) {
			button.click();
			Thread.sleep(2000);
		}
	}

	@Then("^Light bulb is turned on$")
	public void light_bulb_is_turned_on() throws InterruptedException {
		this.getStatus();
		assertEquals(onColor, lightColor);
	}

	@Given("^AC(\\d+)\\. I want my light only use a max of (\\d+)% of power$")
	public void ac_I_want_my_light_only_use_a_max_of_of_power(int arg1, int arg2) {
	    // Write code here that turns the phrase above into concrete actions
	}
	
	@When("^I set the value of maxpower = (\\d+)$")
	public void i_set_the_value_of_maxpower(int arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Then("^Light bulb should only use (\\d+)% power$")
	public void light_bulb_should_only_use_power(int arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}	

}
