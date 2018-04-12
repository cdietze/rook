build:
	mvn clean package

run-java:
	mvn test -Pjavarun

run-html:
	mvn integration-test -Phtml -Phtmlrun

deploy-ghpages:
	mvn -Phtml package
	rm -Rf ./html/target/rook-html-master-SNAPSHOT/WEB-INF
	./bin/git-update-ghpages.sh cdietze/rook ./html/target/rook-html-master-SNAPSHOT