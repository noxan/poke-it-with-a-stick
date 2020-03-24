import ec2 from "./utils/ec2";

export default async (_, res) => {
  try {
    await ec2
      .startInstances({
        InstanceIds: [process.env.EC2_INSTANCE_ID],
      })
      .promise();
    res.status(200).json({
      message: "✅",
    });
  } catch (err) {
    res.status(500).json({ message: "❌" });
    console.log("Error", err.stack);
  }
};
