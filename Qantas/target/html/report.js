$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/LightBulb.feature");
formatter.feature({
  "line": 1,
  "name": "Lightbulb testing",
  "description": "",
  "id": "lightbulb-testing",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1640348230,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "I want to turn off my light",
  "description": "",
  "id": "lightbulb-testing;i-want-to-turn-off-my-light",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@AC1-A"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I navigate to https://qa-challenges-lightbulb.atlassian.io webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the bulb is on",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click on the on/off switch",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Light bulb is turned off",
  "keyword": "Then "
});
formatter.match({
  "location": "LightBulb.i_navigate_to_https_qa_challenges_lightbulb_atlassian_io_webpage()"
});
formatter.result({
  "duration": 5468792764,
  "status": "passed"
});
formatter.match({
  "location": "LightBulb.the_bulb_is_on()"
});
formatter.result({
  "duration": 51289339,
  "status": "passed"
});
formatter.match({
  "location": "LightBulb.i_click_on_the_on_off_switch()"
});
formatter.result({
  "duration": 2070616298,
  "status": "passed"
});
formatter.match({
  "location": "LightBulb.light_bulb_is_turned_off()"
});
formatter.result({
  "duration": 26610010,
  "status": "passed"
});
formatter.after({
  "duration": 184350947,
  "status": "passed"
});
formatter.before({
  "duration": 1167933019,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "I want to turn on my light",
  "description": "",
  "id": "lightbulb-testing;i-want-to-turn-on-my-light",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@AC1-B"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I navigate to https://qa-challenges-lightbulb.atlassian.io webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "the bulb is off",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on the on/off switch",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Light bulb is turned on",
  "keyword": "Then "
});
formatter.match({
  "location": "LightBulb.i_navigate_to_https_qa_challenges_lightbulb_atlassian_io_webpage()"
});
formatter.result({
  "duration": 5933041258,
  "status": "passed"
});
formatter.match({
  "location": "LightBulb.the_bulb_is_off()"
});
formatter.result({
  "duration": 2083693513,
  "status": "passed"
});
formatter.match({
  "location": "LightBulb.i_click_on_the_on_off_switch()"
});
formatter.result({
  "duration": 2046313215,
  "status": "passed"
});
formatter.match({
  "location": "LightBulb.light_bulb_is_turned_on()"
});
formatter.result({
  "duration": 26694746,
  "status": "passed"
});
formatter.after({
  "duration": 180462401,
  "status": "passed"
});
formatter.before({
  "duration": 1166149315,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "I want my light only use a max of 60% of power",
  "description": "",
  "id": "lightbulb-testing;i-want-my-light-only-use-a-max-of-60%-of-power",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@AC2"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I navigate to https://qa-challenges-lightbulb.atlassian.io webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "the bulb is off",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I set the value of maxpower \u003d 60",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Light bulb should only use 60% power",
  "keyword": "Then "
});
formatter.match({
  "location": "LightBulb.i_navigate_to_https_qa_challenges_lightbulb_atlassian_io_webpage()"
});
formatter.result({
  "duration": 5721829584,
  "status": "passed"
});
formatter.match({
  "location": "LightBulb.the_bulb_is_off()"
});
formatter.result({
  "duration": 2074686289,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "60",
      "offset": 30
    }
  ],
  "location": "LightBulb.i_set_the_value_of_maxpower(int)"
});
formatter.result({
  "duration": 2822209,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat stepdefinition.LightBulb.i_set_the_value_of_maxpower(LightBulb.java:98)\n\tat ✽.When I set the value of maxpower \u003d 60(src/test/java/features/LightBulb.feature:21)\n",
  "status": "pending"
});
formatter.match({
  "arguments": [
    {
      "val": "60",
      "offset": 27
    }
  ],
  "location": "LightBulb.light_bulb_should_only_use_power(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 183947637,
  "status": "passed"
});
});