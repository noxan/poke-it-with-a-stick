import aws from "aws-sdk";

aws.config.update({
  accessKeyId: process.env.EC2_ACCESS_KEY_ID,
  secretAccessKey: process.env.EC2_SECRET_ACCESS_KEY,
  region: process.env.EC2_REGION,
});

const ec2 = new aws.EC2({ apiVersion: "2016-11-15" });

const params = {
  InstanceIds: [process.env.EC2_INSTANCE_ID],
};

export default (_, res) => {
  ec2.describeInstanceStatus(params, function(err, data) {
    if (err) {
      res.status(500).json({ message: "❌" });
      console.log("Error", err.stack);
    } else {
      res.status(200).json({
        status: data.InstanceStatuses[0].InstanceState.Name,
        message: "✅",
      });
      console.log("Success", JSON.stringify(data, null, 2));
    }
  });
};
