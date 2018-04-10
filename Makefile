build:
	mvn clean package

run-java:
	mvn test -Pjavarun

run-html:
	mvn integration-test -Phtml -Phtmlrun
