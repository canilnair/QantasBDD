Feature: Lightbulb testing

	@AC1-A
    Scenario: I want to turn off my light
      Given I navigate to https://qa-challenges-lightbulb.atlassian.io webpage
      And the bulb is on
      When I click on the on/off switch
      Then Light bulb is turned off
      
	@AC1-B
    Scenario: I want to turn on my light
      Given I navigate to https://qa-challenges-lightbulb.atlassian.io webpage
      And the bulb is off
      When I click on the on/off switch
      Then Light bulb is turned on

	@AC2
  	Scenario: I want my light only use a max of 60% of power
      Given I navigate to https://qa-challenges-lightbulb.atlassian.io webpage
      And the bulb is off
      When I set the value of maxpower = 60
      Then Light bulb should only use 60% power
