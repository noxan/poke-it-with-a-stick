import aws from "aws-sdk";

aws.config.update({
  accessKeyId: process.env.EC2_ACCESS_KEY_ID,
  secretAccessKey: process.env.EC2_SECRET_ACCESS_KEY,
  region: process.env.EC2_REGION,
});

console.log(process.env.EC2_INSTANCE_ID);

export default (_, res) => res.status(200).json({ message: "👋" });
