
ps -ef|grep answer-draw-1.0-SNAPSHOT.jar|awk '{print $2}'|xargs kill -9

mvn package

cp target/answer-draw-1.0-SNAPSHOT.jar ./answer-draw-1.0-SNAPSHOT.jar

nohup java -jar ./answer-draw-1.0-SNAPSHOT.jar > ./nohup.out &


