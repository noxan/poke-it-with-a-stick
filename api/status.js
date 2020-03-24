import ec2 from "./utils/ec2";

export default async (_, res) => {
  try {
    const data = await ec2
      .describeInstances({
        InstanceIds: [process.env.EC2_INSTANCE_ID],
      })
      .promise();
    // console.log(JSON.stringify(data, null, 2));
    res.status(200).json(data.Reservations[0].Instances[0].State);
  } catch (err) {
    res.status(500).json({ message: "❌" });
    console.log("Error", err.stack);
  }
};
