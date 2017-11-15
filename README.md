# AWS Automation and service deployment

Your mission if you choose to accept it -

### Automate the following tasks using Ansible:

### Task 1: Automate the EC2 instance creation under load balancer.

1. Create an AWS VPC with public and private subnets.
2. Create an IAM role with permissions that allows Amazon s3 access.
3. Launch an EC2 instance with the following configurations:
- The previous role created in step 2.
- inside the private subnet of VPC.
- Using Linux Centos 7 AMI.
4. Create a load balancer in the public subnet.
5. Add the EC2 instance under the load balancer.

### Task 2: deploy a service to the EC2 instance.

1. Use the  git repository above (which is a Node.js service - One of RapidAPI microservices ) and deploy it to the instance (How would you choose to run it under Linux Centos 7?)
- Please notice that in order to run the service you need to run 
```javascript
yarn install
node .
```


Had fun solving it? Please send us the solution as zip file.
