import aws from "aws-sdk";

aws.config.update({
  accessKeyId: process.env.EC2_ACCESS_KEY_ID,
  secretAccessKey: process.env.EC2_SECRET_ACCESS_KEY,
  region: process.env.EC2_REGION,
});

const ec2 = new aws.EC2({ apiVersion: "2016-11-15" });

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
