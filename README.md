# Poke it with a stick

Shared remote control EC2 instance, or how to run your on-demand game server with friends.

## Deployment with Zeit Now

```bash
now secrets add ec2-access-key-id "<your-aws-access-key-id>"
now secrets add ec2-secret-access-key "<your-aws-secret-access-key>"
now secrets add ec2-region "<your-aws-ec2-instance-region>"
now secrets add ec2-instance-id "<your-aws-ec2-instance-id>"
now secrets add app-password "<password-of-your-choice-to-control-access>"
```
