import ec2 from "./utils/ec2";

export default async (_, res) => {
  try {
    const data = await ec2
      .describeInstanceStatus({
        InstanceIds: [process.env.EC2_INSTANCE_ID],
      })
      .promise();
    res.status(200).json({
      status: data.InstanceStatuses[0].InstanceState.Name,
      message: "✅",
    });
  } catch (err) {
    res.status(500).json({ message: "❌" });
    console.log("Error", err.stack);
  }
};
