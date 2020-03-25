import camelcaseKeys from "camelcase-keys";
import pick from "lodash.pick";

import ec2 from "../utils/api-ec2";
import { checkAuthCookie } from "../utils/api-auth";

export default async (req, res) => {
  if (!checkAuthCookie(req)) {
    return res.status(401).json({ message: "🔒" });
  }

  try {
    const data = await ec2
      .describeInstances({
        InstanceIds: [process.env.EC2_INSTANCE_ID],
      })
      .promise();
    const responseData = pick(data.Reservations[0].Instances[0], [
      "State",
      "PublicIpAddress",
    ]);
    res.status(200).json(camelcaseKeys(responseData, { deep: true }));
  } catch (err) {
    res.status(500).json({ message: "❌" });
    console.log("Error", err.stack);
  }
};
