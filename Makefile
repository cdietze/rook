build:
	mvn clean install

clean:
	mvn clean

run-java:
	mvn -Pjavarun clean install

run-html:
	mvn -Phtml -Phtmlrun clean install

deploy-ghpages:
	mvn -Phtml clean install
	rm -Rf ./html/target/rook-html-master-SNAPSHOT/WEB-INF
	./bin/git-update-ghpages.sh cdietze/rook ./html/target/rook-html-master-SNAPSHOT