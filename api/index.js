import aws from "aws-sdk";

aws.config.update({
  accessKeyId: process.env.EC2_ACCESS_KEY_ID,
  secretAccessKey: process.env.EC2_SECRET_ACCESS_KEY,
  region: process.env.EC2_REGION,
});

console.log(process.env.EC2_INSTANCE_ID);

const ec2 = new aws.EC2({ apiVersion: "2016-11-15" });

const params = {
  DryRun: false,
};

export default (_, res) => {
  ec2.describeInstances(params, function(err, data) {
    if (err) {
      res.status(500).json({ message: "❌" });
      console.log("Error", err.stack);
    } else {
      res.status(200).json({ message: "✅" });
      console.log("Success", JSON.stringify(data, null, 2));
    }
  });
};
