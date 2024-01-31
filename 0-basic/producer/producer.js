const { Kafka } = require("kafkajs");
const clientId = "mock-up-kafka-producer-client";
const brokers = ["192.168.0.12:9092"];
const topic = "primeiro_topic";
const kafka = new Kafka({ clientId, brokers });
const producer = kafka.producer();

const produce = async () => {
    await producer.connect();
    setInterval(async () => {
        await producer.send({
            topic,
            messages: [
                { key: "key1", value: "hello world", partition: 0 },
                { key: "key2", value: "hey hey!", partition: 1 },
            ],
        });
    }
        , 3000);

}

produce()
    .then(() => {
        console.log("produced successfully");
    })
    .catch((err) => console);
