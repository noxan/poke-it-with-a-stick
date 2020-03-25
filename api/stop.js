import ec2 from "../utils/api-ec2";
import { checkAuthCookie } from "../utils/api-auth";

export default async (req, res) => {
  if (!checkAuthCookie(req)) {
    return res.status(401).json({ message: "🔒" });
  }

  try {
    await ec2
      .stopInstances({
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
