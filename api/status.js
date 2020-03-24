import camelcaseKeys from "camelcase-keys";

import ec2 from "../utils/api-ec2";

export default async (_, res) => {
  try {
    const data = await ec2
      .describeInstances({
        InstanceIds: [process.env.EC2_INSTANCE_ID],
      })
      .promise();
    const { State, PublicIpAddress } = data.Reservations[0].Instances[0];
    res
      .status(200)
      .json(camelcaseKeys({ State, PublicIpAddress }, { deep: true }));
  } catch (err) {
    res.status(500).json({ message: "❌" });
    console.log("Error", err.stack);
  }
};
