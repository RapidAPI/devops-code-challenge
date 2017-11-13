##AWS Automation and service deployment

#Automate the following tasks using Ansible:

###Task 1: Automate the EC2 instance creation under load balancer.

1. Create an AWS VPC with public and private subnets.
2. Create an IAM role with permissions that allows Amazon s3 access.
3. Launch an EC2 instance with the following configurations:
- The previous role created in step 2.
- inside the private subnet of VPC.
- Using Linux Centos 7.
- install apache through bootstrapping. (Notice -  You need to have a NAT gateway attached to your private subnet).
4. Create a load balancer in the public subnet.
5. Add the EC2 instance under the load balancer.

###Task 2: deploy a service to the EC2 instance.

1. Download a git repository of Node.js service to the instance.
2. Run the service (how would you choose to run it under Linux Centos 7?)
