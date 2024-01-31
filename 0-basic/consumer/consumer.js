const { Kafka } = require("kafkajs")
const clientId = "mock-up-kafka-consumer-client" 
const brokers = ["192.168.0.12:9092:9092"]  
const topic = "primeiro_topic"
const kafka = new Kafka({ clientId, brokers })
const consumer = kafka.consumer({ groupId: clientId })
const consume = async () => {
      let data = [];
      await consumer.connect()
      await consumer.subscribe({ topic })
      await consumer.run({
        eachMessage: ({ message }) => {
        console.log(`received message: ${message.key}`)
        data.push(message);
        },
     })
return data;
}
consume().then(()=>{console.log('Final')}).catch(err => console);